# Core Modules

## File System (fs)
The `fs` module allows interacting with the file system, including reading and writing files.

### Reading a file
```js
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

### Writing to a file
```js
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File written successfully');
});
```

## Path (path)
The `path` module provides utilities for working with file and directory paths.

```js
const path = require('path');
console.log(path.join(__dirname, 'folder', 'file.txt'));
```

## OS (os)
The `os` module provides information about the operating system, such as platform and architecture.

```js
const os = require('os');
console.log(`OS: ${os.platform()}, Arch: ${os.arch()}`);
```

## Events (events)
The `events` module allows handling and emitting custom events using an event-driven approach.

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', () => {
    console.log('Hello, Event!');
});

emitter.emit('greet');
```

## HTTP (http)
The `http` module is used to create web servers and handle HTTP requests and responses.

```js
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
});
server.listen(3000, () => console.log('Server running on port 3000'));
```