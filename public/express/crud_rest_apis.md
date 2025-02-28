# CRUD and REST APIs in Express.js

## Introduction
CRUD (Create, Read, Update, Delete) operations are fundamental in web development. Express.js makes it easy to create RESTful APIs that follow standard HTTP methods for handling these operations.

## Setting Up Express and MongoDB
First, install the required dependencies:

```bash
npm install express mongoose dotenv
```

Initialize Express and connect to MongoDB:

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

## Creating a Mongoose Model
Define a simple `Item` model:

```javascript
const { Schema, model } = mongoose;

const itemSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    price: Number
});

const Item = model('Item', itemSchema);
```

## CRUD Operations

### Create an Item (POST)
```javascript
app.post('/items', async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
```

### Read All Items (GET)
```javascript
app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});
```

### Read a Single Item (GET)
```javascript
app.get('/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).send('Item not found');
        res.json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
```

### Update an Item (PUT)
```javascript
app.put('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!item) return res.status(404).send('Item not found');
        res.json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
```

### Delete an Item (DELETE)
```javascript
app.delete('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).send('Item not found');
        res.send('Item deleted');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
```

## Starting the Server
```javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```


