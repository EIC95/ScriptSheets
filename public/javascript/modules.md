# JavaScript Modules

## Introduction
JavaScript modules allow developers to split code into separate files and reuse functionality across different parts of an application. Modules help keep code organized and maintainable.

## Exporting and Importing Modules
### Exporting a Module
Modules can export variables, functions, or classes using the `export` keyword.

#### Named Exports
```js
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

#### Default Export
```js
// logger.js
export default function log(message) {
    console.log("LOG:", message);
}
```

### Importing a Module
To use a module, you must import it into another file.

#### Importing Named Exports
```js
import { add, subtract } from "./math.js";
console.log(add(5, 3)); // Output: 8
```

#### Importing a Default Export
```js
import log from "./logger.js";
log("This is a message");
```

#### Importing Everything from a Module
```js
import * as MathUtils from "./math.js";
console.log(MathUtils.add(2, 2));
```

## Dynamic Imports
Modules can be loaded dynamically using `import()`.
```js
import("./math.js").then((module) => {
    console.log(module.add(10, 5));
});
```

## Using Modules in HTML
To use ES modules in the browser, set the `type` attribute to `module`.
```html
<script type="module" src="app.js"></script>
```
