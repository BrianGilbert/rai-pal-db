import { getLatestFromGitHub } from "../helpers/github.ts";
import { uevrBase } from "../helpers/uevr.ts";
import { defineMod } from "../mod.ts";

const { nightly } = await getLatestFromGitHub(
	{
		owner: "praydog",
		repo: "UEVR-nightly",
		formatId: (tag) => tag.split("-")[1] || tag,
	},
	{ nightly: (assetName) => assetName === "uevr.zip" },
);

export default defineMod({
	...uevrBase("uevr-nightly"),
	title: "UEVR Nightly",
	description:
		"UEVR automatically built from the latest, potentially untested code changes.",
	download: nightly,
});
