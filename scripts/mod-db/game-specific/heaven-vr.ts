import type { ModBase } from "../mod.ts";
import { bepinexModHelper } from "../bepinex/bepinex-mod.ts";
import { token } from "../replacement-tokens.ts";

const heavenVr = bepinexModHelper("HeavenVr");

export const heavenVrMod: ModBase = {
	id: heavenVr.id,
	...heavenVr.base,
	gameIds: {
		Steam: ["1533420"],
		NormalizedTitle: ["neonwhite"],
	},
	tags: ["game-specific-vr"],
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
			{
				source: "plugins/HeavenVr",
				destination: heavenVr.pluginFolder(),
			},
			...[
				"Neon White_Data/Plugins/x86_64/LIV_Bridge.dll",
				"Neon White_Data/Plugins/x86_64/openxr_loader.dll",
				"Neon White_Data/Plugins/x86_64/UnityOpenXR.dll",
				"Neon White_Data/UnitySubsystems/UnityOpenXR/UnitySubsystemsManifest.json",
			].map((filePath) => ({
				source: `CopyToGame/${filePath}`,
				destination: `${token.GameExecutableFolderPath}/${filePath}`,
			})),
		],
	},
	paths: [heavenVr.paths.plugin()],
};
