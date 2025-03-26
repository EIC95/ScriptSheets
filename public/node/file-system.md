# File System Operations

## Reading Files

You can read files asynchronously or synchronously using the `fs` module.

### Asynchronous Reading:
```javascript
// file readFile.js
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('File content:', data);
  }
});
```

### Synchronous Reading:
```javascript
// file readFileSync.js
const fs = require('fs');

try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.log('Error:', err);
}
```

## Writing Files

You can write data to files using the `fs.writeFile()` method for asynchronous writing or `fs.writeFileSync()` for synchronous writing.

### Asynchronous Writing:
```javascript
// file writeFile.js
const fs = require('fs');

fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('File written successfully');
  }
});
```

### Synchronous Writing:
```javascript
// file writeFileSync.js
const fs = require('fs');

try {
  fs.writeFileSync('example.txt', 'Hello, Node.js!');
  console.log('File written successfully');
} catch (err) {
  console.log('Error:', err);
}
```

## Deleting and Renaming Files

You can delete and rename files using `fs.unlink()` and `fs.rename()`.

### Deleting Files:
```javascript
// file deleteFile.js
const fs = require('fs');

fs.unlink('example.txt', (err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('File deleted successfully');
  }
});
```

### Renaming Files:
```javascript
// file renameFile.js
const fs = require('fs');

fs.rename('oldName.txt', 'newName.txt', (err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('File renamed successfully');
  }
});
```

## Working with Directories

You can create, read, and delete directories with `fs.mkdir()`, `fs.readdir()`, and `fs.rmdir()`.

### Creating a Directory:
```javascript
// file createDir.js
const fs = require('fs');

fs.mkdir('newDirectory', { recursive: true }, (err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Directory created successfully');
  }
});
```

### Reading a Directory:
```javascript
// file readDir.js
const fs = require('fs');

fs.readdir('someDirectory', (err, files) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Files in directory:', files);
  }
});
```

### Deleting a Directory:
```javascript
// file deleteDir.js
const fs = require('fs');

fs.rmdir('newDirectory', (err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Directory deleted successfully');
  }
});
```