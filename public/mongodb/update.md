# Document Update

## Introduction
MongoDB provides methods to update documents in a collection. Updates can be applied to single or multiple documents using `updateOne()`, `updateMany()`, and `replaceOne()`.

## Updating a Single Document
Use `updateOne()` to modify the first matching document:
```js
db.users.updateOne(
  { name: "Alice" }, // Filter condition
  { $set: { age: 26 } } // Update operation
)
```

## Updating Multiple Documents
Use `updateMany()` to modify multiple documents matching the condition:
```js
db.users.updateMany(
  { age: { $lt: 30 } }, // Filter condition
  { $set: { status: "young" } } // Update operation
)
```

## Replacing a Document
Use `replaceOne()` to completely replace an existing document:
```js
db.users.replaceOne(
  { name: "Alice" },
  { name: "Alice", age: 27, city: "New York" } // New document
)
```

## Using Update Operators
### Incrementing a Field (`$inc`)
```js
db.users.updateOne(
  { name: "Bob" },
  { $inc: { age: 1 } } // Increases age by 1
)
```

### Updating Only If a Field Exists (`$set`)
```js
db.users.updateOne(
  { name: "Charlie" },
  { $set: { email: "charlie@example.com" } }
)
```

### Adding an Element to an Array (`$push`)
```js
db.users.updateOne(
  { name: "Alice" },
  { $push: { hobbies: "reading" } }
)
```

