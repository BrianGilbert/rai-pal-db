import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-ksp",
		gameName: "Kerbal Space Program",
		gameIds: {
			Epic: ["84686da593b24598803ffbe7f9b1bb5e"],
			Gog: ["1429864849", "2092205632", "1506581192"],
			NormalizedExecutable: ["ksp_x64"],
			Steam: ["220200", "283740"],
		},
		file: "everyone/ksp.json",
	}),
);
