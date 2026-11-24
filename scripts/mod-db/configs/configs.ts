import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ModDownload } from "../mod.ts";
import { token } from "../replacement-tokens.ts";

const CONFIG_DATABASE_VERSION = 1;

const publicFolder = join(import.meta.dirname, "..", "..", "..", "public");

/**
 * Builds the download info for a config file in the config database,
 * including a hash of its contents so clients know when it changed.
 *
 * @param path Path of the file within the config database, e.g. `everyone/ksp.json`.
 */
export async function configDownload(
	path: string,
	version = 0,
): Promise<ModDownload> {
	const configPath = `config-db/${CONFIG_DATABASE_VERSION}/${path}`;
	const content = await readFile(join(publicFolder, configPath));
	const contentHash = createHash("sha256")
		.update(content)
		.digest("hex")
		.slice(0, 12);

	return {
		id: String(version),
		url: `${token.DatabaseUrlBase}/${configPath}?v=${version}-${contentHash}`,
	};
}

/**
 * Path to a BepInEx config file for the current game.
 */
export function bepinexConfigPath(fileName: string): string {
	return `${token.GameInstalledModsPath}/bepinex/BepInEx/config/${fileName}`;
}

/**
 * Path to the UEVR config folder for the current game.
 */
export function uevrConfigPath(): string {
	return `${token.RoamingAppData}/UnrealVRMod/${token.GameExecutableNameWithoutExtension}`;
}
