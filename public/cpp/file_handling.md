# File Handling

## Introduction  
File handling in C++ allows reading from and writing to files. The `<fstream>` library provides three main classes for file operations:  
- `ofstream` (output file stream) for writing to files  
- `ifstream` (input file stream) for reading from files  
- `fstream` (file stream) for both reading and writing  

## Writing to a File  
The `ofstream` class is used to write data to a file.

```cpp
#include <iostream>
#include <fstream>

int main() {
    std::ofstream file("example.txt"); // Create and open a file

    if (file.is_open()) {
        file << "Hello, file handling in C++!\n"; // Write to file
        file.close(); // Close the file
    } else {
        std::cout << "Failed to open the file." << std::endl;
    }

    return 0;
}
```

- `ofstream file("example.txt")` creates the file if it does not exist.
- `file << "text"` writes text to the file.
- `file.close()` closes the file to prevent data loss.

## Reading from a File
The `ifstream` class is used to read data from a file.

```cpp
#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::ifstream file("example.txt"); // Open the file for reading

    if (file.is_open()) {
        std::string line;
        while (std::getline(file, line)) { // Read line by line
            std::cout << line << std::endl; // Print to console
        }
        file.close();
    } else {
        std::cout << "Failed to open the file." << std::endl;
    }

    return 0;
}
```

- `std::getline(file, line)` reads a file line by line.
- Always check if the file is open using `file.is_open()`.

## Appending to a File
To append data without overwriting, open the file in **append mode** using `ios::app`.

```cpp
#include <iostream>
#include <fstream>

int main() {
    std::ofstream file("example.txt", std::ios::app); // Open in append mode

    if (file.is_open()) {
        file << "Appending a new line.\n";
        file.close();
    } else {
        std::cout << "Failed to open the file." << std::endl;
    }

    return 0;
}
```

## Reading and Writing with `fstream`
The `fstream` class allows both reading and writing.

```cpp
#include <iostream>
#include <fstream>

int main() {
    std::fstream file("data.txt", std::ios::in | std::ios::out | std::ios::app);

    if (file.is_open()) {
        file << "Writing to file using fstream.\n"; // Write operation
        file.seekg(0, std::ios::beg); // Move to the beginning for reading

        std::string line;
        while (std::getline(file, line)) {
            std::cout << line << std::endl; // Read operation
        }

        file.close();
    } else {
        std::cout << "Failed to open the file." << std::endl;
    }

    return 0;
}
```

## Checking if a File Exists
```cpp
#include <iostream>
#include <fstream>

bool fileExists(const std::string& filename) {
    std::ifstream file(filename);
    return file.good();
}

int main() {
    std::string filename = "example.txt";

    if (fileExists(filename)) {
        std::cout << "File exists." << std::endl;
    } else {
        std::cout << "File does not exist." << std::endl;
    }

    return 0;
}
```

## Deleting a File
Use the `remove()` function from `<cstdio>`.

```cpp
#include <iostream>
#include <cstdio>

int main() {
    if (remove("example.txt") == 0) {
        std::cout << "File deleted successfully." << std::endl;
    } else {
        std::cout << "Error deleting the file." << std::endl;
    }

    return 0;
}
```

## Summary
| Operation   | Class  | Mode           | Example |
|------------|--------|----------------|---------|
| Write      | `ofstream` | `ios::out` (default) | `ofstream file("file.txt");` |
| Read       | `ifstream` | `ios::in` (default) | `ifstream file("file.txt");` |
| Append     | `ofstream` | `ios::app` | `ofstream file("file.txt", ios::app);` |
| Read & Write | `fstream` | `ios::in | ios::out` | `fstream file("file.txt", ios::in | ios::out);` |
| Binary Write | `ofstream` | `ios::binary` | `ofstream file("file.dat", ios::binary);` |
| Binary Read | `ifstream` | `ios::binary` | `ifstream file("file.dat", ios::binary);` |
