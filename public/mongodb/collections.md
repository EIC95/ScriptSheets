# Collections and Documents

## Introduction
MongoDB stores data in collections, which are analogous to tables in relational databases. Each collection consists of multiple documents, which are JSON-like objects containing key-value pairs.

## Collections
A collection in MongoDB is a group of documents with no enforced schema, meaning documents within the same collection can have different structures.

### Creating a Collection
Collections are automatically created when inserting a document, but they can also be explicitly created:
```js
// Explicit collection creation
 db.createCollection("users")
```

### Listing Collections
To see all collections in the current database:
```js
show collections
```

## Documents
A document is the basic unit of data in MongoDB, similar to a row in a relational database. It is stored in BSON (Binary JSON) format.

### Example Document
```js
{
  "_id": ObjectId("603d9fbd2f1b2b8b7b8b4567"),
  "name": "Alice",
  "age": 25,
  "email": "alice@example.com",
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}
```

### Inserting a Document
```js
db.users.insertOne({ name: "Bob", age: 30, email: "bob@example.com" })
```

### Retrieving Documents
```js
db.users.find()
```