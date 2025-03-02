# File Handling

## Introduction

File handling in Python allows you to read, write, and manipulate files on your system. Python provides built-in functions to work with files using the `open()` function.

## Opening a File

The `open()` function is used to open a file. It takes two main parameters: the filename and the mode.

| Mode | Description |
|------|-------------|
| `'r'` | Read mode (default). File must exist. |
| `'w'` | Write mode. Creates a new file or overwrites existing content. |
| `'a'` | Append mode. Adds content to an existing file. |
| `'x'` | Exclusive creation. Fails if the file exists. |
| `'b'` | Binary mode. Used for non-text files. |

Example:

```python
file = open("example.txt", "r")  # Opens the file in read mode
print(file.read())
file.close()
```

## Reading a File

You can read a file using different methods:

```python
with open("example.txt", "r") as file:
    content = file.read()  # Reads entire file
    print(content)
```

Reading line by line:

```python
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())
```

## Writing to a File

To write data to a file, use `'w'` mode (overwrites content):

```python
with open("example.txt", "w") as file:
    file.write("Hello, World!\n")
```

Appending data:

```python
with open("example.txt", "a") as file:
    file.write("Appending new content.\n")
```

## Working with Binary Files

For handling images, videos, or other binary files, use binary mode (`'rb'` or `'wb'`).

```python
with open("image.jpg", "rb") as file:
    binary_data = file.read()
```

## Checking if a File Exists

Use the `os` module to check if a file exists before opening it.

```python
import os

if os.path.exists("example.txt"):
    print("File exists.")
else:
    print("File not found.")
```

## Deleting a File

You can delete a file using `os.remove()`:

```python
import os

if os.path.exists("example.txt"):
    os.remove("example.txt")
    print("File deleted.")
else:
    print("File not found.")
```