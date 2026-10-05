---
title: Setting Up Git
---

# Setting Up Git

Before you can use Git, you need to install it and tell it who you are. This only takes a few minutes.

## Installing Git

### Windows

The easiest way is to download from the official site:

1. Go to [git-scm.com/downloads](https://git-scm.com/downloads)
2. Download the Windows installer
3. Run it — the default options are fine for beginners
4. This installs **Git Bash**, a terminal that works like Linux/Mac

Alternatively, if you have **winget** (Windows package manager):

```bash
winget install Git.Git
```

### Mac

If you have **Homebrew** installed:

```bash
brew install git
```

Otherwise, just open Terminal and type `git`. macOS will prompt you to install the Xcode Command Line Tools, which includes Git.

### Linux

```bash
# Ubuntu / Debian
sudo apt install git

# Fedora
sudo dnf install git

# Arch
sudo pacman -S git
```

## Verify the Installation

Open your terminal and run:

```bash
git --version
```

You should see something like:

```
git version 2.43.0
```

If you see a version number, Git is installed. The exact version doesn't matter much.

## Tell Git Who You Are

Every commit you make in Git gets stamped with your name and email. You need to set these up once:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

For example:

```bash
git config --global user.name "Alex Johnson"
git config --global user.email "alex@example.com"
```

> This email should match the one you'll use on GitHub (or whatever hosting service you pick). It's how Git connects commits to your profile.

The `--global` flag means this applies to all your Git projects. You only need to do this once.

## Check Your Config

To see what you've set:

```bash
git config --list
```

Or check individual values:

```bash
git config user.name
git config user.email
```

## Set Your Default Editor

When Git needs you to type a message (like during a merge), it opens a text editor. By default, it often opens **Vim**, which can be confusing for beginners.

You can change it to something friendlier:

```bash
# Use VS Code
git config --global core.editor "code --wait"

# Use Nano (simple terminal editor)
git config --global core.editor "nano"

# Use Notepad++ (Windows)
git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession"
```

> If you're not sure, `nano` is a good choice. It's simple and shows you the keyboard shortcuts at the bottom of the screen.

## Set the Default Branch Name

Older versions of Git create a default branch called `master`. Modern convention is to use `main`:

```bash
git config --global init.defaultBranch main
```

This means when you create a new repository, the first branch will be called `main`.

## Your Config File

All these settings are stored in a file called `.gitconfig` in your home directory:

```bash
cat ~/.gitconfig
```

It looks something like:

```
[user]
    name = Alex Johnson
    email = alex@example.com
[core]
    editor = code --wait
[init]
    defaultBranch = main
```

You can edit this file directly if you prefer — it's just a text file.

## Optional: Set Up SSH for GitHub

If you plan to use GitHub (and you should), setting up SSH keys means you won't have to type your password every time you push code.

```bash
# Generate an SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"
```

Press Enter for all the prompts (default location, no passphrase is fine for learning).

Then copy your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Go to **GitHub > Settings > SSH and GPG keys > New SSH key**, paste it in, and save.

> We'll cover GitHub more in the Remote Repositories lesson. This is just getting ahead of the game.

## Summary

| What | Command |
|---|---|
| Install check | `git --version` |
| Set name | `git config --global user.name "Your Name"` |
| Set email | `git config --global user.email "you@example.com"` |
| Set editor | `git config --global core.editor "code --wait"` |
| Set default branch | `git config --global init.defaultBranch main` |
| View all settings | `git config --list` |

That's it. Git is installed, it knows who you are, and you're ready to create your first repository.
