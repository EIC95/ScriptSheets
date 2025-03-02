# JavaScript Asynchronous Programming

## Introduction
JavaScript is single-threaded, but asynchronous programming allows non-blocking operations using callbacks and `async/await`.

## Callbacks
A callback is a function passed as an argument to another function, commonly used in asynchronous operations.

```js
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}

fetchData(data => console.log(data)); // Output after 2 seconds: Data received
```

## Async/Await
`async` and `await` simplify handling asynchronous code and make it look synchronous.

### Using `async` and `await`
```js
async function fetchData() {
    return "Data fetched";
}

fetchData().then(data => console.log(data));
```

### Using `await` Inside an Async Function
```js
async function fetchWithDelay() {
    const result = await new Promise(resolve => setTimeout(() => resolve("Data received"), 2000));
    console.log(result);
}

fetchWithDelay(); // Output after 2 seconds: Data received
```

## Error Handling with `try...catch`
```js
async function fetchWithError() {
    try {
        const result = await Promise.reject("Error occurred");
        console.log(result);
    } catch (error) {
        console.log(error); // Output: Error occurred
    }
}

fetchWithError();
```
