# git tag

Creates named markers for specific commits. Commonly used to mark release versions like `v1.0.0`.

## Syntax

```bash
git tag [options] <tag-name> [commit]
```

## Examples

```bash
# Create a lightweight tag on the current commit
git tag v1.0.0

# Create an annotated tag with a message
git tag -a v1.0.0 -m "First stable release"

# Tag a specific commit
git tag -a v0.9.0 a1b2c3d -m "Beta release"

# List all tags
git tag

# List tags matching a pattern
git tag -l "v1.*"

# Show tag details
git show v1.0.0

# Delete a local tag
git tag -d v1.0.0

# Push a tag to remote
git push origin v1.0.0

# Push all tags to remote
git push --tags

# Delete a remote tag
git push origin --delete v1.0.0
```

## Lightweight vs Annotated Tags

| Type | Command | Contains |
|---|---|---|
| Lightweight | `git tag v1.0` | Just a pointer to a commit |
| Annotated | `git tag -a v1.0 -m "msg"` | Tagger name, date, message, can be signed |

## Key Points

- Tags don't move — they always point to the same commit
- Use annotated tags (`-a`) for releases (they store more info)
- Tags are not pushed by default — use `git push --tags`
- Semantic versioning: `v1.0.0` (major.minor.patch)
- GitHub automatically creates a "Release" page from tags
