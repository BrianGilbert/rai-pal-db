import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-untitled-goose-game",
		gameName: "Untitled Goose Game",
		gameIds: {
			Epic: ["a53bee4f52cc46a583d8a40217b8ab27"],
			NormalizedExecutable: ["untitled"],
			Steam: ["837470"],
		},
		file: "everyone/untitled-goose-game.json",
	}),
);
