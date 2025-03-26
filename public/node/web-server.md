# Creating a Web Server

## HTTP Module Basics

### Example:
```javascript
// file server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Node.js Web Server!');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```

## Handling Requests and Responses

### Example:
```javascript
// file server.js
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Welcome to the home page!');
  } else if (url === '/about') {
    res.end('This is the about page.');
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```

## Routing in a Basic Server

### Example:
```javascript
// file server.js
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/' && method === 'GET') {
    res.end('Home Page');
  } else if (url === '/contact' && method === 'GET') {
    res.end('Contact Us');
  } else if (url === '/contact' && method === 'POST') {
    res.end('Contact form submitted');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```