import type { ModBase } from "../mod.ts";
import { bepinexModHelper } from "../bepinex/bepinex-mod.ts";
import { token } from "../replacement-tokens.ts";

const twoForksVr = bepinexModHelper("TwoForksVr");

export const twoForksVrMod: ModBase = {
	id: twoForksVr.id,
	...twoForksVr.base,
	gameIds: {
		Steam: ["383870"],
		Gog: ["1459256379"],
	},
	tags: ["game-specific-vr"],
	unityBackend: "Mono",
	architecture: "X64",
	title: "Two Forks VR",
	author: "Raicuparta",
	website: "https://github.com/Raicuparta/two-forks-vr",
	description: "VR mod for Firewatch.",
	download: {
		id: "2.1.0",
		url: "https://github.com/Raicuparta/two-forks-vr/releases/download/v2.1.0/two-forks-vr.zip",
	},
	install: {
		manifestPath: twoForksVr.manifestPath(),
		extract: [
			twoForksVr.extract.plugin(),
			{
				source: "plugins/TwoForksVrAssets",
				destination: `${token.GameInstalledModsPath}/bepinex/BepInEx/plugins/TwoForksVrAssets`,
			},
			twoForksVr.extract.patch(),
			...[
				"Firewatch_Data/Plugins/LIV_Bridge.dll",
				"Firewatch_Data/Plugins/openvr_api.dll",
				"Firewatch_Data/Plugins/openvr_mod.cfg",
			].map((filePath) => ({
				source: `CopyToGame/${filePath}`,
				destination: `${token.GameExecutableFolderPath}/${filePath}`,
			})),
		],
	},
	paths: [twoForksVr.paths.plugin(), twoForksVr.paths.patcher()],
};
