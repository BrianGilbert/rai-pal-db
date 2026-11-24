import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-kentucky-route-zero";

export const everyoneKentuckyRouteZero = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Gog: ["1207660653"],
		NormalizedExecutable: ["kentuckyroutezero"],
		Steam: ["231200"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Kentucky Route Zero",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Kentucky Route Zero.",
	download: await configDownload("everyone/kentucky-route-zero.json"),
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
