import type { ModBase } from "../mod.ts";
import { bepinexConfigPath } from "../paths.ts";
import { configDownload, type ConfigModOptions } from "./config-database.ts";

export const everyoneBase = {
	tags: ["everyone"],
	title: "Everyone",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description:
		"Adds multiplayerish features. Requires being logged in to Rai Pal. F3 to chat.",
} satisfies Pick<
	ModBase,
	"tags" | "title" | "author" | "website" | "description"
>;

export async function everyoneConfig({
	gameSlug,
	gameName,
	gameIds,
}: ConfigModOptions): Promise<ModBase> {
	const id = `config-everyone-${gameSlug}`;
	const destination = bepinexConfigPath("raicuparta.everyone.json");

	return {
		id,
		...everyoneBase,
		tags: ["everyone-config"],
		gameIds,
		hideFromGameModsList: true,
		title: `Everyone Config for ${gameName}`,
		description: `Recommended Everyone config for ${gameName}.`,
		download: await configDownload(`everyone/${gameSlug}.json`),
		install: {
			installKind: "PerGame",
			copy: [{ destination }],
		},
		paths: [{ path: destination, type: "File" }],
	};
}
