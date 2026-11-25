import { getLatestFromGitHub } from "../helpers/github.ts";
import { defineMod } from "../mod.ts";
import { token } from "../replacement-tokens.ts";

const repo = "ue4ss-ogs-ts";
const modFolder = `${token.GameInstalledModsPath}/ue4ss/Mods/ogs_telemetry`;
const configPath = `${modFolder}/ogs_telemetry.ini`;

const { ue4ss } = await getLatestFromGitHub(
	{ owner: "BrianGilbert", repo },
	{
		ue4ss: (assetName) =>
			assetName.startsWith("ue4ss_ogs_telemetry-") &&
			assetName.endsWith("-win64.zip"),
	},
);

export default defineMod({
	id: "ogs-ue4ss",
	tags: ["ogs"],
	title: "OGS Telemetry (UE4SS)",
	author: "BrianGilbert",
	website: `https://github.com/BrianGilbert/${repo}`,
	description:
		"Publishes motion telemetry (pose and body dynamics) on the local network for motion rigs, from any Unreal game UE4SS injects. Requires UE4SS experimental (the runtime Rai Pal installs).",
	download: ue4ss,
	engine: "Unreal",
	architecture: "X64",
	gameOs: "Windows",
	requiredDependencies: [{ modId: "ue4ss" }],
	install: {
		installKind: "PerGame",
		extract: [{ source: "experimental/ogs_telemetry", destination: modFolder }],
	},
	paths: [
		{ path: modFolder, type: "Folder" },
		{ path: configPath, type: "File" },
	],
});
