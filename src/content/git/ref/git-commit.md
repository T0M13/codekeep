# git commit

Saves a snapshot of your staged changes to the repository history. Each commit is a permanent save point.

## Syntax

```bash
git commit [options]
```

## Examples

```bash
# Commit with a message
git commit -m "Add navigation bar"

# Commit with a multi-line message
git commit -m "Add user login" -m "Includes form validation and error handling"

# Open editor to write the message
git commit

# Stage and commit all tracked files in one step
git commit -am "Fix typo in header"

# Amend the last commit (fix message or add files)
git commit --amend -m "Better message"

# Amend without changing the message
git commit --amend --no-edit
```

## Common Flags

| Flag | What It Does |
|---|---|
| `-m "msg"` | Provide commit message inline |
| `-a` | Auto-stage all modified tracked files |
| `--amend` | Modify the last commit |
| `--no-edit` | Keep the existing message (with `--amend`) |

## Key Points

- Every commit needs a message — Git won't let you commit without one
- `-am` is a shortcut but only works on already-tracked files (not new ones)
- `--amend` rewrites history — only use on unpushed commits
- Each commit gets a unique hash (ID) like `a1b2c3d`
- Good messages start with a verb: "Add", "Fix", "Update", "Remove"
- Commits are cheap — commit early and often
