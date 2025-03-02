# HTTP

## Introduction
The `http` module in Node.js allows creating web servers and handling HTTP requests and responses. It provides functionality for building API endpoints, serving static files, and handling incoming connections.

## Creating a Basic HTTP Server

### Example: Simple Server
```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

## Handling Requests and Responses

### Reading Request Data
```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ received: body }));
    });
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

## Serving JSON Responses
```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello, JSON!" }));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

## Handling Routes Manually
```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

## Using HTTP Methods
```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("GET request received");
  } else if (req.method === "POST" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("POST request received");
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

