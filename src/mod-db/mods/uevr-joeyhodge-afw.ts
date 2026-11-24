import { getLatestFromGitHub } from "../helpers/github.ts";
import { uevrBase } from "../helpers/uevr.ts";
import { defineMod } from "../mod.ts";

const { joeyhodgeAfw } = await getLatestFromGitHub(
	{
		owner: "PureDark",
		repo: "UEVR",
		allowPreRelease: true,
		formatId: (tag) => tag.replace("UEVR_AFW_", ""),
	},
	{
		joeyhodgeAfw: (assetName) =>
			assetName.startsWith("UEVR-joeyhodge_AFW_") && assetName.endsWith(".zip"),
	},
);

export default defineMod({
	...uevrBase("uevr-joeyhodge-afw"),
	title: "UEVR JoeyHodge AFW",
	author: "praydog + PureDark + joeyhodge",
	description: "UEVR with joehhodge's enhancements + Alternate Frame Warping.",
	website: "https://github.com/PureDark/UEVR",
	download: joeyhodgeAfw,
});
