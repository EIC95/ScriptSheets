# JavaScript Regular Expressions (RegEx)

## Introduction
Regular expressions (RegEx) in JavaScript are patterns used to match and manipulate strings. They are useful for searching, replacing, and validating text.

## Creating a Regular Expression
Regular expressions can be created using:

### 1. Literal Syntax
```js
const regex = /hello/;
```

### 2. RegExp Constructor
```js
const regex = new RegExp("hello");
```

## Common RegEx Patterns
| Pattern | Description |
|---------|-------------|
| `.` | Matches any character except newline |
| `\d` | Matches any digit (0-9) |
| `\w` | Matches any word character (letters, digits, underscore) |
| `\s` | Matches any whitespace character |
| `^` | Matches the start of a string |
| `$` | Matches the end of a string |
| `*` | Matches 0 or more occurrences |
| `+` | Matches 1 or more occurrences |
| `?` | Matches 0 or 1 occurrence |
| `{n,m}` | Matches between `n` and `m` occurrences |

## Using RegEx Methods
### `test()` - Checks if a pattern exists in a string
```js
const regex = /hello/;
console.log(regex.test("hello world")); // Output: true
```

### `match()` - Returns matched results
```js
const str = "The price is $100";
const regex = /\d+/;
console.log(str.match(regex)); // Output: ["100"]
```

### `replace()` - Replaces matched content
```js
const str = "Hello, John!";
console.log(str.replace(/John/, "Alice")); // Output: "Hello, Alice!"
```

### `split()` - Splits a string by a pattern
```js
const str = "apple,banana,orange";
console.log(str.split(/,/)); // Output: ["apple", "banana", "orange"]
```

## Flags in RegEx
| Flag | Description |
|------|-------------|
| `g` | Global match (find all matches) |
| `i` | Case-insensitive match |
| `m` | Multi-line match |

Example using flags:
```js
const regex = /hello/gi;
console.log("Hello hello HELLO".match(regex)); // Output: ["Hello", "hello", "HELLO"]
```
