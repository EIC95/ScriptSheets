# JavaScript Mathematics

## Introduction
JavaScript provides various mathematical operations and functions to handle numerical computations efficiently. These include basic arithmetic, built-in Math functions, and working with numbers.

## Basic Arithmetic Operations
JavaScript supports standard arithmetic operators:

| Operator | Description     | Example     | Output |
|----------|---------------|-------------|--------|
| `+`      | Addition       | `5 + 3`     | `8`    |
| `-`      | Subtraction    | `10 - 4`    | `6`    |
| `*`      | Multiplication | `2 * 6`     | `12`   |
| `/`      | Division       | `8 / 2`     | `4`    |
| `%`      | Modulus        | `10 % 3`    | `1`    |
| `**`     | Exponentiation | `2 ** 3`    | `8`    |

### Example Usage:
```js
let a = 10;
let b = 4;
console.log(a + b); // 14
console.log(a - b); // 6
console.log(a * b); // 40
console.log(a / b); // 2.5
console.log(a % b); // 2
console.log(a ** b); // 10000
```

## Math Object
JavaScript provides a built-in `Math` object containing various mathematical functions and constants.

### Math Constants
| Constant        | Description           | Value |
|----------------|-----------------------|----------------|
| `Math.PI`      | Pi constant            | `3.14159265359` |
| `Math.E`       | Euler's number         | `2.71828182846` |
| `Math.SQRT2`   | Square root of 2       | `1.41421356237` |
| `Math.LN2`     | Natural log of 2       | `0.69314718056` |

### Math Methods
| Method            | Description                                | Example |
|-------------------|--------------------------------------------|---------|
| `Math.abs(x)`    | Returns absolute value                     | `Math.abs(-7)` → `7` |
| `Math.round(x)`  | Rounds to nearest integer                  | `Math.round(4.7)` → `5` |
| `Math.floor(x)`  | Rounds down to nearest integer             | `Math.floor(4.9)` → `4` |
| `Math.ceil(x)`   | Rounds up to nearest integer               | `Math.ceil(4.1)` → `5` |
| `Math.max(a, b)` | Returns the largest number                 | `Math.max(10, 20, 5)` → `20` |
| `Math.min(a, b)` | Returns the smallest number                | `Math.min(10, 20, 5)` → `5` |
| `Math.pow(x, y)` | Raises `x` to the power of `y`            | `Math.pow(2, 3)` → `8` |
| `Math.sqrt(x)`   | Returns square root                        | `Math.sqrt(25)` → `5` |
| `Math.random()`  | Returns a random number between 0 and 1    | `Math.random()` → `0.8573` |

### Example Usage:
```js
console.log(Math.PI); // 3.14159265359
console.log(Math.abs(-10)); // 10
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.max(5, 15, 10)); // 15
console.log(Math.min(5, 15, 10)); // 5
console.log(Math.pow(3, 3)); // 27
console.log(Math.sqrt(16)); // 4
console.log(Math.random()); // Random number between 0 and 1
```

## Random Numbers
To generate a random integer within a specific range:
```js
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100)); // Random integer between 1 and 100
```

