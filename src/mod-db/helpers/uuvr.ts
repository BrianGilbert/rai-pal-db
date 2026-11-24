import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import {
	bepinexConfigPath,
	configDownload,
	type ConfigModOptions,
} from "./config-database.ts";

const author = "Raicuparta";
const website = "https://github.com/Raicuparta/uuvr";
const legacyDescription =
	"Uses OpenVR. Start SteamVR before starting the game. Use the Configuration Manager mod to change UUVR settings for each game.";
const modernDescription =
	"Supports OpenXR and OpenVR. Use the Configuration Manager mod to change UUVR settings for each game.";

export function uuvrBase(generation: "legacy" | "modern") {
	const legacy = generation === "legacy";

	return {
		tags: ["uuvr"],
		title: "UUVR",
		author,
		website,
		description: legacy ? legacyDescription : modernDescription,
		optionalDependencies: [{ tag: "uuvr-config" }],
		engineVersionRange: legacy
			? { maximum: { major: 2019 } }
			: { minimum: { major: 2018, minor: 4 } },
	} satisfies Pick<
		ModBase,
		| "tags"
		| "title"
		| "author"
		| "website"
		| "description"
		| "optionalDependencies"
		| "engineVersionRange"
	>;
}

export async function uuvrConfig({
	id,
	gameName,
	gameIds,
	file,
}: ConfigModOptions): Promise<ModBase> {
	const destination = bepinexConfigPath("raicuparta.uuvr-modern.cfg");

	return {
		id,
		tags: ["uuvr-config"],
		gameIds,
		hideFromGameModsList: true,
		title: `UUVR Config for ${gameName}`,
		author,
		website,
		description: `Recommended UUVR config for ${gameName}.`,
		download: await configDownload(file),
		install: {
			manifestPath: `${token.GameInstalledModsPath}/manifests/${id}.json`,
			copy: [{ destination }],
		},
		paths: [{ id: "config", title: "Config", type: "File", path: destination }],
	};
}
