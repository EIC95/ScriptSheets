# Middleware

## Introduction
Middleware functions in Express.js are functions that execute during the request-response cycle. They have access to the request (`req`), response (`res`), and the `next` function, which passes control to the next middleware.

Middleware can be used for:
- Logging requests
- Parsing request bodies
- Authentication and authorization
- Error handling
- Serving static files

## Creating a Simple Middleware
A basic middleware function logs the request method and URL before passing control to the next middleware or route handler:

```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next(); // Pass control to the next middleware
});

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

## Built-in Middleware
Express provides some built-in middleware functions:

### `express.json()` – Parse JSON request bodies
```javascript
app.use(express.json());

app.post('/data', (req, res) => {
    res.send(`Received JSON: ${JSON.stringify(req.body)}`);
});
```

### `express.urlencoded()` – Parse URL-encoded data
```javascript
app.use(express.urlencoded({ extended: true }));
```

### `express.static()` – Serve static files
```javascript
app.use(express.static('public'));
```

## Third-Party Middleware
There are many third-party middleware packages available for Express:

### `morgan` – Logging HTTP requests
```javascript
const morgan = require('morgan');
app.use(morgan('dev'));
```

### `cors` – Enable Cross-Origin Resource Sharing
```javascript
const cors = require('cors');
app.use(cors());
```

## Error Handling Middleware
An error-handling middleware function has four parameters: `(err, req, res, next)`. It is used to catch and process errors globally:

```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

## Applying Middleware to Specific Routes
Middleware can be applied to specific routes instead of all requests:

```javascript
const authMiddleware = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized');
    }
    next();
};

app.get('/protected', authMiddleware, (req, res) => {
    res.send('This is a protected route');
});
```

Using middleware effectively allows for better organization and modularization of Express applications.

