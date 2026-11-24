import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-yooka-laylee";

export const everyoneYookaLaylee = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Gog: ["1445853962", "1354053863"],
		NormalizedExecutable: ["yookalaylee64"],
		Steam: ["360830", "426750"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Yooka-Laylee",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Yooka-Laylee.",
	download: await configDownload("everyone/yooka-laylee.json"),
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
