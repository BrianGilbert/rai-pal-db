import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-gris",
		gameName: "Gris",
		gameIds: {
			Gog: ["2078272297", "1322407652"],
			NormalizedExecutable: ["gris"],
			Steam: ["683320"],
		},
		file: "everyone/gris.json",
	}),
);
