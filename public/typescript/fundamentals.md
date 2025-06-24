# TypeScript Fundamentals

## Introduction and Benefits

TypeScript is a strongly typed programming language that builds on [JavaScript](/javascript/basics) by adding static type definitions. It compiles to plain JavaScript and runs anywhere JavaScript runs.

### Key Benefits

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better IDE Support**: Enhanced autocomplete, refactoring, and navigation
- **Code Documentation**: Types serve as inline documentation
- **Scalability**: Easier to maintain large codebases
- **JavaScript Compatibility**: All JavaScript code is valid TypeScript

## Installation and Setup

TypeScript can be installed globally on your system or locally in a project. The global installation allows you to use the TypeScript compiler (`tsc`) from anywhere, while local installation keeps the version tied to your specific project.

### Global Installation

To install TypeScript globally, run the following command in your terminal:

```bash
# Install TypeScript globally
npm install -g typescript

# Check version
tsc --version
```

### Project Setup

For project-specific setup, you'll want to initialize a package.json file and install TypeScript as a development dependency. The `tsconfig.json` file configures how TypeScript compiles your code.

```bash
# Initialize a new project
npm init -y

# Install TypeScript as dev dependency
npm install -D typescript

# Create TypeScript config file
npx tsc --init
```

### Basic tsconfig.json

The `tsconfig.json` file controls compilation options. Here's a minimal configuration that sets the target JavaScript version, module system, and directory structure:

```json
// tsconfig.json

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## Compilation

TypeScript code must be compiled to JavaScript before it can run. The TypeScript compiler (`tsc`) transforms your `.ts` files into `.js` files, removing all type annotations and converting newer JavaScript features to older syntax if needed.

### Basic Compilation

```bash
# Compile a single file
tsc app.ts

# Compile all files in project
tsc

# Watch mode (auto-compile on changes)
tsc --watch
```

### Compilation Examples

When you compile TypeScript, the type information is stripped away, leaving clean JavaScript. Here's what happens during compilation:

```typescript
// app.ts

const message: string = "Hello, TypeScript!";
console.log(message);
```

Compiles to:

```javascript
// app.js

const message = "Hello, TypeScript!";
console.log(message);
```

## Basic Types

TypeScript provides several built-in types that correspond to JavaScript's runtime types, plus additional types for better type safety. Understanding these basic types is essential for writing TypeScript code effectively.

### Primitive Types

Primitive types represent the most basic data types in TypeScript. They correspond directly to JavaScript's primitive types but with compile-time type checking.

```typescript
// String - represents text data
let name: string = "John";
let template: string = `Hello, ${name}`;

// Number - represents both integers and floating-point numbers
let age: number = 25;
let price: number = 99.99;
let binary: number = 0b1010; // Binary
let hex: number = 0xf00d;    // Hexadecimal

// Boolean - represents true/false values
let isActive: boolean = true;
let isComplete: boolean = false;

// Undefined and Null - represent absence of value
let u: undefined = undefined;
let n: null = null;
```

### Array Types

Arrays in TypeScript can be typed to contain elements of a specific type. This prevents you from accidentally mixing different types of data in the same array.

```typescript
// Array of numbers - all elements must be numbers
let numbers: number[] = [1, 2, 3, 4, 5];
let scores: Array<number> = [85, 90, 78];

// Array of strings - all elements must be strings
let names: string[] = ["Alice", "Bob", "Charlie"];
let colors: Array<string> = ["red", "green", "blue"];

// Mixed array using union types (not recommended for beginners)
let mixed: (string | number)[] = ["hello", 42, "world"];
```

### Object Types

Object types define the shape of an object, specifying what properties it should have and their types. You can make properties optional or readonly.

```typescript
// Object type annotation - defines required properties
let person: { name: string; age: number } = {
  name: "Alice",
  age: 30
};

// Optional properties - marked with ? can be omitted
let user: { name: string; email?: string } = {
  name: "Bob"
  // email is optional, so it can be omitted
};

// Readonly properties - cannot be modified after creation
let config: { readonly apiUrl: string } = {
  apiUrl: "https://api.example.com"
};
// config.apiUrl = "new-url"; // Error: Cannot assign to readonly property
```

### Any Type

The `any` type turns off TypeScript's type checking for a variable. While it provides maximum flexibility, it defeats the purpose of using TypeScript and should be **avoided** when possible.

```typescript
// Any type - disables type checking (avoid when possible)
let value: any = 42;
value = "hello";    // No error
value = true;       // No error
value = { x: 1 };   // No error

// Use cases for any - when migrating legacy JavaScript code
let legacy: any = getLegacyData();
```

### Unknown Type

The `unknown` type is a safer alternative to `any`. It accepts any value but requires type checking before you can use the value, making it type-safe.

```typescript
// Unknown type - safer alternative to any
let userInput: unknown = getUserInput();

// Type checking required before use
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // Safe to use string methods
}

// Type assertion - telling TypeScript what type you believe it is
let strLength: number = (userInput as string).length;
```

### Void Type

The `void` type represents the absence of a return value. It's commonly used for functions that perform actions but don't return anything meaningful.

```typescript
// Functions that don't return a value use void
function logMessage(msg: string): void {
  console.log(msg);
  // No return statement needed
}

function processData(): void {
  // Do something but return nothing
  // TypeScript knows this function returns undefined
}
```

### Never Type

The `never` type represents values that never occur. It's used for functions that never return normally (they throw errors or run infinitely).

```typescript
// Functions that never return normally
function throwError(message: string): never {
  throw new Error(message);
  // This line never executes
}

