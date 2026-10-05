# git log

Shows the commit history. Every commit ever made, in reverse chronological order.

## Syntax

```bash
git log [options]
```

## Examples

```bash
# Full log
git log

# Compact one-liner per commit
git log --oneline

# Show the last 5 commits
git log -5

# Show what changed in each commit
git log --stat

# Show the actual line changes
git log -p

# Show a branch graph
git log --oneline --graph --all

# Show commits by a specific author
git log --author="Alex"

# Show commits since a date
git log --since="2024-01-01"

# Search commit messages
git log --grep="fix"
```

## Common Flags

| Flag | What It Does |
|---|---|
| `--oneline` | One line per commit |
| `--graph` | Show branch graph |
| `--all` | Show all branches |
| `--stat` | Show file change summary |
| `-p` | Show full diff |
| `-n` | Limit to n commits |
| `--author` | Filter by author |
| `--grep` | Search messages |

## Key Points

- Press `q` to exit the log viewer
- `git log --oneline --graph --all` is the most useful view
- Each commit shows: hash, author, date, and message
- The hash is how you reference a specific commit
- Use arrow keys to scroll, `q` to quit
