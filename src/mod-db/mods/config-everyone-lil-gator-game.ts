import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-lil-gator-game",
		gameName: "Lil Gator Game",
		gameIds: {
			NormalizedExecutable: ["lilgatorgame"],
			Steam: ["1586800"],
		},
		file: "everyone/lil-gator-game.json",
	}),
);
