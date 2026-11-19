import type { ModBase } from "./mod.ts";
import { bepinexModHelper } from "./bepinex/bepinex-mod.ts";
import { token } from "./replacement-tokens.ts";

export async function getGameSpecificMods(): Promise<ModBase[]> {
	const bepinex = bepinexModHelper("heaven-vr");

	return [
		{
			id: bepinex.id,
			...bepinex.base,
			gameIds: {
				Steam: ["1533420"],
				Manual: ["neonwhite"],
			},
			unityBackend: "Mono",
			architecture: "X64",
			gameOs: "Windows",
			title: "HeavenVR",
			author: "Raicuparta",
			sourceCode: "https://github.com/Raicuparta/heaven-vr",
			description: "VR mod for Neon White, with full motion control support.",
			download: {
				id: "1.0.0",
				url: "https://github.com/Raicuparta/heaven-vr/releases/download/v1.0.0/heaven-vr.zip",
			},
			install: {
				manifestPath: bepinex.manifestPath(),
				extract: [
					bepinex.extract.plugin(),
					{
						source: "CopyToGame",
						destination: token.GameExecutableFolderPath,
					},
				],
				mainInstalledFolderPath: bepinex.pluginFolder(),
			},
		},
	];
}
