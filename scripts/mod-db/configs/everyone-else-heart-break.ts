import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-else-heart-break";

export const everyoneElseHeartBreak = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Gog: ["1442485613"],
		NormalizedExecutable: ["elseheartbreak"],
		Steam: ["400110"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for Else Heart.Break()",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for Else Heart.Break().",
	download: await configDownload("everyone/else-heart-break.json"),
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
