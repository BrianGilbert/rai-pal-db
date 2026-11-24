import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-grow-home";

export const everyoneGrowHome = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Gog: ["1533865045"],
		NormalizedExecutable: ["growhome"],
		Steam: ["323320"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Grow Home",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Grow Home.",
	download: await configDownload("everyone/grow-home.json"),
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
