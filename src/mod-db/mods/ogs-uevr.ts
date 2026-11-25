import { getLatestFromGitHub } from "../helpers/github.ts";
import { defineMod } from "../mod.ts";
import { token } from "../replacement-tokens.ts";

const repo = "uevr-ogs-ts";
const pluginsFolder = `${token.SharedModsPath}/uevr/plugins`;
const dllPath = `${pluginsFolder}/ogs_telemetry.dll`;
const configPath = `${pluginsFolder}/ogs_telemetry.ini`;

const { uevr } = await getLatestFromGitHub(
	{ owner: "BrianGilbert", repo },
	{
		uevr: (assetName) =>
			assetName.startsWith("uevr_ogs_telemetry-") &&
			assetName.endsWith("-win64.zip"),
	},
);

export default defineMod({
	id: "ogs-uevr",
	tags: ["ogs"],
	title: "OGS Telemetry (UEVR)",
	author: "BrianGilbert",
	website: `https://github.com/BrianGilbert/${repo}`,
	description:
		"Publishes motion telemetry (pose and body dynamics) on the local network for motion rigs, from any Unreal game UEVR injects.",
	download: uevr,
	engine: "Unreal",
	architecture: "X64",
	gameOs: "Windows",
	requiredDependencies: [{ modId: "uevr" }],
	install: {
		installKind: "Shared",
		extract: [{ source: "ogs_telemetry.dll", destination: dllPath }],
	},
	paths: [
		{ path: pluginsFolder, type: "Folder" },
		{ path: configPath, type: "File" },
	],
});
