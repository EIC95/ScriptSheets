# Getting Started

## What is Git?
Git is a distributed version control system that allows developers to track changes in their code, collaborate efficiently, and maintain different versions of a project.

## Installing Git
To install Git, follow these steps:

### Windows
1. Download Git from [git-scm.com](https://git-scm.com/downloads).
2. Run the installer and follow the setup instructions.
3. Verify the installation by running:
   ```sh
   git --version
   ```

### macOS
1. Install Git using Homebrew:
   ```sh
   brew install git
   ```
2. Verify the installation:
   ```sh
   git --version
   ```

### Linux
1. Install Git using the package manager:
   ```sh
   sudo apt install git  # Debian/Ubuntu
   sudo yum install git  # CentOS/RHEL
   sudo dnf install git  # Fedora
   ```
2. Verify the installation:
   ```sh
   git --version
   ```

## Initial Setup
After installing Git, configure your user details:
```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
To check the configuration:
```sh
git config --list
```

## Basic Commands
### Initialize a Repository
To start tracking a project with Git:
```sh
git init
```

### Cloning a Repository
To clone an existing repository:
```sh
git clone <repository-url>
```

### Checking Repository Status
To see the current state of your repository:
```sh
git status
```

### Staging Files
To add files to the staging area:
```sh
git add <file>
```
To add all modified files:
```sh
git add .
```

### Committing Changes
To save changes to the repository:
```sh
git commit -m "Commit message"
```

### Viewing Commit History
To view the commit history:
```sh
git log
```

