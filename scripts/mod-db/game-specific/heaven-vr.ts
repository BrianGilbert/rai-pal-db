import type { ModBase } from "../mod.ts";
import { bepinexModHelper } from "../bepinex/bepinex-mod.ts";
import { token } from "../replacement-tokens.ts";

const heavenVr = bepinexModHelper("heaven-vr");

export const heavenVrMod: ModBase = {
	id: heavenVr.id,
	...heavenVr.base,
	gameIds: {
		Steam: ["1533420"],
		NormalizedTitle: ["neonwhite"],
	},
	family: "game-specific-vr",
	unityBackend: "Mono",
	architecture: "X64",
	title: "HeavenVR",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/heaven-vr",
	description: "VR mod for Neon White, with full motion control support.",
	download: {
		id: "1.0.0",
		url: "https://github.com/Raicuparta/heaven-vr/releases/download/v1.0.0/heaven-vr.zip",
	},
	install: {
		manifestPath: heavenVr.manifestPath(),
		extract: [
			heavenVr.extract.plugin(),
			{
				source: "CopyToGame",
				destination: token.GameExecutableFolderPath,
			},
		],
		mainInstalledFolderPath: heavenVr.pluginFolder(),
	},
};
