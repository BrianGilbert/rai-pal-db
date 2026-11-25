import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "kentucky-route-zero",
		gameName: "Kentucky Route Zero",
		gameIds: {
			Gog: ["1207660653"],
			NormalizedExecutable: ["kentuckyroutezero"],
			Steam: ["231200"],
		},
	}),
);
