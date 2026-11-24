import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "lil-gator-game",
		gameName: "Lil Gator Game",
		gameIds: {
			NormalizedExecutable: ["lilgatorgame"],
			Steam: ["1586800"],
		},
	}),
);
