import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-ittle-dew-2";

export const everyoneIttleDew2 = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		NormalizedExecutable: ["id2"],
		Steam: ["395620"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Ittle Dew 2",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Ittle Dew 2.",
	download: await configDownload("everyone/ittle-dew-2.json"),
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
