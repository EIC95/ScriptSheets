# JavaScript Strings

## Introduction
Strings in JavaScript are sequences of characters used to represent text. They can be created using single quotes (`'`), double quotes (`"`), or template literals (`` ` ``).

### Example:
```js
let single = 'Hello';
let double = "World";
let template = `Hello, World!`;
```

## String Properties and Methods
JavaScript provides various properties and methods to manipulate strings.

### String Properties
| Property   | Description |
|------------|-------------|
| `length`   | Returns the number of characters in a string |

Example:
```js
let text = "JavaScript";
console.log(text.length); // 10
```

### Common String Methods
| Method               | Description |
|----------------------|-------------|
| `toUpperCase()`      | Converts string to uppercase |
| `toLowerCase()`      | Converts string to lowercase |
| `trim()`             | Removes whitespace from both ends |
| `charAt(index)`      | Returns the character at the specified index |
| `indexOf(value)`     | Returns the position of the first occurrence of a value |
| `includes(value)`    | Checks if a string contains a value |
| `slice(start, end)`  | Extracts a section of a string |
| `replace(old, new)`  | Replaces a substring with another string |
| `split(separator)`   | Splits the string into an array based on a separator |

Example Usage:
```js
let str = "  JavaScript is fun!  ";
console.log(str.toUpperCase()); // "  JAVASCRIPT IS FUN!  "
console.log(str.toLowerCase()); // "  javascript is fun!  "
console.log(str.trim()); // "JavaScript is fun!"
console.log(str.charAt(5)); // "S"
console.log(str.indexOf("fun")); // 15
console.log(str.includes("JavaScript")); // true
console.log(str.slice(2, 11)); // "JavaScript"
console.log(str.replace("fun", "awesome")); // "  JavaScript is awesome!  "
console.log(str.split(" ")); // ["", "", "JavaScript", "is", "fun!", "", ""]
```

## Template Literals
Template literals (introduced in ES6) allow embedding expressions inside a string using backticks (`` ` ``) and `${}` syntax.

Example:
```js
let name = "John";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
// Output: "My name is John and I am 25 years old."
```

## String Concatenation
You can combine strings using the `+` operator or `concat()` method.

Example:
```js
let first = "Hello";
let second = "World";
console.log(first + " " + second); // "Hello World"
console.log(first.concat(" ", second)); // "Hello World"
```

## Escape Characters
Some characters require escaping in strings using the backslash (`\`).

| Escape Sequence | Description |
|----------------|-------------|
| `\n`          | New line |
| `\t`          | Tab |
| `\'`          | Single quote |
| `\"`          | Double quote |
| `\\`          | Backslash |

Example:
```js
console.log("Hello\nWorld");
// Output:
// Hello
// World
```
