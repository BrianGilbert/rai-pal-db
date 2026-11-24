import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-saturnalia";

export const everyoneSaturnalia = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Epic: ["1dd2d2d4d38e4964a2ebcb3e3a9d10e5"],
		Gog: ["2041744633", "1824726869"],
		NormalizedExecutable: ["saturnalia"],
		Steam: ["916350"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Saturnalia",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Saturnalia.",
	download: await configDownload("everyone/saturnalia.json"),
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
