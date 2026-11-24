import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "inside",
		gameName: "Inside",
		gameIds: {
			Epic: ["6fdb5feba66846cd8623a6d15ca68080"],
			Gog: ["1916896012"],
			NormalizedExecutable: ["inside"],
			Steam: ["304430"],
		},
	}),
);
