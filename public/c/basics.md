# Basics

## Introduction
- C is a **compiled, procedural** programming language.  
- Developed in the **1970s** for system programming (Unix).  
- Known for **performance** and **low-level memory control**.

## Structure of a C Program
A basic C program has:  
1. **Preprocessor Directives** (`#include <stdio.h>`)  
2. **Main Function** (`int main() {}`)  
3. **Statements** (Code inside `{}`)  
4. **Return Statement** (`return 0;`)  

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

## Data Types
| Type       | Description                | Example       |
|------------|----------------------------|--------------|
| `int`      | Integer numbers            | `int x = 5;` |
| `float`    | Decimal numbers (4 bytes)  | `float y = 3.14;` |
| `double`   | Double precision float     | `double z = 3.1415;` |
| `char`     | Single character           | `char c = 'A';` |
| `void`     | No value                   | Used in functions |

## Variables & Constants
- **Variable**: A named memory location.
  ```c
  int age = 25;
  ```
- **Constant**: A fixed value using `#define` or `const`.
  ```c
  #define PI 3.14
  const int MAX = 100;
  ```

## Input & Output
### Printing to the screen:
- Use `printf()`
  ```c
  printf("Age: %d", age);
  ```

### Taking user input:
- Use `scanf()`
  ```c
  int num;
  scanf("%d", &num);
  ```

## Operators
### Arithmetic Operators:
| Operator | Description | Example |
|----------|------------|---------|
| `+`      | Addition   | `a + b` |
| `-`      | Subtraction| `a - b` |
| `*`      | Multiplication | `a * b` |
| `/`      | Division   | `a / b` |
| `%`      | Modulus (remainder) | `a % b` |

### Comparison Operators:
| Operator | Description | Example |
|----------|------------|---------|
| `==`     | Equal to   | `a == b` |
| `!=`     | Not equal  | `a != b` |
| `>`      | Greater than | `a > b` |
| `<`      | Less than  | `a < b` |

### Logical Operators:
| Operator | Description | Example                |
|----------|-----------|------------------------|
| `&&`     | Logical AND | `(a > 0) && (b > 0)`   |
| `\|\|`   | Logical OR  | `(a > 0) \|\| (b > 0)` |
| `!`      | Logical NOT | `!(a > 0)`             |

## Comments 
- **Single-line comment**:
  ```c
  // single-line comment
  ```
- **Multi-line comment**:
  ```c
  /*
    This is a multi-line comment
  */
  ```
