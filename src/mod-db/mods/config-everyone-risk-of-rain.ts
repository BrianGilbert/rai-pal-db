import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-risk-of-rain",
		gameName: "Risk of Rain",
		gameIds: {
			Gog: ["1207660563"],
			NormalizedExecutable: ["riskofrain"],
			Steam: ["248820"],
		},
		file: "everyone/risk-of-rain.json",
	}),
);
