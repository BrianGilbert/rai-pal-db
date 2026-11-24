import { getLatestFromGitHub } from "../helpers/github.ts";
import { uevrBase } from "../helpers/uevr.ts";
import { defineMod } from "../mod.ts";

const { uevr } = await getLatestFromGitHub(
	{ owner: "praydog", repo: "UEVR" },
	{ uevr: (assetName) => assetName === "UEVR.zip" },
);

export default defineMod({
	...uevrBase("uevr"),
	title: "UEVR",
	description: "Universal VR mod for Unreal Engine games.",
	download: uevr,
});
