import { defineMod } from "../mod.ts";

export default defineMod({
	tags: ["game-specific-vr"],
	id: "kerbal-space-program",
	gameIds: {
		Steam: ["220200", "283740"],
		Gog: ["1429864849", "2092205632", "1506581192"],
		Epic: ["84686da593b24598803ffbe7f9b1bb5e"],
	},
	title: "Kerbal VR",
	author: "JonnyOThan / FirstPersonKSP",
	website:
		"https://github.com/FirstPersonKSP/Kerbal-VR/wiki/Installation-Guide",
	description: "Kerbal Space Program VR mod with full motion controls.",
});
