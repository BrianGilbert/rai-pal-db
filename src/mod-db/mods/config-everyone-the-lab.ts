import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "the-lab",
		gameName: "The Lab",
		gameIds: {
			NormalizedExecutable: ["thelab"],
			Steam: ["450390"],
		},
	}),
);
