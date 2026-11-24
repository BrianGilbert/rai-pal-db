import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-neon-white";

export const everyoneNeonWhite = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		NormalizedExecutable: ["neonwhite"],
		Steam: ["1533420"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Neon White",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Neon White.",
	download: await configDownload("everyone/neon-white.json"),
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
