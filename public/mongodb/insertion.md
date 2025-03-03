# Data Insertion

## Introduction
In MongoDB, data is inserted into collections as documents. MongoDB provides different methods to insert single or multiple documents into a collection.

## Inserting a Single Document
To insert a single document into a collection, use the `insertOne()` method:
```js
db.users.insertOne({
  name: "Alice",
  age: 25,
  email: "alice@example.com"
})
```
### Output Example
```js
{
  "acknowledged": true,
  "insertedId": ObjectId("603d9fbd2f1b2b8b7b8b4567")
}
```

## Inserting Multiple Documents
To insert multiple documents at once, use the `insertMany()` method:
```js
db.users.insertMany([
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 28, email: "charlie@example.com" }
])
```
### Output Example
```js
{
  "acknowledged": true,
  "insertedIds": {
    "0": ObjectId("603d9fbd2f1b2b8b7b8b4568"),
    "1": ObjectId("603d9fbd2f1b2b8b7b8b4569")
  }
}
```

## Auto-generated `_id`
Each document in MongoDB automatically gets an `_id` field, which serves as a unique identifier.

