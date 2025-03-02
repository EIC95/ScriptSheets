# Basics

## Introduction
Java is a popular programming language used to develop cross-platform applications. It is object-oriented, secure, and efficient. This section covers the essential fundamentals to get started with Java.

## Structure of a Java Program
A basic Java program consists of a class containing a `main` method, which serves as the entry point of execution.

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

### Explanation:
1. `public class Main`: Declares a class named `Main`. Every Java application must have at least one class.
2. `public static void main(String[] args)`: This is the main method where program execution begins.
3. `System.out.println("Hello, Java!");`: Prints text to the console.

## Output Methods
Printing output in Java is mainly done using `System.out.println()`.

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

## Data Types
Java has several built-in data types:

| Type      | Description          | Example  |
|-----------|----------------------|----------|
| `int`     | Integer values       | `42`     |
| `double`  | Decimal numbers      | `3.14`   |
| `char`    | Single character     | `'A'`    |
| `boolean` | True or False values | `true`   |
| `String`  | Sequence of characters | `"Java"` |

## Variables
Variables in Java are typed and must be declared before use.

```java
int age = 25;
double pi = 3.14;
String name = "Alice";
boolean isJavaFun = true;
```

## Type Casting
Type casting allows you to convert a variable from one data type to another. There are two types:

### Implicit Casting (Widening Casting)
Java automatically converts smaller types to larger types.

```java
int num = 10;
double convertedNum = num; // Implicit casting from int to double
System.out.println(convertedNum); // Output: 10.0
```

### Explicit Casting (Narrowing Casting)
Explicit casting is needed when converting a larger type to a smaller type.

```java
double num = 10.99;
int convertedNum = (int) num; // Explicit casting from double to int
System.out.println(convertedNum); // Output: 10
```

## Operators
Java supports several types of operators:

### Arithmetic Operators
| Operator | Description     | Example  |
|----------|---------------|----------|
| `+`      | Addition       | `a + b`  |
| `-`      | Subtraction    | `a - b`  |
| `*`      | Multiplication | `a * b`  |
| `/`      | Division       | `a / b`  |
| `%`      | Modulo         | `a % b`  |

### Comparison Operators
| Operator | Description       | Example  |
|----------|------------------|----------|
| `==`     | Equal to         | `a == b` |
| `!=`     | Not equal to     | `a != b` |
| `>`      | Greater than     | `a > b`  |
| `<`      | Less than        | `a < b`  |
| `>=`     | Greater or equal | `a >= b` |
| `<=`     | Less or equal    | `a <= b` |

### Logical Operators
| Operator | Description | Example    |
|----------|-------------|------------|
| `&&`     | Logical AND | `a && b`   |
| `||`     | Logical OR  | `a || b`   |
| `!`      | Logical NOT | `!a`       |

### Assignment Operators
| Operator | Description           | Example  |
|----------|----------------------|----------|
| `=`      | Assign value         | `a = b`  |
| `+=`     | Add and assign       | `a += b` |
| `-=`     | Subtract and assign  | `a -= b` |
| `*=`     | Multiply and assign  | `a *= b` |
| `/=`     | Divide and assign    | `a /= b` |
| `%=`     | Modulo and assign    | `a %= b` |

### Increment and Decrement Operators
| Operator | Description       | Example  |
|----------|------------------|----------|
| `++`     | Increment by 1   | `a++`    |
| `--`     | Decrement by 1   | `a--`    |

## Constants
Constants can be declared using `final`.

```java
final double PI = 3.14159;
```

