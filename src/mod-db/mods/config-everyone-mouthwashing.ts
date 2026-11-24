import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-mouthwashing",
		gameName: "Mouthwashing",
		gameIds: {
			NormalizedExecutable: ["mouthwashing"],
			Steam: ["2475490", "3276830", "4014000"],
			Xbox: ["9MVNCSJ14754"],
		},
		file: "everyone/mouthwashing.json",
	}),
);
