# Working with Express.js

## Setting up Express

Install Express with `npm install express` and set up a basic server.

### Installation:
```bash
npm install express
```

### Example:
```javascript
// file app.js
const express = require('express');
const app = express();

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```

## Handling Routes

Define routes to handle different HTTP methods for specific paths.

### Example:
```javascript
// file app.js
const express = require('express');
const app = express();

// Handling GET request
app.get('/', (req, res) => {
  res.send('Home Page');
});

// Handling POST request
app.post('/submit', (req, res) => {
  res.send('Form submitted');
});

// Handling PUT request
app.put('/update', (req, res) => {
  res.send('Update successful');
});

// Handling DELETE request
app.delete('/delete', (req, res) => {
  res.send('Item deleted');
});

app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```

## Middleware Basics

Use middleware functions to modify requests and responses.

### Example:
```javascript
// file app.js
const express = require('express');
const app = express();

// Middleware to log request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
});

// A simple route
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```

## Serving Static Files

Serve static files from a directory using `express.static`.

### Example:
```javascript
// file app.js
const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// A simple route
app.get('/', (req, res) => {
  res.send('Static files served');
});

app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```

## CORS (Cross-Origin Resource Sharing)

Enable CORS to allow cross-origin requests using the `cors` middleware.

### Installation:
```bash
npm install cors
```

### Example:
```javascript
// file app.js
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Simple route
app.get('/', (req, res) => {
  res.send('CORS-enabled server!');
});

app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```

### Example (restricting to specific origins):
```javascript
app.use(cors({
  origin: 'http://example.com'
}));
```

## dotenv (Environment Variables)

Manage environment variables with the `dotenv` package to store sensitive data.

### Installation:
```bash
npm install dotenv
```

### Example:
1. Create a `.env` file in the root of your project:
```dotenv
PORT=3000
DB_URL=mongodb://localhost:27017/myapp
```

2. Load the environment variables in your application using `dotenv`:
```javascript
// file app.js
require('dotenv').config();
const express = require('express');
const app = express();

// Access environment variables
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Environment variables loaded');
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
```