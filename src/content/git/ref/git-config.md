# git config

Gets and sets Git configuration options like your name, email, and preferences.

## Syntax

```bash
git config [--global | --local] key value
```

## Examples

```bash
# Set your name (global — all repos)
git config --global user.name "Alex Johnson"

# Set your email (global)
git config --global user.email "alex@example.com"

# Set default editor
git config --global core.editor "code --wait"

# Set default branch name
git config --global init.defaultBranch main

# View a specific setting
git config user.name

# View all settings
git config --list

# Set a repo-specific setting (local)
git config --local user.email "work@company.com"
```

## Scope Levels

| Scope | Flag | Applies To | File Location |
|---|---|---|---|
| Global | `--global` | All repos for this user | `~/.gitconfig` |
| Local | `--local` | Just this repo | `.git/config` |
| System | `--system` | All users on this machine | `/etc/gitconfig` |

## Key Points

- `--global` settings apply to all your Git repos
- `--local` settings override global ones for a specific repo
- You must set `user.name` and `user.email` before your first commit
- The config file is just a text file — you can edit `~/.gitconfig` directly
- Use `git config --list --show-origin` to see where each setting comes from
