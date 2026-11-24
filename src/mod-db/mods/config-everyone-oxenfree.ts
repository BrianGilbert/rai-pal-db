import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-oxenfree",
		gameName: "Oxenfree",
		gameIds: {
			Epic: ["a32b4fc85e2440bd9dae0dace76f5c86"],
			Gog: ["1457519353"],
			NormalizedExecutable: ["oxenfree"],
			Steam: ["388880", "433430"],
		},
		file: "everyone/oxenfree.json",
	}),
);
