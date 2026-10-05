# git clone

Downloads a copy of a remote repository to your computer, including all files and history.

## Syntax

```bash
git clone <url> [directory]
```

## Examples

```bash
# Clone via HTTPS
git clone https://github.com/username/project.git

# Clone via SSH
git clone git@github.com:username/project.git

# Clone into a specific folder name
git clone https://github.com/username/project.git my-folder

# Clone only the latest commit (faster, less disk space)
git clone --depth 1 https://github.com/username/project.git

# Clone a specific branch
git clone -b develop https://github.com/username/project.git
```

## Common Flags

| Flag | What It Does |
|---|---|
| `--depth 1` | Shallow clone — only latest commit |
| `-b branch` | Clone a specific branch |
| `--single-branch` | Only clone one branch |

## Key Points

- Creates a new folder with the repo name (unless you specify a different name)
- Automatically sets the remote as `origin`
- Downloads the entire history by default
- SSH cloning doesn't require password entry (if SSH keys are set up)
- Different from downloading a ZIP — clone includes full Git history
