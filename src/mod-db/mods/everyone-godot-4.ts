import { everyoneBase } from "../helpers/everyone.ts";
import { getLatestFromGitHub } from "../helpers/github.ts";
import { defineMod } from "../mod.ts";
import { token } from "../replacement-tokens.ts";
import { manifestPath } from "../paths.ts";

const id = "everyone-godot-4";
const modFolder = `${token.GameInstalledModsPath}/godot-loader-4/mods/everyone`;

const { godot4 } = await getLatestFromGitHub(
	{ owner: "raicuparta", repo: "everyone-client" },
	{ godot4: (assetName) => assetName.includes("godot-4") },
);

export default defineMod({
	id,
	...everyoneBase,
	engine: "Godot",
	engineVersionRange: {
		minimum: { major: 4 },
	},
	download: godot4,
	requiredDependencies: [{ tag: "godot-loader" }],
	install: {
		manifestPath: manifestPath(id),
		extract: [{ source: ".", destination: modFolder }],
	},
	paths: [{ path: modFolder, type: "Folder" }],
});
