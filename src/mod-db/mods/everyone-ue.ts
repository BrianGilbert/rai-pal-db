import { everyoneBase } from "../helpers/everyone.ts";
import { getLatestFromGitHub } from "../helpers/github.ts";
import { defineMod } from "../mod.ts";
import { token } from "../replacement-tokens.ts";

const id = "everyone-ue";
const modFolder = `${token.GameInstalledModsPath}/ue4ss/Mods/${id}`;

const { unreal } = await getLatestFromGitHub(
	{ owner: "raicuparta", repo: "everyone-client" },
	{ unreal: (assetName) => assetName.includes("unreal") },
);

export default defineMod({
	id,
	...everyoneBase,
	engine: "Unreal",
	download: unreal,
	requiredDependencies: [{ modId: "ue4ss" }],
	install: {
		installKind: "PerGame",
		extract: [{ source: "dlls", destination: `${modFolder}/dlls` }],
		write: [{ content: "", destination: `${modFolder}/enabled.txt` }],
	},
	paths: [{ path: modFolder, type: "Folder" }],
});
