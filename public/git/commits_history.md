# Commits and History in Git

## Viewing Commit History
To view the commit history of the repository:
```sh
git log
```
For a compact one-line summary:
```sh
git log --oneline
```
To see commits by a specific author:
```sh
git log --author="Author Name"
```

## Viewing Changes in Commits
To see changes introduced in a specific commit:
```sh
git show commit_hash
```
To view the difference between commits:
```sh
git diff commit1_hash commit2_hash
```

## Amending the Last Commit
To modify the last commit (e.g., update message or add more changes):
```sh
git commit --amend -m "Updated commit message"
```

## Undoing Commits
### Reverting a Commit (Safe Method)
To create a new commit that undoes a previous commit:
```sh
git revert commit_hash
```

### Resetting Commits (Use with Caution)
To move the branch pointer back to a previous commit:
- **Soft Reset** (keep changes staged):
  ```sh
  git reset --soft commit_hash
  ```
- **Mixed Reset** (keep changes in working directory):
  ```sh
  git reset --mixed commit_hash
  ```
- **Hard Reset** (delete all changes permanently):
  ```sh
  git reset --hard commit_hash
  ```

## Viewing a Specific File’s History
To see the commit history of a specific file:
```sh
git log -- filename
```

## Checking Who Modified a Line
To see the commit and author of each line in a file:
```sh
git blame filename
```

This guide covers the basics of commits and viewing history in Git.

