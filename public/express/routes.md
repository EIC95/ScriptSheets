# Routes

## Introduction
Routing in Express.js defines how the application responds to client requests at specific URLs (endpoints). Express provides a simple and flexible routing system that allows defining various types of routes using different HTTP methods.

## Defining Basic Routes
A basic route in Express consists of an HTTP method, a path, and a callback function that handles the request and response.

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

### Explanation
- `app.get(path, callback)` defines a route for HTTP GET requests.
- The callback function takes `req` (request) and `res` (response) as parameters.
- `res.send()` sends a response to the client.
- The server listens on port `3000`.

## Handling Different HTTP Methods
Express supports various HTTP methods:

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

## Route Parameters
Dynamic route parameters allow handling variable values in the URL:

```javascript
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});
```

- `req.params` retrieves route parameters (e.g., `/user/123` returns `User ID: 123`).

## Query Parameters
Query parameters allow sending additional data via the URL:

```javascript
app.get('/search', (req, res) => {
    res.send(`Search query: ${req.query.q}`);
});
```

- `req.query` retrieves query string parameters (e.g., `/search?q=express`).

## Grouping Routes with Express Router
For better organization, Express allows grouping routes using `express.Router()`:

```javascript
const router = express.Router();

router.get('/profile', (req, res) => {
    res.send('User profile');
});

router.get('/settings', (req, res) => {
    res.send('User settings');
});

app.use('/user', router);
```

- Routes are prefixed with `/user` (e.g., `/user/profile`, `/user/settings`).

