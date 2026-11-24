import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-grow-up";

export const everyoneGrowUp = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Gog: ["2032258750"],
		NormalizedExecutable: ["growup"],
		Steam: ["426790"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Grow Up",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Grow Up.",
	download: await configDownload("everyone/grow-up.json"),
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
