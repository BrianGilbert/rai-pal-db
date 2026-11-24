import { defineMod } from "../mod.ts";

export default defineMod({
	tags: ["game-specific-vr"],
	id: "crysis-vr",
	gameIds: {
		Steam: ["17300"],
	},
	title: "Crysis VR",
	author: "fholger",
	website: "https://github.com/fholger/crysis_vrmod",
	description: "Crysis VR mod with full motion controls.",
});
