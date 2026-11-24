import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "saturnalia",
		gameName: "Saturnalia",
		gameIds: {
			Epic: ["1dd2d2d4d38e4964a2ebcb3e3a9d10e5"],
			Gog: ["2041744633", "1824726869"],
			NormalizedExecutable: ["saturnalia"],
			Steam: ["916350"],
		},
	}),
);
