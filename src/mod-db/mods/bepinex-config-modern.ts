import { bepinexConfig } from "../helpers/bepinex-mods.ts";
import { defineMod } from "../mod.ts";

export default defineMod(
	bepinexConfig({
		id: "bepinex-config-modern",
		title: "BepInEx Config (Modern)",
		engineVersionRange: {
			minimum: {
				major: 5,
				minor: 5,
			},
		},
		content: `[Logging.Console]
Enabled = true
ForceBepInExTTYDriver = true`,
	}),
);
