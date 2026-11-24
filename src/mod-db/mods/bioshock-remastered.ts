import { defineMod } from "../mod.ts";

export default defineMod({
	tags: ["game-specific-vr"],
	id: "bioshock-remastered",
	gameIds: {
		Steam: ["409710", "7670", "7710"],
		Gog: ["1269268081"],
	},
	title: "BioShock VR",
	author: "balouza / BioVRDev",
	website: "https://github.com/mohamad-balouza/bioshock-vr",
	description: "BioShock Remastered VR mod with full motion controls.",
});
