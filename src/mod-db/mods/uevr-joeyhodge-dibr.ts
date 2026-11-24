import { getLatestFromGitHub } from "../helpers/github.ts";
import { uevrBase } from "../helpers/uevr.ts";
import { defineMod } from "../mod.ts";

const { joeyhodgeDibr } = await getLatestFromGitHub(
	{ owner: "joeyhodge", repo: "UEVR" },
	{
		joeyhodgeDibr: (assetName) =>
			assetName.toLocaleLowerCase().includes("dibr") &&
			assetName.toLocaleLowerCase().endsWith("zip"),
	},
);

export default defineMod({
	...uevrBase("uevr-joeyhodge-dibr"),
	title: "UEVR JoeyHodge DIBR/Mono",
	author: "praydog + joeyhodge",
	description:
		"UEVR with joehhodge's enhancements, with options for DIBR / Mono rendering.",
	website: "https://github.com/joeyhodge/UEVR",
	download: joeyhodgeDibr,
});
