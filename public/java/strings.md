# Strings

## Introduction
Strings in Java are sequences of characters. They are objects of the `String` class, which provides various methods for string manipulation.

## Creating Strings
Strings can be created using string literals or the `String` constructor.

```java
String literalString = "Hello, Java!";
String objectString = new String("Hello, Java!");
```

## String Methods
The `String` class provides many useful methods for working with strings.

### Length of a String
```java
String text = "Java";
System.out.println(text.length()); // Output: 4
```

### Concatenation
```java
String firstName = "John";
String lastName = "Doe";
String fullName = firstName + " " + lastName;
System.out.println(fullName); // Output: John Doe
```

### Converting Case
```java
String text = "Java Programming";
System.out.println(text.toUpperCase()); // Output: JAVA PROGRAMMING
System.out.println(text.toLowerCase()); // Output: java programming
```

### Checking if a String Contains a Substring
```java
String text = "Welcome to Java";
System.out.println(text.contains("Java")); // Output: true
```

### Replacing Characters
```java
String text = "Java is fun";
System.out.println(text.replace("fun", "awesome")); // Output: Java is awesome
```

### Extracting Substrings
```java
String text = "Hello, World!";
System.out.println(text.substring(7)); // Output: World!
System.out.println(text.substring(0, 5)); // Output: Hello
```

### Splitting Strings
```java
String text = "Java,Python,C++";
String[] languages = text.split(",");
for (String lang : languages) {
    System.out.println(lang);
}
```

### Removing Whitespace
```java
String text = "  Hello Java  ";
System.out.println(text.trim()); // Output: Hello Java
```

### Checking if Two Strings are Equal
```java
String text1 = "Java";
String text2 = "java";
System.out.println(text1.equals(text2)); // Output: false
System.out.println(text1.equalsIgnoreCase(text2)); // Output: true
```

### Character Access
```java
String text = "Java";
System.out.println(text.charAt(1)); // Output: a
```

### String Formatting
```java
String name = "Alice";
int age = 25;
String formatted = String.format("%s is %d years old.", name, age);
System.out.println(formatted); // Output: Alice is 25 years old.
```

