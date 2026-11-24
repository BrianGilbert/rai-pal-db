import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-uuvr-zerograve";

export const uuvrZerograve = {
	id,
	tags: ["uuvr-config"],
	gameIds: {
		NormalizedExecutable: ["zerograve"],
		Steam: ["1218580"],
	},
	hideFromGameModsList: true,
	title: "UUVR Config for Zerograve",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/uuvr",
	description: "Recommended UUVR config for Zerograve.",
	download: await configDownload("uuvr/zerograve.cfg"),
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
