import { DatabaseSync } from "node:sqlite";
import type { Engine, Game } from "./game.ts";
import { engineBrands } from "./game.ts";
import { gameIdKinds, type GameIdKind } from "../common/game-id.ts";
import { existsSync, rmSync } from "node:fs";

type RemoteGameRow = {
	gameIdKind: GameIdKind;
	externalId: string;
	engines: Engine[];
	releaseDate?: string;
	occurrences: number;
	titles: Set<string>;
};

function parseVersionNumbers(version?: string): number[] {
	if (!version) return [];

	return (version.match(/\d+/g) ?? []).slice(0, 3).map(Number);
}

function compareVersions(versionA: number[], versionB: number[]): number {
	for (let i = 0; i < 3; i++) {
		const numberA = versionA[i] ?? -1;
		const numberB = versionB[i] ?? -1;

		if (numberA !== numberB) return numberA - numberB;
	}

	return 0;
}

function pickBestEngine(
	engines: Engine[] | undefined,
	engineOrder: Map<string, number>,
): Engine | undefined {
	let bestEngine: Engine | undefined;

	for (const engine of engines ?? []) {
		if (!bestEngine) {
			bestEngine = engine;
			continue;
		}

		const versionComparison = compareVersions(
			parseVersionNumbers(engine.version),
			parseVersionNumbers(bestEngine.version),
		);

		if (
			versionComparison > 0 ||
			(versionComparison === 0 &&
				(engineOrder.get(engine.brand) ?? 0) >
					(engineOrder.get(bestEngine.brand) ?? 0))
		) {
			bestEngine = engine;
		}
	}

	return bestEngine;
}

function toEpochDay(date: string | undefined): number | undefined {
	if (!date) return undefined;

	const parsed = Date.parse(date);
	if (Number.isNaN(parsed)) return undefined;

	return Math.floor(parsed / 86_400_000);
}

function collectRows(games: Game[]): Map<string, RemoteGameRow> {
	const rows = new Map<string, RemoteGameRow>();

	for (const game of games) {
		const gameKeys = new Set<string>();

		for (const [gameIdKind, externalIds] of Object.entries(game.ids) as [
			GameIdKind,
			Set<string> | undefined,
		][]) {
			for (const externalId of externalIds ?? []) {
				const key = `${gameIdKind}\0${externalId}`;

				if (gameKeys.has(key)) continue;
				gameKeys.add(key);

				const row = rows.get(key) ?? {
					gameIdKind,
					externalId,
					engines: [],
					occurrences: 0,
					titles: new Set<string>(),
				};

				row.engines.push(...(game.engines ?? []));
				row.occurrences += 1;

				if (game.title) row.titles.add(game.title);

				if (
					game.releaseDate &&
					(!row.releaseDate ||
						Date.parse(game.releaseDate) > Date.parse(row.releaseDate))
				) {
					row.releaseDate = game.releaseDate;
				}

				rows.set(key, row);
			}
		}
	}

	return rows;
}

function reportDuplicates(rows: Map<string, RemoteGameRow>) {
	const duplicates = [...rows.values()].filter((row) => row.occurrences > 1);
	if (duplicates.length === 0) return;

	console.warn(
		`Found ${duplicates.length} duplicate (game id kind, external_id) pairs across multiple games. Keeping the latest-looking engine and release date for each.`,
	);

	for (const row of duplicates.slice(0, 20)) {
		console.warn(
			`- ${row.gameIdKind}/${row.externalId}: ${row.occurrences} games (${[
				...row.titles,
			].join(" | ")})`,
		);
	}
}

export function createDatabase(path: string, games: Game[]) {
	if (existsSync(path)) {
		rmSync(path, { recursive: true, force: true });
	}

	const db = new DatabaseSync(path);

	db.exec(`
		CREATE TABLE game_id_kinds (
			id INTEGER PRIMARY KEY,
			name TEXT NOT NULL UNIQUE
		);

		CREATE TABLE engines (
			id INTEGER PRIMARY KEY,
			name TEXT NOT NULL UNIQUE
		);

		CREATE TABLE games (
			game_id_kind_id INTEGER NOT NULL,
			external_id TEXT NOT NULL,
			engine_brand INTEGER,
			engine_version_major INTEGER,
			engine_version_minor INTEGER,
			engine_version_patch INTEGER,
			release_date INTEGER,
			PRIMARY KEY (game_id_kind_id, external_id)
		) WITHOUT ROWID;
	`);

	const gameIdKindIds = new Map(
		gameIdKinds.map((name, index) => [name, index + 1]),
	);
	const engineIds = new Map(
		engineBrands.map((name, index) => [name, index + 1]),
	);
	const engineOrder = new Map(engineBrands.map((name, index) => [name, index]));

	const insertGameIdKind = db.prepare(
		"INSERT INTO game_id_kinds (id, name) VALUES (?, ?)",
	);
	const insertEngine = db.prepare(
		"INSERT INTO engines (id, name) VALUES (?, ?)",
	);
	const insertGame = db.prepare(`
		INSERT INTO games (
			game_id_kind_id,
			external_id,
			engine_brand,
			engine_version_major,
			engine_version_minor,
			engine_version_patch,
			release_date
		) VALUES (?, ?, ?, ?, ?, ?, ?)
	`);

	const rows = collectRows(games);
	reportDuplicates(rows);

	db.exec("BEGIN TRANSACTION");

	for (const [name, id] of gameIdKindIds) insertGameIdKind.run(id, name);
	for (const [name, id] of engineIds) insertEngine.run(id, name);

	for (const row of rows.values()) {
		const gameIdKindId = gameIdKindIds.get(row.gameIdKind)!;
		const engine = pickBestEngine(row.engines, engineOrder);
		const engineId = engine ? engineIds.get(engine.brand) : undefined;
		const versionNumbers = parseVersionNumbers(engine?.version);

		insertGame.run(
			gameIdKindId,
			row.externalId,
			engineId ?? null,
			versionNumbers[0] ?? null,
			versionNumbers[1] ?? null,
			versionNumbers[2] ?? null,
			toEpochDay(row.releaseDate) ?? null,
		);
	}

	db.exec("COMMIT");

	db.close();
}
