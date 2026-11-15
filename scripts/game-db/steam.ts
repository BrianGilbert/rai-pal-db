import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { engineBrands } from "./main.ts";
import type { Game } from "./main.ts";

export async function fetchSteamGames(): Promise<Game[]> {
	const games: Game[] = [];

	for (const engineName of engineBrands) {
		const providerPath = join("..", "steam-ids", engineName);

		const lines = (await readFile(providerPath, "utf8")).split("\n");
		for (const line of lines) {
			const steamId = line.trim();
			if (steamId) {
				games.push({
					engines: [{ brand: engineName }],
					ids: {
						Steam: new Set([steamId]),
					},
				});
			}
		}
	}

	return games;
}
