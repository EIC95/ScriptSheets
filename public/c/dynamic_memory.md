# Dynamic Memory Management

## Introduction
- Dynamic memory allows allocation of memory **at runtime**.
- Uses functions from the **`stdlib.h`** library.
- Memory is allocated on the **heap**, not the stack.

## Memory Allocation Functions

| Function | Description |
|----------|-------------|
| `malloc()` | Allocates memory but does **not** initialize it. |
| `calloc()` | Allocates and initializes memory to `0`. |
| `realloc()` | Changes the size of an allocated memory block. |
| `free()` | Deallocates memory to avoid memory leaks. |

## Allocate Memory
- Allocates **a single block** of memory.
- Returns a `void*` pointer (must be typecast).

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr = (int*) malloc(5 * sizeof(int)); // Allocates memory for 5 integers

    if (ptr == NULL) {
        printf("Memory allocation failed\n");
        return 1;
    }

    for (int i = 0; i < 5; i++) {
        ptr[i] = i + 1;
    }

    for (int i = 0; i < 5; i++) {
        printf("%d ", ptr[i]);
    }

    free(ptr); // Free allocated memory
    return 0;
}
```

## Allocate and Initialize Memory
- Allocates memory for multiple elements and **initializes all bytes to zero**.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr = (int*) calloc(5, sizeof(int)); // Allocates memory for 5 integers

    if (ptr == NULL) {
        printf("Memory allocation failed\n");
        return 1;
    }

    for (int i = 0; i < 5; i++) {
        printf("%d ", ptr[i]); // All values are initialized to 0
    }

    free(ptr);
    return 0;
}
```

## Resize Memory Block
- Resizes an already allocated memory block.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr = (int*) malloc(3 * sizeof(int));

    if (ptr == NULL) {
        printf("Memory allocation failed\n");
        return 1;
    }

    ptr[0] = 10;
    ptr[1] = 20;
    ptr[2] = 30;

    // Resize memory to hold 5 integers
    ptr = (int*) realloc(ptr, 5 * sizeof(int));

    if (ptr == NULL) {
        printf("Memory reallocation failed\n");
        return 1;
    }

    ptr[3] = 40;
    ptr[4] = 50;

    for (int i = 0; i < 5; i++) {
        printf("%d ", ptr[i]);
    }

    free(ptr);
    return 0;
}
```

## Deallocate Memory
- Always use `free()` to **release memory** and avoid memory leaks.
- Does **not** reset pointer to `NULL` automatically.

```c
#include <stdlib.h>

int main() {
    int *ptr = (int*) malloc(10 * sizeof(int));

    if (ptr != NULL) {
        free(ptr); // Free memory
    }

    return 0;
}
```

## Common Mistakes & Best Practices

| Mistake | Solution |
|---------|---------|
| Forgetting `free()` | Always `free()` allocated memory. |
| Using memory after `free()` | Set pointer to `NULL` after `free()`. |
| Dereferencing `NULL` | Always check if `malloc()` or `calloc()` returns `NULL`. |
| Using `realloc()` incorrectly | Always reassign the pointer (`ptr = realloc(ptr, size)`). |
