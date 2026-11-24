import { defineMod } from "../mod.ts";
import { uuvrConfig } from "../helpers/uuvr.ts";

export default defineMod(
	await uuvrConfig({
		id: "config-uuvr-peak",
		gameName: "Peak",
		gameIds: {
			NormalizedExecutable: ["peak"],
			Steam: ["3527290"],
		},
		file: "uuvr/peak.cfg",
	}),
);
