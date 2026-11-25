import { sharedModFolder } from "../paths.ts";
import { sharedModInstall } from "../helpers/uevr.ts";
import { defineMod } from "../mod.ts";

const id = "dotnet-desktop-runtime-win-x64";

export default defineMod({
	id,
	title: ".NET Desktop Runtime",
	hideFromGameModsList: true,
	engine: "Unreal",
	author: "bill gates himself",
	description: "Required for running UEVR via Wine",
	website: "https://dotnet.microsoft.com/en-us/download/dotnet/6.0",
	download: {
		id: "6.0.36",
		url: "https://github.com/Raicuparta/rai-pal-db/releases/download/dotnet-6/dotnet+desktop-runtime-6.0.36-win-x64.zip",
	},
	install: sharedModInstall(id),
	paths: [
		{
			type: "Folder",
			path: sharedModFolder(id),
		},
	],
	gameOs: "Windows",
	hostOs: "Linux",
});
