import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "ynglet",
		gameName: "Ynglet",
		gameIds: {
			NormalizedExecutable: ["ynglet"],
			Steam: ["1015920"],
		},
	}),
);
