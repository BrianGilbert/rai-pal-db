import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-the-lab";

export const everyoneTheLab = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		NormalizedExecutable: ["thelab"],
		Steam: ["450390"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for The Lab",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for The Lab.",
	download: await configDownload("everyone/the-lab.json"),
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
