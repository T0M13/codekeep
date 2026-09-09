# CodeKeep

**Keep your coding skills sharp in the AI age.**

A modern, gamified coding reference and learning platform. Like W3Schools meets Duolingo -- interactive tutorials, live code playgrounds, and progress tracking.

![License](https://img.shields.io/badge/license-MIT-blue)

## Features

### What's Built

- [x] **Interactive Tutorials** -- Markdown-based lessons with embedded code challenges
- [x] **Live Code Playground** -- Write and run HTML, CSS, and JavaScript in the browser
- [x] **Gamification** -- XP system, levels (Newcomer to Legend), daily streaks
- [x] **User Accounts** -- Register, login, track progress across sessions
- [x] **Profile & Stats** -- See your level, XP, completed lessons, challenge count, streaks
- [x] **Topic System** -- Organized by language/topic (HTML, CSS, JavaScript, and more)
- [x] **Responsive Design** -- Works on desktop, tablet, and mobile
- [x] **Dark Theme** -- Easy on the eyes, modern UI
- [x] **Docker Ready** -- One-command deployment
- [x] **Content System** -- Add lessons as Markdown files with frontmatter

### Content Available

| Topic | Lessons | Status |
|-------|---------|--------|
| HTML | 6 lessons (Intro, Elements, Headings, Links, Lists, Forms) | Done |
| CSS | 6 lessons (Intro, Selectors, Box Model, Colors, Flexbox, Grid) | Done |
| JavaScript | 8 lessons (Intro, Variables, Operators, Conditionals, Loops, Functions, Arrays, Objects) | Done |
| Python | -- | Planned |
| SQL | -- | Planned |
| Git | -- | Planned |

### What's Missing / Roadmap

- [ ] **More Topics** -- Python, SQL, Git, TypeScript, React, Node.js, Docker, Linux/Bash, APIs
- [ ] **Code Editor Upgrade** -- Replace textarea with CodeMirror/Monaco for syntax highlighting, autocomplete, line numbers
- [ ] **Quiz Mode** -- Multiple choice, fill-in-the-blank, drag-and-drop exercises
- [ ] **Daily Challenges** -- A new coding challenge every day
- [ ] **Achievements/Badges** -- Unlock badges for milestones (first lesson, 10-day streak, topic mastery)
- [ ] **Leaderboard** -- Compare progress with other users
- [ ] **Spaced Repetition** -- Review system that resurfaces concepts you're forgetting
- [ ] **Search** -- Full-text search across all lessons
- [ ] **Bookmarks** -- Save lessons for later
- [ ] **Notes** -- Personal notes on each lesson
- [ ] **Code Snippets Library** -- Save and organize useful code snippets
- [ ] **Reference Pages** -- Quick-reference cheat sheets for each topic (like W3Schools reference tables)
- [ ] **Dark/Light Theme Toggle** -- Currently dark-only
- [ ] **Admin Panel** -- Manage users, view analytics
- [ ] **OAuth Login** -- GitHub, Google login options
- [ ] **Mobile App** -- PWA support for offline learning
- [ ] **API Documentation Topic** -- REST, GraphQL, WebSocket tutorials
- [ ] **Projects Section** -- Guided projects that combine multiple topics
- [ ] **Community** -- Comments, discussions, user-submitted solutions
- [ ] **Certification** -- Completion certificates for topic tracks
- [ ] **AI Hints** -- Optional AI-powered hints for challenges (not answers, just nudges)
- [ ] **Multi-language UI** -- i18n support
- [ ] **Accessibility** -- Full WCAG 2.1 compliance
- [ ] **Code Execution Backend** -- Server-side code running for Python, SQL, etc.

## Tech Stack

- **Frontend:** SvelteKit 2 + Svelte 5
- **Styling:** Tailwind CSS 3
- **Database:** SQLite (via better-sqlite3)
- **Auth:** JWT + bcrypt
- **Content:** Markdown with frontmatter + custom challenge blocks
- **Deployment:** Docker + Node.js

## Quick Start

### Development

```bash
git clone https://github.com/T0M13/codekeep.git
cd codekeep
npm install
npm run dev
```

Open `http://localhost:5173`

### Docker

```bash
docker compose up -d
```

Open `http://localhost:3400`

## Adding Content

Lessons are Markdown files in `src/content/<topic>/`. Each topic has a `_meta.json` that defines the lesson order.

### 1. Create a topic folder

```
src/content/python/
  _meta.json
  introduction.md
  variables.md
```

### 2. Define lesson order in `_meta.json`

```json
{
  "lessons": [
    { "slug": "introduction", "title": "What is Python?", "description": "Getting started", "xp": 25 },
    { "slug": "variables", "title": "Variables", "description": "Storing data", "xp": 25 }
  ]
}
```

### 3. Write lessons in Markdown

Use standard Markdown plus the special `challenge` code block:

````markdown
# Lesson Title

Regular markdown content here...

```challenge
@title Challenge Name
@description What the user needs to do
@language javascript
@starter // Starter code here
@expected expected output
```
````

### 4. Register the topic

Add the topic metadata in `src/lib/content.js`.

## Project Structure

```
codekeep/
  src/
    content/          # Lesson content (Markdown)
      html/
      css/
      javascript/
    lib/
      server/
        db.js         # SQLite database
        auth.js       # Authentication
      components/
        Nav.svelte
        CodePlayground.svelte
      content.js      # Topic metadata
      xp.js           # Level/XP calculations
    routes/
      +page.svelte    # Landing page
      learn/          # Topic browser + lessons
      playground/     # Free code playground
      profile/        # User stats
      login/
      register/
      api/            # Auth + progress endpoints
  data/               # SQLite database (gitignored)
  Dockerfile
  docker-compose.yml
```

## License

MIT
