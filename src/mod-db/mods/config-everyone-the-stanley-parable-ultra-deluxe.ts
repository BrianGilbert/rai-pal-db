import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "the-stanley-parable-ultra-deluxe",
		gameName: "The Stanley Parable: Ultra Deluxe",
		gameIds: {
			NormalizedExecutable: ["thestanleyparableultradeluxe"],
			Steam: ["1703340"],
		},
	}),
);
