# Git Configuration

## Checking Configuration
To view the current Git configuration settings:
```sh
git config --list
```

## Global vs. Local Configuration
Git stores configuration settings at different levels:
- **System-wide**: Applies to all users on the machine (`/etc/gitconfig`).
- **User-specific**: Applies to a single user (`~/.gitconfig` or `~/.config/git/config`).
- **Repository-specific**: Applies only to a specific repository (`.git/config`).

## Setting Up User Information
Git requires your name and email for commits:
```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Configuring the Default Editor
Set your preferred text editor for commit messages:
```sh
git config --global core.editor "vim"  # Replace with nano, code, etc.
```

## Enabling Colored Output
To improve readability with colored output:
```sh
git config --global color.ui auto
```

## Setting Up Aliases
Create shortcuts for commonly used Git commands:
```sh
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.st status
```
Now, instead of typing `git commit`, you can use `git cm`.

## Configuring Line Endings
Handle line ending differences between Windows and Unix:
```sh
# Windows users:
git config --global core.autocrlf true

# macOS/Linux users:
git config --global core.autocrlf input
```

## Ignoring Files Globally
To define files and folders that should be ignored across all repositories:
```sh
git config --global core.excludesfile ~/.gitignore_global
```
Then, edit `~/.gitignore_global` and add patterns like:
```
*.log
node_modules/
.DS_Store
```

## Viewing a Specific Configuration Value
To check a specific configuration setting:
```sh
git config --global user.name
```