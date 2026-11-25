import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "here-comes-niko",
		gameName: "Here Comes Niko!",
		gameIds: {
			NormalizedExecutable: ["herecomesniko"],
			Steam: ["925950"],
		},
	}),
);
