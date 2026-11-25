import type { ModBase } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { manifestPath } from "../paths.ts";

const website = "https://github.com/Raicuparta/gdscript-loader";

// Each zip contains a single `script-loader.gd`, built and published by the
// gdscript-loader release workflow.
const downloadBase =
	"https://github.com/Raicuparta/gdscript-loader/releases/download/v0.1.0";

export function godotLoader(major: 3 | 4): ModBase {
	const id = `godot-loader-${major}`;
	const modFolder = `${token.GameInstalledModsPath}/${id}`;
	const scriptLoaderGdPath = `${modFolder}/script-loader.gd`;

	return {
		id,
		tags: ["godot-loader"],
		engine: "Godot",
		engineVersionRange: {
			minimum: { major },
			...(major === 3 ? { maximum: { major } } : {}),
		},
		title: `Godot ${major} Mod Loader`,
		author: "Raicuparta",
		website,
		description: "Basic mod loader for Godot games.",
		download: {
			id: "0.1.0",
			url: `${downloadBase}/godot-${major}.zip`,
		},
		install: {
			manifestPath: manifestPath(id),
			extract: [
				{
					source: "script-loader.gd",
					destination: scriptLoaderGdPath,
				},
			],
			write: [
				{
					content: `[autoload]
ModLoaderStore="${token.MaybeWineRoot}${scriptLoaderGdPath}"
`,
					destination: `${token.GameExecutableFolderPath}/override.cfg`,
				},
			],
		},
		paths: [
			{
				type: "Folder",
				path: modFolder,
			},
		],
	};
}
