# Lambda Expressions

## Introduction
Lambda expressions in Java provide a concise way to implement functional interfaces. They enable writing short, readable, and efficient code, particularly for operations like iteration, filtering, and mapping.

## Syntax
A lambda expression consists of parameters, an arrow (`->`), and a body.

```java
(parameter) -> { expression };
```

### Example:
```java
interface MathOperation {
    int operate(int a, int b);
}

public class LambdaExample {
    public static void main(String[] args) {
        MathOperation addition = (a, b) -> a + b;
        System.out.println("Sum: " + addition.operate(5, 3));
    }
}
```

## Functional Interfaces
A functional interface contains only one abstract method. Examples include:

- `Runnable` (method: `run()`)
- `Callable` (method: `call()`)
- `Comparator` (method: `compare()`)
- `Consumer` (method: `accept()`) from `java.util.function`

### Example:
```java
@FunctionalInterface
interface Greeting {
    void sayHello(String name);
}

public class LambdaExample {
    public static void main(String[] args) {
        Greeting greeting = name -> System.out.println("Hello, " + name);
        greeting.sayHello("Alice");
    }
}
```

## Using Lambdas with Collections
Lambdas are commonly used with collections for filtering, sorting, and iteration.

### Sorting a List
```java
import java.util.*;

public class LambdaSorting {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        names.sort((a, b) -> a.compareTo(b));
        System.out.println(names);
    }
}
```

### Filtering a List
```java
import java.util.*;
import java.util.stream.*;

public class LambdaFilter {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
        List<String> filtered = names.stream()
                                     .filter(name -> name.startsWith("A"))
                                     .collect(Collectors.toList());
        System.out.println(filtered);
    }
}
```

## Method References
Method references simplify lambda expressions further when an existing method matches the required functional interface.

### Example:
```java
import java.util.*;

public class MethodReferenceExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        names.forEach(System.out::println);
    }
}
```

