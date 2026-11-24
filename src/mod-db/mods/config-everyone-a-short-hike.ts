import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-a-short-hike",
		gameName: "A Short Hike",
		gameIds: {
			Epic: ["018230f620e34503926e5c76525a8fd1"],
			Gog: ["2044653500"],
			NormalizedExecutable: ["ashorthike"],
			Steam: ["1055540"],
		},
		file: "everyone/a-short-hike.json",
	}),
);
