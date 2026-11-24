import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import {
	bepinexConfigPath,
	configDownload,
	type ConfigModOptions,
} from "./config-database.ts";

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
	id,
	gameName,
	gameIds,
	file,
}: ConfigModOptions): Promise<ModBase> {
	const destination = bepinexConfigPath("raicuparta.everyone.json");

	return {
		id,
		...everyoneBase,
		tags: ["everyone-config"],
		gameIds,
		hideFromGameModsList: true,
		title: `Everyone Config for ${gameName}`,
		description: `Recommended Everyone config for ${gameName}.`,
		download: await configDownload(file),
		install: {
			manifestPath: `${token.GameInstalledModsPath}/manifests/${id}.json`,
			copy: [{ destination }],
		},
		paths: [{ id: "config", title: "Config", type: "File", path: destination }],
	};
}
