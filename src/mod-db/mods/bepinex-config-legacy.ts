import { bepinexConfig } from "../helpers/bepinex-mods.ts";
import { defineMod } from "../mod.ts";

export default defineMod(
	bepinexConfig({
		id: "bepinex-config-legacy",
		title: "BepInEx Config (Legacy)",
		engineVersionRange: {
			maximum: {
				major: 5,
				minor: 4,
			},
		},
		content: `[Logging.Console]
Enabled = true
ForceBepInExTTYDriver = true
[Preloader.Entrypoint]
Assembly = UnityEngine.dll
Type = MonoBehaviour
Method = .cctor`,
	}),
);
