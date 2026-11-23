import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { configModDefinitions } from "./config-mods.ts";
import type { ModBase } from "./mod.ts";
import { token } from "./replacement-tokens.ts";
import { tags, type TagId } from "./tags.ts";

const CONFIG_DATABASE_VERSION = 0;
const CONFIG_DATABASE_BASE_URL = `https://dev.rai-pal.pages.dev/config-db/${CONFIG_DATABASE_VERSION}`;

function slugify(value: string): string {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

function getConfigTag(gameMod: ModBase): TagId {
	for (const modTag of gameMod.tags ?? []) {
		const configTag = `${modTag}-config`;

		if (configTag in tags) {
			return configTag as TagId;
		}
	}

	throw new Error(
		`Mod \`${gameMod.id}\` has a config but no matching config tag.`,
	);
}

export async function getConfigMods(mods: ModBase[]): Promise<ModBase[]> {
	const configFolder = join("..", "config-db", String(CONFIG_DATABASE_VERSION));
	const modsById = new Map(mods.map((mod) => [mod.id, mod]));

	const entries = await Promise.all(
		configModDefinitions.map(async (definition) => {
			const gameMod = modsById.get(definition.gameModId);

			if (!gameMod) {
				throw new Error(
					`Config mod references unknown mod \`${definition.gameModId}\`.`,
				);
			}

			const configTarget = gameMod.paths?.find((path) => path.id === "config");

			if (!configTarget) {
				throw new Error(
					`Config mod references mod \`${definition.gameModId}\`, which has no \`config\` path.`,
				);
			}

			const content = await readFile(
				join(configFolder, definition.folder, "configs", definition.file),
			);
			const contentHash = createHash("sha256")
				.update(content)
				.digest("hex")
				.slice(0, 12);

			return {
				definition,
				gameMod,
				configTag: getConfigTag(gameMod),
				configTarget,
				contentHash,
			};
		}),
	);

	const tagCounts = new Map<string, number>();

	for (const entry of entries) {
		const key = `${entry.definition.folder}:${entry.configTag}`;
		tagCounts.set(key, (tagCounts.get(key) ?? 0) + 1);
	}

	const seenCounts = new Map<string, number>();

	return entries.map((entry) => {
		const { definition, gameMod, configTag, configTarget, contentHash } =
			entry;
		const { folder, file, version, gameIds, gameTitle } = definition;
		const tagBase = configTag.replace(/-config$/, "");
		const countKey = `${folder}:${configTag}`;
		const seen = (seenCounts.get(countKey) ?? 0) + 1;
		seenCounts.set(countKey, seen);
		const suffix = (tagCounts.get(countKey) ?? 0) > 1 ? `-${seen}` : "";
		const id = `config-${slugify(folder)}-${tagBase}${suffix}`;
		const configUrl = `${CONFIG_DATABASE_BASE_URL}/${encodeURIComponent(
			folder,
		)}/configs/${encodeURIComponent(file)}?v=${version}-${contentHash}`;
		const install =
			configTarget.type === "Folder"
				? {
						manifestPath: `${token.GameInstalledModsPath}/manifests/${id}.json`,
						extract: [
							{
								source: ".",
								destination: configTarget.path,
							},
						],
					}
				: {
						manifestPath: `${token.GameInstalledModsPath}/manifests/${id}.json`,
						copy: [{ destination: configTarget.path }],
					};

		return {
			id,
			gameIds,
			tags: [configTag],
			hideFromGameModsList: true,
			title: `${gameMod.title} Config for ${gameTitle}`,
			author: gameMod.author,
			website: gameMod.website,
			description: `Recommended ${gameMod.title} config for ${gameTitle}.`,
			download: {
				id: String(version),
				url: configUrl,
			},
			install,
			paths: [
				{
					id: "config",
					title: configTarget.title,
					type: configTarget.type,
					path: configTarget.path,
				},
			],
		} satisfies ModBase;
	});
}
