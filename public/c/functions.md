# Functions

## Introduction
- A function is a **block of reusable code** that performs a specific task.
- Functions help in **code modularity**, **readability**, and **reusability**.

## Function Syntax
```c
return_type function_name(parameters) {
    // Code to execute
    return value; // Optional
}
```

## Function Types

### 1. Standard Library Functions
- Built-in functions from libraries like `stdio.h`, `string.h`, etc.
```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello";
    printf("String length: %lu\n", strlen(str));
    return 0;
}
```

### 2. User-Defined Functions
- Functions created by the programmer.

#### Example: Function with No Parameters & No Return
```c
#include <stdio.h>

void sayHello() {
    printf("Hello, World!\n");
}

int main() {
    sayHello(); // Function call
    return 0;
}
```

#### Example: Function with Parameters & No Return
```c
#include <stdio.h>

void greet(char name[]) {
    printf("Hello, %s!\n", name);
}

int main() {
    greet("Alice");
    return 0;
}
```

#### Example: Function with Parameters & Return Value
```c
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int sum = add(5, 3);
    printf("Sum: %d", sum);
    return 0;
}
```

## Function Prototypes
- A **function prototype** tells the compiler about a function before its definition.
```c
#include <stdio.h>

int multiply(int, int); // Function prototype

int main() {
    printf("Product: %d", multiply(4, 5));
    return 0;
}

int multiply(int a, int b) { // Function definition
    return a * b;
}
```

## Recursive Functions
- A function that **calls itself** until a base condition is met.

#### Example: Factorial using Recursion
```c
#include <stdio.h>

int factorial(int n) {
    if (n == 0) return 1; // Base case
    return n * factorial(n - 1);
}

int main() {
    printf("Factorial of 5: %d", factorial(5));
    return 0;
}
```
