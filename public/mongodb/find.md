# Document Search

## Introduction
MongoDB provides various methods to retrieve documents from a collection. The most common method is `find()`, which allows filtering and querying data efficiently.

## Retrieving All Documents
To fetch all documents from a collection, use:
```js
db.users.find()
```

## Filtering Documents
To retrieve specific documents, provide a query inside `find()`:
```js
db.users.find({ age: 25 })
```
This will return all documents where `age` is 25.

## Using Comparison Operators
MongoDB supports comparison operators like `$gt`, `$lt`, `$gte`, `$lte`, `$ne`, and `$in`.
```js
db.users.find({ age: { $gt: 25 } }) // Find users older than 25
```

## Retrieving a Single Document
Use `findOne()` to get only the first matching document:
```js
db.users.findOne({ name: "Alice" })
```

## Projection (Selecting Specific Fields)
To retrieve only specific fields, use projection:
```js
db.users.find({ age: 25 }, { name: 1, _id: 0 })
```
This will return only the `name` field and exclude `_id`.

## Sorting Results
Use `sort()` to order results:
```js
db.users.find().sort({ age: 1 }) // Sort by age in ascending order
```

## Limiting Results
To restrict the number of results:
```js
db.users.find().limit(5) // Return only 5 documents
```

