# Wrapper Classes

## Introduction
Wrapper classes in Java provide a way to use primitive data types (`int`, `char`, `double`, etc.) as objects. These classes are part of `java.lang` and are useful in scenarios where objects are required instead of primitives, such as in collections.

## Wrapper Classes for Primitives
Each primitive data type has a corresponding wrapper class:

| Primitive Type | Wrapper Class |
|---------------|--------------|
| `byte`       | `Byte`       |
| `short`      | `Short`      |
| `int`        | `Integer`    |
| `long`       | `Long`       |
| `float`      | `Float`      |
| `double`     | `Double`     |
| `char`       | `Character`  |
| `boolean`    | `Boolean`    |

## Autoboxing and Unboxing
Java automatically converts primitives to their corresponding wrapper class objects (Autoboxing) and vice versa (Unboxing).

### Example of Autoboxing
```java
int num = 10;
Integer wrappedNum = num; // Autoboxing
System.out.println(wrappedNum);
```

### Example of Unboxing
```java
Integer wrappedValue = new Integer(20);
int primitiveValue = wrappedValue; // Unboxing
System.out.println(primitiveValue);
```

## Using Wrapper Classes in Collections
Since collections work with objects, wrapper classes are necessary for storing primitive values.

```java
import java.util.ArrayList;

ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(5); // Autoboxing
numbers.add(10);

int firstNum = numbers.get(0); // Unboxing
System.out.println(firstNum);
```

## Useful Methods in Wrapper Classes
Each wrapper class provides useful utility methods.

```java
int maxValue = Integer.max(10, 20);
System.out.println("Max Value: " + maxValue);

boolean isDigit = Character.isDigit('5');
System.out.println("Is Digit: " + isDigit);
```

## Advantages of Wrapper Classes
- Enable the use of primitive data types in collections.
- Provide utility methods for data manipulation.
- Support autoboxing and unboxing for easy conversion between primitives and objects.

