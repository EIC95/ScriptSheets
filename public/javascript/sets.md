# JavaScript Sets

## Sets
A `Set` is a collection of unique values in JavaScript. It does not allow duplicate entries.

### Creating a Set
```js
const mySet = new Set([1, 2, 3, 4, 4]);
console.log(mySet); // Output: Set { 1, 2, 3, 4 }
```

### Adding and Deleting Elements
```js
mySet.add(5);
console.log(mySet); // Output: Set { 1, 2, 3, 4, 5 }

mySet.delete(3);
console.log(mySet); // Output: Set { 1, 2, 4, 5 }
```

### Checking for an Element
```js
console.log(mySet.has(2)); // Output: true
console.log(mySet.has(10)); // Output: false
```

### Set Size
```js
console.log(mySet.size); // Output: 4
```

### Iterating Over a Set
```js
mySet.forEach(value => console.log(value));

for (let value of mySet) {
    console.log(value);
}
```

### Converting a Set to an Array
```js
const myArray = [...mySet];
console.log(myArray); // Output: [1, 2, 4, 5]
```
