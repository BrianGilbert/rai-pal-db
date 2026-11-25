import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "disco-elysium",
		gameName: "Disco Elysium",
		gameIds: {
			Gog: [
				"1771589310",
				"1497779763",
				"1820315840",
				"1618612563",
				"1370620137",
				"1377256194",
			],
			NormalizedExecutable: ["disco"],
			Steam: ["632470", "1173140"],
			Xbox: ["9NTRS771L8HL"],
		},
	}),
);
