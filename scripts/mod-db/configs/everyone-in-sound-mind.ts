import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-in-sound-mind";

export const everyoneInSoundMind = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		Epic: ["929a84bff8a34d80b490f71550ec782f"],
		Gog: ["1989561048", "2095232159", "1463130328", "1503102848"],
		NormalizedExecutable: ["insoundmind"],
		Steam: ["1119980", "1309180", "1749910", "1756610", "1474320"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for In Sound Mind",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description: "Recommended Everyone config for In Sound Mind.",
	download: await configDownload("everyone/in-sound-mind.json"),
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
