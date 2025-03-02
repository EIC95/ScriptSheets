# Exception Handling

## Introduction

Exceptions in Python are errors that occur during program execution. Instead of crashing the program, Python allows handling exceptions using `try` and `except` blocks.

## Basic Exception Handling

A `try-except` block can be used to catch errors and prevent program crashes.

```python
try:
    x = 10 / 0  # This will cause a ZeroDivisionError
except ZeroDivisionError:
    print("Cannot divide by zero!")
```

**Output:**
```
Cannot divide by zero!
```

## Catching Multiple Exceptions

You can handle different types of exceptions separately.

```python
try:
    num = int("abc")  # This will cause a ValueError
except ValueError:
    print("Invalid number format!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
```

## Using `else` and `finally`

- The `else` block runs if no exceptions occur.
- The `finally` block always runs, whether an exception occurs or not.

```python
try:
    x = 5 / 1
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    print("Division successful!")
finally:
    print("Execution complete.")
```

**Output:**
```
Division successful!
Execution complete.
```

## Raising Exceptions

You can manually raise exceptions using the `raise` keyword.

```python
def check_age(age):
    if age < 18:
        raise ValueError("Age must be at least 18.")
    return "Access granted."

try:
    print(check_age(16))
except ValueError as e:
    print("Error:", e)
```

**Output:**
```
Error: Age must be at least 18.
```

## Custom Exceptions

You can define your own exception classes by inheriting from `Exception`.

```python
class CustomError(Exception):
    pass

try:
    raise CustomError("Something went wrong!")
except CustomError as e:
    print("Caught custom exception:", e)
```