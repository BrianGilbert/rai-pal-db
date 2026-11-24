import { defineMod } from "../mod.ts";
import { everyoneConfig } from "../helpers/everyone.ts";

export default defineMod(
	await everyoneConfig({
		id: "config-everyone-yooka-laylee",
		gameName: "Yooka-Laylee",
		gameIds: {
			Gog: ["1445853962", "1354053863"],
			NormalizedExecutable: ["yookalaylee64"],
			Steam: ["360830", "426750"],
		},
		file: "everyone/yooka-laylee.json",
	}),
);
