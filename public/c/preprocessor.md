# Preprocessor in C

## Introduction
- The **C preprocessor** processes the source code **before** compilation.
- Uses **directives** that start
- Does **not** produce machine code, but modifies the code.

## Common Preprocessor Directives

| Directive | Description |
|-----------|-------------|
| `#define` | Defines a macro or constant. |
| `#undef` | Undefines a macro. |
| `#include` | Includes a file. |
| `#ifdef` / `#ifndef` | Checks if a macro is defined. |
| `#if` / `#elif` / `#else` / `#endif` | Conditional compilation. |
| `#pragma` | Compiler-specific instructions. |

## Macros
- Used to define **constants** or **inline functions**.

```c
#define PI 3.14159
#define SQUARE(x) (x * x)

int area = SQUARE(5); // Expands to (5 * 5)
```

## Undefining a Macro
- Removes a defined macro.

```c
#define TEMP 100
#undef TEMP // Now TEMP is undefined
```

## File Inclusion
- Includes **standard** or **custom** headers.

```c
#include <stdio.h>  // Standard library file
#include "myfile.h" // Custom file
```

## Conditional Compilation
- Prevents multiple inclusions of the same file.

```c
#ifndef HEADER_FILE
#define HEADER_FILE

void function() { }

#endif
```

## Conditional Compilation
- Compiles code based on conditions.

```c
#define VERSION 2

#if VERSION == 1
    printf("Version 1\n");
#elif VERSION == 2
    printf("Version 2\n");
#else
    printf("Unknown version\n");
#endif
```

## Pragma Directives
- Provides **compiler-specific** instructions.

```c
#pragma message("Compiling...")
#pragma warning(disable : 4996) // Disable specific warnings
```
