# Basics

## Introduction to C++
C++ is a powerful programming language derived from C that supports multiple programming paradigms, including:  
- **Procedural programming**: Based on functions and control structures.  
- **Object-oriented programming (OOP)**: Based on classes and objects.  
- **Generic programming**: Using templates.  

C++ is widely used in software development, game development, finance, embedded systems, and artificial intelligence.  

## Basic C++ Program
Every C++ program must contain a `main()` function, which serves as the entry point of the program.  

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

### Explanation:
- `#include <iostream>`: Includes the standard input/output library.
- `std::cout`: Prints text to the console.
- `std::endl`: Inserts a newline.
- `main()`: The main function of the program.
- `return 0;`: Indicates that the program executed successfully.

## Compilation and Execution
To compile and run a C++ program:

```sh
g++ program.cpp -o program
./program
```

## Variables and Data Types
C++ supports multiple data types:

| Type       | Description             | Example        |
|------------|-------------------------|----------------|
| `int`      | Integer                  | `int x = 5;`   |
| `float`    | Floating-point number     | `float y = 3.14;` |
| `double`   | Double-precision float    | `double z = 3.14159;` |
| `char`     | Single character          | `char c = 'A';` |
| `bool`     | Boolean value             | `bool isTrue = true;` |
| `string`   | String (via `<string>`)   | `std::string name = "John";` |

### Declaring Variables
```cpp
int age = 25;
double pi = 3.1415;
char grade = 'A';
bool isStudent = true;
std::string message = "Hello!";
```

## User Input
C++ uses `std::cin` to take user input.

```cpp
#include <iostream>

int main() {
    int age;
    std::cout << "Enter your age: ";
    std::cin >> age;
    std::cout << "You are " << age << " years old." << std::endl;
    return 0;
}
```

## Constants
A constant is a variable whose value cannot be changed.

```cpp
const double PI = 3.14159;
```

## Operators
Operators allow performing operations on variables and values.

### Arithmetic Operators
| Operator | Description | Example |
|----------|------------|---------|
| `+`      | Addition   | `x + y` |
| `-`      | Subtraction | `x - y` |
| `*`      | Multiplication | `x * y` |
| `/`      | Division   | `x / y` |
| `%`      | Modulus (remainder) | `x % y` |

```cpp
int a = 10, b = 3;
std::cout << a + b << std::endl;  // 13
std::cout << a % b << std::endl;  // 1
```

### Assignment Operators
| Operator | Equivalent to |
|----------|--------------|
| `=`      | `x = 5` |
| `+=`     | `x += 3` (same as `x = x + 3`) |
| `-=`     | `x -= 2` (same as `x = x - 2`) |
| `*=`     | `x *= 4` (same as `x = x * 4`) |
| `/=`     | `x /= 2` (same as `x = x / 2`) |
| `%=`     | `x %= 3` (same as `x = x % 3`) |

```cpp
int x = 5;
x += 2;  // x is now 7
```

### Comparison Operators
| Operator | Description | Example |
|----------|------------|---------|
| `==`     | Equal to   | `x == y` |
| `!=`     | Not equal to | `x != y` |
| `>`      | Greater than | `x > y` |
| `<`      | Less than  | `x < y` |
| `>=`     | Greater than or equal to | `x >= y` |
| `<=`     | Less than or equal to | `x <= y` |

```cpp
int a = 10, b = 5;
std::cout << (a > b) << std::endl;  // Prints 1 (true)
```

### Logical Operators
| Operator | Description | Example               |
|----------|-------------|-----------------------|
| `&&`     | Logical AND | `(x > 5 && y < 10)`   |
| `\|\|`   | Logical OR  | `(x > 5 \|\| y < 10)` |
| `!`      | Logical NOT | `!(x == y)`           |

```cpp
bool isSunny = true;
bool isWarm = false;
std::cout << (isSunny && isWarm) << std::endl; // false (0)
```

### Increment and Decrement Operators
| Operator | Description | Example |
|----------|------------|---------|
| `++`     | Increment by 1 | `x++` (post-increment) |
| `--`     | Decrement by 1 | `x--` (post-decrement) |

```cpp
int x = 5;
x++;  // x becomes 6
--x;  // x returns to 5
```

## Comments
Comments help explain the code.

```cpp
// This is a single-line comment

/*
   This is a multi-line
   comment
*/
```
