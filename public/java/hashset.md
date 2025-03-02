# HashSet

## Introduction
A `HashSet` in Java is part of the `java.util` package and implements the `Set` interface. It stores unique elements and does not allow duplicates. `HashSet` is backed by a `HashMap` and does not maintain insertion order.

## Importing HashSet
To use `HashSet`, import it first:

```java
import java.util.HashSet;
```

## Creating a HashSet
You can create a `HashSet` to store unique elements of a specific type:

```java
HashSet<String> names = new HashSet<>();
```

## Adding Elements
Elements are added using the `add()` method:

```java
names.add("Alice");
names.add("Bob");
names.add("Charlie");
```

## Checking If an Element Exists
The `contains()` method checks for the existence of an element:

```java
boolean hasBob = names.contains("Bob");
System.out.println("Contains Bob? " + hasBob);
```

## Removing Elements
Elements can be removed using the `remove()` method:

```java
names.remove("Charlie");
System.out.println("Updated names: " + names);
```

## Iterating Through a HashSet
### Using a For-Each Loop

```java
for (String name : names) {
    System.out.println(name);
}
```

### Using an Iterator

```java
Iterator<String> iterator = names.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
```

## Getting the Size
To get the number of elements:

```java
System.out.println("Size: " + names.size());
```

## Clearing a HashSet
To remove all elements:

```java
names.clear();
System.out.println("HashSet after clearing: " + names);
```

