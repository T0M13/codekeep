---
title: Your First Repository
---

# Your First Repository

A **repository** (or **repo**) is just a folder that Git is watching. Git tracks every change to every file inside it.

Let's create one.

## Creating a New Repo

Open your terminal, navigate to where you want to keep your projects, and:

```bash
mkdir my-first-project
cd my-first-project
git init
```

You'll see:

```
Initialized empty Git repository in /home/alex/my-first-project/.git/
```

That's it. This folder is now a Git repository. Git created a hidden `.git` folder inside it — that's where it stores all the tracking information.

```bash
ls -a
```

```
.  ..  .git
```

> **Never delete or edit the `.git` folder directly.** That's Git's brain. If you delete it, you lose all your history.

## What's Inside `.git`?

You don't need to understand everything in there, but here's the gist:

| Folder/File | Purpose |
|---|---|
| `objects/` | Stores all your file snapshots |
| `refs/` | Keeps track of branches and tags |
| `HEAD` | Points to your current branch |
| `config` | Repository-specific settings |

Git manages all of this automatically. You'll never need to touch it.

## Adding Files

Let's create some files in our project:

```bash
touch index.html
touch style.css
echo "Hello, World!" > index.html
```

Now check the status of your repository:

```bash
git status
```

```
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html
        style.css

nothing added to commit but untracked files present
```

Git sees the files but isn't tracking them yet. They're **untracked** — Git knows they exist but won't save them until you tell it to.

## Staging Files

To tell Git "I want to include these files in my next save," you **stage** them:

```bash
# Stage one file
git add index.html

# Stage multiple files
git add index.html style.css

# Stage everything in the folder
git add .
```

The dot (`.`) means "everything." It's the most common way to stage files.

```bash
git add .
git status
```

```
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   index.html
        new file:   style.css
```

Now Git is ready to save these files. They're in the **staging area** — like putting items on the checkout counter before you buy them.

## Your First Commit

A **commit** is a saved snapshot. Let's make one:

```bash
git commit -m "Add index.html and style.css"
```

The `-m` flag lets you write a message describing what you did. Every commit needs a message.

```
[main (root-commit) a1b2c3d] Add index.html and style.css
 2 files changed, 1 insertion(+)
 create mode 100644 index.html
 create mode 100644 style.css
```

Your first commit. Your project's history has begun.

## The Three States

Files in a Git repo exist in one of three states:

```
Working Directory  →  Staging Area  →  Repository
 (your files)         (git add)       (git commit)
```

1. **Working Directory** — Your actual files on disk. Edit them freely.
2. **Staging Area** — Files you've marked to be included in the next commit.
3. **Repository** — Committed snapshots stored safely in Git's history.

It's like cooking: you chop ingredients (working directory), put them in the pan (staging area), then serve the dish (commit).

## Cloning an Existing Repo

Sometimes you don't start from scratch — you want a copy of someone else's project. That's **cloning**:

```bash
git clone https://github.com/username/project-name.git
```

This creates a new folder called `project-name` with all the files and the entire history.

```bash
git clone https://github.com/facebook/react.git
cd react
ls
```

You now have the entire React source code on your computer, with every commit ever made.

> **Clone vs Download:** Downloading a ZIP from GitHub gives you the files but NOT the Git history. Cloning gives you everything.

## Cloning with SSH

If you set up SSH keys (from the setup lesson), you can clone using SSH:

```bash
git clone git@github.com:username/project-name.git
```

SSH is preferred because you won't need to enter your password for push/pull.

## Check Your History

After making commits, you can see them:

```bash
git log
```

```
commit a1b2c3d4e5f6 (HEAD -> main)
Author: Alex Johnson <alex@example.com>
Date:   Mon Jan 15 10:30:00 2024

    Add index.html and style.css
```

For a compact view:

```bash
git log --oneline
```

```
a1b2c3d Add index.html and style.css
```

## Summary

| Action | Command |
|---|---|
| Create a new repo | `git init` |
| Clone an existing repo | `git clone <url>` |
| Check status | `git status` |
| Stage files | `git add .` |
| Commit changes | `git commit -m "message"` |
| View history | `git log --oneline` |

Now you know how to create a repository and make your first commit. Next, we'll dive deeper into making good commits.
