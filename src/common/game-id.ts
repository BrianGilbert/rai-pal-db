// These IDs need to match the ones in the games database and in Rai Pal.
// Stores that games can have external IDs for, plus the derived kinds that Rai Pal
// computes locally.
export const storeIds = [
	"Amazon",
	"Ea",
	"Epic",
	"Gog",
	"Itch",
	"Steam",
	"Ubisoft",
	"Xbox",
] as const;

export const gameIdKinds = [
	...storeIds,
	"NormalizedTitle",
	"NormalizedExecutable",
] as const;

export type StoreId = (typeof storeIds)[number];
export type GameIdKind = (typeof gameIdKinds)[number];
