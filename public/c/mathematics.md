# Mathematics in C

## Introduction
- The C language provides **basic arithmetic operators** and **math functions** from the `<math.h>` library.
- Mathematical operations are essential for calculations, data processing, and algorithm implementations.

## Arithmetic Operators
| Operator | Description | Example |
|----------|------------|---------|
| `+`      | Addition   | `a + b` |
| `-`      | Subtraction| `a - b` |
| `*`      | Multiplication | `a * b` |
| `/`      | Division   | `a / b` |
| `%`      | Modulus (Remainder) | `a % b` |

#### Example:
```c
#include <stdio.h>

int main() {
    int a = 10, b = 3;
    printf("Addition: %d\n", a + b);
    printf("Subtraction: %d\n", a - b);
    printf("Multiplication: %d\n", a * b);
    printf("Division: %d\n", a / b);
    printf("Modulus: %d\n", a % b);
    return 0;
}
```

## Math Functions
- The `<math.h>` library provides **advanced mathematical functions**.

| Function       | Description                 | Example           |
|---------------|-----------------------------|-------------------|
| `sqrt(x)`     | Square root of `x`          | `sqrt(25) → 5.0`  |
| `pow(x, y)`   | `x` raised to the power `y` | `pow(2, 3) → 8.0` |
| `abs(x)`      | Absolute value of `x`       | `abs(-5) → 5`     |
| `ceil(x)`     | Rounds `x` up               | `ceil(3.2) → 4.0` |
| `floor(x)`    | Rounds `x` down             | `floor(3.9) → 3.0` |
| `round(x)`    | Rounds `x` to nearest int   | `round(3.5) → 4.0` |
| `sin(x)`      | Sine of `x` (radians)       | `sin(0) → 0.0`    |
| `cos(x)`      | Cosine of `x` (radians)     | `cos(0) → 1.0`    |
| `tan(x)`      | Tangent of `x` (radians)    | `tan(0) → 0.0`    |

#### Example:
```c
#include <stdio.h>
#include <math.h>

int main() {
    printf("Square root of 16: %.2f\n", sqrt(16));
    printf("2 raised to 3: %.2f\n", pow(2, 3));
    printf("Absolute of -10: %d\n", abs(-10));
    printf("Ceiling of 4.3: %.2f\n", ceil(4.3));
    printf("Floor of 4.9: %.2f\n", floor(4.9));
    return 0;
}
```

## Random Numbers
- The `<stdlib.h>` library provides **random number generation** functions.

| Function       | Description                                  |
|---------------|----------------------------------------------|
| `rand()`      | Returns a pseudo-random integer             |
| `srand(seed)` | Sets a seed for random number generation    |

#### Example:
```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(0)); // Seed random generator
    int randomNum = rand() % 100; // Random number between 0-99
    printf("Random Number: %d\n", randomNum);
    return 0;
}
```
