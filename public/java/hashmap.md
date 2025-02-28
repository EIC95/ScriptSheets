# HashMap

## Introduction
A `HashMap` in Java is part of the `java.util` package and implements the `Map` interface. It stores key-value pairs and allows fast retrieval of values based on keys. `HashMap` does not maintain any specific order of elements.

## Importing HashMap
To use `HashMap`, import it first:

```java
import java.util.HashMap;
```

## Creating a HashMap
You can create a `HashMap` to store key-value pairs of a specific type:

```java
HashMap<String, Integer> scores = new HashMap<>();
```

## Adding Elements
Elements are added using the `put()` method:

```java
scores.put("Alice", 90);
scores.put("Bob", 85);
scores.put("Charlie", 92);
```

## Accessing Elements
Values can be accessed using the `get()` method with a key:

```java
int aliceScore = scores.get("Alice");
System.out.println("Alice's score: " + aliceScore);
```

## Checking If a Key Exists
The `containsKey()` method checks for the existence of a key:

```java
boolean hasBob = scores.containsKey("Bob");
System.out.println("Contains Bob? " + hasBob);
```

## Checking If a Value Exists
The `containsValue()` method checks for a specific value:

```java
boolean hasScore90 = scores.containsValue(90);
System.out.println("Contains score 90? " + hasScore90);
```

## Removing Elements
Elements can be removed using the `remove()` method:

```java
scores.remove("Charlie");
System.out.println("Updated scores: " + scores);
```

## Iterating Through a HashMap
### Using a For-Each Loop

```java
for (String key : scores.keySet()) {
    System.out.println(key + " : " + scores.get(key));
}
```

### Using Entry Set

```java
for (HashMap.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + " : " + entry.getValue());
}
```

## Getting the Size
To get the number of key-value pairs:

```java
System.out.println("Size: " + scores.size());
```

## Clearing a HashMap
To remove all elements:

```java
scores.clear();
System.out.println("HashMap after clearing: " + scores);
```

