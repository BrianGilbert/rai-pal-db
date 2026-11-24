import { getLatestFromGitHub } from "../helpers/github.ts";
import { uevrBase } from "../helpers/uevr.ts";
import { defineMod } from "../mod.ts";

const { nightlyAfw } = await getLatestFromGitHub(
	{
		owner: "PureDark",
		repo: "UEVR",
		allowPreRelease: true,
		formatId: (tag) => tag.replace("UEVR_AFW_", ""),
	},
	{
		nightlyAfw: (assetName) =>
			assetName.startsWith("UEVR-nightly_AFW_") && assetName.endsWith(".zip"),
	},
);

export default defineMod({
	...uevrBase("uevr-nightly-afw"),
	title: "UEVR Nightly AFW",
	author: "praydog + PureDark",
	description: "UEVR nightly + Alternate Frame Warping.",
	website: "https://github.com/PureDark/UEVR",
	download: nightlyAfw,
});
