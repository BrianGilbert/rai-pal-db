import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-oxenfree";

export const everyoneOxenfree = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Epic: ["a32b4fc85e2440bd9dae0dace76f5c86"],
		Gog: ["1457519353"],
		NormalizedExecutable: ["oxenfree"],
		Steam: ["388880", "433430"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Oxenfree",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Oxenfree.",
	download: await configDownload("everyone/oxenfree.json"),
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
