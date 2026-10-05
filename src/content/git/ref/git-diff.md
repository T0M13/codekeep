# git diff

Shows the exact changes between versions of your files, line by line.

## Syntax

```bash
git diff [options] [file]
```

## Examples

```bash
# Show unstaged changes (working directory vs staging area)
git diff

# Show staged changes (staging area vs last commit)
git diff --staged

# Show changes in a specific file
git diff index.html

# Compare two branches
git diff main feature-branch

# Compare two commits
git diff a1b2c3d f4e5d6c

# Show only the names of changed files
git diff --name-only

# Show a summary of changes
git diff --stat
```

## Reading the Output

```diff
--- a/index.html
+++ b/index.html
@@ -3,7 +3,7 @@
 <head>
   <title>My Site</title>
 </head>
-<h1>Hello</h1>
+<h1>Hello, World!</h1>
```

- Lines starting with `-` (red) were removed
- Lines starting with `+` (green) were added
- Unchanged lines provide context

## Key Points

- `git diff` alone shows only unstaged changes
- `git diff --staged` shows what will be included in the next commit
- Use before committing to review your changes
- `git diff --name-only` is great for a quick overview
- Press `q` to exit the diff viewer
