import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-here-comes-niko";

export const everyoneHereComesNiko = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		NormalizedExecutable: ["herecomesniko"],
		Steam: ["925950"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Here Comes Niko!",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Here Comes Niko!.",
	download: await configDownload("everyone/here-comes-niko.json"),
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
