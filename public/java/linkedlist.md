# LinkedList

## Introduction
`LinkedList` is a part of the `java.util` package and implements the `List` interface. Unlike `ArrayList`, `LinkedList` uses a doubly-linked list structure, making insertions and deletions more efficient in comparison to an array-based structure.

## Importing LinkedList
Before using `LinkedList`, import the necessary class:

```java
import java.util.LinkedList;
```

## Creating a LinkedList
A `LinkedList` can store objects of a specific type:

```java
LinkedList<String> names = new LinkedList<>();
```

## Adding Elements
Elements can be added using the `add()` method:

```java
names.add("Alice");
names.add("Bob");
names.add("Charlie");
```

### Adding Elements at Specific Positions

```java
names.addFirst("Zara"); // Adds at the beginning
names.addLast("Dave"); // Adds at the end
names.add(2, "Eve"); // Adds at index 2
```

## Accessing Elements
Elements are accessed using the `get()` method:

```java
String firstName = names.getFirst();
String lastName = names.getLast();
System.out.println("First name: " + firstName);
System.out.println("Last name: " + lastName);
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
names.removeFirst(); // Removes first element
names.removeLast(); // Removes last element
System.out.println("Updated names: " + names);
```

## Iterating Through a LinkedList
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

## Clearing a LinkedList
To remove all elements:

```java
names.clear();
System.out.println("List after clearing: " + names);
```

