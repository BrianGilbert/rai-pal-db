import { configDownload, uevrConfigPath } from "../helpers/config-database.ts";
import { defineMod } from "../mod.ts";
import { token } from "../replacement-tokens.ts";

const id = "config-uevr-abzu";
const destination = uevrConfigPath();

export default defineMod({
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
		extract: [{ source: ".", destination }],
	},
	paths: [{ id: "config", title: "Config", type: "Folder", path: destination }],
});
