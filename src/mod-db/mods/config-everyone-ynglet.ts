import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-ynglet",
		gameName: "Ynglet",
		gameIds: {
			NormalizedExecutable: ["ynglet"],
			Steam: ["1015920"],
		},
		file: "everyone/ynglet.json",
	}),
);
