# JavaScript Data Types

## Introduction
JavaScript provides different types of data to handle various kinds of values efficiently. These data types are broadly classified into **Primitive** and **Reference** types. Understanding these data types is crucial for effective JavaScript programming.

## Primitive Data Types
Primitive data types are immutable and stored directly in memory.

| Type       | Description                          | Example               |
|------------|--------------------------------------|-----------------------|
| String     | Represents textual data             | `"Hello"`, `'World'`  |
| Number     | Represents numeric values           | `42`, `3.14`          |
| Boolean    | Represents logical values           | `true`, `false`       |
| Undefined  | Variable declared but not assigned  | `let x;`              |
| Null       | Represents an intentional absence   | `let y = null;`       |
| Symbol     | Unique, immutable identifier        | `Symbol("id")`        |
| BigInt     | Large integer values                | `1234567890123456789n`|

### Example Usage
```js
let name = "John"; // String
typeof name; // "string"

let age = 25; // Number
typeof age; // "number"

let isStudent = true; // Boolean
typeof isStudent; // "boolean"

let x; // Undefined
typeof x; // "undefined"

let y = null; // Null
typeof y; // "object" (this is a known JavaScript quirk)

let uniqueID = Symbol("id"); // Symbol
typeof uniqueID; // "symbol"

let bigNumber = 1234567890123456789n; // BigInt
typeof bigNumber; // "bigint"
```

## Reference Data Types
Reference data types are stored as references in memory rather than the actual value.

| Type     | Description                             | Example                     |
|----------|-----------------------------------------|-----------------------------|
| Object   | Key-value pairs                        | `{ name: "John", age: 30 }` |
| Array    | Ordered collection of values           | `[1, 2, 3, 4, 5]`           |
| Function | A block of reusable code               | `function greet() {}`       |
| Date     | Represents date and time               | `new Date()`                |
| RegExp   | Regular expressions for pattern matching | `/abc/`                   |

### Example Usage
```js
let person = { name: "John", age: 30 }; // Object
typeof person; // "object"

let numbers = [1, 2, 3, 4, 5]; // Array
typeof numbers; // "object"

function greet() {
  return "Hello, World!";
}
typeof greet; // "function"

let today = new Date(); // Date
typeof today; // "object"

let pattern = /abc/; // Regular Expression
typeof pattern; // "object"
```

## Type Conversion
JavaScript allows explicit and implicit type conversions between different data types.

### Implicit Conversion
```js
console.log("5" + 2); // "52" (String concatenation)
console.log("5" - 2); // 3 (String converted to Number)
console.log("5" * "2"); // 10 (Both strings converted to Numbers)
```

### Explicit Conversion
```js
let str = "123";
let num = Number(str); // Converts string to number
console.log(num); // 123

let bool = Boolean("Hello"); // Converts string to boolean
console.log(bool); // true
```
