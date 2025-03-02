# Arrays

## Introduction  
An **array** in C++ is a collection of elements of the same type stored in contiguous memory locations. Arrays allow storing multiple values under a single variable name and can be accessed using an index.

## Declaring and Initializing Arrays  

### Basic Syntax  
```cpp
type array_name[size];
```

### Example of Declaration
```cpp
int numbers[5]; // Declares an array of 5 integers
```

### Initializing an Array
```cpp
int numbers[5] = {10, 20, 30, 40, 50}; // Array with predefined values
int values[] = {1, 2, 3, 4}; // Size inferred from initialization
```

## Accessing and Modifying Array Elements
Elements are accessed using an index starting from `0`.

```cpp
#include <iostream>

int main() {
    int numbers[3] = {10, 20, 30};

    std::cout << "First element: " << numbers[0] << std::endl;
    
    numbers[1] = 50; // Modifying an element
    std::cout << "Modified second element: " << numbers[1] << std::endl;

    return 0;
}
```

## Iterating Through an Array
Using a `for` loop to iterate through an array.

```cpp
#include <iostream>

int main() {
    int arr[] = {5, 10, 15, 20, 25};

    for (int i = 0; i < 5; i++) {
        std::cout << "Element at index " << i << ": " << arr[i] << std::endl;
    }

    return 0;
}
```

Using a **range-based for loop** (C++11+).

```cpp
#include <iostream>

int main() {
    int arr[] = {1, 2, 3, 4, 5};

    for (int value : arr) {
        std::cout << value << " ";
    }

    return 0;
}
```

## Multi-Dimensional Arrays
Arrays can have multiple dimensions, such as 2D or 3D arrays.

### Declaring a 2D Array
```cpp
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
```

### Accessing a 2D Array
```cpp
#include <iostream>

int main() {
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    std::cout << "Element at (1,2): " << matrix[1][2] << std::endl; // Output: 6

    return 0;
}
```

### Iterating Through a 2D Array
```cpp
#include <iostream>

int main() {
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            std::cout << matrix[i][j] << " ";
        }
        std::cout << std::endl;
    }

    return 0;
}
```

## Passing Arrays to Functions
Arrays can be passed to functions as arguments.

```cpp
#include <iostream>

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
}

int main() {
    int values[] = {10, 20, 30, 40, 50};
    printArray(values, 5);
    return 0;
}
```

## Using `std::array`
The `std::array` class from the `<array>` library provides a safer alternative to raw arrays.

```cpp
#include <iostream>
#include <array>

int main() {
    std::array<int, 5> numbers = {1, 2, 3, 4, 5};

    for (int num : numbers) {
        std::cout << num << " ";
    }

    return 0;
}
```

## Using `std::vector`
Vectors from `<vector>` are resizable arrays and provide better memory management.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> nums = {10, 20, 30};
    nums.push_back(40); // Add element at the end

    for (int num : nums) {
        std::cout << num << " ";
    }

    return 0;
}
```
