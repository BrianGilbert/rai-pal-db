import { defineMod } from "../mod.ts";

export default defineMod({
	tags: ["game-specific-vr"],
	id: "dishonored-vr",
	gameIds: {
		Steam: [
			"205100",
			"208570",
			"212894",
			"208575",
			"212893",
			"217980",
			"218786",
			"218785",
			"218784",
		],
		Gog: ["1701063787", "1521801184"],
		Xbox: ["9P1N07XDL1D4"],
	},
	title: "Dishonored VR",
	author: "VR-Stereo-Hub / BioVRDev and VOID",
	website: "https://github.com/VR-Stereo-Hub/Dishonored-VR",
	description: "Dishonored VR mod with full motion controls.",
});
