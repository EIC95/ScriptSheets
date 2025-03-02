# JavaScript Exception Handling

## Introduction
Exception handling in JavaScript helps manage errors gracefully, preventing unexpected crashes and improving user experience. JavaScript provides the `try...catch` statement to handle runtime errors effectively.

## The `try...catch` Statement
The `try...catch` block allows handling exceptions without stopping script execution.

```js
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("An error occurred: " + error.message);
}
```

### Using `finally`
The `finally` block executes regardless of whether an error occurs.

```js
try {
    let data = JSON.parse('{ "name": "Alice" }');
    console.log(data.name);
} catch (error) {
    console.log("Invalid JSON format");
} finally {
    console.log("Parsing attempt completed");
}
```

## Throwing Custom Errors
You can throw custom errors using the `throw` statement.

```js
function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }
    return "Access granted";
}

try {
    console.log(checkAge(16));
} catch (error) {
    console.log("Error: " + error.message);
}
```

## The `Error` Object
JavaScript provides built-in error types that can be used for debugging:

### Common Error Types
| Error Type     | Description |
|---------------|-------------|
| `Error`       | Generic error object |
| `TypeError`   | Occurs when a value is not of the expected type |
| `ReferenceError` | Occurs when an invalid reference is used |
| `SyntaxError` | Occurs when there's incorrect JavaScript syntax |
| `RangeError`  | Occurs when a number is outside the allowable range |

### Example: Handling a `ReferenceError`
```js
try {
    console.log(unknownVariable);
} catch (error) {
    console.log("Caught an error: " + error.name);
}
```