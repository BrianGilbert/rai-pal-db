import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-lake-haven-chrysalis";

export const everyoneLakeHavenChrysalis = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		NormalizedExecutable: ["lakehavenchrysalis"],
		Steam: ["1696960"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Lake Haven - Chrysalis",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Lake Haven - Chrysalis.",
	download: await configDownload("everyone/lake-haven-chrysalis.json"),
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
