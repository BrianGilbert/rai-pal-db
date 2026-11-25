import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		gameSlug: "else-heart-break",
		gameName: "Else Heart.Break()",
		gameIds: {
			Gog: ["1442485613"],
			NormalizedExecutable: ["elseheartbreak"],
			Steam: ["400110"],
		},
	}),
);
