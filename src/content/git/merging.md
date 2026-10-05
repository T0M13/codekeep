---
title: Merging & Conflicts
---

# Merging & Conflicts

You've been working on a branch, and it's looking good. Now it's time to bring those changes back into `main`. That's **merging**.

## What is Merging?

Merging takes the changes from one branch and combines them with another branch. It's like finishing your draft on a separate piece of paper and then carefully copying the good parts into the final document.

```
Before merge:
main:     A --- B --- C
                 \
feature:          D --- E

After merge:
main:     A --- B --- C --- F (merge commit)
                 \         /
feature:          D --- E
```

Commit F is the **merge commit** — it ties the two branches together.

## How to Merge

First, switch to the branch you want to merge INTO (usually `main`):

```bash
git switch main
```

Then merge the other branch:

```bash
git merge feature-navbar
```

If there are no conflicts, Git does this automatically:

```
Updating a1b2c3d..f3d2a1b
Fast-forward
 navbar.html | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 navbar.html
```

Your `main` branch now has all the changes from `feature-navbar`.

## Fast-Forward Merges

If `main` hasn't changed since you created the branch, Git does a **fast-forward merge**. It just moves the `main` pointer forward:

```
Before:
main:     A --- B
                 \
feature:          C --- D

After fast-forward:
main:     A --- B --- C --- D
```

No merge commit needed — it's like the branch never existed. The history stays linear and clean.

## Three-Way Merges

If `main` HAS changed since you branched off (maybe someone else pushed changes), Git does a **three-way merge**. It creates a merge commit that combines both sets of changes:

```bash
git merge feature-navbar
```

```
Merge made by the 'ort' strategy.
 navbar.html | 1 +
 1 file changed, 1 insertion(+)
```

## What is a Conflict?

A conflict happens when **two branches change the same lines in the same file**. Git doesn't know which version to keep, so it asks you to decide.

It's like two people editing the same paragraph in a Google Doc at the same time — someone has to choose which version stays.

## When Do Conflicts Happen?

```bash
# On main, you changed line 5 of index.html to:
<h1>Welcome Home</h1>

# On feature branch, someone changed the same line 5 to:
<h1>Welcome to Our Site</h1>
```

When you try to merge, Git says: "Both of you changed line 5. I don't know which one you want. Please fix this."

## What Conflicts Look Like

When a conflict occurs, Git marks the file with special markers:

```html
<<<<<<< HEAD
<h1>Welcome Home</h1>
=======
<h1>Welcome to Our Site</h1>
>>>>>>> feature-navbar
```

Here's what the markers mean:

| Marker | Meaning |
|---|---|
| `<<<<<<< HEAD` | Start of YOUR branch's version (the branch you're on) |
| `=======` | Divider between the two versions |
| `>>>>>>> feature-navbar` | End of the OTHER branch's version |

## Resolving Conflicts

To fix a conflict:

1. **Open the file** in your editor
2. **Choose** which version to keep (or combine them)
3. **Delete** the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
4. **Save** the file
5. **Stage and commit**

For example, you might resolve it to:

```html
<h1>Welcome to Our Home</h1>
```

Then:

```bash
git add index.html
git commit -m "Merge feature-navbar, resolve heading conflict"
```

> Most code editors (VS Code, IntelliJ) have built-in merge conflict tools. They show both versions side by side and let you click which one to accept.

## Aborting a Merge

Changed your mind? Don't want to deal with the conflict right now? Abort:

```bash
git merge --abort
```

This puts everything back the way it was before you tried to merge. No harm done.

## Avoiding Conflicts

You can't always avoid conflicts, but you can reduce them:

- **Merge often** — Don't let your branch get too far behind `main`
- **Keep branches small** — A branch that changes 5 files is easier to merge than one that changes 50
- **Communicate** — If you're working with others, let them know which files you're changing
- **Pull before you branch** — Start your branch from the latest `main`

## Practice: A Full Merge Workflow

```bash
# Start fresh from main
git switch main

# Create and switch to a feature branch
git switch -c feature/footer

# Make changes
echo "<footer>Copyright 2024</footer>" >> index.html
git add .
git commit -m "Add footer to index"

# Switch back to main
git switch main

# Merge the feature branch
git merge feature/footer

# Delete the branch (it's been merged)
git branch -d feature/footer
```

## Merge Strategies Quick Reference

| Situation | What Happens |
|---|---|
| `main` unchanged since branch | Fast-forward (no merge commit) |
| Both branches have new commits | Three-way merge (creates merge commit) |
| Same lines changed in both | Conflict (you resolve manually) |

## Summary

| Action | Command |
|---|---|
| Merge a branch into current | `git merge branch-name` |
| Abort a merge | `git merge --abort` |
| After resolving conflicts | `git add .` then `git commit` |
| Delete merged branch | `git branch -d branch-name` |

Conflicts feel scary the first time, but they're a normal part of working with Git. Once you've resolved a few, they become routine.
