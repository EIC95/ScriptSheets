# Packages

## Introduction
Packages in Java are used to organize classes into namespaces, making code modular and easier to manage. They help avoid name conflicts and improve maintainability.

## Declaring a Package
A package is declared at the beginning of a Java file using the `package` keyword.

Example:
```java
package mypackage;

public class MyClass {
    public void display() {
        System.out.println("This is a method from MyClass in mypackage");
    }
}
```

## Importing Packages
To use a class from another package, it must be imported using the `import` statement.

Example:
```java
import mypackage.MyClass;

public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.display();
    }
}
```

## Built-in Packages
Java provides several built-in packages, such as:

| Package | Description |
|---------|-------------|
| `java.util` | Contains utility classes like `ArrayList`, `HashMap`, and `Collections`. |
| `java.io` | Provides classes for input and output operations. |
| `java.net` | Supports networking functionalities. |
| `java.sql` | Includes classes for database connectivity. |

Example of using a built-in package:
```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Packages");
        System.out.println(list);
    }
}
```

## Creating Subpackages
Subpackages can be created using dot notation.

Example:
```java
package mypackage.subpackage;

public class SubClass {
    public void show() {
        System.out.println("Inside SubClass of subpackage");
    }
}
```

## Access Modifiers and Packages
Access to classes and members in different packages depends on their access modifiers:

| Modifier | Same Class | Same Package | Subclass (Different Package) | Other Packages |
|----------|------------|--------------|------------------------------|----------------|
| `public` | ✅ | ✅ | ✅ | ✅ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| `default` (no modifier) | ✅ | ✅ | ❌ | ❌ |
| `private` | ✅ | ❌ | ❌ | ❌ |
