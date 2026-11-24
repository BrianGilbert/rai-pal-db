import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-lake-haven-chrysalis",
		gameName: "Lake Haven - Chrysalis",
		gameIds: {
			NormalizedExecutable: ["lakehavenchrysalis"],
			Steam: ["1696960"],
		},
		file: "everyone/lake-haven-chrysalis.json",
	}),
);
