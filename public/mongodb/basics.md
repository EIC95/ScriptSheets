# MongoDB Basics

## Introduction
MongoDB is a NoSQL document-oriented database designed to store data in flexible, JSON-like documents. Unlike relational databases, it does not use tables and columns but collections and documents.

## Key Features
- **Schema-less**: Documents can have varying structures.
- **JSON/BSON Storage**: Data is stored in BSON (Binary JSON) format.
- **Horizontal Scalability**: Supports sharding to distribute data across multiple servers.
- **Advanced Indexing**: Enhances query performance.
- **High Availability**: Replica sets ensure data redundancy.

## Installing MongoDB
1. Download MongoDB from the official site: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).
2. Follow the installation instructions for your OS.
3. Start the MongoDB server:
   ```sh
   mongod
   ```
4. Use the MongoDB shell:
   ```sh
   mongo
   ```

## Basic Commands
- **Check installed version**:
  ```sh
  mongod --version
  ```
- **Connect to a database**:
  ```js
  use myDatabase
  ```
- **List all databases**:
  ```js
  show dbs
  ```
- **Create a collection**:
  ```js
  db.createCollection("users")
  ```
- **Insert a document**:
  ```js
  db.users.insertOne({ name: "Alice", age: 25 })
  ```

