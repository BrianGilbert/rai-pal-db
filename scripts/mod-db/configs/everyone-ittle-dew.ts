import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-ittle-dew";

export const everyoneIttleDew = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Gog: ["1207659258"],
		NormalizedExecutable: ["dew"],
		Steam: ["241320"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Ittle Dew",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Ittle Dew.",
	download: await configDownload("everyone/ittle-dew.json"),
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
