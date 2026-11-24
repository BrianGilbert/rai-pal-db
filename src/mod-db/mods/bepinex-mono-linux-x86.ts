import { bepinexLoader } from "../helpers/bepinex-loaders.ts";
import { defineMod } from "../mod.ts";

export default defineMod(
	await bepinexLoader({
		backend: "Mono",
		os: "Linux",
		architecture: "X86",
	}),
);
