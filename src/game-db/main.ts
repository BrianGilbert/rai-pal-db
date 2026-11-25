import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { publicFolder } from "../common/paths.ts";
import { fetchPcGamingWikiGames } from "./pc-gaming-wiki.ts";
import { fetchSteamGames } from "./steam.ts";
import { fetchPCGamePassGames } from "./xbox-gamepass.ts";
import { fetchEpicGamesStoreGames } from "./epic-games-store.ts";
import { mergeGames } from "./merge-games.ts";
import {
	countGameRows,
	createDatabase,
	getExistingGameCount,
} from "./sqlite.ts";
import { GAME_DATABASE_VERSION } from "../common/versions.ts";
import { engineBrands } from "./game.ts";

// Each game source we fetch from. These are named so we can log exactly which
// source succeeded/failed, instead of silently producing a half-empty database.
const gameSources = [
	{ name: "PCGamingWiki", fetch: fetchPcGamingWikiGames },
	{ name: "Steam", fetch: fetchSteamGames },
	{ name: "PC Game Pass", fetch: fetchPCGamePassGames },
	{ name: "Epic Games Store", fetch: fetchEpicGamesStoreGames },
] as const;

// The DB is not much use if a whole source disappears, and a run that loses most
// of its games is almost certainly a bug/outage rather than a real shrink.
// Refuse to overwrite the existing database when that happens.
const minimumRetainedGameRatio = 0.5;

// Set ALLOW_PARTIAL_GAME_DB=1 to still write the database when a source fails.
// Not recommended, since it publishes a database missing that source's data.
const allowPartialDatabase = process.env.ALLOW_PARTIAL_GAME_DB === "1";

async function main() {
	const folder = join(publicFolder, "game-db", `${GAME_DATABASE_VERSION}`);
	await mkdir(folder, { recursive: true });

	const outputPath = join(folder, "games.db");

	const results = await Promise.allSettled(
		gameSources.map((source) => source.fetch()),
	);

	const failedSources: string[] = [];

	const games = results.flatMap((result, index) => {
		const { name } = gameSources[index];
		if (result.status === "fulfilled") {
			console.log(`Fetched ${result.value.length} games from ${name}.`);
			if (result.value.length === 0) {
				failedSources.push(name);
				console.warn(
					`Source ${name} returned 0 games. If this is unexpected, the database will be missing data for it.`,
				);
			}
			return result.value;
		}

		failedSources.push(name);
		const reason = result.reason as Error | undefined;
		console.error(
			`Failed to fetch games from ${name}: ${reason} ${reason?.stack ?? ""}`,
		);
		return [];
	});

	if (games.length === 0) {
		throw new Error("Every game source failed or returned nothing. Aborting.");
	}

	if (failedSources.length > 0 && !allowPartialDatabase) {
		throw new Error(
			`These game sources failed or returned no games: ${failedSources.join(
				", ",
			)}. ` +
				`Refusing to overwrite the database with partial data, because that silently drops ` +
				`everything those sources contribute (e.g. titles and non-Steam store entries). ` +
				`Fix the sources above and run again, or set ALLOW_PARTIAL_GAME_DB=1 to write anyway.`,
		);
	}

	const mergedGames = mergeGames(games);

	const gamesWithEngines = mergedGames.filter(
		(game) => game.engines && game.engines.length > 0,
	);

	console.log(
		`Merged ${games.length} fetched games into ${mergedGames.length} games, ${gamesWithEngines.length} of which have engine data (and will be saved).`,
	);

	const existingGameCount = getExistingGameCount(outputPath);
	if (existingGameCount !== undefined) {
		const newGameCount = countGameRows(gamesWithEngines);
		const ratio = newGameCount / existingGameCount;
		console.log(
			`Existing database has ${existingGameCount} game entries; new database would have ${newGameCount} (${(
				ratio * 100
			).toFixed(1)}%).`,
		);
		if (ratio < minimumRetainedGameRatio) {
			throw new Error(
				`Refusing to overwrite ${outputPath}: the new database would only keep ${(
					ratio * 100
				).toFixed(1)}% of the existing games. ` +
					`This usually means one or more sources above failed or returned incomplete data. ` +
					`Fix the source, then run again. (To force the update anyway, delete ${outputPath} or lower minimumRetainedGameRatio.)`,
			);
		}
	}

	createDatabase(outputPath, gamesWithEngines);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
