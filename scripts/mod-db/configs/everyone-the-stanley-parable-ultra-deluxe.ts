import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { bepinexConfigPath, configDownload } from "./configs.ts";

const id = "config-everyone-the-stanley-parable-ultra-deluxe";

export const everyoneTheStanleyParableUltraDeluxe = {
	id,
	tags: ["everyone-config"],
	gameIds: {
		NormalizedExecutable: ["thestanleyparableultradeluxe"],
		Steam: ["1703340"],
	},
	hideFromGameModsList: true,
	title: "Everyone Config for The Stanley Parable: Ultra Deluxe",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/everyone-client",
	description:
		"Recommended Everyone config for The Stanley Parable: Ultra Deluxe.",
	download: await configDownload(
		"everyone/the-stanley-parable-ultra-deluxe.json",
	),
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
