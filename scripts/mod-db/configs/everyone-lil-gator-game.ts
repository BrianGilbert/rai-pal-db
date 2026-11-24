import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-lil-gator-game";

export const everyoneLilGatorGame = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		NormalizedExecutable: ["lilgatorgame"],
		Steam: ["1586800"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Lil Gator Game",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Lil Gator Game.",
	download: await configDownload("everyone/lil-gator-game.json"),
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
