# Strings

## Introduction to Strings in C#
A **string** in C# is a sequence of characters. Strings are immutable, meaning their values cannot be changed after creation.

### Declaring Strings
```csharp
string message = "Hello, World!";
Console.WriteLine(message);
```

## String Concatenation
You can combine strings using the `+` operator or `string.Concat()`.
```csharp
string firstName = "John";
string lastName = "Doe";
string fullName = firstName + " " + lastName;
Console.WriteLine(fullName); // Output: John Doe
```
Using `string.Concat()`:
```csharp
string fullName = string.Concat(firstName, " ", lastName);
```

## String Interpolation
String interpolation provides a cleaner way to format strings.
```csharp
string name = "Alice";
int age = 25;
Console.WriteLine($"My name is {name} and I am {age} years old.");
```

## String Methods
C# provides various string manipulation methods:

| Method               | Description                          | Example |
|----------------------|----------------------------------|---------|
| `ToUpper()`         | Converts to uppercase             | `text.ToUpper()` |
| `ToLower()`         | Converts to lowercase             | `text.ToLower()` |
| `Length`            | Gets the string length            | `text.Length` |
| `Trim()`            | Removes whitespace                | `text.Trim()` |
| `Contains(sub)`     | Checks if string contains a substring | `text.Contains("word")` |
| `Replace(old, new)` | Replaces occurrences of a substring | `text.Replace("old", "new")` |
| `Substring(start, length)` | Extracts a substring | `text.Substring(0, 5)` |

### Example:
```csharp
string sentence = "  C# Programming  ";
Console.WriteLine(sentence.Trim()); // "C# Programming"
Console.WriteLine(sentence.ToUpper()); // "  C# PROGRAMMING  "
Console.WriteLine(sentence.Replace("C#", "Java")); // "  Java Programming  "
```

## Splitting and Joining Strings
### Splitting a String
```csharp
string sentence = "apple,banana,orange";
string[] fruits = sentence.Split(',');
Console.WriteLine(fruits[0]); // Output: apple
```

### Joining an Array of Strings
```csharp
string[] words = { "Hello", "World" };
string message = string.Join(" ", words);
Console.WriteLine(message); // Output: Hello World
```

## Escape Characters
Use escape sequences for special characters.

| Escape Sequence | Description     |
|----------------|---------------|
| `\n`           | New line       |
| `\t`           | Tab space      |
| `\"`           | Double quote   |
| `\\`           | Backslash      |

Example:
```csharp
Console.WriteLine("Hello\nWorld"); // Prints in two lines
```

## Verbatim Strings
Verbatim strings (`@`) preserve escape characters.
```csharp
string path = @"C:\Users\John\Documents";
Console.WriteLine(path); // Output: C:\Users\John\Documents
```

## Checking for Empty or Null Strings
Use `string.IsNullOrEmpty()` and `string.IsNullOrWhiteSpace()`.
```csharp
string text = "";
Console.WriteLine(string.IsNullOrEmpty(text)); // True
Console.WriteLine(string.IsNullOrWhiteSpace(" ")); // True
