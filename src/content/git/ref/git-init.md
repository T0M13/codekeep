# git init

Creates a new Git repository in the current directory. This is how you start tracking a project with Git.

## Syntax

```bash
git init [directory]
```

## Examples

```bash
# Initialize the current folder as a Git repo
git init

# Initialize a new folder as a Git repo
git init my-project

# Initialize with a specific default branch name
git init -b main
```

## What It Does

- Creates a hidden `.git` folder in the directory
- This `.git` folder contains all of Git's tracking data
- The directory is now a Git repository — you can start committing

## Key Points

- You only run `git init` once per project
- Running it in an existing repo is safe — it won't overwrite anything
- If you want a copy of an existing project, use `git clone` instead
- The `.git` folder is hidden — use `ls -a` to see it
- Delete `.git` to "un-Git" a folder (you lose all history)
