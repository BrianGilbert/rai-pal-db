import { defineMod } from "../mod.ts";
import { uuvrConfig } from "../helpers/uuvr.ts";

export default defineMod(
	await uuvrConfig({
		gameSlug: "peak",
		gameName: "Peak",
		gameIds: {
			NormalizedExecutable: ["peak"],
			Steam: ["3527290"],
		},
	}),
);
