# File Upload

## Introduction
File uploading in Node.js can be handled using various middleware and modules. The most commonly used package for handling file uploads is `multer`.

## Installing Multer

```sh
npm install multer
```

## Setting Up Multer

### Example: Basic File Upload
```js
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

## Uploading Multiple Files

### Example: Handling Multiple Files
```js
app.post("/upload-multiple", upload.array("files", 5), (req, res) => {
  res.send("Files uploaded successfully");
});
```

## Filtering File Types

### Example: Restricting to Images Only
```js
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"), false);
  }
};

const uploadWithFilter = multer({ storage: storage, fileFilter: fileFilter });

app.post("/upload-image", uploadWithFilter.single("image"), (req, res) => {
  res.send("Image uploaded successfully");
});
```

## Setting File Size Limits

### Example: Restricting File Size
```js
const uploadWithLimits = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
});

app.post("/upload-limited", uploadWithLimits.single("file"), (req, res) => {
  res.send("File uploaded with size limit");
});
```