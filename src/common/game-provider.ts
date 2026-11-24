// These IDs need to match the ones in the games database and in Rai Pal.
export const providerIds = [
	"Amazon",
	"Ea",
	"Epic",
	"Gog",
	"Itch",
	"Steam",
	"Ubisoft",
	"Xbox",
] as const;

// Ways of identifying a game. Provider IDs identify a game within that provider,
// while the normalized kinds identify a game by data we can derive locally.
export const gameIdKinds = [
	...providerIds,
	"NormalizedTitle",
	"NormalizedExecutable",
] as const;

export type ProviderId = (typeof providerIds)[number];
export type GameIdKind = (typeof gameIdKinds)[number];
