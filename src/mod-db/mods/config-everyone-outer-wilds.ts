import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-outer-wilds",
		gameName: "Outer Wilds",
		gameIds: {
			Epic: ["c1c2d06bb0b24b7cb820e8e03ae5c3d2"],
			NormalizedExecutable: ["outerwilds"],
			Steam: ["753640", "1622100"],
		},
		file: "everyone/outer-wilds.json",
	}),
);
