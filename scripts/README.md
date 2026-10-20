# Rai Pal DB Scripts

Requires [Node.js](https://nodejs.org/) 26 or newer. Scripts run TypeScript
directly — no build step.

```sh
npm install
```

## Environment variables

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

## Tasks

```sh
npm run update-game-db
npm run update-mod-db
npm run typecheck
```
