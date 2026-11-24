import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "thomas-was-alone",
		gameName: "Thomas Was Alone",
		gameIds: {
			NormalizedExecutable: ["thomaswasalone"],
			Steam: ["220780"],
		},
	}),
);
