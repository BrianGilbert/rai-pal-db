import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-risk-of-rain";

export const everyoneRiskOfRain = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Gog: ["1207660563"],
		NormalizedExecutable: ["riskofrain"],
		Steam: ["248820"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Risk of Rain",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Risk of Rain.",
	download: await configDownload("everyone/risk-of-rain.json"),
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
