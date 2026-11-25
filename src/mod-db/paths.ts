import { token } from "./replacement-tokens.ts";

export const bepinexFolder = `${token.GameInstalledModsPath}/bepinex/BepInEx`;
export const bepinexConfigFolder = `${bepinexFolder}/config`;

export function bepinexConfigPath(fileName: string): string {
	return `${bepinexConfigFolder}/${fileName}`;
}

export function sharedModFolder(id: string): string {
	return `${token.SharedModsPath}/${id}`;
}

export function uevrConfigPath(): string {
	return `${token.RoamingAppData}/UnrealVRMod/${token.GameExecutableNameWithoutExtension}`;
}
