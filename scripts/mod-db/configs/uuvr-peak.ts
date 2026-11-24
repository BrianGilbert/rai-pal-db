import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-uuvr-peak";

export const uuvrPeak = {
	id,
	tags: ["uuvr-config"],
	gameIds: {
		NormalizedExecutable: ["peak"],
		Steam: ["3527290"],
	},
	hideFromGameModsList: true,
	title: "UUVR Config for Peak",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/uuvr",
	description: "Recommended UUVR config for Peak.",
	download: await configDownload("uuvr/peak.cfg"),
	install: {
		manifestPath: `${token.GameInstalledModsPath}/manifests/${id}.json`,
		copy: [{ destination: bepinexConfigPath("raicuparta.uuvr-modern.cfg") }],
	},
	paths: [
		{
			id: "config",
			title: "Config",
			type: "File",
			path: bepinexConfigPath("raicuparta.uuvr-modern.cfg"),
		},
	],
} satisfies ModBase;
