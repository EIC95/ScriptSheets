# File System

## Introduction
The `fs` module in Node.js allows interacting with the file system. It provides methods to read, write, delete, and manage files and directories.

## Reading Files

### Example: Read a File Synchronously
```js
const fs = require("fs");

const data = fs.readFileSync("example.txt", "utf8");
console.log(data);
```

### Example: Read a File Asynchronously
```js
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

## Writing Files

### Example: Write a File Synchronously
```js
fs.writeFileSync("example.txt", "Hello, Node.js!");
console.log("File written successfully");
```

### Example: Write a File Asynchronously
```js
fs.writeFile("example.txt", "Hello, async world!", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully");
});
```

## Appending to a File
```js
fs.appendFile("example.txt", "\nAppending new content", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Content appended");
});
```

## Deleting Files
```js
fs.unlink("example.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File deleted");
});
```

## Working with Directories

### Create a Directory
```js
fs.mkdir("newDir", { recursive: true }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory created");
});
```

### Read Directory Contents
```js
fs.readdir("./", (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Files:", files);
});
```

### Remove a Directory
```js
fs.rmdir("newDir", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory removed");
});
```

