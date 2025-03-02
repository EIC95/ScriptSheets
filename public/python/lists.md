# Lists

## Introduction

Lists in Python are ordered, mutable collections that can store multiple values of different data types. They allow indexing, slicing, and various operations for data manipulation.

## Creating a List

A list is created by enclosing elements within square brackets `[]`, separated by commas.

```python
my_list = [1, 2, 3, "apple", True]
print(my_list)  # Output: [1, 2, 3, 'apple', True]
```

## Accessing Elements

### Indexing

Elements in a list can be accessed using their index, starting from `0` for the first element and `-1` for the last element.

```python
print(my_list[0])  # Output: 1
print(my_list[-1])  # Output: True (last element)
```

### Slicing

Slicing allows extracting a portion of the list using `start:stop` notation.

```python
print(my_list[1:4])  # Output: [2, 3, 'apple']
print(my_list[:2])   # Output: [1, 2]
print(my_list[2:])   # Output: [3, 'apple', True]
```

## Modifying Lists

Lists are mutable, meaning elements can be changed after creation.

```python
my_list[1] = "banana"
print(my_list)  # Output: [1, 'banana', 3, 'apple', True]
```

## List Operations

Common list operations include adding, removing, and finding elements.

| Operation      | Description                                | Example |
|---------------|--------------------------------------------|---------|
| `len(lst)`    | Returns the number of elements in a list  | `len(my_list)` → `5` |
| `lst.append(x)` | Adds an element to the end of the list   | `my_list.append("new")` |
| `lst.insert(i, x)` | Inserts an element at index `i`   | `my_list.insert(2, "orange")` |
| `lst.remove(x)` | Removes the first occurrence of `x` | `my_list.remove("apple")` |
| `lst.pop(i)`  | Removes and returns element at index `i` | `my_list.pop(1)` |
| `lst.clear()` | Removes all elements from the list  | `my_list.clear()` |
| `lst.index(x)` | Returns index of first occurrence of `x` | `my_list.index(3)` |
| `lst.count(x)` | Counts occurrences of `x` in list | `my_list.count(3)` |
| `lst.sort()` | Sorts the list in ascending order | `my_list.sort()` |
| `lst.reverse()` | Reverses the list | `my_list.reverse()` |

## Iterating Over a List

You can loop through a list using a `for` loop to access each element sequentially.

```python
for item in my_list:
    print(item)
```

## List Comprehensions

List comprehensions provide a concise way to create lists using loops inside brackets.

```python
squares = [x**2 for x in range(5)]
print(squares)  # Output: [0, 1, 4, 9, 16]
```