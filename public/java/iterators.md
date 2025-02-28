# Iterators

## Introduction
An `Iterator` in Java is used to traverse collections, such as `ArrayList`, `HashSet`, or `LinkedList`. It provides methods to iterate through a collection without exposing its underlying structure.

## Importing Iterator
To use an `Iterator`, you need to import it from the `java.util` package:

```java
import java.util.Iterator;
import java.util.ArrayList;
```

## Creating an Iterator
To iterate through a collection, first create the collection and obtain its iterator using the `iterator()` method:

```java
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

Iterator<String> iterator = names.iterator();
```

## Iterating Through a Collection
The `Iterator` interface provides three main methods:
- `hasNext()`: Returns `true` if there are more elements to iterate over.
- `next()`: Returns the next element.
- `remove()`: Removes the last element returned by `next()`.

### Using an Iterator to Traverse a Collection

```java
while (iterator.hasNext()) {
    String name = iterator.next();
    System.out.println(name);
}
```

### Removing Elements While Iterating
Using `remove()` ensures safe removal during iteration:

```java
Iterator<String> iterator2 = names.iterator();
while (iterator2.hasNext()) {
    String name = iterator2.next();
    if (name.equals("Bob")) {
        iterator2.remove();
    }
}
System.out.println("Updated list: " + names);
```

## Using ListIterator
For `List` collections like `ArrayList`, `ListIterator` can be used for bidirectional iteration.

```java
import java.util.ListIterator;

ListIterator<String> listIterator = names.listIterator();
while (listIterator.hasNext()) {
    System.out.println(listIterator.next());
}
```

## Advantages of Using Iterators
- Ensures safe traversal by preventing `ConcurrentModificationException`
- Provides a consistent way to iterate through different types of collections
- Supports element removal during iteration

