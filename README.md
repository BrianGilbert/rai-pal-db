# Rai Pal Mod Database

Simple database made up of json files, to be used by [Rai Pal](https://raicuparta.com/rai-pal) for fetching available mods.

## Structure

The database JSON files are stored in this repo, in the path `mod-db/[db-version]/[mod-loader-id].json`.

### Database Version

`[db-version]` just a number we increment, so we can serve multiple incompatible versions of the database simultaneously and avoid breaking old versions of Rai Pal.

Whenever a backwards-incompatible change needs to be made to the database, or whenever we want to add mods / mod loaders that rely on new changes to Rai Pal, we make a new copy of the database files in the next version folder.

We then need to update the `DATABASE_VERSION` constant in Rai Pal to match the latest database version number. This constant is in [rai-pal/backend/src/mod_loaders/mod_database.rs](https://github.com/Raicuparta/rai-pal/blob/main/backend/src/mod_loaders/mod_database.rs) at the time of writing this, but I'll probably move that file at some point and forget to update this readme.

### Mod Loader ID

`[mod-loader-id]`, the name of each JSON file, needs to match the mod loader ID used in Rai Pal. For example, BepInEx has the ID `bepinex`, which you can find in [rai-pal/backend/src/mod_loaders/bepinex.rs](https://github.com/Raicuparta/rai-pal/blob/main/backend/src/mod_loaders/bepinex.rs):

```rust
impl ModLoaderStatic for BepInEx {
	const ID: &'static str = "bepinex";
// ...
}
```

So when adding support for different mod loaders in Rai Pal, you'd just need to make sure to give it a unique ID in the implementation, and a matching json file in the database.

## Reading the Database

This repo is automatically deployed to GitHub pages, so the best way to access the data and avoid agressive caching is via this URL:

`https://raicuparta.github.io/rai-pal-db/mod-db/[db-version]/[mod-loader-id].json`

Example: https://raicuparta.github.io/rai-pal-db/mod-db/0/bepinex.json

There are JSON schemas available in [/mod-db/schema](/mod-db/schema) that you can use to understand the format of the database files. The main one is [db-schema.json](/mod-db/schema/db-schema.json), which then references all the others.

## Steam IDs

In [/steam-ids](/steam-ids) you'll find a bunch of text files. These contain flat lists of Steam IDs, one file per game engine. This is just an easier way for Rai Pal to fetch engine information about each Steam game.

## Legacy Files

A few of the files in this repo are only here to make sure old versions of Rai Pal don't stop working, but will likely be removed in the future.

- `./bepinex.json`
- `./runnable.json`
- `./uevr.json`
- `./steam-ds/uevr-scores.json`

You can safely ignore these.

## Updating the Database

Requires [Node.js](https://nodejs.org/) 26 or newer. Scripts run TypeScript
directly — no build step.

The update code lives in `src/` (`src/game-db`, `src/mod-db`), and writes the
generated database files to `public/`.

Mods live in `src/mod-db/mods/` as a flat list of files, one mod per file. Every mod file must `export default defineMod({ ... })`, with the mod `id` matching the file name. Shared code lives in `src/mod-db/helpers/`, and `discover-mods.ts` loads and validates every file in the folder.

```sh
npm install
```

### Environment variables

Copy `.env.example` to `.env` and fill in what you need. The update tasks load
it automatically via Node's `--env-file-if-exists`.

- `GITHUB_TOKEN` — used by the mod DB to avoid GitHub API rate limits.
- `PCGAMINGWIKI_USERNAME` / `PCGAMINGWIKI_PASSWORD` — PCGamingWiki credentials
  used by the game DB. Anonymous Cargo queries are rejected, so you need a bot
  account with the `runcargoqueries` permission. Create a bot password at
  https://www.pcgamingwiki.com/wiki/Special:BotPasswords and set the username to
  the bot login (e.g. `Account@Bot`) plus the generated password. Without these,
  the game DB update aborts instead of silently dropping all non-Steam data.
- `ALLOW_PARTIAL_GAME_DB=1` — write the game DB even when a source fails. Only
  use this if you understand the data loss it causes.

### Tasks

```sh
npm run update-game-db
npm run update-mod-db
npm run typecheck
```
