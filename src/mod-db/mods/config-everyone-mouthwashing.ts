import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "mouthwashing",
		gameName: "Mouthwashing",
		gameIds: {
			NormalizedExecutable: ["mouthwashing"],
			Steam: ["2475490", "3276830", "4014000"],
			Xbox: ["9MVNCSJ14754"],
		},
	}),
);
