# NPM (Node Package Manager)

## Introduction
NPM (Node Package Manager) is the default package manager for Node.js. It allows developers to install, manage, and share dependencies for their projects.

## Initializing a Project

### Example: Creating `package.json`
```sh
npm init -y
```
This command generates a default `package.json` file.

## Installing Packages

### Example: Installing a Package
```sh
npm install express
```
This installs `express` and adds it to `node_modules` and `package.json`.

### Example: Installing a Package as a Development Dependency
```sh
npm install nodemon --save-dev
```
This installs `nodemon` as a development dependency.

## Uninstalling Packages

### Example: Removing a Package
```sh
npm uninstall express
```
This removes `express` from the project.

## Listing Installed Packages
```sh
npm list
```
This displays all installed dependencies.

## Updating Packages

### Example: Updating a Specific Package
```sh
npm update express
```

### Example: Updating All Packages
```sh
npm update
```

## Global Packages

### Example: Installing a Global Package
```sh
npm install -g nodemon
```
This installs `nodemon` globally.

### Example: Listing Global Packages
```sh
npm list -g --depth=0
```

## Running Scripts

### Example: Defining a Script in `package.json`
```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

### Example: Running a Script
```sh
npm run dev
```

## Clearing Cache
```sh
npm cache clean --force
```
This clears the NPM cache.