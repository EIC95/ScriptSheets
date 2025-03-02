# Mathematics

## Introduction

Python provides various built-in mathematical operations and functions to perform calculations efficiently. These include basic arithmetic, advanced mathematical functions, and module support for more complex operations.

## Basic Arithmetic Operations

| Operator | Description        | Example  |
|----------|--------------------|----------|
| `+`      | Addition           | `a + b`  |
| `-`      | Subtraction        | `a - b`  |
| `*`      | Multiplication     | `a * b`  |
| `/`      | Division           | `a / b`  |
| `//`     | Floor Division     | `a // b` |
| `%`      | Modulus (Remainder) | `a % b`  |
| `**`     | Exponentiation     | `a ** b` |

Example:

```python
a = 10
b = 3
print(a + b)   # Output: 13
print(a - b)   # Output: 7
print(a * b)   # Output: 30
print(a / b)   # Output: 3.333...
print(a // b)  # Output: 3
print(a % b)   # Output: 1
print(a ** b)  # Output: 1000
```

## Mathematical Functions

Python's built-in `math` module provides advanced mathematical operations.

### Importing the Math Module

```python
import math
```

### Common Math Functions

| Function            | Description |
|---------------------|-------------|
| `math.sqrt(x)`     | Square root of `x` |
| `math.pow(x, y)`   | `x` raised to the power of `y` |
| `math.exp(x)`      | Exponential of `x` (e^x) |
| `math.log(x, base)`| Logarithm of `x` (default base `e`) |
| `math.sin(x)`      | Sine of `x` (radians) |
| `math.cos(x)`      | Cosine of `x` (radians) |
| `math.tan(x)`      | Tangent of `x` (radians) |
| `math.degrees(x)`  | Convert radians to degrees |
| `math.radians(x)`  | Convert degrees to radians |
| `math.pi`          | Value of π (3.14159...) |
| `math.e`           | Value of Euler’s number (2.718...) |

Example:

```python
import math
print(math.sqrt(25))    # Output: 5.0
print(math.pow(2, 3))   # Output: 8.0
print(math.log(10))     # Natural log of 10
print(math.sin(math.radians(90)))  # Output: 1.0
```

## Random Number Generation

Python's `random` module allows generating random numbers.

```python
import random
print(random.randint(1, 10))  # Random integer between 1 and 10
print(random.random())        # Random float between 0 and 1
```
