# JavaScript Basics

## Introduction
JavaScript is a versatile programming language used primarily for web development. It allows developers to create dynamic and interactive websites. This guide covers the fundamental concepts of JavaScript, including syntax, variables, data types, operators, and output methods.

## Comments
Comments help improve code readability and maintainability.

- **Single-line comment:** Starts with `//`
  ```js
  // This is a single-line comment
  ```
- **Multi-line comment:** Enclosed between `/* */`
  ```js
  /*
   This is a multi-line comment
  */
  ```

## Console & Output
JavaScript provides multiple ways to display output:

- **Console Logging:**
  ```js
  console.log("Hello, World!");
  ```
- **Alert Box:**
  ```js
  alert("Welcome to JavaScript!");
  ```
- **Writing to HTML:**
  ```js
  document.write("Hello, World!");
  ```

## Variables
Variables store data values and can be declared using `var`, `let`, or `const`.

- **Using `var` (older method):**
  ```js
  var name = "John";
  ```
- **Using `let` (modern way for variable declaration):**
  ```js
  let age = 25;
  ```
- **Using `const` (for constants):**
  ```js
  const pi = 3.14;
  ```

## Data Types
JavaScript has different types of data:

| Type       | Example               |
|------------|-----------------------|
| String     | `"Hello"`, `'World'`   |
| Number     | `42`, `3.14`           |
| Boolean    | `true`, `false`        |
| Undefined  | `let x;` (no value)    |
| Null       | `let y = null;`        |
| Object     | `{ name: "John" }`     |
| Array      | `[1, 2, 3]`            |

## Operators
JavaScript supports various operators for performing operations:

### Arithmetic Operators
| Operator | Description     | Example     |
|----------|---------------|-------------|
| `+`      | Addition       | `5 + 3` → `8` |
| `-`      | Subtraction    | `10 - 4` → `6` |
| `*`      | Multiplication | `2 * 6` → `12` |
| `/`      | Division       | `8 / 2` → `4` |
| `%`      | Modulus        | `10 % 3` → `1` |

### Comparison Operators
| Operator | Description                | Example          |
|----------|----------------------------|------------------|
| `>`      | Greater than               | `5 > 3` → `true`  |
| `<`      | Less than                  | `5 < 3` → `false` |
| `>=`     | Greater than or equal to   | `5 >= 5` → `true` |
| `<=`     | Less than or equal to      | `4 <= 5` → `true` |
| `==`     | Equal to (loose equality)  | `5 == "5"` → `true` |
| `===`    | Equal to (strict equality) | `5 === "5"` → `false` |

### Logical Operators
| Operator | Description        | Example                    |
|----------|--------------------|----------------------------|
| `&&`     | Logical AND        | `true && false` → `false`  |
| `\|\| `  | Logical OR | `true \|\| false` → `true` |
| `!`      | Logical NOT        | `!true` → `false`          |

