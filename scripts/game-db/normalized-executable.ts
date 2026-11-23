import { configModDefinitions } from "../mod-db/config-mods.ts";
import type { Game } from "./main.ts";

export function addConfigModExecutableNames(games: Game[]) {
	const byGameId = new Map<string, Game[]>();

	for (const game of games) {
		for (const [kind, ids] of Object.entries(game.ids)) {
			if (kind === "NormalizedTitle" || kind === "NormalizedExecutable") {
				continue;
			}

			for (const id of ids ?? []) {
				const key = `${kind}\0${id}`;
				const matches = byGameId.get(key) ?? [];
				matches.push(game);
				byGameId.set(key, matches);
			}
		}
	}

	for (const definition of configModDefinitions) {
		const executables = definition.gameIds.NormalizedExecutable ?? [];
		const matches = new Set<Game>();

		for (const [kind, ids] of Object.entries(definition.gameIds)) {
			if (kind === "NormalizedTitle" || kind === "NormalizedExecutable") {
				continue;
			}

			for (const id of ids ?? []) {
				for (const game of byGameId.get(`${kind}\0${id}`) ?? []) {
					matches.add(game);
				}
			}
		}

		for (const game of matches) {
			for (const executable of executables) {
				(game.ids.NormalizedExecutable ??= new Set()).add(executable);
			}
		}
	}
}
