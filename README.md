# CodeKeep

Keep your coding skills sharp in the AI age.

Interactive tutorials, live code playground, XP & levels. Learn by doing.

**Live:** <https://codekeep.tamas-illes.com>

![License](https://img.shields.io/badge/license-MIT-blue)

## What it does

- **Lessons** — HTML, CSS, JavaScript (20 lessons, more coming)
- **Playground** — Write and run code in the browser
- **Challenges** — Embedded coding exercises in every lesson
- **Progress** — XP, levels, streaks, stats
- **Accounts** — Login, track your learning across sessions

## Run it

**Dev:**
```bash
git clone https://github.com/T0M13/codekeep.git
cd codekeep
npm install
npm run dev
```

**Docker:**
```bash
docker compose up -d
```

### Environment variables

| Variable | Default | What it does |
|---|---|---|
| `ADMIN_USERNAME` | `admin` | Admin account username |
| `ADMIN_EMAIL` | `admin@codekeep.dev` | Admin account email |
| `ADMIN_PASSWORD` | `changeme` | Admin account password |
| `ADMIN_DISPLAY_NAME` | `Admin` | Admin display name |
| `JWT_SECRET` | — | Secret for auth tokens |
| `DB_PATH` | `./data/codekeep.db` | SQLite database path |
| `PORT` | `3000` | Server port |

## Add content

Lessons are Markdown files in `src/content/<topic>/`.

1. Create a folder: `src/content/python/`
2. Add `_meta.json` with lesson order
3. Write lessons in Markdown (supports ```challenge blocks)
4. Register the topic in `src/lib/content.js`

## Tech

SvelteKit 2, Svelte 5, Tailwind CSS, SQLite, JWT auth, Docker.

## Roadmap

- More topics (Python, SQL, Git, TypeScript, React, etc.)
- Better code editor (CodeMirror/Monaco)
- Quizzes, daily challenges, achievements
- Search, bookmarks, reference pages

## License

MIT
