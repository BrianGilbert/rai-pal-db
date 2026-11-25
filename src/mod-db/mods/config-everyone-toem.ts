import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "toem",
		gameName: "TOEM",
		gameIds: {
			Gog: ["1436499377"],
			NormalizedExecutable: ["toem"],
			Steam: ["1307580", "1655680"],
		},
	}),
);
