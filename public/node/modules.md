# Working with Modules

## Creating and Exporting Modules

Modules are created by exporting functions or objects via `module.exports`.

### Example:
```javascript
// file config.js
const config = {
  db: 'mongodb://localhost:27017/mydb',
  port: 3000
};

module.exports = config;
```

## Importing Modules (CommonJS & ES Modules)

Node.js supports two module import systems: **CommonJS** and **ES Modules**.

### CommonJS
Uses `require` to import modules.

### Example:
```javascript
// file app.js
const config = require('./config');
console.log(config.db); // Displays the database URL
```

### ES Modules
ESM uses `import` and `export`, but requires `.mjs` files or `"type": "module"` in `package.json`.

### Example:
```javascript
// file config.mjs
export const config = {
  db: 'mongodb://localhost:27017/mydb',
  port: 3000
};
```
```javascript
// file app.mjs
import { config } from './config.mjs';
console.log(config.db); // Displays the database URL
```

## Using Third-Party Modules (npm)

Third-party modules can be installed via **npm** to add external functionality. For example, `dotenv` is used to load environment variables from a `.env` file.

### Installing `dotenv`:
```bash
npm install dotenv
```

### Example with dotenv:
```javascript
// file .env
DB_URL=mongodb://localhost:27017/mydb
PORT=3000
```
```javascript
// file app.js
require('dotenv').config();
console.log(process.env.DB_URL); // Displays the database URL from .env
console.log(process.env.PORT);   // Displays the port from .env
```