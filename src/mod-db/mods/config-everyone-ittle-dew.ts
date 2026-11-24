import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-ittle-dew",
		gameName: "Ittle Dew",
		gameIds: {
			Gog: ["1207659258"],
			NormalizedExecutable: ["dew"],
			Steam: ["241320"],
		},
		file: "everyone/ittle-dew.json",
	}),
);
