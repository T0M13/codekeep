---
title: Making Commits
---

# Making Commits

A **commit** is a snapshot of your project at a specific moment. Think of it as a save point in a video game — you can always come back to it.

Good commits are the foundation of a useful Git history. Let's learn how to make them well.

## The Commit Flow

Every commit follows the same three steps:

```bash
# 1. Make changes to your files (edit, create, delete)
# 2. Stage the changes you want to save
git add .
# 3. Commit with a message
git commit -m "Describe what you changed"
```

That's it. Edit, add, commit. You'll do this hundreds of times.

## Checking What Changed — `git status`

Before committing, always check what Git sees:

```bash
git status
```

This shows you:
- **Staged changes** — Ready to be committed (green)
- **Unstaged changes** — Modified but not staged yet (red)
- **Untracked files** — New files Git doesn't know about (red)

```
On branch main
Changes to be committed:
        modified:   index.html

Changes not staged for commit:
        modified:   style.css

Untracked files:
        app.js
```

## Seeing the Actual Differences — `git diff`

`git status` tells you WHICH files changed. `git diff` tells you WHAT changed inside them:

```bash
git diff
```

```diff
- <h1>Hello</h1>
+ <h1>Hello, World!</h1>
```

Lines starting with `-` were removed. Lines starting with `+` were added. This is incredibly useful for reviewing your work before committing.

To see changes that are already staged:

```bash
git diff --staged
```

## Staging Selectively

You don't have to stage everything. You can pick specific files:

```bash
# Stage just one file
git add index.html

# Stage multiple specific files
git add index.html style.css

# Stage all files in a folder
git add src/

# Stage everything
git add .
```

Why would you stage selectively? Because **one commit should contain one logical change**. If you fixed a bug AND added a new feature, those should be two separate commits.

## Writing Good Commit Messages

Your commit message explains what you did and why. Future you (and your teammates) will read these.

### Good Messages

```bash
git commit -m "Add navigation bar to homepage"
git commit -m "Fix broken login redirect"
git commit -m "Update user profile validation"
git commit -m "Remove unused CSS classes"
```

### Bad Messages

```bash
git commit -m "stuff"
git commit -m "fix"
git commit -m "asdf"
git commit -m "Updated some things"
git commit -m "WIP"
```

### Rules of Thumb

| Do | Don't |
|---|---|
| Start with a verb (Add, Fix, Update, Remove) | Use vague words (stuff, things, misc) |
| Keep it under 50 characters | Write a novel |
| Describe WHAT changed | Describe HOW you feel about it |
| Use present tense ("Add feature") | Use past tense ("Added feature") |

> Think of commit messages as filling in the blank: "This commit will ___." So: "This commit will **Add navigation bar**."

## Multi-Line Commit Messages

For bigger changes, you can write a longer description:

```bash
git commit -m "Add user authentication" -m "Implemented login and registration forms. Added password hashing with bcrypt. Sessions stored in database."
```

The first `-m` is the subject line (short summary). The second `-m` is the body (more detail).

Or just run `git commit` without `-m` to open your text editor for a full message.

## Viewing Your Commit History

```bash
# Full details
git log

# Compact one-liner per commit
git log --oneline

# Show the last 5 commits
git log --oneline -5

# Show what changed in each commit
git log --stat

# Show a visual branch graph
git log --oneline --graph
```

Example output of `git log --oneline`:

```
f3d2a1b Add contact page
c4e5f6a Fix navigation links
a1b2c3d Add index.html and style.css
```

Each commit has a unique **hash** (like `f3d2a1b`) — a short ID you can use to reference that specific snapshot.

## The Staging Area Explained

The staging area is like a **shopping cart**. You browse the store (make changes), put items in your cart (stage with `git add`), then checkout (commit).

Why not just commit everything automatically? Because sometimes you change 5 files but only want to commit 3 of them right now. The staging area gives you control over exactly what goes into each commit.

```
Edit files → git add (pick what to include) → git commit (save it)
```

## Amending the Last Commit

Made a typo in your commit message? Forgot to include a file? Amend it:

```bash
# Fix the message
git commit --amend -m "Better commit message"

# Add a forgotten file to the last commit
git add forgotten-file.txt
git commit --amend --no-edit
```

> **Only amend commits that haven't been pushed yet.** Once you push to GitHub, amending rewrites history and can cause problems for others.

## What NOT to Commit

Some files should never be in Git:

- **Passwords, API keys, secrets** — Use environment variables instead
- **Node modules** (`node_modules/`) — They can be reinstalled
- **Build output** (`dist/`, `build/`) — Can be regenerated
- **OS files** (`.DS_Store`, `Thumbs.db`) — System junk
- **Editor config** (`.vscode/`, `.idea/`) — Personal preference

We'll learn how to ignore these files with `.gitignore` in a later lesson.

## Summary

| Action | Command |
|---|---|
| Check what changed | `git status` |
| See line-by-line changes | `git diff` |
| Stage files | `git add .` |
| Commit | `git commit -m "message"` |
| View history | `git log --oneline` |
| Fix last commit | `git commit --amend` |

Commit early, commit often. Small, focused commits with clear messages make your project's history actually useful.
