# MongoDB

## Introduction
MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. It is widely used in modern web applications due to its scalability and ease of use. In Node.js, we can interact with MongoDB using the `mongodb` package or an Object Data Modeling (ODM) library like Mongoose.

## Installing MongoDB Driver

```sh
npm install mongodb
```

## Connecting to MongoDB

### Example: Basic Connection
```js
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection error:", error);
  } finally {
    await client.close();
  }
}

connectDB();
```

## Creating a Database and Collection

### Example: Creating a Collection
```js
async function createCollection() {
  try {
    await client.connect();
    const db = client.db("myDatabase");
    await db.createCollection("users");
    console.log("Collection created");
  } catch (error) {
    console.error("Error creating collection:", error);
  } finally {
    await client.close();
  }
}

createCollection();
```

## Inserting Data

### Example: Insert One Document
```js
async function insertUser() {
  try {
    await client.connect();
    const db = client.db("myDatabase");
    const result = await db.collection("users").insertOne({ name: "John Doe", age: 30 });
    console.log("User inserted:", result.insertedId);
  } catch (error) {
    console.error("Error inserting user:", error);
  } finally {
    await client.close();
  }
}

insertUser();
```

## Fetching Data

### Example: Find One Document
```js
async function findUser() {
  try {
    await client.connect();
    const db = client.db("myDatabase");
    const user = await db.collection("users").findOne({ name: "John Doe" });
    console.log("User found:", user);
  } catch (error) {
    console.error("Error finding user:", error);
  } finally {
    await client.close();
  }
}

findUser();
```

## Updating Data

### Example: Update One Document
```js
async function updateUser() {
  try {
    await client.connect();
    const db = client.db("myDatabase");
    const result = await db.collection("users").updateOne(
      { name: "John Doe" },
      { $set: { age: 31 } }
    );
    console.log("User updated:", result.modifiedCount);
  } catch (error) {
    console.error("Error updating user:", error);
  } finally {
    await client.close();
  }
}

updateUser();
```

## Deleting Data

### Example: Delete One Document
```js
async function deleteUser() {
  try {
    await client.connect();
    const db = client.db("myDatabase");
    const result = await db.collection("users").deleteOne({ name: "John Doe" });
    console.log("User deleted:", result.deletedCount);
  } catch (error) {
    console.error("Error deleting user:", error);
  } finally {
    await client.close();
  }
}

deleteUser();
```

