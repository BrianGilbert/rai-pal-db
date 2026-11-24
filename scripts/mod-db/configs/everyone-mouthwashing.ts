import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-mouthwashing";

export const everyoneMouthwashing = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		NormalizedExecutable: ["mouthwashing"],
		Steam: ["2475490", "3276830", "4014000"],
		Xbox: ["9MVNCSJ14754"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Mouthwashing",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Mouthwashing.",
	download: await configDownload("everyone/mouthwashing.json"),
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
