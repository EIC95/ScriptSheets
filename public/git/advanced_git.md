# Advanced Git

## Stashing Changes
Stashing allows you to save changes temporarily without committing them.
```sh
git stash
```
To reapply the stash:
```sh
git stash pop
```
To view stored stashes:
```sh
git stash list
```

## Rebasing
Rebasing rewrites commit history by applying changes on top of another branch.
```sh
git rebase main
```
If conflicts occur, resolve them and continue:
```sh
git rebase --continue
```

## Cherry-Picking
Cherry-picking applies a specific commit from another branch.
```sh
git cherry-pick commit_hash
```

## Reverting a Commit
To undo a commit while keeping history intact:
```sh
git revert commit_hash
```

## Resetting a Branch
To undo commits and changes completely:
- Soft reset (keeps changes staged):
  ```sh
  git reset --soft HEAD~1
  ```
- Hard reset (removes changes):
  ```sh
  git reset --hard HEAD~1
  ```

## Bisecting to Find Bugs
Git bisect helps locate a bug by binary searching through commits.
```sh
git bisect start
```
Mark a bad commit:
```sh
git bisect bad
```
Mark a good commit:
```sh
git bisect good commit_hash
```
Git will now guide you through testing commits.

## Tagging Releases
Tags mark specific points in history.
```sh
git tag v1.0.0
```
Push tags to remote:
```sh
git push origin --tags
```

## Submodules
Submodules allow including other repositories within a project.
To add a submodule:
```sh
git submodule add https://github.com/example/repo.git
```
To initialize submodules:
```sh
git submodule update --init --recursive
```
