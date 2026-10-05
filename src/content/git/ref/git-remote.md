# git remote

Manages connections to remote repositories (like GitHub). Lets you add, view, and remove remotes.

## Syntax

```bash
git remote [command] [options]
```

## Examples

```bash
# List remotes
git remote

# List remotes with URLs
git remote -v

# Add a new remote
git remote add origin https://github.com/user/repo.git

# Add a second remote (e.g., a fork)
git remote add upstream https://github.com/original/repo.git

# Remove a remote
git remote remove origin

# Rename a remote
git remote rename origin old-origin

# Change a remote's URL
git remote set-url origin git@github.com:user/repo.git

# Show detailed info about a remote
git remote show origin
```

## Key Points

- `origin` is the conventional name for your main remote — it's just a name, not a keyword
- You can have multiple remotes (e.g., `origin` for your fork, `upstream` for the original)
- `git remote -v` shows both fetch and push URLs
- Use `set-url` to switch between HTTPS and SSH without removing the remote
- `git clone` automatically sets up `origin` for you
