# JavaScript Maps

## Introduction
A `Map` is a collection of key-value pairs in JavaScript. Unlike objects, `Map` allows keys of any type and maintains the order of insertion.

## Creating a Map
```js
const myMap = new Map();
myMap.set("name", "Alice");
myMap.set(42, "Answer");
console.log(myMap);
```

## Getting Values
```js
console.log(myMap.get("name")); // Output: Alice
console.log(myMap.get(42)); // Output: Answer
```

## Checking for a Key
```js
console.log(myMap.has("name")); // Output: true
console.log(myMap.has("age")); // Output: false
```

## Deleting a Key
```js
myMap.delete(42);
console.log(myMap.has(42)); // Output: false
```

## Map Size
```js
console.log(myMap.size); // Output: 1
```

## Iterating Over a Map
```js
myMap.forEach((value, key) => console.log(key, value));

for (let [key, value] of myMap) {
    console.log(key, value);
}
```

## Converting a Map to an Array
```js
const mapArray = [...myMap];
console.log(mapArray); // Output: [["name", "Alice"]]
```