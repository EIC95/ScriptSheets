# URL Module

## Introduction
The `url` module in Node.js provides utilities for URL resolution and parsing. It allows developers to work with URLs by breaking them down into their components and modifying them programmatically.

## Parsing a URL

### Example: Using `new URL()`
```js
const { URL } = require("url");

const myUrl = new URL("https://example.com:8080/pathname?name=John&age=30#section1");

console.log(myUrl.hostname); // "example.com"
console.log(myUrl.port); // "8080"
console.log(myUrl.pathname); // "/pathname"
console.log(myUrl.search); // "?name=John&age=30"
console.log(myUrl.hash); // "#section1"
```

## Formatting a URL

### Example: Creating a URL String
```js
const { URL } = require("url");

const myUrl = new URL("https://example.com");
myUrl.pathname = "/newpath";
myUrl.searchParams.append("id", "123");
console.log(myUrl.toString()); // "https://example.com/newpath?id=123"
```

## Working with Query Parameters

### Example: Reading Query Parameters
```js
const { URL } = require("url");

const myUrl = new URL("https://example.com?page=2&limit=10");
console.log(myUrl.searchParams.get("page")); // "2"
console.log(myUrl.searchParams.get("limit")); // "10"
```

### Example: Modifying Query Parameters
```js
const { URL } = require("url");

const myUrl = new URL("https://example.com?name=John");
myUrl.searchParams.set("name", "Alice");
myUrl.searchParams.append("age", "25");
console.log(myUrl.toString()); // "https://example.com/?name=Alice&age=25"
```

## Resolving URLs

### Example: Using `url.resolve()`
```js
const url = require("url");

const baseUrl = "https://example.com/foo/bar";
const newUrl = url.resolve(baseUrl, "../baz");
console.log(newUrl); // "https://example.com/baz"
```

