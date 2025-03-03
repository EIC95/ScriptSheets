# File Management in Git

## Checking the Status of Files
To see the current state of your files in the repository:
```sh
git status
```

## Tracking New Files
To start tracking a new file:
```sh
git add filename
```
To track multiple files:
```sh
git add file1 file2
```
To track all new and modified files:
```sh
git add .
```

## Viewing Changes
To see changes made to tracked files:
```sh
git diff
```
To view changes staged for commit:
```sh
git diff --staged
```

## Committing Changes
To save changes to the repository:
```sh
git commit -m "Your commit message"
```

## Renaming and Moving Files
Rename a file and stage the change:
```sh
git mv old_filename new_filename
```

## Removing Files
To remove a file from the repository and the working directory:
```sh
git rm filename
```
To remove a file but keep it in the working directory:
```sh
git rm --cached filename
```

## Viewing File History
To see the history of a specific file:
```sh
git log -- filename
```

## Restoring Files
To restore a modified file to its last committed state:
```sh
git checkout -- filename
```
To unstage a file from the staging area:
```sh
git reset HEAD filename
```