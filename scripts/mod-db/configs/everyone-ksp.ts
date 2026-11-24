import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-ksp";

export const everyoneKsp = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Epic: ["84686da593b24598803ffbe7f9b1bb5e"],
		Gog: ["1429864849", "2092205632", "1506581192"],
		NormalizedExecutable: ["ksp_x64"],
		Steam: ["220200", "283740"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Kerbal Space Program",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Kerbal Space Program.",
	download: await configDownload("everyone/ksp.json"),
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
