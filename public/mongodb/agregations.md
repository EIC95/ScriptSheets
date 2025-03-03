# Aggregations

## Introduction
Aggregation in MongoDB is a powerful framework for data processing and transformation. It allows performing computations on data, such as filtering, grouping, and sorting, using the `aggregate()` method.

## Basic Aggregation Pipeline
The aggregation pipeline processes documents through a series of stages, each performing an operation on the data.

### Example
```js
db.users.aggregate([
  { $match: { age: { $gte: 18 } } }, // Filter users aged 18 and above
  { $group: { _id: "$status", total: { $sum: 1 } } } // Group by status and count
])
```

## Aggregation Stages
### `$match` (Filtering Data)
Filters documents based on a condition.
```js
db.orders.aggregate([
  { $match: { status: "delivered" } }
])
```

### `$group` (Grouping Data)
Groups documents by a field and performs aggregations like counting or summing.
```js
db.sales.aggregate([
  { $group: { _id: "$product", totalSales: { $sum: "$amount" } } }
])
```

### `$sort` (Sorting Results)
Sorts documents in ascending (`1`) or descending (`-1`) order.
```js
db.products.aggregate([
  { $sort: { price: -1 } } // Sort by price descending
])
```

### `$project` (Selecting Specific Fields)
Modifies the structure of the documents.
```js
db.users.aggregate([
  { $project: { name: 1, email: 1, _id: 0 } }
])
```

### `$limit` (Limiting Results)
Restricts the number of documents returned.
```js
db.orders.aggregate([
  { $limit: 5 }
])
```

### `$lookup` (Joining Collections)
Performs a left join between collections.
```js
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "_id",
      as: "customerDetails"
    }
  }
])
```

### `$unwind` (Deconstructing Arrays)
Splits an array field into multiple documents.
```js
db.orders.aggregate([
  { $unwind: "$items" }
])
```

### `$addFields` (Adding Computed Fields)
Adds new fields to documents.
```js
db.users.aggregate([
  { $addFields: { fullName: { $concat: ["$firstName", " ", "$lastName"] } } }
])
```

### `$replaceRoot` (Replacing Root Document)
Replaces the root document with a specified sub-document.
```js
db.orders.aggregate([
  { $replaceRoot: { newRoot: "$customerDetails" } }
])
```

### `$out` (Saving Aggregation Results to a Collection)
Saves the output of an aggregation to a new collection.
```js
db.sales.aggregate([
  { $group: { _id: "$product", totalSales: { $sum: "$amount" } } },
  { $out: "aggregated_sales" }
])
```

### `$merge` (Merging Results into a Collection)
Merges aggregation results into an existing collection.
```js
db.sales.aggregate([
  { $group: { _id: "$product", totalSales: { $sum: "$amount" } } },
  { $merge: { into: "aggregated_sales", whenMatched: "merge", whenNotMatched: "insert" } }
])
```
