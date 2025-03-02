# Async/Await

## Introduction
`async/await` is a modern syntax for handling asynchronous operations in JavaScript. It simplifies working with Promises by allowing asynchronous code to be written in a more synchronous style.

## Using `async` and `await`

### Example: Basic Async Function
```js
async function fetchData() {
  return "Data retrieved";
}

fetchData().then((data) => console.log(data));
```

## Using `await` with Promises

### Example: Awaiting a Promise
```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log("Start");
  await delay(2000);
  console.log("End after 2 seconds");
}

asyncFunction();
```

## Handling Errors with `try...catch`

### Example: Error Handling in Async Functions
```js
async function fetchDataWithError() {
  try {
    let response = await fetch("invalid-url");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataWithError();
```

## Using `async/await` with File System Operations

### Example: Reading a File
```js
const fs = require("fs").promises;

async function readFileAsync() {
  try {
    const data = await fs.readFile("example.txt", "utf8");
    console.log("File content:", data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

readFileAsync();
```

## Running Multiple Async Functions Concurrently

### Example: Using `Promise.all` with `async/await`
```js
async function task1() {
  return new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000));
}

async function task2() {
  return new Promise((resolve) => setTimeout(() => resolve("Task 2 done"), 2000));
}

async function runTasks() {
  const results = await Promise.all([task1(), task2()]);
  console.log("All tasks completed:", results);
}

runTasks();
```

