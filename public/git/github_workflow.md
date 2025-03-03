# GitHub Workflow

## Connecting a Local Repository to GitHub
### Initialize a Git Repository
If not already initialized:
```sh
git init
```

### Add a Remote Repository
```sh
git remote add origin https://github.com/username/repository.git
```
To verify the remote:
```sh
git remote -v
```

## Pushing Changes to GitHub
### Add and Commit Changes
```sh
git add .
git commit -m "Initial commit"
```
### Push to GitHub
```sh
git push -u origin main
```

## Pulling Changes from GitHub
To fetch and merge changes from the remote repository:
```sh
git pull origin main
```

## Working with Branches on GitHub
### Push a New Branch
```sh
git push -u origin branch_name
```
### Fetch and Checkout a Remote Branch
```sh
git fetch origin
```
```sh
git checkout -b branch_name origin/branch_name
```
Or using:
```sh
git switch -c branch_name origin/branch_name
```

## Creating a Pull Request
1. Push the branch to GitHub.
2. Go to the repository on GitHub.
3. Click "Compare & pull request."
4. Add a title and description.
5. Click "Create pull request."

## Merging a Pull Request
1. Navigate to the pull request on GitHub.
2. Click "Merge pull request."
3. Delete the branch if no longer needed.

## Cloning a Repository
To clone an existing repository:
```sh
git clone https://github.com/username/repository.git
```


