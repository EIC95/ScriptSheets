# JavaScript Functions

## Introduction
Functions in JavaScript are reusable blocks of code that perform a specific task. They help improve modularity and maintainability in programs.

## Declaring Functions
### Function Declaration
```js
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!
```

### Function Expression
```js
const greet = function(name) {
    return "Hello, " + name + "!";
};
console.log(greet("Bob")); // Output: Hello, Bob!
```

### Arrow Functions
```js
const greet = (name) => "Hello, " + name + "!";
console.log(greet("Charlie")); // Output: Hello, Charlie!
```

## Function Parameters and Arguments
- **Default Parameters**
  ```js
  function greet(name = "Guest") {
      return "Hello, " + name + "!";
  }
  console.log(greet()); // Output: Hello, Guest!
  ```
- **Rest Parameters**
  ```js
  function sum(...numbers) {
      return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4)); // Output: 10
  ```

## Returning Values
A function can return a value using the `return` statement.
```js
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5)); // Output: 20
```

## Function Scope
JavaScript has **global scope**, **function scope**, and **block scope** (with `let` and `const`).
```js
function example() {
    let x = 10; // Function scope
    if (true) {
        let y = 20; // Block scope
    }
    console.log(x); // Accessible
    // console.log(y); // Error: y is not defined
}
```

## Callback Functions
Functions can be passed as arguments to other functions.
```js
function processUserInput(callback) {
    let name = "David";
    callback(name);
}
processUserInput((name) => console.log("Hello, " + name));
```

## Higher-Order Functions
Functions that take other functions as parameters or return functions.
```js
function multiplier(factor) {
    return (number) => number * factor;
}
const double = multiplier(2);
console.log(double(5)); // Output: 10
```

