# git merge

Combines changes from one branch into another. Brings the work from a feature branch into your current branch.

## Syntax

```bash
git merge <branch-name>
```

## Examples

```bash
# Merge feature branch into current branch
git switch main
git merge feature-navbar

# Merge with a custom commit message
git merge feature-login -m "Merge login feature"

# Abort a merge in progress (if there are conflicts)
git merge --abort

# Merge without fast-forward (always create a merge commit)
git merge --no-ff feature-branch
```

## Merge Types

| Type | When | Result |
|---|---|---|
| Fast-forward | Target hasn't changed since branch was created | No merge commit, linear history |
| Three-way | Both branches have new commits | Creates a merge commit |
| Conflict | Same lines changed in both branches | Manual resolution needed |

## Resolving Conflicts

```
<<<<<<< HEAD
Your version
=======
Their version
>>>>>>> feature-branch
```

1. Edit the file — choose which version to keep
2. Remove the conflict markers
3. `git add .` then `git commit`

## Key Points

- Always switch to the branch you want to merge INTO first
- `git merge --abort` cancels a conflicted merge safely
- `--no-ff` forces a merge commit even when fast-forward is possible
- After merging, you can delete the feature branch with `git branch -d`
- Merge commits have two parents — they tie the branches together
