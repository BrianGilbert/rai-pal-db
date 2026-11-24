import { getLatestFromGitHub } from "../helpers/github.ts";
import { uevrBase } from "../helpers/uevr.ts";
import { defineMod } from "../mod.ts";

const { joeyhodge } = await getLatestFromGitHub(
	{ owner: "joeyhodge", repo: "UEVR" },
	{ joeyhodge: (assetName) => assetName.toLocaleLowerCase() === "uevr.zip" },
);

export default defineMod({
	...uevrBase("uevr-joeyhodge"),
	title: "UEVR JoeyHodge",
	author: "praydog + joeyhodge",
	description: "UEVR with joehhodge's enhancements.",
	website: "https://github.com/joeyhodge/UEVR",
	download: joeyhodge,
});
