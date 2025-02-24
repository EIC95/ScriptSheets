# Dynamic Memory

## Introduction  
Dynamic memory allocation in C++ allows programs to allocate memory at runtime rather than at compile time. This is useful when the size of data structures is unknown beforehand or needs to change dynamically. Dynamic memory is managed using pointers and the `new` and `delete` operators.

## Allocating and Deallocating Memory  
The `new` keyword is used to allocate memory dynamically, and the `delete` keyword is used to free allocated memory.

### Allocating a Single Variable  
```cpp
#include <iostream>

int main() {
    int* ptr = new int; // Dynamically allocate an integer

    *ptr = 42; // Assign a value

    std::cout << "Value: " << *ptr << std::endl; // Output: 42

    delete ptr; // Free allocated memory

    return 0;
}
```

- `new int` dynamically allocates an integer.
- `delete ptr` deallocates the memory to prevent memory leaks.

### Allocating an Array
```cpp
#include <iostream>

int main() {
    int* arr = new int[5]; // Allocate an array of 5 integers

    for (int i = 0; i < 5; i++) {
        arr[i] = i * 10; // Assign values
    }

    for (int i = 0; i < 5; i++) {
        std::cout << arr[i] << " "; // Output: 0 10 20 30 40
    }
    std::cout << std::endl;

    delete[] arr; // Free allocated memory

    return 0;
}
```

- `new int[5]` dynamically allocates an array of 5 integers.
- `delete[] arr` is used to deallocate an array.

## Memory Leaks
A **memory leak** occurs when allocated memory is not properly freed, leading to inefficient memory usage. Example of a memory leak:

```cpp
void memoryLeak() {
    int* ptr = new int(100); // Allocating memory
    // No delete operation -> Memory leak
}
```

To prevent memory leaks:
- Always use `delete` for single allocations.
- Always use `delete[]` for arrays.
- Use **smart pointers** to automatically manage memory.

## Smart Pointers
C++ provides **smart pointers** (`std::unique_ptr`, `std::shared_ptr`) in the `<memory>` header, which automatically manage memory.

### `std::unique_ptr`
```cpp
#include <iostream>
#include <memory>

int main() {
    std::unique_ptr<int> ptr = std::make_unique<int>(42);

    std::cout << "Value: " << *ptr << std::endl; // Output: 42

    return 0;
} // Memory is automatically freed when ptr goes out of scope
```

### `std::shared_ptr`
```cpp
#include <iostream>
#include <memory>

int main() {
    std::shared_ptr<int> ptr1 = std::make_shared<int>(10);
    std::shared_ptr<int> ptr2 = ptr1; // Shared ownership

    std::cout << "Value: " << *ptr1 << std::endl; // Output: 10
    std::cout << "Reference count: " << ptr1.use_count() << std::endl; // Output: 2

    return 0;
} // Memory is automatically freed when the last shared_ptr goes out of scope
```

## `malloc()` and `free()`
C++ also supports C-style memory management functions:

```cpp
#include <iostream>
#include <cstdlib>

int main() {
    int* ptr = (int*)malloc(sizeof(int)); // Allocate memory
    *ptr = 50;

    std::cout << "Value: " << *ptr << std::endl; // Output: 50

    free(ptr); // Deallocate memory

    return 0;
}
```

- `malloc()` allocates memory but does not call constructors.
- `free()` deallocates memory but does not call destructors.
- `new` and `delete` are preferred in C++.

## Dynamic 2D Array
```cpp
#include <iostream>

int main() {
    int rows = 3, cols = 4;
    
    // Allocate memory for rows
    int** matrix = new int*[rows];

    // Allocate memory for columns
    for (int i = 0; i < rows; i++) {
        matrix[i] = new int[cols];
    }

    // Assign values
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            matrix[i][j] = i + j;
        }
    }

    // Print matrix
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            std::cout << matrix[i][j] << " ";
        }
        std::cout << std::endl;
    }

    // Free memory
    for (int i = 0; i < rows; i++) {
        delete[] matrix[i];
    }
    delete[] matrix;

    return 0;
}
```

This approach ensures that memory is properly allocated and deallocated.
