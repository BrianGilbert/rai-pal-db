import { defineMod } from "../mod.ts";

export default defineMod({
	tags: ["game-specific-vr"],
	id: "hogwarts-legacy-vr",
	gameIds: {
		Steam: [
			"990080",
			"1377040",
			"1386970",
			"1880830",
			"1880831",
			"1880832",
			"1880833",
			"1880837",
		],
		Epic: ["864c7bc2c2394f7dbd1b534aa068ff56"],
	},
	title: "Hogwarts Legacy VR",
	author: "Luke Ross",
	website: "https://www.patreon.com/realvr",
	description: "Hogwarts Legacy VR mod.",
});
