import { getLatestFromGitHub } from "../../github.ts";
import type { ModBase } from "../../mod.ts";
import { bepinexModHelper } from "../bepinex-mod.ts";

const author = "Raicuparta";
const sourceCode = "https://github.com/Raicuparta/uuvr";

export async function getUuvrMods(): Promise<ModBase[]> {
	const { il2cppLegacyDownload, monoLegacyDownload, monoModernDownload } =
		await getLatestFromGitHub(
			{ owner: "Raicuparta", repo: "uuvr" },
			{
				il2cppLegacyDownload: (assetName) =>
					assetName.includes("il2cpp-legacy"),
				monoLegacyDownload: (assetName) => assetName.includes("mono-legacy"),
				monoModernDownload: (assetName) => assetName.includes("mono-modern"),
			},
		);

	const il2cppLegacy = bepinexModHelper("uuvr-il2cpp-legacy");
	const monoLegacy = bepinexModHelper("uuvr-mono-legacy");
	const monoModern = bepinexModHelper("uuvr-mono-modern");

	return [
		{
			id: il2cppLegacy.id,
			...il2cppLegacy.base,
			family: "uuvr",
			unityBackend: "Il2Cpp",
			title: "UUVR",
			author,
			sourceCode,
			description:
				"Uses OpenVR. Start SteamVR before starting the game. Use the Configuration Manager mod to change UUVR settings for each game.",
			engineVersionRange: {
				maximum: {
					major: 2019,
				},
			},
			download: il2cppLegacyDownload,
			install: {
				manifestPath: il2cppLegacy.manifestPath(),
				extract: [il2cppLegacy.extract.plugin(), il2cppLegacy.extract.patch()],
				mainInstalledFolderPath: il2cppLegacy.pluginFolder(),
			},
			config: il2cppLegacy.config("raicuparta.uuvr-legacy.cfg"),
		},
		{
			id: monoLegacy.id,
			...monoLegacy.base,
			family: "uuvr",
			unityBackend: "Mono",
			title: "UUVR",
			author,
			sourceCode,
			description:
				"Uses OpenVR. Start SteamVR before starting the game. Use the Configuration Manager mod to change UUVR settings for each game.",
			engineVersionRange: {
				maximum: {
					major: 2019,
				},
			},
			download: monoLegacyDownload,
			install: {
				manifestPath: monoLegacy.manifestPath(),
				extract: [monoLegacy.extract.plugin(), monoLegacy.extract.patch()],
				mainInstalledFolderPath: monoLegacy.pluginFolder(),
			},
			config: monoLegacy.config("raicuparta.uuvr-legacy.cfg"),
		},
		{
			id: monoModern.id,
			...monoModern.base,
			family: "uuvr",
			unityBackend: "Mono",
			title: "UUVR",
			author,
			sourceCode,
			description:
				"Supports OpenXR and OpenVR. Use the Configuration Manager mod to change UUVR settings for each game.",
			engineVersionRange: {
				minimum: {
					major: 2018,
					minor: 4,
				},
			},
			download: monoModernDownload,
			install: {
				manifestPath: monoModern.manifestPath(),
				extract: [monoModern.extract.plugin(), monoModern.extract.patch()],
				mainInstalledFolderPath: monoModern.pluginFolder(),
			},
			config: monoModern.config("raicuparta.uuvr-modern.cfg"),
		},
	];
}
