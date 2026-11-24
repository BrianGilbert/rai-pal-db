import { defineMod } from "../mod.ts";
import { uuvrConfig } from "../helpers/uuvr.ts";

export default defineMod(
	await uuvrConfig({
		id: "config-uuvr-zerograve",
		gameName: "Zerograve",
		gameIds: {
			NormalizedExecutable: ["zerograve"],
			Steam: ["1218580"],
		},
		file: "uuvr/zerograve.cfg",
	}),
);
