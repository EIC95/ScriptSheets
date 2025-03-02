# Modules

## Introduction

A module in Python is a file that contains Python code (functions, classes, or variables) that can be reused in other programs. Modules help organize code into separate files for better maintainability.

## Importing Modules

Python provides the `import` statement to use modules in a script.

```python
import math
print(math.sqrt(25))  # Output: 5.0
```

## Importing Specific Elements

You can import only specific functions or variables from a module.

```python
from math import sqrt
print(sqrt(25))  # Output: 5.0
```

## Aliasing Modules

You can assign an alias to a module using `as`.

```python
import numpy as np
print(np.array([1, 2, 3]))
```

## Creating a Custom Module

You can create your own module by saving a Python script with functions in a `.py` file.

**my_module.py:**
```python
def greet(name):
    return f"Hello, {name}!"
```

**main.py:**
```python
import my_module
print(my_module.greet("Alice"))  # Output: Hello, Alice!
```

## Built-in Modules

Python comes with several built-in modules that provide various functionalities.

| Module | Description |
|--------|-------------|
| `math` | Mathematical functions |
| `random` | Random number generation |
| `datetime` | Working with dates and times |
| `os` | Interacting with the operating system |
| `sys` | System-specific parameters and functions |

Example using the `random` module:

```python
import random
print(random.randint(1, 10))  # Output: Random number between 1 and 10
```

## The `__name__ == "__main__"` Condition

This condition allows code in a module to run only when executed directly, not when imported.

```python
def main():
    print("This is the main function")

if __name__ == "__main__":
    main()
```