function infiniteLoop(): never {
  while (true) {
    // This function never ends normally
  }
}
```

## Type Annotations vs Type Inference

TypeScript can either be told **explicitly** what type a variable is (**annotation**) or it can figure it out **automatically** (**inference**). Understanding when to use each approach helps write cleaner code.

### Explicit Type Annotations

Type annotations explicitly tell TypeScript what type a variable should be. This is useful when the type isn't obvious or when you want to be very explicit.

```typescript
// Explicitly declaring types - useful when type isn't obvious
let count: number = 5;
let message: string = "Hello";
let isValid: boolean = true;
```

### Type Inference

TypeScript is smart enough to infer types based on the initial value. This keeps code cleaner while maintaining type safety.

```typescript
// TypeScript automatically infers the types from initial values
let count = 5;        // TypeScript knows this is number
let message = "Hello"; // TypeScript knows this is string
let isValid = true;   // TypeScript knows this is boolean

// Best practice: let TypeScript infer when the type is obvious
let numbers = [1, 2, 3]; // TypeScript knows this is number[]
```

## Functions with Types

Functions are first-class citizens in JavaScript and TypeScript. TypeScript allows you to specify types for parameters and return values, making functions more predictable and easier to use correctly.

### Function Declarations

Function parameters and return types can be explicitly typed. This prevents calling functions with wrong argument types and clarifies what the function returns.

```typescript
// Function with typed parameters and return type
function add(a: number, b: number): number {
  return a + b; // TypeScript ensures we return a number
}

// Function with optional parameters - marked with ?
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

// Function with default parameters - provides fallback values
function createUser(name: string, role: string = "user"): object {
  return { name, role };
}
```

### Arrow Functions

Arrow functions can also be typed. The syntax is slightly different but the concept is the same - specify parameter types and return type.

```typescript
// Arrow function with explicit types
const multiply = (x: number, y: number): number => x * y;

// Arrow function with object parameter - useful for structured data
const printUser = (user: { name: string; age: number }): void => {
  console.log(`${user.name} is ${user.age} years old`);
};
```

### Function Type Annotations

You can define what a function should look like as a type. This is useful when you want to store functions in variables or pass them as parameters.

```typescript
// Function type as variable type - defines the function signature
let calculator: (x: number, y: number) => number;

// Any function matching this signature can be assigned
calculator = (a, b) => a + b;
calculator = (a, b) => a * b;

// Function types in objects - useful for APIs and configurations
let mathOps: {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
} = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y
};
```

## Working with Types

TypeScript provides several ways to create and combine types. These features help you build more complex type systems while keeping your code maintainable.

### Type Aliases

Type aliases let you create reusable names for complex types. This makes your code more readable and easier to maintain when the same type is used in multiple places.

```typescript
// Creating reusable type aliases - helps avoid repetition
type StringOrNumber = string | number;
type User = {
  id: number;
  name: string;
  email: string;
};

// Using type aliases - cleaner and more maintainable
let id: StringOrNumber = 123;
let user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};
```

### Union Types

Union types allow a value to be one of several types. This is useful when a variable or parameter can legitimately be different types in different situations.

```typescript
// Union types represent OR relationships between types
let id: string | number;
id = "abc123";  // Can be string
id = 123;       // Or number

// Function with union parameter - handles multiple input types
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // Safe to use string methods
  } else {
    console.log(id.toString());    // Safe to use number methods
  }
}
```

### Literal Types

Literal types restrict values to specific literals rather than general types. This is useful for creating more precise types that only accept certain values.

```typescript
// String literal types - only specific strings are allowed
let direction: "up" | "down" | "left" | "right";
direction = "up";    // OK - this exact string is allowed
// direction = "north"; // Error - this string is not allowed

// Number literal types - only specific numbers are allowed
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 3; // OK - this number is allowed
// diceRoll = 7; // Error - this number is not allowed

// Boolean literal types - restricts to specific boolean value
let success: true = true;
// success = false; // Error - only true is allowed
```

### Type Assertions

Type assertions tell TypeScript to treat a value as a specific type. Use this when you know more about a value's type than TypeScript can infer, but be careful as this bypasses type checking.

```typescript
// Type assertions - when you know better than TypeScript
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

// Alternative syntax (not recommended in JSX environments)
let strLength2: number = (<string>someValue).length;

// Practical example - DOM elements need specific types
let canvas = document.getElementById("canvas") as HTMLCanvasElement;
```

## Common Patterns

These patterns show how TypeScript concepts apply to real-world scenarios. Understanding these will help you write better TypeScript in practical applications.

### Working with DOM

When working with the DOM, TypeScript needs to know what type of HTML element you're working with to provide proper methods and properties.

```typescript
// DOM element selection with type assertions
const button = document.getElementById("btn") as HTMLButtonElement;
const input = document.querySelector("#email") as HTMLInputElement;

// Event handling - specify event types for better IDE support
button.addEventListener("click", (event: MouseEvent) => {
  console.log("Button clicked!");
});

// Form handling - cast event target to specific element type
input.addEventListener("input", (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});
```

### Null and Undefined Handling

TypeScript's strict mode helps catch null and undefined related errors. These patterns show safe ways to handle potentially missing values.

```typescript
// Strict null checks - handle potentially undefined values
function getName(user: { name?: string }): string {
  // Nullish coalescing operator provides safe fallback
  return user.name ?? "Unknown";
}

// Non-null assertion operator - use when you're certain value exists
function getLength(str: string | null): number {
  return str!.length; // ! tells TypeScript that str is definitely not null
}

// Optional chaining - safely access nested properties
const user = { profile: { name: "Alice" } };
const userName = user?.profile?.name; // string | undefined
```
