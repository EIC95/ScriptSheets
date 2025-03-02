# Control Structures

## Introduction

Control structures in Python allow the flow of execution to be managed based on conditions and loops. These include conditional statements (`if`, `elif`, `else`), loops (`for`, `while`), and control keywords (`break`, `continue`, `pass`).

## Conditional Statements

### If-Else Statement

```python
age = 18
if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")
```

### If-Elif-Else

```python
score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")
```

## Loops

### For Loop

```python
for i in range(5):
    print(i)  # Outputs: 0 1 2 3 4
```

### While Loop

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

## Loop Control Statements

| Statement  | Description |
|------------|-------------|
| `break`    | Exits the loop immediately |
| `continue` | Skips the rest of the iteration and continues with the next loop iteration |
| `pass`     | Acts as a placeholder, doing nothing |

### Example

```python
for num in range(10):
    if num == 5:
        break  # Stops at 5
    print(num)
```

```python
for num in range(10):
    if num % 2 == 0:
        continue  # Skips even numbers
    print(num)
```

```python
def my_function():
    pass  # Placeholder for future code
```
