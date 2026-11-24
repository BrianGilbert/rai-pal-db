import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "neon-white",
		gameName: "Neon White",
		gameIds: {
			NormalizedExecutable: ["neonwhite"],
			Steam: ["1533420"],
		},
	}),
);
