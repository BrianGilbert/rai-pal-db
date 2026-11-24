import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-the-stanley-parable-ultra-deluxe",
		gameName: "The Stanley Parable: Ultra Deluxe",
		gameIds: {
			NormalizedExecutable: ["thestanleyparableultradeluxe"],
			Steam: ["1703340"],
		},
		file: "everyone/the-stanley-parable-ultra-deluxe.json",
	}),
);
