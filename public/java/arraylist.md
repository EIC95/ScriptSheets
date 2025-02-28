# ArrayList

## Introduction
`ArrayList` is a resizable array implementation of the `List` interface in Java. It is part of the `java.util` package and provides dynamic size management, allowing elements to be added or removed easily.

## Importing ArrayList
Before using `ArrayList`, import the necessary class:

```java
import java.util.ArrayList;
```

## Creating an ArrayList
An `ArrayList` can store objects of a specific type:

```java
ArrayList<String> names = new ArrayList<>();
```

## Adding Elements
Elements can be added using the `add()` method:

```java
names.add("Alice");
names.add("Bob");
names.add("Charlie");
```

## Accessing Elements
Elements are accessed using the `get()` method:

```java
String firstName = names.get(0);
System.out.println("First name: " + firstName);
```

## Modifying Elements
Elements can be modified using the `set()` method:

```java
names.set(1, "David");
System.out.println("Updated names: " + names);
```

## Removing Elements
Elements can be removed using the `remove()` method:

```java
names.remove("Alice"); // Removes by value
names.remove(1); // Removes by index
System.out.println("Updated names: " + names);
```

## Iterating Through an ArrayList
### Using a For Loop

```java
for (int i = 0; i < names.size(); i++) {
    System.out.println(names.get(i));
}
```

### Using a For-Each Loop

```java
for (String name : names) {
    System.out.println(name);
}
```

### Using an Iterator

```java
import java.util.Iterator;

Iterator<String> iterator = names.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
```

## Checking If an Element Exists
The `contains()` method checks for element existence:

```java
boolean exists = names.contains("Bob");
System.out.println("Is Bob in the list? " + exists);
```

## Getting the Size
The `size()` method returns the number of elements:

```java
System.out.println("Size: " + names.size());
```

## Clearing an ArrayList
To remove all elements:

```java
names.clear();
System.out.println("List after clearing: " + names);
```

