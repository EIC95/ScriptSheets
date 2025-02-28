# Modules

## Introduction
Node.js uses a module system to organize code into reusable units. A module is simply a JavaScript file that can export functions, objects, or variables and be imported into other files.

## Importing and Exporting Modules

### Exporting a Module
In Node.js, a module can be defined using `module.exports` or `exports`.

#### Example with `module.exports`
```js
// math.js
module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;
```

#### Example with `exports`
```js
// math.js
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;
```

### Importing a Module
Use `require()` to import a module.

```js
// app.js
const math = require("./math");
console.log(math.add(5, 3)); // 8
console.log(math.multiply(4, 2)); // 8
```

## Built-in Node.js Modules
Node.js includes several built-in modules that are available without installation.

### Example: `fs` (File System)
```js
const fs = require("fs");
fs.writeFileSync("test.txt", "Hello, Node.js!");
```

### Example: `path`
```js
const path = require("path");
console.log(path.join(__dirname, "test.txt"));
```

## Third-Party Modules with npm
In addition to built-in modules, Node.js allows using third-party modules via npm.

### Installing a Module
```sh
npm install lodash
```

### Using an Installed Module
```js
const _ = require("lodash");
console.log(_.capitalize("hello world")); // "Hello world"
```

## ES Modules (ESM)
Node.js also supports `import/export` syntax.

### Exporting with ESM
```js
// math.js
export function add(a, b) {
  return a + b;
}
```

### Importing with ESM
```js
// app.js
import { add } from "./math.js";
console.log(add(2, 3));
```

