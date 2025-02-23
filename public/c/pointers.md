# Pointers in C

## Introduction
- A **pointer** is a variable that stores the **memory address** of another variable.
- Pointers allow **efficient memory management**, **dynamic allocation**, and **direct memory access**.

## Declaring and Initializing Pointers
### Declaration Syntax
```c
type *pointer_name;
```
### Examples
```c
int x = 10;
int *p = &x;  // p stores the address of x
```

## Accessing Values Using Pointers
- Use the **dereference operator (`*`)** to access the value stored at a pointer's address.
```c
#include <stdio.h>

int main() {
    int x = 10;
    int *p = &x;

    printf("Value of x: %d\n", x);
    printf("Address of x: %p\n", &x);
    printf("Value of p: %p\n", p);
    printf("Value pointed by p: %d\n", *p);

    return 0;
}
```

## Pointer Arithmetic
- **Increment (`p++`)**: Moves to the next memory location.
- **Decrement (`p--`)**: Moves to the previous memory location.
- **Addition (`p + n`)**: Moves forward by `n` positions.
- **Subtraction (`p - n`)**: Moves backward by `n` positions.

```c
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30};
    int *p = arr;

    printf("First element: %d\n", *p);
    p++;
    printf("Second element: %d\n", *p);
    
    return 0;
}
```

## Pointers and Arrays
- The name of an array is a **pointer to its first element**.
- `arr[i]` is equivalent to `*(arr + i)`.

```c
#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int *p = arr;

    for (int i = 0; i < 5; i++) {
        printf("%d ", *(p + i));
    }

    return 0;
}
```

## Pointer to Pointer (Double Pointers)
- A **pointer to a pointer** stores the address of another pointer.
```c
#include <stdio.h>

int main() {
    int x = 10;
    int *p = &x;
    int **pp = &p;

    printf("Value of x: %d\n", x);
    printf("Value of p: %p\n", p);
    printf("Value of *pp: %p\n", *pp);
    printf("Value of **pp: %d\n", **pp);

    return 0;
}
```

## Function Pointers
- A function pointer stores the address of a function and allows calling it dynamically.

```c
#include <stdio.h>

void greet() {
    printf("Hello, World!\n");
}

int main() {
    void (*funcPtr)() = greet;
    funcPtr();  // Calling the function

    return 0;
}
```