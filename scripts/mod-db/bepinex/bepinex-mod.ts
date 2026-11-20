import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";

type ModInstall = NonNullable<ModBase["install"]>;
type ModInstallExtract = NonNullable<ModInstall["extract"]>[number];
type ModConfig = NonNullable<ModBase["config"]>;

export function bepinexModHelper(modId: string) {
	const pluginFolder = `${token.GameInstalledModsPath}/bepinex/BepInEx/plugins/${modId}`;
	const patcherFolder = `${token.GameInstalledModsPath}/bepinex/BepInEx/patchers/${modId}`;

	return {
		id: modId,

		base: {
			engine: "Unity",
			requiredDependencies: [{ tag: "bepinex" }],
		} satisfies Pick<ModBase, "engine" | "requiredDependencies">,

		manifestPath: () =>
			`${token.GameInstalledModsPath}/manifests/${modId}.json`,

		pluginFolder: () => pluginFolder,

		patcherFolder: () => patcherFolder,

		extract: {
			plugin: (): ModInstallExtract => ({
				source: "plugins",
				destination: pluginFolder,
			}),
			patch: (): ModInstallExtract => ({
				source: "patchers",
				destination: patcherFolder,
			}),
		},

		config: (fileName: string): ModConfig => ({
			destinationPath: `${token.GameInstalledModsPath}/bepinex/BepInEx/config/${fileName}`,
			destinationType: "File",
		}),
	};
}
