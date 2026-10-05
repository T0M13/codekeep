---
title: Undoing Changes
---

# Undoing Changes

Everyone makes mistakes. You'll edit the wrong file, commit something broken, or want to go back to how things were yesterday. Git has your back.

This lesson covers every way to undo things in Git, from small fixes to full rollbacks.

## Scenario 1: Undo Changes to a File (Not Staged Yet)

You edited `index.html` and it's a mess. You want to throw away your changes and go back to the last committed version:

```bash
git restore index.html
```

Or restore all changed files:

```bash
git restore .
```

> **Warning:** `git restore` permanently discards your uncommitted changes. There's no undo for the undo. Make sure you really want to throw those changes away.

The older way (still works):

```bash
git checkout -- index.html
```

## Scenario 2: Unstage a File (Staged but Not Committed)

You ran `git add .` but realized you don't want to include `debug.log` in this commit:

```bash
git restore --staged debug.log
```

This removes the file from the staging area but keeps your changes in the working directory. The file goes from "ready to commit" back to "modified."

The older way:

```bash
git reset HEAD debug.log
```

## Scenario 3: Fix the Last Commit Message

You just committed but the message has a typo:

```bash
git commit --amend -m "Fixed commit message"
```

This replaces the last commit's message. The commit itself stays the same.

## Scenario 4: Add a File to the Last Commit

You committed but forgot to include a file:

```bash
git add forgotten-file.txt
git commit --amend --no-edit
```

The `--no-edit` flag keeps the original commit message. The forgotten file gets added to the last commit as if it was always there.

> **Only amend unpushed commits.** If you've already pushed, amending rewrites history and causes problems for anyone who pulled your code.

## Scenario 5: Undo the Last Commit (Keep Changes)

You committed too early. You want to undo the commit but keep all the changes so you can recommit properly:

```bash
git reset --soft HEAD~1
```

- `HEAD~1` means "one commit before the current one"
- `--soft` keeps your changes staged (ready to commit again)

If you want the changes back in the working directory (unstaged):

```bash
git reset --mixed HEAD~1
```

Or just `git reset HEAD~1` (mixed is the default).

## Scenario 6: Completely Throw Away the Last Commit

You want to pretend the last commit never happened. Delete the commit AND all its changes:

```bash
git reset --hard HEAD~1
```

> **Danger zone.** `--hard` destroys changes permanently. Only use this if you're sure.

You can go back multiple commits:

```bash
git reset --hard HEAD~3    # Undo last 3 commits
```

## The Three Reset Modes

| Mode | Commit | Staging Area | Working Directory |
|---|---|---|---|
| `--soft` | Undone | Kept | Kept |
| `--mixed` (default) | Undone | Cleared | Kept |
| `--hard` | Undone | Cleared | Cleared |

Think of it as levels of destruction: soft is gentle, hard is nuclear.

## Scenario 7: Undo a Commit That's Already Pushed

If you've already pushed a bad commit, don't use `reset` (it rewrites history). Instead, use **revert**:

```bash
git revert HEAD
```

This creates a NEW commit that undoes the changes from the last commit. The bad commit stays in history, but its effects are reversed.

```
A --- B --- C --- D (revert of C)
```

Commit D is the opposite of commit C. Everything C added, D removes. Everything C removed, D adds back.

To revert a specific commit by its hash:

```bash
git revert a1b2c3d
```

## Scenario 8: Save Work for Later — Stashing

You're halfway through some changes but need to switch branches urgently. You don't want to commit half-finished work:

```bash
git stash
```

This saves your changes in a temporary storage and gives you a clean working directory. Now you can switch branches freely.

When you're ready to get your changes back:

```bash
git stash pop
```

You can stack multiple stashes:

```bash
git stash              # Stash current changes
git stash              # Stash more changes
git stash list         # See all stashes
git stash pop          # Apply the most recent stash
```

> Think of `git stash` like putting your papers in a drawer. They're safe, out of the way, and you can pull them back out anytime.

## Scenario 9: Recover a Deleted Branch

Accidentally deleted a branch? Git keeps a log of everything:

```bash
git reflog
```

```
a1b2c3d HEAD@{0}: checkout: moving from feature to main
f4e5d6c HEAD@{1}: commit: Add amazing feature
```

Find the commit hash of the branch tip and recreate it:

```bash
git branch feature-recovered f4e5d6c
```

`git reflog` is your safety net. It records every action for about 90 days.

## Choosing the Right Undo

| Situation | Command |
|---|---|
| Discard changes to a file | `git restore file.txt` |
| Unstage a file | `git restore --staged file.txt` |
| Fix last commit message | `git commit --amend -m "new message"` |
| Undo last commit, keep changes | `git reset --soft HEAD~1` |
| Completely undo last commit | `git reset --hard HEAD~1` |
| Undo a pushed commit safely | `git revert HEAD` |
| Save changes temporarily | `git stash` |
| Restore stashed changes | `git stash pop` |
| Find lost commits | `git reflog` |

## Golden Rules

1. **Haven't pushed yet?** Use `reset` freely — you're only changing your local history.
2. **Already pushed?** Use `revert` — it doesn't rewrite history.
3. **Not sure?** Use `git stash` to save your work before trying anything risky.
4. **Really panicking?** Run `git reflog` — it remembers everything.

Mistakes are part of coding. Git makes sure they're never permanent.
