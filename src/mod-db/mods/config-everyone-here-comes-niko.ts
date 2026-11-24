import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-here-comes-niko",
		gameName: "Here Comes Niko!",
		gameIds: {
			NormalizedExecutable: ["herecomesniko"],
			Steam: ["925950"],
		},
		file: "everyone/here-comes-niko.json",
	}),
);
