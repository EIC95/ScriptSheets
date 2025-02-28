# Security

## Introduction
Security is a critical aspect of any Node.js application. Proper security measures help protect sensitive data, prevent unauthorized access, and mitigate vulnerabilities such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).

## Securing Environment Variables
Using environment variables to store sensitive data like API keys and database credentials prevents them from being exposed in the codebase.

### Example: Using dotenv
```sh
npm install dotenv
```

```js
require("dotenv").config();
const dbPassword = process.env.DB_PASSWORD;
```

## Input Validation
Validating user input helps prevent security vulnerabilities like SQL injection and XSS.

### Example: Using express-validator
```sh
npm install express-validator
```

```js
const { body, validationResult } = require("express-validator");

app.post("/register", [
  body("email").isEmail(),
  body("password").isLength({ min: 8 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send("User registered successfully");
});
```

## Hashing Passwords
Storing passwords in plaintext is a major security risk. Using bcrypt to hash passwords before saving them is a common best practice.

### Example: Hashing a Password with bcrypt
```sh
npm install bcrypt
```

```js
const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}
```

## Authentication with JWT
JSON Web Tokens (JWT) are used for secure authentication in web applications.

### Example: Generating and Verifying a JWT
```sh
npm install jsonwebtoken
```

```js
const jwt = require("jsonwebtoken");
const secretKey = "your_secret_key";

// Generating a token
function generateToken(user) {
  return jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });
}

// Verifying a token
function verifyToken(token) {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
}
```

## Preventing Cross-Site Scripting (XSS)
XSS attacks inject malicious scripts into web pages viewed by other users. Using libraries like `helmet` helps mitigate this risk.

### Example: Using Helmet
```sh
npm install helmet
```

```js
const helmet = require("helmet");
app.use(helmet());
```

## Preventing Cross-Site Request Forgery (CSRF)
CSRF attacks trick users into performing unwanted actions on a web application.

### Example: Using csurf
```sh
npm install csurf
```

```js
const csurf = require("csurf");
const csrfProtection = csurf();

app.use(csrfProtection);
```

## Restricting API Access
Rate limiting prevents abuse by limiting the number of requests a client can make.

### Example: Using express-rate-limit
```sh
npm install express-rate-limit
```

```js
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(limiter);
```

## Secure HTTP Headers
Setting HTTP security headers adds an extra layer of protection.

### Example: Using Helmet to Secure Headers
```js
app.use(helmet());
```

## Keeping Dependencies Updated
Regularly updating dependencies helps prevent vulnerabilities in outdated packages.

### Example: Checking for Vulnerabilities
```sh
npm audit
npm update
```

