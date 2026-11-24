import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "grow-up",
		gameName: "Grow Up",
		gameIds: {
			Gog: ["2032258750"],
			NormalizedExecutable: ["growup"],
			Steam: ["426790"],
		},
	}),
);
