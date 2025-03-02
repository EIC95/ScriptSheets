# Tuples

## Introduction

Tuples in Python are ordered, immutable collections that can store multiple values of different data types. Unlike lists, tuples cannot be modified after creation, making them useful for storing fixed data.

## Creating a Tuple

A tuple is created by enclosing elements within parentheses `()`, separated by commas.

```python
tuple1 = (1, 2, 3, "apple", True)
print(tuple1)  # Output: (1, 2, 3, 'apple', True)
```

### Single-element Tuples

To create a tuple with a single element, a trailing comma is required.

```python
tuple2 = (5,)
print(type(tuple2))  # Output: <class 'tuple'>
```

## Accessing Elements

### Indexing

Elements in a tuple can be accessed using their index, starting from `0` for the first element and `-1` for the last element.

```python
print(tuple1[0])  # Output: 1
print(tuple1[-1])  # Output: True (last element)
```

### Slicing

Slicing allows extracting a portion of the tuple using `start:stop` notation.

```python
print(tuple1[1:4])  # Output: (2, 3, 'apple')
print(tuple1[:2])   # Output: (1, 2)
print(tuple1[2:])   # Output: (3, 'apple', True)
```

## Tuple Operations

Although tuples are immutable, some operations are available.

| Operation      | Description                                | Example |
|---------------|--------------------------------------------|---------|
| `len(tpl)`    | Returns the number of elements in a tuple | `len(tuple1)` → `5` |
| `tpl.count(x)` | Counts occurrences of `x` in tuple       | `tuple1.count(3)` |
| `tpl.index(x)` | Returns index of first occurrence of `x` | `tuple1.index("apple")` |
| `+` (concatenation) | Joins two tuples together | `(1, 2) + (3, 4)` → `(1, 2, 3, 4)` |
| `*` (repetition) | Repeats the tuple elements | `('a',) * 3` → `('a', 'a', 'a')` |

## Iterating Over a Tuple

You can loop through a tuple using a `for` loop to access each element sequentially.

```python
for item in tuple1:
    print(item)
```

## Tuple Unpacking

Tuple unpacking allows you to assign multiple variables at once.

```python
a, b, c = (1, 2, 3)
print(a)  # Output: 1
print(b)  # Output: 2
print(c)  # Output: 3
```
