import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { configDownload, uevrConfigPath } from "./configs.ts";

const id = "config-uevr-abzu";

export const uevrAbzu = {
	id,
	tags: ["uevr-config"],
	gameIds: {
		Gog: ["1622602219"],
		NormalizedExecutable: ["abzugamewin64shipping"],
		Steam: ["384190", "577450"],
	},
	hideFromGameModsList: true,
	title: "UEVR Config for Abzû",
	author: "praydog",
	website: "https://github.com/praydog/UEVR",
	description: "Recommended UEVR config for Abzû.",
	download: await configDownload("uevr/abzu.zip"),
	install: {
		manifestPath: `${token.GameInstalledModsPath}/manifests/${id}.json`,
		extract: [{ source: ".", destination: uevrConfigPath() }],
	},
	paths: [
		{
			id: "config",
			title: "Config",
			type: "Folder",
			path: uevrConfigPath(),
		},
	],
} satisfies ModBase;
