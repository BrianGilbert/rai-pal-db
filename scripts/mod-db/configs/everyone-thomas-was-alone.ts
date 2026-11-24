import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-thomas-was-alone";

export const everyoneThomasWasAlone = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		NormalizedExecutable: ["thomaswasalone"],
		Steam: ["220780"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Thomas Was Alone",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Thomas Was Alone.",
	download: await configDownload("everyone/thomas-was-alone.json"),
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
