import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-grow-home",
		gameName: "Grow Home",
		gameIds: {
			Gog: ["1533865045"],
			NormalizedExecutable: ["growhome"],
			Steam: ["323320"],
		},
		file: "everyone/grow-home.json",
	}),
);
