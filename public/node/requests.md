# Handling Requests

## Introduction
Handling HTTP requests is a crucial aspect of building web applications in Node.js. The `http` module provides the core functionality for creating a server, while frameworks like Express simplify request handling with a more intuitive API.

## Creating an HTTP Server

### Example: Basic HTTP Server
```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## Handling Different Request Methods

### Example: Handling GET and POST Requests
```js
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Received a GET request");
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Received a POST request with data: ${body}`);
    });
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## Handling Requests with Express

### Example: Basic Express Server
```js
const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/data", (req, res) => {
  res.json({ received: req.body });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

## Parsing Query Parameters

### Example: Handling Query Strings
```js
app.get("/search", (req, res) => {
  const query = req.query.q;
  res.send(`You searched for: ${query}`);
});
```

## Handling URL Parameters

### Example: Dynamic Route Handling
```js
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
```

## Handling Headers

### Example: Accessing Request Headers
```js
app.get("/headers", (req, res) => {
  res.json(req.headers);
});
```

## Handling JSON Request Body

### Example: Receiving JSON Data
```js
app.post("/json", (req, res) => {
  res.json({ receivedData: req.body });
});
```

