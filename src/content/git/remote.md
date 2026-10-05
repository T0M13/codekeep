---
title: Remote Repositories
---

# Remote Repositories

So far, everything has been on your computer. That's great, but what if your hard drive dies? What if you want to share your code? What if you want to work from another computer?

That's where **remote repositories** come in.

## What is a Remote?

A remote is a copy of your repository that lives on a server somewhere — usually **GitHub**, **GitLab**, or **Bitbucket**. Think of it as a backup of your project that also lets other people see and contribute to it.

Your local repo and the remote repo are connected. You **push** your changes up to the remote and **pull** other people's changes down.

```
Your Computer  ←→  GitHub
 (local repo)      (remote repo)
     push →
     ← pull
```

## Creating a Remote Repo on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** button in the top right, then **New repository**
3. Name it (e.g., `my-first-project`)
4. Choose **Public** or **Private**
5. Don't initialize with a README (you already have local files)
6. Click **Create repository**

GitHub will show you commands to connect your local repo.

## Connecting Your Local Repo

After creating the repo on GitHub, connect it:

```bash
git remote add origin https://github.com/your-username/my-first-project.git
```

- `origin` is the name for this remote (a convention — almost everyone uses "origin")
- The URL is where the remote repo lives

If you set up SSH keys:

```bash
git remote add origin git@github.com:your-username/my-first-project.git
```

## Checking Your Remotes

```bash
git remote -v
```

```
origin  https://github.com/your-username/my-first-project.git (fetch)
origin  https://github.com/your-username/my-first-project.git (push)
```

## Pushing — Uploading Your Code

Once your local repo is connected to GitHub, push your commits:

```bash
git push origin main
```

This means: "Send all my commits on the `main` branch to the `origin` remote."

The first time, you might want to set up **tracking** so you can just type `git push` in the future:

```bash
git push -u origin main
```

The `-u` flag sets up the tracking. After this, you can just run:

```bash
git push
```

> If you're pushing for the first time over HTTPS, GitHub will ask for your username and a **personal access token** (not your password). You can generate one at GitHub > Settings > Developer Settings > Personal Access Tokens.

## Pulling — Downloading Changes

If someone else pushed changes to the remote (or you pushed from another computer), you need to download them:

```bash
git pull
```

This fetches the latest changes AND merges them into your current branch. If there are conflicts, you resolve them just like any merge.

## Fetch vs Pull

| Command | What It Does |
|---|---|
| `git fetch` | Downloads changes but doesn't merge them. You can review first. |
| `git pull` | Downloads AND merges changes in one step. |

`git pull` is basically `git fetch` + `git merge` combined. Most people just use `git pull`.

If you want to be cautious:

```bash
git fetch
git log --oneline origin/main   # See what's new
git merge origin/main            # Merge when ready
```

## Cloning — Starting from a Remote

If someone already has a project on GitHub, you can clone it:

```bash
git clone https://github.com/username/project-name.git
```

This downloads the entire project with all its history. The remote is automatically set up as `origin`.

```bash
cd project-name
git remote -v
```

```
origin  https://github.com/username/project-name.git (fetch)
origin  https://github.com/username/project-name.git (push)
```

## Pushing Branches

You can push any branch, not just `main`:

```bash
git switch -c feature/dark-mode
# make changes, commit...
git push -u origin feature/dark-mode
```

Now the branch exists on GitHub too. Others can see it, review it, or pull it.

## The README File

Every GitHub project should have a `README.md` file. It's the first thing people see when they visit your repo. It usually contains:

- What the project does
- How to install and use it
- How to contribute

```markdown
# My First Project

A simple website to practice Git and HTML.

## Setup

1. Clone this repo
2. Open index.html in your browser
```

## `.gitignore` — Keeping Secrets Out

Some files should never be pushed to GitHub. Create a `.gitignore` file to tell Git to ignore them:

```bash
touch .gitignore
```

Common contents:

```
node_modules/
.env
dist/
.DS_Store
*.log
```

> **Never push passwords, API keys, or secrets to GitHub.** Even if you delete them later, they stay in the Git history forever. Use `.gitignore` and environment variables instead.

## Full Remote Workflow

```bash
# Start of day: get latest changes
git pull

# Create a branch for your work
git switch -c feature/new-page

# Work, commit
echo "<h1>About Us</h1>" > about.html
git add .
git commit -m "Add about page"

# Push your branch
git push -u origin feature/new-page

# On GitHub: create a Pull Request
# After review: merge the PR

# Back locally: switch to main and pull the merged changes
git switch main
git pull

# Clean up
git branch -d feature/new-page
```

## Summary

| Action | Command |
|---|---|
| Add a remote | `git remote add origin <url>` |
| View remotes | `git remote -v` |
| Push to remote | `git push` |
| Pull from remote | `git pull` |
| Fetch without merging | `git fetch` |
| Clone a repo | `git clone <url>` |
| Push a new branch | `git push -u origin branch-name` |

Your code is no longer just on your computer. It's backed up, shareable, and ready for collaboration.
