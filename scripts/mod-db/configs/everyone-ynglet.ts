import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-ynglet";

export const everyoneYnglet = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		NormalizedExecutable: ["ynglet"],
		Steam: ["1015920"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Ynglet",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Ynglet.",
	download: await configDownload("everyone/ynglet.json"),
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
