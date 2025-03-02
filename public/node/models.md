# Data Models

## Introduction
Data models define the structure of data within an application. In Node.js, we typically use Object Data Modeling (ODM) libraries like Mongoose when working with MongoDB to define schemas and enforce validation rules.

## Setting Up Mongoose

### Installation
```sh
npm install mongoose
```

### Connecting to MongoDB
```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error:", err));
```

## Defining a Schema

### Example: User Schema
```js
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18 },
  createdAt: { type: Date, default: Date.now }
});

const User = model("User", userSchema);
```

## Creating and Saving Data

### Example: Creating a User
```js
async function createUser() {
  const user = new User({ name: "John Doe", email: "john@example.com", age: 30 });
  try {
    const savedUser = await user.save();
    console.log("User saved:", savedUser);
  } catch (error) {
    console.error("Error saving user:", error);
  }
}

createUser();
```

## Querying Data

### Example: Finding Users
```js
async function findUsers() {
  try {
    const users = await User.find();
    console.log("Users:", users);
  } catch (error) {
    console.error("Error finding users:", error);
  }
}

findUsers();
```

## Updating Data

### Example: Updating a User
```js
async function updateUser(id) {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { age: 35 }, { new: true });
    console.log("Updated User:", updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
  }
}

updateUser("USER_ID_HERE");
```

## Deleting Data

### Example: Deleting a User
```js
async function deleteUser(id) {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    console.log("Deleted User:", deletedUser);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

deleteUser("USER_ID_HERE");
```

