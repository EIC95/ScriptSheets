# Working with APIs

## Making HTTP Requests (fetch, axios)

You can make HTTP requests in Node.js using libraries like `fetch` or `axios`.

### Using Fetch:
`fetch` is a modern API available in the browser, but to use it in Node.js, you need to install a polyfill like `node-fetch`.

#### Installation:
```bash
npm install node-fetch
```

#### Example:
```javascript
// file app.js
const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error fetching data:', err));
```

### Using Axios:
Axios is a popular library for making HTTP requests in Node.js and the browser.

#### Installation:
```bash
npm install axios
```

#### Example:
```javascript
// file app.js
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response.data))
  .catch(err => console.error('Error fetching data:', err));
```

## Consuming REST APIs

Consuming a REST API involves making HTTP requests (GET, POST, PUT, DELETE) to interact with the resources provided by the API.

### Example: Making a GET Request
```javascript
// file app.js
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Post details:', response.data);
  })
  .catch(err => {
    console.error('Error fetching post:', err);
  });
```

### Example: Making a POST Request
```javascript
// file app.js
const axios = require('axios');

const newPost = {
  title: 'New Post',
  body: 'This is a new post.',
  userId: 1
};

axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
  .then(response => {
    console.log('Post created:', response.data);
  })
  .catch(err => {
    console.error('Error creating post:', err);
  });
```

## Creating a Simple REST API

You can create a simple REST API using Express.js to handle different HTTP methods (GET, POST, PUT, DELETE).

### Example:
```javascript
// file app.js
const express = require('express');
const app = express();

app.use(express.json());

// Sample data
let posts = [
  { id: 1, title: 'First Post', body: 'This is the first post.' },
  { id: 2, title: 'Second Post', body: 'This is the second post.' }
];

// GET all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// GET a single post by ID
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');
  res.json(post);
});

// POST a new post
app.post('/posts', (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.title,
    body: req.body.body
  };
  posts.push(post);
  res.status(201).json(post);
});

// PUT to update a post
app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');
  
  post.title = req.body.title;
  post.body = req.body.body;
  res.json(post);
});

// DELETE a post
app.delete('/posts/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).send('Post not found');
  
  posts.splice(postIndex, 1);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```