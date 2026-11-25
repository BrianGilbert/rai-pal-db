import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { isDefinedMod } from "./mod.ts";
import type { ModBase } from "./mod.ts";

const modsFolder = join(import.meta.dirname, "mods");

const requiredStringFields = [
	"id",
	"title",
	"author",
	"website",
	"description",
] as const;

function validateMod(mod: ModBase, file: string) {
	for (const field of requiredStringFields) {
		const value = mod[field];
		if (typeof value !== "string" || value.length === 0) {
			throw new Error(
				`${file}: mod field "${field}" must be a non-empty string`,
			);
		}
	}
}

export async function discoverMods(): Promise<ModBase[]> {
	const entries = await readdir(modsFolder, { withFileTypes: true });

	const subfolders = entries.filter((entry) => entry.isDirectory());
	if (subfolders.length > 0) {
		throw new Error(
			`Mod files must be flat in ${modsFolder}, found subfolders: ${subfolders
				.map((entry) => entry.name)
				.join(", ")}`,
		);
	}

	const unexpectedFiles = entries.filter(
		(entry) => !entry.isFile() || !entry.name.endsWith(".ts"),
	);
	if (unexpectedFiles.length > 0) {
		throw new Error(
			`Only .ts mod files are allowed in ${modsFolder}, found: ${unexpectedFiles
				.map((entry) => entry.name)
				.join(", ")}`,
		);
	}

	const fileNames = entries.map((entry) => entry.name).sort();
	const mods: ModBase[] = [];
	const modIds = new Map<string, string>();

	for (const fileName of fileNames) {
		const modUrl = pathToFileURL(join(modsFolder, fileName));

		let module: Record<string, unknown>;
		try {
			module = await import(modUrl.href);
		} catch (error) {
			throw new Error(`Failed to load mod file ${fileName}: ${error}`);
		}

		const exportNames = Object.keys(module);
		if (exportNames.length !== 1 || exportNames[0] !== "default") {
			throw new Error(
				`${fileName}: mod files must export only a default mod, found exports: ${exportNames.join(", ")}`,
			);
		}

		const mod = module.default;
		if (!isDefinedMod(mod)) {
			throw new Error(
				`${fileName}: default export must be wrapped in defineMod()`,
			);
		}

		validateMod(mod, fileName);

		const existingFile = modIds.get(mod.id);
		if (existingFile) {
			throw new Error(
				`${fileName}: mod id "${mod.id}" is already used by ${existingFile}`,
			);
		}

		modIds.set(mod.id, fileName);
		mods.push(mod);
	}

	return mods;
}
