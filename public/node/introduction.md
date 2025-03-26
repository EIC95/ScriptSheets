# Introduction

## Installing Node.js

### Windows
1. Download the installer from [nodejs.org](https://nodejs.org/)
2. Run the installer and follow the steps
3. Verify the installation:
   ```sh
   node -v
   npm -v
   ```

### macOS
- Using Homebrew:
  ```sh
  brew install node
  ```
- Verification:
  ```sh
  node -v
  npm -v
  ```

### Linux (Debian/Ubuntu)
```sh
sudo apt update
sudo apt install nodejs npm
node -v
npm -v
```

## Running a Node.js Script

### Running a simple script
Create a file `app.js`:
```js
console.log("Hello, Node.js!");
```

Run it with:
```sh
node app.js
```

### Using npm start
1. Create a `package.json` file:
   ```sh
   npm init -y
   ```
2. Modify the `scripts` section in `package.json`:
   ```json
   "scripts": {
     "start": "node app.js"
   }
   ```
3. Run the script with:
   ```sh
   npm start
   ```