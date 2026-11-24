import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "cuphead",
		gameName: "Cuphead",
		gameIds: {
			Gog: ["1963513391", "1828931756", "2048763853", "1999621840"],
			NormalizedExecutable: ["cuphead"],
			Steam: ["268910", "1117850", "704710", "2072990"],
		},
	}),
);
