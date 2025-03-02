# JavaScript Destructuring

## Introduction
Destructuring in JavaScript is a convenient way to extract values from arrays or objects and assign them to variables. It simplifies code and improves readability.

## Array Destructuring

### Basic Array Destructuring
```js
const fruits = ["Apple", "Banana", "Cherry"];
const [first, second, third] = fruits;
console.log(first); // Output: Apple
console.log(second); // Output: Banana
console.log(third); // Output: Cherry
```

### Skipping Elements
```js
const numbers = [1, 2, 3, 4, 5];
const [first, , third] = numbers;
console.log(first); // Output: 1
console.log(third); // Output: 3
```

### Using Rest Operator
```js
const colors = ["Red", "Green", "Blue", "Yellow"];
const [primary, secondary, ...others] = colors;
console.log(primary); // Output: Red
console.log(secondary); // Output: Green
console.log(others); // Output: ["Blue", "Yellow"]
```

## Object Destructuring

### Basic Object Destructuring
```js
const person = { name: "Alice", age: 25, city: "Paris" };
const { name, age, city } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 25
console.log(city); // Output: Paris
```

### Assigning New Variable Names
```js
const user = { username: "johndoe", email: "john@example.com" };
const { username: userName, email: userEmail } = user;
console.log(userName); // Output: johndoe
console.log(userEmail); // Output: john@example.com
```

### Default Values
```js
const settings = { theme: "dark" };
const { theme, language = "English" } = settings;
console.log(theme); // Output: dark
console.log(language); // Output: English
```

### Nested Object Destructuring
```js
const employee = {
    name: "Jane",
    details: {
        position: "Developer",
        department: "IT"
    }
};
const { name, details: { position, department } } = employee;
console.log(name); // Output: Jane
console.log(position); // Output: Developer
console.log(department); // Output: IT
```

## Function Parameter Destructuring
```js
function displayUser({ name, age }) {
    console.log(`${name} is ${age} years old.`);
}
const user = { name: "Tom", age: 30 };
displayUser(user); // Output: Tom is 30 years old.
```

