# Mathematics in C++

## Introduction  
C++ provides a variety of mathematical operations and functions that allow developers to perform calculations efficiently. These include basic arithmetic operations, advanced mathematical functions from the `<cmath>` library, and number manipulation techniques.

## Basic Arithmetic Operations  
C++ supports standard arithmetic operators for basic mathematical calculations.

| Operator | Description | Example |
|----------|------------|---------|
| `+`      | Addition   | `x + y` |
| `-`      | Subtraction | `x - y` |
| `*`      | Multiplication | `x * y` |
| `/`      | Division   | `x / y` |
| `%`      | Modulo (Remainder) | `x % y` |

### Example  
```cpp
#include <iostream>

int main() {
    int a = 10, b = 3;
    
    std::cout << "Addition: " << a + b << std::endl;
    std::cout << "Subtraction: " << a - b << std::endl;
    std::cout << "Multiplication: " << a * b << std::endl;
    std::cout << "Division: " << a / b << std::endl; // Integer division
    std::cout << "Modulo: " << a % b << std::endl;

    return 0;
}
```

## The `<cmath>` Library
The `<cmath>` library provides various mathematical functions.

### Common Mathematical Functions
| Function | Description | Example |
|----------|------------|---------|
| `sqrt(x)` | Square root | `sqrt(16) → 4` |
| `pow(x, y)` | x raised to the power y | `pow(2, 3) → 8` |
| `abs(x)` | Absolute value | `abs(-10) → 10` |
| `floor(x)` | Rounds down | `floor(2.9) → 2` |
| `ceil(x)` | Rounds up | `ceil(2.1) → 3` |
| `round(x)` | Rounds to the nearest integer | `round(2.5) → 3` |
| `fmod(x, y)` | Floating-point remainder | `fmod(10.5, 3) → 1.5` |

### Example
```cpp
#include <iostream>
#include <cmath>

int main() {
    double num = 16.7;

    std::cout << "Square Root: " << sqrt(16) << std::endl;
    std::cout << "Power: " << pow(2, 3) << std::endl;
    std::cout << "Absolute: " << abs(-10) << std::endl;
    std::cout << "Floor: " << floor(num) << std::endl;
    std::cout << "Ceil: " << ceil(num) << std::endl;
    std::cout << "Round: " << round(num) << std::endl;

    return 0;
}
```

## Trigonometric Functions
The `<cmath>` library also includes trigonometric functions.

| Function | Description | Example |
|----------|------------|---------|
| `sin(x)` | Sine of x (radians) | `sin(3.14)` |
| `cos(x)` | Cosine of x (radians) | `cos(3.14)` |
| `tan(x)` | Tangent of x (radians) | `tan(3.14)` |
| `asin(x)` | Arcsine (returns radians) | `asin(1.0)` |
| `acos(x)` | Arccosine (returns radians) | `acos(1.0)` |
| `atan(x)` | Arctangent (returns radians) | `atan(1.0)` |

### Example
```cpp
#include <iostream>
#include <cmath>

int main() {
    double angle = 3.14159 / 4; // 45 degrees in radians

    std::cout << "Sine: " << sin(angle) << std::endl;
    std::cout << "Cosine: " << cos(angle) << std::endl;
    std::cout << "Tangent: " << tan(angle) << std::endl;

    return 0;
}
```

## Logarithmic and Exponential Functions
| Function | Description | Example |
|----------|------------|---------|
| `log(x)` | Natural logarithm (base e) | `log(2.71828)` |
| `log10(x)` | Logarithm base 10 | `log10(1000)` |
| `exp(x)` | e raised to the power x | `exp(1.0)` |

### Example
```cpp
#include <iostream>
#include <cmath>

int main() {
    std::cout << "Natural Log: " << log(2.71828) << std::endl;
    std::cout << "Log Base 10: " << log10(1000) << std::endl;
    std::cout << "Exponential: " << exp(1.0) << std::endl;

    return 0;
}
```

## Random Numbers
C++ provides functions for generating random numbers.

### Generating a Random Number
```cpp
#include <iostream>
#include <cstdlib> // For rand() and srand()
#include <ctime>   // For time()

int main() {
    srand(time(0)); // Seed the random number generator
    int randomNum = rand() % 100; // Generates a number between 0 and 99

    std::cout << "Random Number: " << randomNum << std::endl;

    return 0;
}
```

### Generating Random Numbers in a Range
```cpp
#include <iostream>
#include <cstdlib>
#include <ctime>

int getRandomNumber(int min, int max) {
    return min + rand() % (max - min + 1);
}

int main() {
    srand(time(0));
    std::cout << "Random Number (1-10): " << getRandomNumber(1, 10) << std::endl;
    return 0;
}
```