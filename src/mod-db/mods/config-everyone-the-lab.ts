import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-the-lab",
		gameName: "The Lab",
		gameIds: {
			NormalizedExecutable: ["thelab"],
			Steam: ["450390"],
		},
		file: "everyone/the-lab.json",
	}),
);
