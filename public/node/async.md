# Asynchronous Programming

Asynchronous programming in Node.js is essential for handling operations like I/O without blocking the main thread. This page covers callbacks, promises, and async/await.

## Callbacks

Callbacks are functions that are passed as arguments to other functions and are executed once an operation is completed. While they are widely used in Node.js, they can lead to "callback hell" when nested deeply.

### Example:
```javascript
// file readFile.js
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('File content:', data);
  }
});
```

## Promises

A Promise represents a value that may be available now or in the future. It allows chaining of `.then()` for success and `.catch()` for handling errors, making asynchronous code more readable than callbacks.

### Example:
```javascript
// file fetchData.js
const fetchData = new Promise((resolve, reject) => {
  const data = { name: 'Node.js' };
  const success = true;

  if (success) {
    resolve(data);
  } else {
    reject('Data fetch failed');
  }
});

fetchData
  .then(data => console.log('Data:', data))
  .catch(err => console.log('Error:', err));
```

## Async/Await

Async/Await is a syntactic sugar built on top of Promises. It makes asynchronous code look and behave like synchronous code, improving readability.

### Example:
```javascript
// file fetchData.js
const fetchData = () => {
  return new Promise((resolve, reject) => {
    const data = { name: 'Node.js' };
    const success = true;

    if (success) {
      resolve(data);
    } else {
      reject('Data fetch failed');
    }
  });
};

const getData = async () => {
  try {
    const data = await fetchData();
    console.log('Data:', data);
  } catch (err) {
    console.log('Error:', err);
  }
};

getData();
```