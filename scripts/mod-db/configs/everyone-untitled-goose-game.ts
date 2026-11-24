import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-untitled-goose-game";

export const everyoneUntitledGooseGame = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Epic: ["a53bee4f52cc46a583d8a40217b8ab27"],
		NormalizedExecutable: ["untitled"],
		Steam: ["837470"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Untitled Goose Game",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Untitled Goose Game.",
	download: await configDownload("everyone/untitled-goose-game.json"),
	install: {
		manifestPath: `${token.GameInstalledModsPath}/manifests/${id}.json`,
		copy: [{ destination: bepinexConfigPath("raicuparta.everyone.json") }],
	},
	paths: [
		{
			id: "config",
			title: "Config",
			type: "File",
			path: bepinexConfigPath("raicuparta.everyone.json"),
		},
	],
} satisfies ModBase;
