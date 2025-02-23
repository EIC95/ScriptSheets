# Arrays in C

## Introduction
- An **array** is a collection of elements of the **same data type** stored in **contiguous memory locations**.
- Arrays allow storing multiple values in a **single variable**.

## Declaring and Initializing Arrays
### **Declaration Syntax:**
```c
type array_name[size];
```

### **Example: Declaring an Integer Array**
```c
int numbers[5]; // Declares an array of 5 integers
```

### **Initializing an Array**
```c
int numbers[5] = {1, 2, 3, 4, 5}; // Initialize with values
```

- If fewer elements are provided, remaining elements are set to `0`:
```c
int arr[5] = {1, 2}; // arr = {1, 2, 0, 0, 0}
```

- **Omitting the size (Automatically calculated):**
```c
int arr[] = {10, 20, 30}; // Size inferred as 3
```

## Accessing Array Elements
- **Array elements are accessed using an index starting from `0`.**
```c
#include <stdio.h>

int main() {
    int numbers[3] = {10, 20, 30};
    
    printf("First element: %d\n", numbers[0]); // Output: 10
    printf("Second element: %d\n", numbers[1]); // Output: 20
    
    return 0;
}
```

## Modifying Array Elements
- You can change the value of an element using its index.
```c
numbers[1] = 50; // Changes the second element to 50
```

## Looping Through an Array
- **Using a `for` loop:**
```c
#include <stdio.h>

int main() {
    int arr[] = {5, 10, 15, 20};
    int size = sizeof(arr) / sizeof(arr[0]); // Get array size

    for (int i = 0; i < size; i++) {
        printf("Element %d: %d\n", i, arr[i]);
    }
    
    return 0;
}
```

## Multi-Dimensional Arrays
- **Syntax:** `type array_name[rows][columns];`
- Example: **2D Array (Matrix)**
```c
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
```

- **Accessing Elements:**
```c
printf("%d", matrix[1][2]); // Output: 6
```

- **Looping Through a 2D Array:**
```c
#include <stdio.h>

int main() {
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```


## Arrays and Functions
### **Passing an Array to a Function**
- Arrays are **always passed by reference** (memory address).

```c
#include <stdio.h>

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    
    printArray(numbers, size); // Passing array to function
    return 0;
}
```