---
title: Daily Git Workflow
---

# Daily Git Workflow

You know the commands. But how do developers actually use Git day to day? Let's look at the real-world workflow that most teams follow.

## The Basic Daily Routine

Here's what a typical day looks like for a developer:

```bash
# 1. Start your day — get the latest code
git switch main
git pull

# 2. Create a branch for today's task
git switch -c feature/user-avatar

# 3. Work on your code, commit as you go
#    (edit files...)
git add .
git commit -m "Add avatar upload component"

#    (more edits...)
git add .
git commit -m "Add image cropping functionality"

# 4. Push your branch
git push -u origin feature/user-avatar

# 5. Open a Pull Request on GitHub

# 6. After review, merge the PR

# 7. Clean up
git switch main
git pull
git branch -d feature/user-avatar
```

## Feature Branch Workflow

This is the most popular workflow in the industry. The rules are simple:

1. **`main` is always deployable** — it should always work
2. **Never commit directly to `main`** — always use a branch
3. **One branch per feature/fix** — keep branches focused
4. **Merge through Pull Requests** — so others can review

```
main:     A --- B -------- M1 -------- M2
                 \        /    \       /
feature-1:        C --- D      |      |
                                \    /
feature-2:                       E-F
```

## What's a Pull Request?

A **Pull Request** (PR) is a GitHub feature that says: "Hey, I finished my work on this branch. Can someone review it and merge it into `main`?"

A PR shows:
- All the commits you made
- Every line you changed (the "diff")
- A place for teammates to leave comments
- Approve/reject buttons

It's like submitting a homework assignment for review before it gets added to the class textbook.

> On GitLab, these are called **Merge Requests** (MRs). Same concept, different name.

### Creating a Pull Request

1. Push your branch to GitHub
2. Go to the repo on GitHub
3. Click **"Compare & pull request"** (GitHub usually prompts you)
4. Write a description of what you did
5. Click **"Create pull request"**
6. Wait for review, then merge

## How Often Should You Commit?

**Commit often.** Every time you complete a small, logical piece of work:

```bash
# Good: frequent, focused commits
git commit -m "Add login form HTML structure"
git commit -m "Add form validation"
git commit -m "Style login form"
git commit -m "Add error message display"

# Bad: one giant commit
git commit -m "Add entire login system"
```

A good rule: if you can describe what you did in a short sentence, it's a good commit.

## Staying Up to Date

If you're working on a branch for a while, `main` might get new commits from other people. Keep your branch updated:

```bash
# On your feature branch
git switch feature/user-avatar

# Get latest main
git switch main
git pull

# Go back and merge main into your branch
git switch feature/user-avatar
git merge main
```

This ensures your branch has the latest changes and reduces merge conflicts later.

## The Commit Message Convention

Many teams use a standard format for commit messages:

```
type: short description

Optional longer description
```

Common types:

| Type | When to Use |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, no code change |
| `refactor` | Restructuring code without changing behavior |
| `test` | Adding or fixing tests |
| `chore` | Maintenance tasks (dependencies, config) |

Examples:

```bash
git commit -m "feat: add dark mode toggle"
git commit -m "fix: prevent crash on empty input"
git commit -m "docs: update installation guide"
git commit -m "refactor: simplify user validation logic"
```

> This is called **Conventional Commits**. It's not required by Git, but many teams and tools use it.

## Checking In with `git status`

Get in the habit of running `git status` frequently. Before staging, before committing, after merging — it tells you exactly where you stand:

```bash
git status
```

It's like checking your GPS. Do it often.

## A Real Team Example

Here's how a small team might work on a project:

```
Alice: git switch -c feature/search
Bob:   git switch -c fix/login-bug

Alice: (writes search code, commits)
Bob:   (fixes bug, commits)

Bob:   git push -u origin fix/login-bug
Bob:   (opens PR, Alice reviews, merges)

Alice: git push -u origin feature/search
Alice: (opens PR, Bob reviews, merges)

Both:  git switch main && git pull
```

Everyone works on their own branch, reviews each other's code, and merges into `main`.

## Quick Tips

- **Pull before you start working** — always have the latest code
- **Commit before switching branches** — Git might complain about uncommitted changes
- **Write descriptive branch names** — `feature/add-search-bar` not `my-branch`
- **Delete branches after merging** — keep things tidy
- **Don't be afraid to commit** — you can always undo (next lesson!)

## Common Aliases

Tired of typing long commands? Set up aliases:

```bash
git config --global alias.s "status"
git config --global alias.co "checkout"
git config --global alias.br "branch"
git config --global alias.cm "commit -m"
git config --global alias.lg "log --oneline --graph --all"
```

Now you can type:

```bash
git s          # instead of git status
git co main    # instead of git checkout main
git cm "msg"   # instead of git commit -m "msg"
git lg         # pretty log view
```

## Summary

The daily workflow boils down to:

1. **Pull** latest changes
2. **Branch** for your task
3. **Commit** frequently with clear messages
4. **Push** your branch
5. **Pull Request** for review
6. **Merge** and clean up

Follow this pattern and you'll be working like a professional developer.
