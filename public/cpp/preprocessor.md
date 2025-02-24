# Preprocessor

## Introduction  
The **C++ preprocessor** is a tool that processes the source code before compilati It handles **directives** that start with `#`, such as including libraries, defining macros, and conditional compilati These directives help improve code organization, efficiency, and maintainability.

## Common Preprocessor Directives  

| Directive | Description |
|-----------|-------------|
| `#include` | Includes a file (library or user-defined) |
| `#define` | Defines macros/constants |
| `#undef` | Undefines a macro |
| `#ifdef` | Checks if a macro is defined |
| `#ifndef` | Checks if a macro is NOT defined |
| `#if` | Conditional compilation based on a condition |
| `#else` | Alternative for `#if` |
| `#elif` | Else-if condition in preprocessor |
| `#endif` | Ends a conditional preprocessor block |
| `#pragma` | Compiler-specific instructions |

## Including Header Files  
The `#include` directive is used to include standard or user-defined header files.

```cpp
#include <iostream> // Includes a standard library
#include "myHeader.h" // Includes a user-defined header file

int main() {
    std::cout << "Hello, Preprocessor!" << std::endl;
    return 0;
}
```

- **Angle brackets (`<>`)** are used for standard library headers.
- **Double quotes (`""`)** are used for custom headers.

##  Macros and Constants
The `#define` directive creates **macros**, which replace values before compilation.

### Defining Constants
```cpp
#include <iostream>
#define PI 3.14159

int main() {
    std::cout << "Value of PI: " << PI << std::endl;
    return 0;
}
```

- The compiler replaces `PI` with `3.14159` wherever it appears.

### Macro with Parameters
```cpp
#include <iostream>
#define SQUARE(x) (x * x) // Macro with a parameter

int main() {
    std::cout << "Square of 5: " << SQUARE(5) << std::endl;
    return 0;
}
```

- **Warning:** Macros do not follow type safe Prefer `inline` functions in modern C++.

## Removing a Macro
To **undefine** a macro, use `#undef`.

```cpp
#include <iostream>
#define VALUE 100

#undef VALUE // VALUE is now undefined

int main() {
    // std::cout << VALUE; // ERROR: VALUE is undefined
    return 0;
}
```

## Conditional Compilation
Conditional directives allow **compiling specific parts of code** based on conditions.

### `#ifdef` and `#ifndef`
```cpp
#include <iostream>
#define DEBUG // Define DEBUG

#ifdef DEBUG
    #define MESSAGE "Debug mode is ON"
#else
    #define MESSAGE "Debug mode is OFF"
#endif

int main() {
    std::cout << MESSAGE << std::endl;
    return 0;
}
```

- `#ifdef DEBUG` checks if `DEBUG` is defined.
- `#ifndef` (`if not defined`) executes if the macro **is not defined**.

### `#if`, `#elif`, `#else`, and `#endif`
```cpp
#include <iostream>
#define VERSION 2

#if VERSION == 1
    #define MESSAGE "Version 1 selected"
#elif VERSION == 2
    #define MESSAGE "Version 2 selected"
#else
    #define MESSAGE "Unknown version"
#endif

int main() {
    std::cout << MESSAGE << std::endl;
    return 0;
}
```

- `#if` allows numerical comparisons.
- `#elif` provides multiple conditions.
- `#endif` is required to close the block.

## Compiler-Specific Directives
The `#pragma` directive gives special instructions to the compiler.

### Preventing Multiple Inclusions
Instead of using `#ifndef`, `#define`, and `#endif` in header files, you can use:

```cpp
#pragma once
```

This ensures the file is included only **once** during compilation.

### Suppressing Warnings
Some compilers allow disabling specific warnings:

```cpp
#pragma warning(disable: 4996) // Disable a specific warning (Visual Studio)
```

## Summary

| Directive | Use Case |
|-----------|-----------|
| `#include` | Includes standard or custom headers |
| `#define` | Creates macros/constants |
| `#undef` | Undefines a macro |
| `#ifdef` / `#ifndef` | Checks if a macro is defined/not defined |
| `#if` / `#elif` / `#else` / `#endif` | Conditional compilation |
| `#pragma once` | Prevents multiple header inclusions |
| `#pragma warning` | Suppresses compiler warnings |
