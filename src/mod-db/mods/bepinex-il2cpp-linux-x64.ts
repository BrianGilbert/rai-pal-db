import { bepinexLoader } from "../helpers/bepinex-loaders.ts";
import { defineMod } from "../mod.ts";

export default defineMod(
	await bepinexLoader({
		backend: "Il2Cpp",
		os: "Linux",
		architecture: "X64",
	}),
);
