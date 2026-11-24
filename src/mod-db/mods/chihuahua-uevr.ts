import { getLatestFromGitHub } from "../helpers/github.ts";
import { sharedModFolder, sharedModInstall } from "../helpers/uevr.ts";
import { defineMod } from "../mod.ts";
import { token } from "../replacement-tokens.ts";

const id = "chihuahua-uevr";
const folder = sharedModFolder(id);

const { chihuahua } = await getLatestFromGitHub(
	{ owner: "keton", repo: "chihuahua" },
	{ chihuahua: (assetName) => assetName === "chihuahua.zip" },
);

export default defineMod({
	id,
	title: "Chihuahua",
	tags: ["uevr"],
	author: "Keton",
	engine: "Unreal",
	gameOs: "Windows",
	description: "Simple injector/game launcher for UEVR",
	website: "https://github.com/keton/chihuahua",
	download: chihuahua,
	install: sharedModInstall(id),
	paths: [
		{
			id: "mod",
			title: "Mod",
			type: "Folder",
			path: folder,
		},
	],
	runForGame: {
		path: `${folder}/chihuahua.exe`,
		args: [
			token.GameExecutablePath,
			"--delay",
			"20",
			"--launch-cmd",
			token.GameStartCommand,
			"--launch-args",
			token.GameStartCommandArgs,
		],
		os: "Windows",
	},
	runStandalone: {
		path: `${folder}/chihuahua.exe`,
		os: "Windows",
	},
});
