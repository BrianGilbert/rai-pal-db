import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-a-short-hike";

export const everyoneAShortHike = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Epic: ["018230f620e34503926e5c76525a8fd1"],
		Gog: ["2044653500"],
		NormalizedExecutable: ["ashorthike"],
		Steam: ["1055540"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for A Short Hike",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for A Short Hike.",
	download: await configDownload("everyone/a-short-hike.json"),
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
