# Authentication

## Introduction
Authentication in Express.js is the process of verifying the identity of a user before granting access to protected resources. Common authentication methods include:

- **Session-based authentication** (using cookies and sessions)
- **Token-based authentication** (using JWTs)
- **OAuth authentication** (third-party login services)

## Using JSON Web Tokens (JWT)
JWT is a widely used method for token-based authentication. It involves generating a token upon login and verifying it for protected routes.

### Installing Dependencies
```bash
npm install express jsonwebtoken bcryptjs dotenv
```

### Setting Up JWT Authentication
```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

const users = []; // Simulated user database

const generateToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: users.length + 1, username, password: hashedPassword };
    users.push(user);
    res.status(201).send('User registered');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Invalid credentials');
    }
    const token = generateToken(user);
    res.json({ token });
});

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send('Access denied');
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
};

app.get('/protected', authenticate, (req, res) => {
    res.send(`Hello, ${req.user.username}. This is a protected route.`);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

## Using Session-Based Authentication
Session-based authentication stores session data on the server and uses cookies to track user sessions.

### Installing Dependencies
```bash
npm install express-session
```

### Setting Up Sessions
```javascript
const session = require('express-session');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true in production with HTTPS
}));

app.post('/login', (req, res) => {
    const { username } = req.body;
    req.session.user = { username };
    res.send('Logged in');
});

app.get('/profile', (req, res) => {
    if (!req.session.user) return res.status(401).send('Unauthorized');
    res.send(`Welcome, ${req.session.user.username}`);
});

app.post('/logout', (req, res) => {
    req.session.destroy();
    res.send('Logged out');
});
```


