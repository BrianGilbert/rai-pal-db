import { defineMod } from "../mod.ts";

export default defineMod({
	tags: ["game-specific-vr"],
	id: "dredge-vr",
	gameIds: {
		Steam: ["1562430", "2104240", "2198600", "2198610", "2561440", "2561450"],
		Gog: [
			"1744110647",
			"1487969767",
			"1322967649",
			"1707774748",
			"1154366605",
			"1436182852",
			"1302420295",
		],
		Epic: ["fb396afeff004f4c9fdf628ee004ac4b"],
	},
	title: "Dredge VR",
	author: "xen-42",
	website: "https://github.com/xen-42/DredgeVR",
	description: "Dredge VR mod with full motion controls.",
});
