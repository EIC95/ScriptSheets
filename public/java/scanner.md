# Scanner Class

## Introduction
The `Scanner` class in Java is used to take input from the user. It is part of the `java.util` package and provides methods to read different types of data from the standard input (keyboard).

## Importing the Scanner Class
Before using the `Scanner` class, it must be imported:

```java
import java.util.Scanner;
```

## Creating a Scanner Object
To use the `Scanner` class, create an instance of it:

```java
Scanner scanner = new Scanner(System.in);
```

## Reading Different Data Types
The `Scanner` class provides various methods to read different types of input:

| Method | Data Type | Example |
|--------|----------|---------|
| `nextInt()` | Integer | `int num = scanner.nextInt();` |
| `nextDouble()` | Double | `double d = scanner.nextDouble();` |
| `nextLine()` | String (full line) | `String str = scanner.nextLine();` |
| `next()` | Single word | `String word = scanner.next();` |
| `nextBoolean()` | Boolean | `boolean flag = scanner.nextBoolean();` |

## Example: Reading User Input
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.println("Hello, " + name + "! You are " + age + " years old.");
    }
}
```

## Closing the Scanner
It is recommended to close the `Scanner` object to free resources:

```java
scanner.close();
```

