# Error Handling Middleware in Express.js

## Creating Error Handling Middleware

Error-handling middleware has a specific signature: it takes four arguments — `err`, `req`, `res`, and `next`.

### Basic Error Handling Middleware:
```javascript
// file app.js
const express = require('express');
const app = express();

// Sample route that generates an error
app.get('/', (req, res) => {
  throw new Error('Something went wrong!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).send('Something went wrong!'); // Send a generic error message
});

app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```

### Custom Error Handling:
You can create custom error classes to provide more specific error messages.

```javascript
// file app.js
class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

app.get('/not-found', (req, res, next) => {
  const error = new CustomError('Resource not found', 404);
  next(error);
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send(err.message || 'Something went wrong!');
});
```

## Handling Uncaught Errors with Middleware

You can catch unhandled errors globally and send a response to the client.

```javascript
// file app.js
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Exit the process
});
```

## Handling Different Types of Errors

You can also handle different error types based on status codes, or based on the environment (e.g., development vs production).

### Development Mode:
```javascript
// file app.js
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode || 500).json({
      message: err.message,
      stack: err.stack,
    });
  } else {
    res.status(err.statusCode || 500).send('Something went wrong!');
  }
});
```

### Production Mode:
```javascript
// file app.js
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    res.status(err.statusCode || 500).send('Something went wrong!');
  }
});
```

## Catching Async Errors

In asynchronous routes, use `try-catch` blocks or pass errors to the next middleware using `next()`.

### Example with Async/Await:
```javascript
// file app.js
app.get('/async-error', async (req, res, next) => {
  try {
    const result = await someAsyncFunction();
    res.send(result);
  } catch (err) {
    next(err); // Pass error to the error handling middleware
  }
});
```