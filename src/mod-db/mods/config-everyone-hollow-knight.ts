import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "hollow-knight",
		gameName: "Hollow Knight",
		gameIds: {
			Gog: ["1308320804", "1984697392", "2031197911"],
			NormalizedExecutable: ["hollowknight"],
			Steam: ["367520", "598190", "916000"],
		},
	}),
);
