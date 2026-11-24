import type { GameIdKind } from "../common/game-id.ts";

export const engineBrands = ["GameMaker", "Unity", "Godot", "Unreal"] as const;

export const gameSubscriptions = [
	"XboxGamePass",
	"EaPlay",
	"UbisoftClassics",
	"UbisoftPremium",
] as const;

export type EngineBrand = (typeof engineBrands)[number];
export type GameSubscription = (typeof gameSubscriptions)[number];

export type Engine = { brand: EngineBrand; version?: string };
export type IdMap = Partial<Record<GameIdKind, Set<string>>>;

export type Game = {
	title?: string;
	ids: IdMap;
	engines?: Engine[];
	subscriptions?: GameSubscription[];
	releaseDate?: string;
};
