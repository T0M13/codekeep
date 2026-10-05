---
title: What is Git?
---

# What is Git?

Imagine you're writing an essay. You save it as `essay.doc`. Then you make changes and save it as `essay_v2.doc`. Then more changes: `essay_final.doc`. Then `essay_FINAL_final.doc`. Then `essay_FINAL_final_v2_REAL.doc`.

Sound familiar? That's the problem **Git** solves.

## Version Control

Git is a **version control system**. It keeps track of every change you make to your files, so you can:

- **Go back in time** — Made a mistake last week? Roll back to any previous version.
- **See what changed** — Compare today's code to yesterday's code, line by line.
- **Work with others** — Multiple people can work on the same project without overwriting each other.
- **Experiment safely** — Try wild ideas in a separate branch. If they fail, just throw the branch away.

Think of Git as an **unlimited undo button** for your entire project, with a logbook of every change ever made and who made it.

## How Git Thinks

Most tools save files. Git saves **snapshots**.

Every time you make a "commit" (save point) in Git, it takes a picture of ALL your files at that moment. It's like a photo album of your project's history.

```
Snapshot 1: Created index.html, added basic structure
Snapshot 2: Added navigation bar
Snapshot 3: Fixed broken link
Snapshot 4: Added contact page
```

Each snapshot has a message explaining what changed, who changed it, and when.

## Git vs GitHub

This trips up a lot of beginners. They are **not the same thing**:

| | Git | GitHub |
|---|---|---|
| **What** | A tool that runs on your computer | A website that hosts Git projects |
| **Where** | Your local machine | The internet (github.com) |
| **Purpose** | Tracks changes to your files | Stores your project online, lets others see and contribute |
| **Analogy** | A notebook where you journal | A library where you publish your journal |

Git works **completely offline**. You don't need GitHub to use Git. But GitHub is where most developers store and share their projects.

> There are other hosting services too — **GitLab**, **Bitbucket**, **Codeberg** — they all work with Git the same way.

## Why Every Developer Uses Git

Git isn't optional in the developer world. It's as fundamental as knowing how to type. Here's why:

- **Every company uses it.** If you get a dev job, you'll use Git on day one.
- **Open source runs on it.** Every major open source project (Linux, React, Python) uses Git.
- **It protects your work.** Hard drive dies? Your code is safe on GitHub.
- **It makes collaboration possible.** Without Git, two people editing the same file would be chaos.

## Real-World Analogy

Think of Git like a **save system in a video game**:

- You play through a level (write code)
- You save your progress (make a commit)
- You try a risky boss fight (experiment with new features)
- You die? Load your last save (revert changes)
- Your friend wants to play the same game? Share your save file (push to GitHub)
- You both play different parts and combine your progress (merge branches)

## Key Terms to Know

| Term | Meaning |
|---|---|
| **Repository (repo)** | A project folder tracked by Git |
| **Commit** | A saved snapshot of your files |
| **Branch** | A parallel version of your project |
| **Merge** | Combining two branches together |
| **Clone** | Downloading a copy of a project |
| **Push** | Uploading your commits to GitHub |
| **Pull** | Downloading new changes from GitHub |

Don't worry about memorizing these now. We'll use each one hands-on in the coming lessons.

## A Tiny Preview

Here's what using Git looks like in the terminal. Don't worry about understanding it yet — we'll cover every line:

```bash
git init                    # Start tracking this folder
git add .                   # Stage all files
git commit -m "First commit" # Save a snapshot
git push origin main        # Upload to GitHub
```

Four commands. That's the core of Git. Everything else is built around these basics.

## What You'll Learn

By the end of this course, you'll be able to:

- Create and manage Git repositories
- Save your work with meaningful commits
- Create branches to experiment safely
- Merge branches and resolve conflicts
- Push your code to GitHub
- Undo mistakes confidently
- Follow the workflow that real development teams use

Let's start by getting Git installed on your computer.
