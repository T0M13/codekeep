# git status

Shows the current state of your working directory and staging area. Tells you what has changed, what is staged, and what is untracked.

## Syntax

```bash
git status [options]
```

## Examples

```bash
# Full status output
git status

# Short/compact format
git status -s

# Show the branch and tracking info
git status -b
```

## Output Explained

```
On branch main
Changes to be committed:
        modified:   index.html       ← staged (green)

Changes not staged for commit:
        modified:   style.css        ← modified but not staged (red)

Untracked files:
        app.js                       ← new file Git doesn't know about (red)
```

## Short Format (`-s`)

```
M  index.html      ← staged modification
 M style.css       ← unstaged modification
?? app.js          ← untracked file
A  new-file.txt    ← staged new file
```

## Key Points

- Run this often — it's your GPS in Git
- Green = staged (ready to commit)
- Red = changed but not staged
- `??` = untracked (new file)
- Shows which branch you're on
- Completely safe — it changes nothing, only reads
