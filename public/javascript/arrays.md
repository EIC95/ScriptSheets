# JavaScript Arrays

## Introduction
Arrays in JavaScript are used to store multiple values in a single variable. They are dynamic, meaning they can grow and shrink as needed.

## Creating Arrays
### Using Array Literals
```js
let fruits = ["Apple", "Banana", "Cherry"];
```
### Using the `new Array()` Constructor
```js
let numbers = new Array(1, 2, 3, 4, 5);
```

## Accessing Elements
Elements in an array are accessed using their index, starting from `0`.
```js
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
```

## Modifying Arrays
You can modify an array by changing values at specific indexes.
```js
fruits[1] = "Mango";
console.log(fruits); // Output: ["Apple", "Mango", "Cherry"]
```

## Array Methods
### Adding Elements
- **`push()`** (adds to the end)
  ```js
  fruits.push("Orange");
  console.log(fruits); // Output: ["Apple", "Mango", "Cherry", "Orange"]
  ```
- **`unshift()`** (adds to the beginning)
  ```js
  fruits.unshift("Grapes");
  console.log(fruits); // Output: ["Grapes", "Apple", "Mango", "Cherry", "Orange"]
  ```

### Removing Elements
- **`pop()`** (removes the last element)
  ```js
  fruits.pop();
  console.log(fruits); // Output: ["Grapes", "Apple", "Mango", "Cherry"]
  ```
- **`shift()`** (removes the first element)
  ```js
  fruits.shift();
  console.log(fruits); // Output: ["Apple", "Mango", "Cherry"]
  ```

### Finding Elements
- **`indexOf()`**
  ```js
  console.log(fruits.indexOf("Mango")); // Output: 1
  ```
- **`includes()`**
  ```js
  console.log(fruits.includes("Banana")); // Output: false
  ```

### Iterating Over Arrays
- **Using `forEach()`**
  ```js
  fruits.forEach(fruit => console.log(fruit));
  ```
- **Using `map()` (returns a new array)**
  ```js
  let uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
  console.log(uppercaseFruits);
  ```

### Filtering and Sorting
- **`filter()`**
  ```js
  let shortFruits = fruits.filter(fruit => fruit.length < 6);
  console.log(shortFruits);
  ```
- **`sort()`**
  ```js
  fruits.sort();
  console.log(fruits);
  ```

## Multi-Dimensional Arrays
Arrays can store other arrays, forming a multi-dimensional structure.
```js
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6
```

