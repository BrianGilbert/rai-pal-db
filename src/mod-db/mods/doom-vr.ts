import { defineMod } from "../mod.ts";

export default defineMod({
	tags: ["game-specific-vr"],
	id: "doom-vr",
	gameIds: {
		Steam: ["2280"],
		Gog: ["2015545325"],
	},
	title: "Doom VR",
	author: "hh79",
	website: "https://github.com/hh79/gzdoomvr",
	description: "Doom VR mod with full motion controls.",
});
