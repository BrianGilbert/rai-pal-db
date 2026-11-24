# Rai Pal Mod Database

Database used by [Rai Pal](https://raicuparta.com/rai-pal) to fetch mods, games, and other fun things.

## Structure

The generated data is in `public/`, which is what gets published (no way).

The version folders let us serve incompatible database versions at the same time, so old Rai Pal versions keep working. When a change isn't backwards compatible, copy the data to the next version folder and update the version in Rai Pal. The versions used by the update tasks are in `src/common/versions.ts`.

## Updating the Database

Needs [Node.js](https://nodejs.org/) 26 or newer.

```sh
npm install
cp .env.example .env
```

Fill in `.env` with what you need.

- `GITHUB_TOKEN`: used by the mod DB to avoid GitHub API rate limits.
- `PCGAMINGWIKI_USERNAME` and `PCGAMINGWIKI_PASSWORD`: PCGamingWiki bot credentials used by the game DB. Account with the `runcargoqueries` permission. Create a bot password at https://www.pcgamingwiki.com/wiki/Special:BotPasswords and use the bot login (e.g. `Account@Bot`) as the username.
- `ALLOW_PARTIAL_GAME_DB=1`: write the game DB even when a source fails. Only use it if you're fine with the data loss.

Then you can do one of

```sh
npm run update-game-db
npm run update-mod-db
```

## Mods

Mods are in `src/mod-db/mods/`, one file per mod. Each file must `export default defineMod({...})`, and the mod `id` must match the file name. `discover-mods.ts` loads and validates every file in the folder. Shared code is in `src/mod-db/helpers/`. If you wanna add your own mod to this database, make a PR that adds it in this folder.
