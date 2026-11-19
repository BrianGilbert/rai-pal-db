import type { ModBase } from "./mod.ts";
import { bepinexModHelper } from "./bepinex/bepinex-mod.ts";
import { token } from "./replacement-tokens.ts";

export async function getGameSpecificMods(): Promise<ModBase[]> {
	const heavenVr = bepinexModHelper("heaven-vr");
	const twoForksVr = bepinexModHelper("two-forks-vr");

	return [
		{
			id: heavenVr.id,
			...heavenVr.base,
			gameIds: {
				Steam: ["1533420"],
				NormalizedTitle: ["neonwhite"],
			},
			family: "game-specific",
			unityBackend: "Mono",
			architecture: "X64",
			title: "HeavenVR",
			author: "Raicuparta",
			sourceCode: "https://github.com/Raicuparta/heaven-vr",
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
		},
		{
			id: twoForksVr.id,
			...twoForksVr.base,
			gameIds: {
				Steam: ["383870"],
				Gog: ["1459256379"],
				NormalizedTitle: ["firewatch"],
			},
			family: "game-specific",
			unityBackend: "Mono",
			architecture: "X64",
			title: "Two Forks VR",
			author: "Raicuparta",
			sourceCode: "https://github.com/Raicuparta/two-forks-vr",
			description: "VR mod for Firewatch.",
			download: {
				id: "2.1.0",
				url: "https://github.com/Raicuparta/two-forks-vr/releases/download/v2.1.0/two-forks-vr.zip",
			},
			install: {
				manifestPath: twoForksVr.manifestPath(),
				extract: [
					twoForksVr.extract.plugin(),
					twoForksVr.extract.patch(),
					{
						source: "CopyToGame",
						destination: token.GameExecutableFolderPath,
					},
				],
				mainInstalledFolderPath: twoForksVr.pluginFolder(),
			},
		},
	];
}
