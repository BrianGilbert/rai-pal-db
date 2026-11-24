import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-wizard-of-legend",
		gameName: "Wizard of Legend",
		gameIds: {
			Epic: ["24cb36289be34527b528cda87cdc925c"],
			Gog: ["2061814323", "1855397386"],
			NormalizedExecutable: ["wizardoflegend"],
			Steam: ["445980", "813840"],
		},
		file: "everyone/wizard-of-legend.json",
	}),
);
