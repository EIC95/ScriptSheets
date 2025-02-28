# Exception Handling

## Introduction
Exception handling in Java is a mechanism to handle runtime errors, ensuring the normal flow of the program. It helps prevent unexpected crashes and improves application robustness.

## Types of Exceptions
Exceptions in Java are categorized into two main types:

### Checked Exceptions
Checked exceptions are checked at compile time and must be handled using `try-catch` or declared with `throws`.

**Examples:**
- `IOException`
- `SQLException`

### Unchecked Exceptions
Unchecked exceptions occur at runtime and do not require mandatory handling.

**Examples:**
- `NullPointerException`
- `ArrayIndexOutOfBoundsException`
- `ArithmeticException`

## Handling Exceptions
### Using Try-Catch
The `try-catch` block is used to handle exceptions gracefully.

```java
try {
    int result = 10 / 0; // This will cause ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero.");
}
```

### Using Finally
The `finally` block always executes, regardless of whether an exception occurs.

```java
try {
    int[] numbers = {1, 2, 3};
    System.out.println(numbers[5]); // ArrayIndexOutOfBoundsException
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Index out of bounds.");
} finally {
    System.out.println("Execution completed.");
}
```

### Using Throws
The `throws` keyword allows a method to declare an exception that it might throw.

```java
void readFile() throws IOException {
    throw new IOException("File not found");
}
```

### Using Throw
The `throw` keyword is used to explicitly throw an exception.

```java
void checkAge(int age) {
    if (age < 18) {
        throw new IllegalArgumentException("Age must be 18 or older.");
    }
}
```

## Custom Exceptions
Custom exceptions allow defining specific error-handling scenarios.

```java
class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            throw new CustomException("Custom error occurred");
        } catch (CustomException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

