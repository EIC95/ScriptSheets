# File Handling in PHP

## Introduction
File handling in PHP allows you to create, read, write, append, and delete files. PHP provides built-in functions to perform these operations efficiently.

## Opening a File
To open a file in PHP, use the `fopen()` function. It requires two parameters: the file name and the mode.

```php
$file = fopen("example.txt", "r"); // Opens the file in read mode
```

### File Modes
| Mode | Description |
|------|-------------|
| `r`  | Read-only mode. Starts at the beginning of the file. |
| `w`  | Write mode. Erases contents or creates a new file. |
| `a`  | Append mode. Writes to the end of the file. |
| `x`  | Creates a new file for writing. Returns `false` if file exists. |
| `r+` | Read and write mode. Starts at the beginning. |
| `w+` | Read and write mode. Erases contents or creates a new file. |
| `a+` | Read and write mode. Writes to the end of the file. |
| `x+` | Read and write mode. Creates a new file. Returns `false` if file exists. |

## Reading a File
### Using `fread()`
To read the entire content of a file:

```php
$file = fopen("example.txt", "r");
echo fread($file, filesize("example.txt"));
fclose($file);
```

### Using `fgets()`
Reads one line at a time:

```php
$file = fopen("example.txt", "r");
while (!feof($file)) {
    echo fgets($file) . "<br>";
}
fclose($file);
```

## Writing to a File
To write to a file, use `fwrite()`:

```php
$file = fopen("example.txt", "w");
fwrite($file, "Hello, PHP file handling!");
fclose($file);
```

## Appending to a File
To append data to an existing file:

```php
$file = fopen("example.txt", "a");
fwrite($file, "\nAppending new content.");
fclose($file);
```

## Deleting a File
To delete a file, use `unlink()`:

```php
if (file_exists("example.txt")) {
    unlink("example.txt");
    echo "File deleted successfully.";
} else {
    echo "File does not exist.";
}
```

## Checking if a File Exists
To check if a file exists before performing operations:

```php
if (file_exists("example.txt")) {
    echo "File exists.";
} else {
    echo "File does not exist.";
}
```

## Closing a File
Always close a file after working with it using `fclose()`:

```php
fclose($file);
```

