# Methods

## Introduction
Methods in Java are blocks of code that perform specific tasks. They help in code reusability and organization.

## Defining a Method
A method is defined using the following syntax:
```java
returnType methodName(parameters) {
    // Method body
    return value; // if applicable
}
```

Example:
```java
public int add(int a, int b) {
    return a + b;
}
```

## Calling a Method
Methods are called using their name and passing required arguments:
```java
int result = add(5, 10);
System.out.println(result); // Output: 15
```

## Method Parameters
Methods can accept parameters to process data.
```java
public void greet(String name) {
    System.out.println("Hello, " + name + "!");
}
```
Calling the method:
```java
greet("Alice"); // Output: Hello, Alice!
```

## Return Values
Methods can return values using the `return` statement.
```java
public double square(double num) {
    return num * num;
}
```
Calling the method:
```java
double result = square(4.5);
System.out.println(result); // Output: 20.25
```

## Method Overloading
Java allows multiple methods with the same name but different parameters.
```java
public int multiply(int a, int b) {
    return a * b;
}

public double multiply(double a, double b) {
    return a * b;
}
```
Calling overloaded methods:
```java
System.out.println(multiply(2, 3));      // Output: 6
System.out.println(multiply(2.5, 3.5));  // Output: 8.75
```

## Static Methods
Static methods belong to the class and can be called without creating an object.
```java
public class MathUtil {
    public static int square(int num) {
        return num * num;
    }
}
```
Calling a static method:
```java
System.out.println(MathUtil.square(5)); // Output: 25
```

## Recursion
A method calling itself is known as recursion.
```java
public int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}
```
Calling the method:
```java
System.out.println(factorial(5)); // Output: 120
```

