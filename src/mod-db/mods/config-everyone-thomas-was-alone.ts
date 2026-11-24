import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-thomas-was-alone",
		gameName: "Thomas Was Alone",
		gameIds: {
			NormalizedExecutable: ["thomaswasalone"],
			Steam: ["220780"],
		},
		file: "everyone/thomas-was-alone.json",
	}),
);
