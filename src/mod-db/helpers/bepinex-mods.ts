import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";

type ModInstall = NonNullable<ModBase["install"]>;
type ModInstallExtract = NonNullable<ModInstall["extract"]>[number];
type ModPath = NonNullable<ModBase["paths"]>[number];

const bepinexFolder = `${token.GameInstalledModsPath}/bepinex/BepInEx`;
const configFolder = `${bepinexFolder}/config`;

export function bepinexModBase(id: string) {
	const pluginFolder = `${bepinexFolder}/plugins/${id}`;
	const patcherFolder = `${bepinexFolder}/patchers/${id}`;

	return {
		id,
		base: {
			engine: "Unity",
			requiredDependencies: [{ tag: "bepinex" }],
		} satisfies Pick<ModBase, "engine" | "requiredDependencies">,
		manifestPath: `${token.GameInstalledModsPath}/manifests/${id}.json`,
		pluginFolder,
		patcherFolder,
		extract: {
			plugin: (source = "plugins"): ModInstallExtract => ({
				source,
				destination: pluginFolder,
			}),
			patcher: (source = "patchers"): ModInstallExtract => ({
				source,
				destination: patcherFolder,
			}),
		},
		paths: {
			plugin: (): ModPath => ({
				id: "plugin",
				title: "Plugin",
				type: "Folder",
				path: pluginFolder,
			}),
			patcher: (): ModPath => ({
				id: "patcher",
				title: "Patcher",
				type: "Folder",
				path: patcherFolder,
			}),
			config: (fileName: string): ModPath => ({
				id: "config",
				title: "Config",
				type: "File",
				path: `${configFolder}/${fileName}`,
			}),
		},
	};
}

export function bepinexConfig({
	id,
	title,
	engineVersionRange,
	content,
}: {
	id: string;
	title: string;
	engineVersionRange: ModBase["engineVersionRange"];
	content: string;
}): ModBase {
	const configPath = `${configFolder}/BepInEx.cfg`;

	return {
		id,
		tags: ["bepinex-config"],
		title,
		author: "BepInEx",
		website: "https://github.com/BepInEx/BepInEx",
		description: "Default BepInEx config",
		engine: "Unity",
		engineVersionRange,
		hideFromGameModsList: true,
		install: {
			manifestPath: `${token.GameInstalledModsPath}/manifests/${id}.json`,
			write: [{ content, destination: configPath }],
		},
		paths: [{ id: "config", title: "Config", type: "File", path: configPath }],
	};
}
