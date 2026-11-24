import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-140";

export const everyone140 = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Gog: ["1096313866", "1087788668"],
		NormalizedExecutable: ["140"],
		Steam: ["242820"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for 140",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for 140.",
	download: await configDownload("everyone/140.json"),
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
