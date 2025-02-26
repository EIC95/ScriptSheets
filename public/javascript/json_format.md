# JavaScript JSON Handling

## Introduction
**JSON (JavaScript Object Notation)** is a lightweight data format used for data exchange between a client and a server. It is easy to read and write for humans and machines.

## JSON Syntax
- Data is represented as key-value pairs.
- Keys are strings enclosed in double quotes.
- Values can be strings, numbers, objects, arrays, `true`, `false`, or `null`.

Example:
```json
{
    "name": "John",
    "age": 30,
    "isStudent": false,
    "hobbies": ["reading", "gaming"],
    "address": {
        "city": "New York",
        "zipcode": "10001"
    }
}
```

## Parsing JSON in JavaScript
### Convert JSON String to JavaScript Object
```js
const jsonString = '{"name": "Alice", "age": 25}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Output: Alice
```

### Convert JavaScript Object to JSON String
```js
const user = {
    name: "Bob",
    age: 40
};
const jsonString = JSON.stringify(user);
console.log(jsonString); // Output: '{"name":"Bob","age":40}'
```

## Fetching JSON Data
```js
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching JSON:", error));
```

## Storing JSON in Local Storage
```js
const user = { name: "Eve", age: 28 };
localStorage.setItem("user", JSON.stringify(user));
const retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser.name); // Output: Eve
```

## Conclusion
- JSON is widely used for data exchange.
- `JSON.parse()` converts a JSON string into an object.
- `JSON.stringify()` converts an object into a JSON string.
- JSON can be retrieved from APIs using `fetch()`.
- JSON data can be stored and retrieved from `localStorage`.

