# Basics

## Introduction
Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web applications and APIs. It simplifies the process of handling HTTP requests, managing middleware, and structuring applications. Express is widely used due to its simplicity, speed, and extensive middleware ecosystem.

## Installing Express
Before using Express, make sure you have Node.js installed. You can install Express globally or locally within a project.

To start a new project and install Express, follow these steps:

```sh
mkdir my-express-app
cd my-express-app
npm init -y
npm install express
```

This creates a new Node.js project and installs Express as a dependency.

## Creating a Basic Server
Once Express is installed, you can create a basic server with just a few lines of code:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

### Explanation
- `express()` creates an Express application instance.
- `app.get()` defines a route that responds to GET requests at the root URL (`/`).
- `res.send()` sends a plain text response.
- `app.listen(3000, callback)` starts the server on port `3000`.

## Handling Different HTTP Methods
Express makes it easy to handle different types of HTTP requests:

```javascript
app.post('/submit', (req, res) => {
    res.send('POST request received');
});

app.put('/update', (req, res) => {
    res.send('PUT request received');
});

app.delete('/delete', (req, res) => {
    res.send('DELETE request received');
});
```

## Using Middleware
Middleware functions in Express process requests before they reach the final route handler. The following example demonstrates a simple logging middleware:

```javascript
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});
```

- `app.use()` applies middleware to all incoming requests.
- `next()` passes control to the next middleware or route handler.

## Serving Static Files
To serve static files (e.g., HTML, CSS, images), use the built-in middleware `express.static()`:

```javascript
app.use(express.static('public'));
```

This allows users to access files placed in the `public` directory, such as `public/index.html`.

## Query Parameters and Route Parameters
Express allows handling query parameters and dynamic route parameters:

```javascript
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.get('/search', (req, res) => {
    res.send(`Search query: ${req.query.q}`);
});
```

- `req.params` retrieves route parameters (e.g., `/user/123`).
- `req.query` retrieves query string parameters (e.g., `/search?q=express`).

