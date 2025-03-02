# MongoDB Authentication

## Introduction
Authentication with MongoDB in an Express.js application is commonly handled using **MongoDB**, **Mongoose**, **bcryptjs** for password hashing, and **jsonwebtoken (JWT)** for token-based authentication.

## Setting Up MongoDB and Mongoose
First, install the necessary dependencies:

```bash
npm install express mongoose bcryptjs jsonwebtoken dotenv
```

Initialize **Mongoose** and connect to MongoDB:

```javascript
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

const app = express();
app.use(express.json());
```

## Creating the User Model
Define a **User** schema with Mongoose:

```javascript
const bcrypt = require('bcryptjs');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = model('User', userSchema);
```

## Registering a User
Create a route to **register** users:

```javascript
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
});
```

## User Login with JWT
Generate a JWT token upon successful login:

```javascript
const jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send('Invalid credentials');
        }
        
        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.json({ token });
    } catch (err) {
        res.status(500).send(err.message);
    }
});
```

## Protecting Routes with Authentication Middleware
Ensure that certain routes are accessible only to authenticated users:

```javascript
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send('Access denied');
    
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid token');
    }
};

app.get('/dashboard', authenticate, (req, res) => {
    res.send(`Welcome, ${req.user.username}`);
});
```


