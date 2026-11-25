import type { GameIdKind } from "../common/game-provider.ts";

export const engineBrands = ["GameMaker", "Unity", "Godot", "Unreal"] as const;

export type EngineBrand = (typeof engineBrands)[number];

export type Engine = { brand: EngineBrand; version?: string };
export type IdMap = Partial<Record<GameIdKind, Set<string>>>;

export type Game = {
	title?: string;
	ids: IdMap;
	engines?: Engine[];
	releaseDate?: string;
};
