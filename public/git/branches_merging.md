# Branches and Merging in Git

## Creating and Switching Branches
### Create a New Branch
```sh
git branch branch_name
```
### Switch to a Branch
```sh
git checkout branch_name
```
Or using the modern command:
```sh
git switch branch_name
```
### Create and Switch in One Command
```sh
git checkout -b branch_name
```
Or:
```sh
git switch -c branch_name
```

## Viewing Branches
### List All Branches
```sh
git branch
```
### Show Remote Branches
```sh
git branch -r
```
### Show All Local and Remote Branches
```sh
git branch -a
```

## Merging Branches
### Merge a Branch into the Current Branch
```sh
git merge branch_name
```
If there are conflicts, Git will prompt to resolve them before completing the merge.

### Abort a Merge
If a merge goes wrong, you can cancel it:
```sh
git merge --abort
```

## Deleting Branches
### Delete a Local Branch
```sh
git branch -d branch_name
```
If the branch has unmerged changes and you still want to delete it:
```sh
git branch -D branch_name
```
### Delete a Remote Branch
```sh
git push origin --delete branch_name
```

## Rebasing a Branch
Instead of merging, you can rebase to apply commits on top of another branch:
```sh
git rebase main
```
If conflicts occur, resolve them and continue:
```sh
git rebase --continue
```
To abort a rebase:
```sh
git rebase --abort
```

