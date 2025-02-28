# Axios & HTTP Requests

## Introduction
Axios is a popular HTTP client for making requests in Node.js. It provides an easy-to-use API for handling HTTP methods like GET, POST, PUT, and DELETE, and supports features such as request/response interception and automatic JSON parsing.

## Installing Axios

```sh
npm install axios
```

## Making GET Requests

### Example: Simple GET Request
```js
const axios = require("axios");

async function fetchData() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log("Data:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

## Making POST Requests

### Example: Sending Data with a POST Request
```js
async function createPost() {
  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "New Post",
      body: "This is the content of the post.",
      userId: 1,
    });
    console.log("Post Created:", response.data);
  } catch (error) {
    console.error("Error creating post:", error);
  }
}

createPost();
```

## Making PUT Requests

### Example: Updating Data with a PUT Request
```js
async function updatePost() {
  try {
    const response = await axios.put("https://jsonplaceholder.typicode.com/posts/1", {
      title: "Updated Title",
      body: "Updated content.",
      userId: 1,
    });
    console.log("Post Updated:", response.data);
  } catch (error) {
    console.error("Error updating post:", error);
  }
}

updatePost();
```

## Making DELETE Requests

### Example: Deleting a Resource
```js
async function deletePost() {
  try {
    const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
    console.log("Post Deleted:", response.status);
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}

deletePost();
```

## Handling Request Headers

### Example: Custom Headers
```js
async function fetchDataWithHeaders() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1", {
      headers: {
        Authorization: "Bearer your-token-here",
      },
    });
    console.log("Data:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataWithHeaders();
```

## Handling Query Parameters

### Example: Sending Query Parameters
```js
async function fetchWithParams() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: { userId: 1 },
    });
    console.log("Filtered Data:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchWithParams();
```

