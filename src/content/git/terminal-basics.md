---
title: Terminal Basics
---

# Terminal Basics

Before we learn Git, we need to learn the **terminal** — the text-based way to talk to your computer.

Think of it like this: normally you click buttons and icons to do things. The terminal lets you do the same things by **typing commands** instead. It might look like a hacker movie at first, but it's just another way to use your computer.

## What is the Terminal?

The terminal (also called **command line**, **shell**, or **console**) is a program where you type text commands. Instead of double-clicking a folder to open it, you type a command. Instead of dragging a file to the trash, you type a command.

It's like texting your computer instead of pointing at things.

## Opening the Terminal

| Operating System | How to Open |
|---|---|
| **Windows** | Search for "PowerShell" or "Command Prompt" in the Start menu. Or press `Win + R`, type `cmd`, press Enter. |
| **Mac** | Open Spotlight (`Cmd + Space`), type "Terminal", press Enter. |
| **Linux** | Press `Ctrl + Alt + T` or find "Terminal" in your apps. |

When it opens, you'll see a blinking cursor waiting for your commands. That's your **prompt** — it's ready for instructions.

## Where Am I? — `pwd`

When you open the terminal, you're "standing" in a folder somewhere on your computer. To find out where:

```bash
pwd
```

This stands for **Print Working Directory**. It shows your current location:

```
/home/alex/documents
```

Think of it as asking "What folder am I in right now?"

## Looking Around — `ls`

To see what files and folders are in your current location:

```bash
ls
```

This **lists** everything in the current folder. You'll see something like:

```
photos  notes.txt  projects  todo.md
```

Want more details? Use `ls -l` for a detailed list, or `ls -a` to see hidden files too.

> On Windows Command Prompt, use `dir` instead of `ls`. PowerShell supports both.

## Moving Around — `cd`

To go into a folder:

```bash
cd projects
```

To go back up one level (to the parent folder):

```bash
cd ..
```

To jump straight to your home folder:

```bash
cd ~
```

To go to a specific path:

```bash
cd /home/alex/documents/projects
```

Think of `cd` as walking through your folders. `cd projects` means "walk into the projects folder."

## Creating Folders — `mkdir`

To create a new folder:

```bash
mkdir my-project
```

To create a folder with spaces in the name (use quotes):

```bash
mkdir "my cool project"
```

To create nested folders all at once:

```bash
mkdir -p projects/website/images
```

The `-p` flag creates all the folders in the path, even if the middle ones don't exist yet.

## Creating Files — `touch`

To create an empty file:

```bash
touch hello.txt
```

To create multiple files at once:

```bash
touch index.html style.css app.js
```

> On Windows Command Prompt, use `echo. > hello.txt` instead. PowerShell supports `New-Item hello.txt`.

## Reading Files — `cat`, `head`, `tail`

To see the contents of a file:

```bash
cat hello.txt
```

To see just the first 10 lines of a long file:

```bash
head hello.txt
```

To see just the last 10 lines:

```bash
tail hello.txt
```

You can change the number of lines: `head -20 hello.txt` shows the first 20 lines.

## Copying Files — `cp`

To copy a file:

```bash
cp original.txt backup.txt
```

To copy a file into another folder:

```bash
cp notes.txt documents/
```

To copy an entire folder (use `-r` for recursive):

```bash
cp -r my-project my-project-backup
```

## Moving & Renaming — `mv`

To move a file into a folder:

```bash
mv report.txt documents/
```

To rename a file (moving it to the same place with a new name):

```bash
mv old-name.txt new-name.txt
```

`mv` does double duty — it moves AND renames.

## Deleting Files — `rm`

To delete a file:

```bash
rm unwanted.txt
```

To delete a folder and everything inside it:

```bash
rm -r old-project
```

> **Warning:** `rm` does NOT move things to the trash. Deleted files are gone forever. Double-check before running `rm -r`.

To remove an empty folder:

```bash
rmdir empty-folder
```

## Helpful Shortcuts

| Shortcut | What It Does |
|---|---|
| `Tab` | Auto-completes file and folder names. Start typing, then press Tab. |
| `Up Arrow` | Scrolls through your previous commands. |
| `Ctrl + C` | Cancels the current command. Use this if something gets stuck. |
| `Ctrl + L` | Clears the screen (same as typing `clear`). |
| `Ctrl + A` | Jumps to the beginning of the line. |
| `Ctrl + E` | Jumps to the end of the line. |

> **Tab completion is your best friend.** If you have a folder called `my-really-long-project-name`, just type `cd my-` and press Tab. The terminal fills in the rest.

## Putting It All Together

Here's what a real terminal session might look like:

```bash
pwd                        # Where am I?
cd ~/projects              # Go to my projects folder
mkdir new-website          # Create a new folder
cd new-website             # Go into it
touch index.html           # Create a file
ls                         # Check it's there
cat index.html             # It's empty for now!
```

## Quick Reference

| Command | What It Does | Example |
|---|---|---|
| `pwd` | Show current folder | `pwd` |
| `ls` | List files and folders | `ls -la` |
| `cd` | Change directory | `cd projects` |
| `mkdir` | Create a folder | `mkdir new-folder` |
| `touch` | Create an empty file | `touch file.txt` |
| `cat` | Show file contents | `cat file.txt` |
| `cp` | Copy files/folders | `cp a.txt b.txt` |
| `mv` | Move or rename | `mv old.txt new.txt` |
| `rm` | Delete files/folders | `rm file.txt` |

The terminal might feel slow and clunky at first compared to clicking around, but once you get used to it, it's actually **faster**. And for Git, it's essential — Git is a command-line tool at heart.
