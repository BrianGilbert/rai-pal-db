import { everyoneBase } from "../helpers/everyone.ts";
import { getLatestFromGitHub } from "../helpers/github.ts";
import { defineMod } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { manifestPath } from "../paths.ts";

const id = "everyone-godot-3";
const modFolder = `${token.GameInstalledModsPath}/godot-loader-3/mods/everyone`;

const { godot3 } = await getLatestFromGitHub(
	{ owner: "raicuparta", repo: "everyone-client" },
	{ godot3: (assetName) => assetName.includes("godot-3") },
);

export default defineMod({
	id,
	...everyoneBase,
	engine: "Godot",
	engineVersionRange: {
		minimum: { major: 3 },
		maximum: { major: 3 },
	},
	download: godot3,
	requiredDependencies: [{ tag: "godot-loader" }],
	install: {
		manifestPath: manifestPath(id),
		extract: [{ source: ".", destination: modFolder }],
	},
	paths: [{ id: "mod", title: "Mod", type: "Folder", path: modFolder }],
});
