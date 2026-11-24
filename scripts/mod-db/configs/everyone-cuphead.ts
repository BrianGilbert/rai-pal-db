import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-cuphead";

export const everyoneCuphead = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Gog: ["1963513391", "1828931756", "2048763853", "1999621840"],
		NormalizedExecutable: ["cuphead"],
		Steam: ["268910", "1117850", "704710", "2072990"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Cuphead",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Cuphead.",
	download: await configDownload("everyone/cuphead.json"),
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
