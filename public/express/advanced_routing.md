# Advanced Routing

## Introduction
Express.js provides a powerful routing system that allows developers to define complex routes, handle different HTTP methods, and use route parameters, query strings, and middleware effectively.

## Route Parameters
Route parameters allow dynamic values to be passed in the URL.

```javascript
const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

## Query Parameters
Query parameters are useful for filtering, sorting, and searching data.

```javascript
app.get('/search', (req, res) => {
    const { keyword, limit } = req.query;
    res.send(`Search for: ${keyword}, Limit: ${limit}`);
});
```

## Route Grouping with Express Router
Using `express.Router()`, we can organize routes into separate modules.

```javascript
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('User list');
});

userRouter.get('/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.use('/users', userRouter);
```

## Handling Multiple HTTP Methods
A single route can handle multiple HTTP methods.

```javascript
app.route('/products')
    .get((req, res) => res.send('Get all products'))
    .post((req, res) => res.send('Create a product'))
    .put((req, res) => res.send('Update a product'))
    .delete((req, res) => res.send('Delete a product'));
```

## Middleware in Routes
Middleware functions can be applied to specific routes to handle authentication, logging, or validation.

```javascript
const authMiddleware = (req, res, next) => {
    console.log('Authenticating...');
    next();
};

app.get('/dashboard', authMiddleware, (req, res) => {
    res.send('Dashboard content');
});
```


