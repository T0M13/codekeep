# git stash

Temporarily saves uncommitted changes so you can work on something else. Like putting your work in a drawer.

## Syntax

```bash
git stash [command]
```

## Examples

```bash
# Stash current changes
git stash

# Stash with a description
git stash push -m "Work in progress on login form"

# List all stashes
git stash list

# Apply the most recent stash (and remove it from the stash list)
git stash pop

# Apply a stash without removing it
git stash apply

# Apply a specific stash
git stash apply stash@{2}

# Delete the most recent stash
git stash drop

# Delete all stashes
git stash clear

# Show what's in a stash
git stash show

# Show the full diff of a stash
git stash show -p
```

## Common Commands

| Command | What It Does |
|---|---|
| `git stash` | Save and hide current changes |
| `git stash pop` | Restore most recent stash and delete it |
| `git stash apply` | Restore most recent stash, keep it |
| `git stash list` | Show all saved stashes |
| `git stash drop` | Delete the most recent stash |
| `git stash clear` | Delete all stashes |

## Key Points

- Stash saves both staged and unstaged changes
- Use before switching branches when you have uncommitted work
- Stashes are stored as a stack — newest first
- `pop` = apply + drop (restores and removes)
- `apply` = restore but keep in stash list (safe to try)
- Include `-m "description"` to remember what each stash contains
