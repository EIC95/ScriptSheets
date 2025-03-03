# Collaboration in Git

## Forking a Repository
Forking allows you to copy a repository to your GitHub account.
1. Navigate to the repository on GitHub.
2. Click "Fork" in the top-right corner.
3. The forked repository appears in your account.

## Cloning a Forked Repository
To work locally on a forked repository:
```sh
git clone https://github.com/your-username/repository.git
```

## Adding the Original Repository as an Upstream Remote
To keep your fork up to date:
```sh
git remote add upstream https://github.com/original-owner/repository.git
```
To verify:
```sh
git remote -v
```

## Fetching and Merging Upstream Changes
To get updates from the original repository:
```sh
git fetch upstream
```
Merge changes into your local branch:
```sh
git merge upstream/main
```

## Creating and Submitting a Pull Request
1. Push changes to your fork:
   ```sh
   git push origin branch_name
   ```
2. Go to the repository on GitHub.
3. Click "Compare & pull request."
4. Provide a description and submit the pull request.

## Code Reviews and Approvals
1. Reviewers comment on the pull request.
2. Make necessary changes and push updates.
3. Once approved, the pull request can be merged.

## Resolving Merge Conflicts
If there are conflicts, Git will highlight them in the affected files. Edit the files to resolve conflicts, then:
```sh
git add .
git commit -m "Resolved merge conflicts"
```
Push the changes:
```sh
git push origin branch_name
```
