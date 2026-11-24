import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-disco-elysium";

export const everyoneDiscoElysium = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Gog: [
			"1771589310",
			"1497779763",
			"1820315840",
			"1618612563",
			"1370620137",
			"1377256194",
		],
		NormalizedExecutable: ["disco"],
		Steam: ["632470", "1173140"],
		Xbox: ["9NTRS771L8HL"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Disco Elysium",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Disco Elysium.",
	download: await configDownload("everyone/disco-elysium.json"),
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
