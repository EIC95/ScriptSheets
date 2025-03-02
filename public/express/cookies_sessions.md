# Cookies and Sessions in Express.js

## Introduction
Cookies and sessions are used to store user-related data on the client and server, respectively. They are essential for maintaining authentication and user state across multiple requests.

## Installing Dependencies
To work with cookies and sessions in Express.js, install the required packages:

```bash
npm install express cookie-parser express-session dotenv
```

Load required modules and configure Express:

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
```

## Working with Cookies
Cookies allow storing small pieces of data in the user's browser.

### Setting a Cookie
```javascript
app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'JohnDoe', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set');
});
```

### Reading a Cookie
```javascript
app.get('/get-cookie', (req, res) => {
    const username = req.cookies.username;
    res.send(`Cookie Value: ${username}`);
});
```

### Deleting a Cookie
```javascript
app.get('/delete-cookie', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie has been deleted');
});
```

## Working with Sessions
Sessions store data on the server and associate it with a unique session ID stored in a cookie.

### Configuring Express Sessions
```javascript
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000 } // Adjust as needed
}));
```

### Storing Data in a Session
```javascript
app.get('/set-session', (req, res) => {
    req.session.user = { name: 'JohnDoe', role: 'admin' };
    res.send('Session data has been set');
});
```

### Accessing Session Data
```javascript
app.get('/get-session', (req, res) => {
    if (req.session.user) {
        res.send(`Session Data: ${JSON.stringify(req.session.user)}`);
    } else {
        res.send('No session data found');
    }
});
```

### Destroying a Session
```javascript
app.get('/destroy-session', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error destroying session');
        }
        res.send('Session destroyed');
    });
});
```


