# Working with Databases

## Connecting to MongoDB (mongoose)

Use Mongoose to connect to MongoDB and interact with the database.

### Installation:
```bash
npm install mongoose
```

### Example:
```javascript
// file app.js
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));
```

## Basic CRUD Operations

Perform basic Create, Read, Update, and Delete operations with MongoDB using Mongoose.

### Create:
```javascript
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  age: Number
}));

const newUser = new User({ name: 'John', age: 30 });
newUser.save()
  .then(() => console.log('User created'))
  .catch(err => console.error('Failed to create user:', err));
```

### Read:
```javascript
User.find({ name: 'John' })
  .then(users => console.log('Users found:', users))
  .catch(err => console.error('Failed to find users:', err));
```

### Update:
```javascript
User.updateOne({ name: 'John' }, { age: 31 })
  .then(() => console.log('User updated'))
  .catch(err => console.error('Failed to update user:', err));
```

### Delete:
```javascript
User.deleteOne({ name: 'John' })
  .then(() => console.log('User deleted'))
  .catch(err => console.error('Failed to delete user:', err));
```

## Connecting to MySQL (mysql2)

Use `mysql2` to connect to a MySQL database and interact with the database.

### Installation:
```bash
npm install mysql2
```

### Example:
```javascript
// file app.js
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'myapp'
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});
```