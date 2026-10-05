---
title: Branches
---

# Branches

Branches are one of Git's most powerful features. They let you work on different things **at the same time** without messing up your main code.

## What is a Branch?

Imagine you're writing a book. You have the main manuscript, and it's in good shape. Now you want to try rewriting Chapter 3 — but you don't want to risk ruining what you have.

So you **photocopy the entire manuscript**, work on Chapter 3 in the copy, and only replace the original if you like the result. That's a branch.

In Git terms:
- The **main branch** is your stable, working code
- A **new branch** is a copy where you can experiment freely
- When you're happy with the changes, you **merge** the branch back

The key insight: **branches are cheap and fast in Git**. They don't actually copy all your files — Git just tracks what's different. Creating a branch takes less than a second.

## Your Default Branch — `main`

When you create a repo with `git init`, you start on a branch called `main` (or `master` in older versions). This is your primary branch — the "official" version of your project.

```bash
git branch
```

```
* main
```

The `*` shows which branch you're currently on.

## Creating a Branch

```bash
git branch feature-navbar
```

This creates a new branch called `feature-navbar`. But you're still on `main` — creating a branch doesn't switch to it.

## Switching Branches

```bash
# Old way (still works)
git checkout feature-navbar

# New way (clearer intent)
git switch feature-navbar
```

```
Switched to branch 'feature-navbar'
```

Now any changes you make and commit will be on `feature-navbar`, not on `main`.

## Create and Switch in One Step

This is what most people do:

```bash
# Old way
git checkout -b feature-navbar

# New way
git switch -c feature-navbar
```

The `-b` or `-c` flag means "create this branch AND switch to it."

## Seeing All Branches

```bash
# Local branches
git branch

# All branches including remote ones
git branch -a
```

```
  main
* feature-navbar
  fix-login-bug
```

## Working on a Branch

Once you're on a branch, your workflow is the same — edit, add, commit:

```bash
# You're on feature-navbar
echo "<nav>Home | About | Contact</nav>" > navbar.html
git add .
git commit -m "Add navigation bar"
```

This commit exists ONLY on `feature-navbar`. If you switch back to `main`, the navbar.html file disappears:

```bash
git switch main
ls
```

No `navbar.html`. Switch back:

```bash
git switch feature-navbar
ls
```

`navbar.html` is back. Each branch has its own version of reality.

## Branch Naming Conventions

Good branch names tell you what the branch is for:

| Pattern | Example | Used For |
|---|---|---|
| `feature/` | `feature/user-login` | New features |
| `fix/` | `fix/broken-link` | Bug fixes |
| `hotfix/` | `hotfix/security-patch` | Urgent fixes |
| `docs/` | `docs/update-readme` | Documentation changes |

Rules:
- Use lowercase
- Use hyphens, not spaces (`add-navbar` not `add navbar`)
- Be descriptive but concise
- No special characters except `-`, `/`, and `_`

## Visualizing Branches

Think of your project history as a timeline. Branches split off from that timeline:

```
main:     A --- B --- C
                 \
feature:          D --- E
```

Commits A, B, C are on `main`. At commit B, you created a branch. Commits D and E are only on `feature`. `main` doesn't know about them (yet).

You can see this in the terminal:

```bash
git log --oneline --graph --all
```

```
* f3d2a1b (feature-navbar) Add navigation bar
| * c4e5f6a (main) Update footer
|/
* a1b2c3d Initial commit
```

## Deleting Branches

After you've merged a branch back into `main` (we'll cover merging next), you can delete it:

```bash
# Delete a merged branch
git branch -d feature-navbar

# Force delete an unmerged branch (careful!)
git branch -D experimental-stuff
```

> Deleting a branch doesn't delete the commits — if they were merged, they're safe on `main`. You're just removing the branch label.

## When to Create Branches

A general rule: **never work directly on `main`**. Always create a branch for:

- Adding a new feature
- Fixing a bug
- Trying an experiment
- Updating documentation

This keeps `main` clean and working at all times. If your experiment fails, you just delete the branch. `main` is untouched.

## Common Workflow

```bash
# Start from main
git switch main

# Create a branch for your work
git switch -c feature/search-bar

# Do your work, commit along the way
git add .
git commit -m "Add search input field"
git add .
git commit -m "Add search results display"

# When done, merge back to main (next lesson!)
```

## Summary

| Action | Command |
|---|---|
| List branches | `git branch` |
| Create a branch | `git branch branch-name` |
| Switch to a branch | `git switch branch-name` |
| Create and switch | `git switch -c branch-name` |
| Delete a branch | `git branch -d branch-name` |
| See branch graph | `git log --oneline --graph --all` |

Branches let you work fearlessly. Experiment, try things, break stuff — your `main` branch stays safe.
