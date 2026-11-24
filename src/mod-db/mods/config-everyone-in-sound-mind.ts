import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "in-sound-mind",
		gameName: "In Sound Mind",
		gameIds: {
			Epic: ["929a84bff8a34d80b490f71550ec782f"],
			Gog: ["1989561048", "2095232159", "1463130328", "1503102848"],
			NormalizedExecutable: ["insoundmind"],
			Steam: ["1119980", "1309180", "1749910", "1756610", "1474320"],
		},
	}),
);
