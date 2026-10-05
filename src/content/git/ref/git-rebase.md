# git rebase

Re-applies your commits on top of another branch. Creates a clean, linear history instead of merge commits.

## Syntax

```bash
git rebase <branch>
```

## Examples

```bash
# Rebase current branch onto main
git rebase main

# Interactive rebase — edit, squash, reorder last 3 commits
git rebase -i HEAD~3

# Continue after resolving conflicts
git rebase --continue

# Abort the rebase
git rebase --abort

# Skip a conflicting commit
git rebase --skip
```

## Merge vs Rebase

```
Merge result:        Rebase result:
A-B-C---M            A-B-C-D'-E'
   \   /                     (linear)
    D-E
```

| | Merge | Rebase |
|---|---|---|
| History | Branching (shows forks) | Linear (straight line) |
| Creates merge commit | Yes | No |
| Rewrites history | No | Yes |
| Safe for shared branches | Yes | No |

## Interactive Rebase Commands

| Command | What It Does |
|---|---|
| `pick` | Keep the commit as-is |
| `squash` | Combine with previous commit |
| `reword` | Change the commit message |
| `edit` | Pause to amend the commit |
| `drop` | Remove the commit entirely |

## Key Points

- Rebase rewrites history — **never rebase commits that have been pushed to a shared branch**
- Safe to rebase your own feature branch before merging
- `git pull --rebase` is a clean alternative to `git pull`
- Interactive rebase (`-i`) is powerful for cleaning up messy commit history
- If you mess up, `git rebase --abort` gets you back to safety
