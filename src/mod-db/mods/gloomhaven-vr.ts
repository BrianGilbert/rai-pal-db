import { defineMod } from "../mod.ts";

export default defineMod({
	tags: ["game-specific-vr"],
	id: "gloomhaven-vr",
	gameIds: {
		Steam: ["780290", "1809490"],
		Gog: ["2102122491", "1938055224"],
		Epic: ["92b43293e6e04a049fda8b797ea3eda9"],
	},
	title: "Gloomhaven VR",
	author: "McFredward",
	website: "https://github.com/McFredward/GloomhavenVR",
	description: "Gloomhaven VR mod with full motion controls.",
});
