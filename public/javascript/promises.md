# JavaScript Promises

## Introduction
A `Promise` is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states:
- **Pending**: The initial state, before the result is known.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

## Creating a Promise
```js
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});
```

## Handling Promises with `.then()` and `.catch()`
```js
myPromise
    .then(result => console.log(result)) // Output after 2 seconds: Promise resolved
    .catch(error => console.log(error));
```

## Chaining Promises
```js
const fetchData = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data fetched"), 2000);
    });
};

fetchData()
    .then(data => {
        console.log(data);
        return "Processing data";
    })
    .then(processed => console.log(processed))
    .catch(error => console.log(error));
```

## Using `Promise.all`
`Promise.all` runs multiple promises in parallel and waits for all to complete.

```js
const promise1 = new Promise(resolve => setTimeout(() => resolve("First done"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Second done"), 2000));

Promise.all([promise1, promise2]).then(results => console.log(results));
// Output after 2 seconds: ["First done", "Second done"]
```

## Using `Promise.race`
`Promise.race` returns the first settled promise (fulfilled or rejected).

```js
const fast = new Promise(resolve => setTimeout(() => resolve("Fast done"), 1000));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow done"), 3000));

Promise.race([fast, slow]).then(result => console.log(result));
// Output after 1 second: "Fast done"
```
