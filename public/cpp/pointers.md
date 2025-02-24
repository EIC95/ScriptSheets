# Pointers

## Introduction  
A **pointer** in C++ is a variable that stores the memory address of another variable. Pointers are essential for dynamic memory allocation, efficient array handling, and working with data structures like linked lists.

## Declaring and Initializing Pointers  
A pointer is declared using the `*` symbol.

```cpp
#include <iostream>

int main() {
    int number = 10;
    int* ptr = &number; // Pointer storing the address of 'number'

    std::cout << "Value of number: " << number << std::endl;
    std::cout << "Address of number: " << &number << std::endl;
    std::cout << "Pointer stores: " << ptr << std::endl;
    std::cout << "Pointer dereferenced: " << *ptr << std::endl; // Accessing the value

    return 0;
}
```

### Pointer Operators
| Operator | Description |
|----------|------------|
| `&` | Address-of operator (gives the memory address of a variable). |
| `*` | Dereference operator (accesses the value stored at the pointer). |

## Null Pointers
A null pointer is a pointer that does not point to any valid memory location.

```cpp
int* ptr = nullptr; // Recommended way in modern C++
```

## Pointer Arithmetic
Pointers can be incremented or decremented to navigate through memory.

```cpp
#include <iostream>

int main() {
    int arr[] = {10, 20, 30};
    int* ptr = arr; // Points to the first element

    std::cout << "First value: " << *ptr << std::endl;
    ptr++; // Moves to the next element
    std::cout << "Second value: " << *ptr << std::endl;

    return 0;
}
```

## Pointers and Arrays
An array name acts as a constant pointer to the first element.

```cpp
#include <iostream>

int main() {
    int numbers[] = {1, 2, 3, 4};
    int* ptr = numbers;

    for (int i = 0; i < 4; i++) {
        std::cout << "Element " << i << ": " << *(ptr + i) << std::endl;
    }

    return 0;
}
```

## Pointer to Pointer
A pointer can store the address of another pointer.

```cpp
#include <iostream>

int main() {
    int value = 42;
    int* ptr = &value;
    int** ptr2 = &ptr; // Pointer to pointer

    std::cout << "Value: " << **ptr2 << std::endl;

    return 0;
}
```

## Pointers and Functions
Pointers can be passed to functions to modify values directly.

### Passing Pointers to Functions
```cpp
#include <iostream>

void modify(int* ptr) {
    *ptr = 100; // Modify value at address
}

int main() {
    int num = 10;
    modify(&num);
    std::cout << "Modified num: " << num << std::endl;

    return 0;
}
```

### Returning Pointers from Functions
```cpp
#include <iostream>

int* getPointer() {
    int* ptr = new int(50); // Dynamically allocated memory
    return ptr;
}

int main() {
    int* ptr = getPointer();
    std::cout << "Value: " << *ptr << std::endl;
    delete ptr; // Free allocated memory

    return 0;
}
```

## Dynamic Memory Allocation
C++ provides `new` and `delete` to allocate and deallocate memory dynamically.

### Allocating and Deallocating Memory
```cpp
#include <iostream>

int main() {
    int* ptr = new int(25); // Allocating memory
    std::cout << "Dynamically allocated value: " << *ptr << std::endl;
    delete ptr; // Free memory

    return 0;
}
```

### Dynamic Arrays
```cpp
#include <iostream>

int main() {
    int* arr = new int[3]; // Allocating an array dynamically
    arr[0] = 10;
    arr[1] = 20;
    arr[2] = 30;

    for (int i = 0; i < 3; i++) {
        std::cout << arr[i] << " ";
    }

    delete[] arr; // Free memory

    return 0;
}
```
