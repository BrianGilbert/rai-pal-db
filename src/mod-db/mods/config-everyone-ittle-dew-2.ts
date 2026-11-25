import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "ittle-dew-2",
		gameName: "Ittle Dew 2",
		gameIds: {
			NormalizedExecutable: ["id2"],
			Steam: ["395620"],
		},
	}),
);
