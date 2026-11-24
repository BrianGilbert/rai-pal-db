import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-inside";

export const everyoneInside = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Epic: ["6fdb5feba66846cd8623a6d15ca68080"],
		Gog: ["1916896012"],
		NormalizedExecutable: ["inside"],
		Steam: ["304430"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Inside",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Inside.",
	download: await configDownload("everyone/inside.json"),
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
