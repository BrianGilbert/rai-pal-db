import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-gris";

export const everyoneGris = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Gog: ["2078272297", "1322407652"],
		NormalizedExecutable: ["gris"],
		Steam: ["683320"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Gris",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Gris.",
	download: await configDownload("everyone/gris.json"),
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
