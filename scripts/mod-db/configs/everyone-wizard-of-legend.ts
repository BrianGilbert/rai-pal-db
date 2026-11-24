import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-wizard-of-legend";

export const everyoneWizardOfLegend = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Epic: ["24cb36289be34527b528cda87cdc925c"],
		Gog: ["2061814323", "1855397386"],
		NormalizedExecutable: ["wizardoflegend"],
		Steam: ["445980", "813840"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Wizard of Legend",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Wizard of Legend.",
	download: await configDownload("everyone/wizard-of-legend.json"),
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
