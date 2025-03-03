# Document Deletion

## Introduction
MongoDB provides methods to remove documents from a collection. You can delete a single document or multiple documents using `deleteOne()` and `deleteMany()`.

## Deleting a Single Document
Use `deleteOne()` to remove the first document that matches the condition:
```js
db.users.deleteOne({ name: "Alice" })
```

### Output Example
```js
{
  "acknowledged": true,
  "deletedCount": 1
}
```

## Deleting Multiple Documents
Use `deleteMany()` to remove all documents matching the condition:
```js
db.users.deleteMany({ age: { $lt: 18 } })
```
### Output Example
```js
{
  "acknowledged": true,
  "deletedCount": 3
}
```

## Deleting All Documents in a Collection
To remove all documents from a collection (but keep the collection itself):
```js
db.users.deleteMany({})
```

## Dropping a Collection
To remove an entire collection along with its documents:
```js
db.users.drop()
```

