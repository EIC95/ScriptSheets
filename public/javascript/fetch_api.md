# JavaScript Fetch API

## Introduction
The **Fetch API** provides a modern way to make HTTP requests in JavaScript. It is used to retrieve resources from a server asynchronously.

## Basic Fetch Request
```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
```

## Handling Errors
To handle errors properly, always check `response.ok`:
```js
fetch("https://jsonplaceholder.typicode.com/invalid-url")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error("Fetch error:", error));
```

## Sending a POST Request
```js
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: "New Post", body: "Post content", userId: 1 })
})
    .then(response => response.json())
    .then(data => console.log("Created:", data))
    .catch(error => console.error("Error:", error));
```

## Using Fetch with Async/Await
```js
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error("HTTP error! Status: " + response.status);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
```

## Fetching with Query Parameters
```js
const url = new URL("https://jsonplaceholder.typicode.com/posts");
url.searchParams.append("userId", 1);

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
```
