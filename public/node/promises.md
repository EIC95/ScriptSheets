# Promises

## Introduction
Promises are a modern alternative to callbacks for handling asynchronous operations in JavaScript. They help avoid callback hell and make code more readable and maintainable.

## Creating a Promise

### Example: Basic Promise
```js
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

myPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## Using Promises with Asynchronous Functions

### Example: Reading a File with a Promise
```js
const fs = require("fs").promises;

fs.readFile("example.txt", "utf8")
  .then((data) => {
    console.log("File content:", data);
  })
  .catch((error) => {
    console.error("Error reading file:", error);
  });
```

## Chaining Promises

### Example: Promise Chaining
```js
function asyncTask1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task 1 complete"), 1000);
  });
}

function asyncTask2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task 2 complete"), 1000);
  });
}

asyncTask1()
  .then((result1) => {
    console.log(result1);
    return asyncTask2();
  })
  .then((result2) => {
    console.log(result2);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## Handling Multiple Promises

### Example: `Promise.all`
```js
const promise1 = Promise.resolve("First Task Done");
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Second Task Done"), 2000));

Promise.all([promise1, promise2])
  .then((results) => {
    console.log("All tasks completed:", results);
  })
  .catch((error) => {
    console.error("Error in promises:", error);
  });
```

### Example: `Promise.race`
```js
const fastPromise = new Promise((resolve) => setTimeout(() => resolve("Fast task completed"), 1000));
const slowPromise = new Promise((resolve) => setTimeout(() => resolve("Slow task completed"), 3000));

Promise.race([fastPromise, slowPromise])
  .then((result) => {
    console.log("First completed:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

