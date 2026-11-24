import type { Game, GameSubscription } from "./game.ts";
import { normalizeReleaseDate } from "./helpers.ts";

const APIIds = {
	pc: "fdd9e2a7-0fee-49f6-ad69-4354098401ff",
	eaPlay: "b8900d09-a491-44cc-916e-32b5acae621b",
} as const;

type PassType = keyof typeof APIIds;

type IdsResponseItem = {
	id: string;
};

type IdsResponse = [
	{
		sigId: (typeof APIIds)["pc"];
	},
	...IdsResponseItem[],
];

type PropertiesResponse = {
	Products: {
		ProductId: string;
		LocalizedProperties: {
			ProductTitle: string;
			Images: {
				ImagePurpose: "string";
				Uri: string;
				FileSizeInBytes: string;
			};
		}[];
		MarketProperties: {
			OriginalReleaseDate: string;
		}[];
	}[];
};

const market = "US";

async function fetchGameIDs(passType: PassType): Promise<string[]> {
	console.log(`Fetching ${passType} Game Pass game IDs...`);
	return await fetch(
		`https://catalog.gamepass.com/sigls/v2?id=${APIIds[passType]}&language=en-us&market=${market}`,
	)
		.then((response) => response.json() as Promise<IdsResponse>)
		.then((data) =>
			data
				.filter(
					(entry) =>
						entry != null && typeof entry === "object" && "id" in entry,
				)
				.map((entry) => entry.id),
		);
}

async function fetchGameProperties(gameIds: string[], passType: PassType) {
	console.log(
		`Fetching game properties for ${gameIds.length} ${passType} games...`,
	);
	return await fetch(
		`https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${gameIds}&market=${market}&languages=en-us`,
	)
		.then((response) => response.json() as Promise<PropertiesResponse>)
		.then((data) => {
			return data.Products;
		});
}

async function fetchGames(
	passType: PassType,
	subscription: GameSubscription,
): Promise<Game[]> {
	const ids = await fetchGameIDs(passType);
	const properties = await fetchGameProperties(ids, passType);
	return properties.map((product): Game => ({
		title: product.LocalizedProperties[0].ProductTitle,
		ids: {
			Xbox: new Set([product.ProductId]),
		},
		subscriptions: [subscription],
		releaseDate: normalizeReleaseDate(
			product.MarketProperties[0]?.OriginalReleaseDate,
		),
	}));
}

export async function fetchPCGamePassGames(): Promise<Game[]> {
	return await fetchGames("pc", "XboxGamePass");
}

export async function fetchEAGamePassGames(): Promise<Game[]> {
	return await fetchGames("eaPlay", "EaPlay");
}
