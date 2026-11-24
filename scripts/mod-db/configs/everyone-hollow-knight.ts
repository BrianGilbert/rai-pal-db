import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-hollow-knight";

export const everyoneHollowKnight = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Gog: ["1308320804", "1984697392", "2031197911"],
		NormalizedExecutable: ["hollowknight"],
		Steam: ["367520", "598190", "916000"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Hollow Knight",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Hollow Knight.",
	download: await configDownload("everyone/hollow-knight.json"),
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
