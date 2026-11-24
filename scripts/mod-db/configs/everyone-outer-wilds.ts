import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-outer-wilds";

export const everyoneOuterWilds = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Epic: ["c1c2d06bb0b24b7cb820e8e03ae5c3d2"],
		NormalizedExecutable: ["outerwilds"],
		Steam: ["753640", "1622100"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Outer Wilds",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Outer Wilds.",
	download: await configDownload("everyone/outer-wilds.json"),
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
