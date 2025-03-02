# Package Management (pip)

## Introduction

`pip` is the package manager for Python, allowing you to install, update, and manage third-party libraries and dependencies easily.

## Checking if pip is Installed

You can check if `pip` is installed by running:

```sh
pip --version
```

Example output:

```
pip 22.0.4 from /usr/lib/python3.10/site-packages/pip (python 3.10)
```

## Installing a Package

To install a package using `pip`, use:

```sh
pip install package_name
```

Example:

```sh
pip install requests
```

## Installing a Specific Version

You can install a specific version of a package:

```sh
pip install package_name==1.2.3
```

Example:

```sh
pip install numpy==1.21.0
```

## Upgrading a Package

To upgrade a package to the latest version:

```sh
pip install --upgrade package_name
```

Example:

```sh
pip install --upgrade pandas
```

## Listing Installed Packages

To see a list of all installed packages:

```sh
pip list
```

## Checking for Outdated Packages

To check if any installed packages have newer versions available:

```sh
pip list --outdated
```

## Uninstalling a Package

To remove a package:

```sh
pip uninstall package_name
```

Example:

```sh
pip uninstall flask
```

## Installing Packages from a Requirements File

A `requirements.txt` file is commonly used to manage dependencies for a project. You can install all packages listed in this file with:

```sh
pip install -r requirements.txt
```

Example `requirements.txt` file:

```
numpy==1.21.0
pandas>=1.3.0
requests
```

