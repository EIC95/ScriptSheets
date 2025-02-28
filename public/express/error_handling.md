# Error Handling

## Introduction
Error handling in Express.js is an essential part of building robust applications. Express provides a flexible mechanism for handling errors using middleware functions specifically designed to process errors.

## Basic Error Handling Middleware
An error-handling middleware function has four parameters: `(err, req, res, next)`. This function is used to catch and process errors that occur during request handling.

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    throw new Error('Something went wrong!'); // Simulate an error
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

## Handling Asynchronous Errors
When dealing with asynchronous code, errors should be passed to `next()` to ensure they are handled properly by Express.

```javascript
app.get('/async', async (req, res, next) => {
    try {
        await someAsyncFunction();
        res.send('Success');
    } catch (error) {
        next(error); // Pass the error to the error-handling middleware
    }
});
```

## Custom Error Classes
For better error management, custom error classes can be created to handle different types of errors.

```javascript
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
        this.status = 404;
    }
}

app.use((req, res, next) => {
    next(new NotFoundError('Resource not found'));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.name, message: err.message });
});
```

## Centralized Error Handling
A centralized error-handling structure improves code maintainability.

```javascript
const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
};

app.use(errorHandler);
```


