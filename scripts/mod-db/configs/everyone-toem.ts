import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-toem";

export const everyoneToem = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Gog: ["1436499377"],
		NormalizedExecutable: ["toem"],
		Steam: ["1307580", "1655680"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for TOEM",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for TOEM.",
	download: await configDownload("everyone/toem.json"),
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
