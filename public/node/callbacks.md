# Callbacks

## Introduction
Callbacks are functions passed as arguments to other functions. They allow asynchronous operations, such as reading files, making HTTP requests, or querying a database, to execute without blocking the main thread.

## Basic Callback Example

### Example: Simple Callback Function
```js
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function afterGreeting() {
  console.log("This is executed after the greeting.");
}

greet("Alice", afterGreeting);
```

## Asynchronous Callbacks

### Example: Reading a File with a Callback
```js
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
```

## Handling Errors in Callbacks

### Example: Error Handling in a Callback
```js
function divide(a, b, callback) {
  if (b === 0) {
    callback("Cannot divide by zero", null);
    return;
  }
  callback(null, a / b);
}

divide(10, 2, (error, result) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Result:", result);
  }
});
```

## Callback Hell

Callback hell happens when multiple nested callbacks make the code hard to read and maintain.

### Example: Nested Callbacks (Callback Hell)
```js
fs.readFile("file1.txt", "utf8", (err, data1) => {
  if (err) return console.error(err);
  fs.readFile("file2.txt", "utf8", (err, data2) => {
    if (err) return console.error(err);
    fs.readFile("file3.txt", "utf8", (err, data3) => {
      if (err) return console.error(err);
      console.log("All files read successfully.");
    });
  });
});
```

Using Promises or `async/await` can help avoid callback hell.

