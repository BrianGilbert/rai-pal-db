import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "140",
		gameName: "140",
		gameIds: {
			Gog: ["1096313866", "1087788668"],
			NormalizedExecutable: ["140"],
			Steam: ["242820"],
		},
	}),
);
