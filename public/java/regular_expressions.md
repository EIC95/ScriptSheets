# Regular Expressions

## Introduction
Regular expressions (regex) in Java are used for pattern matching within strings. Java provides the `java.util.regex` package to support regex operations.

## Regex Classes in Java
### Pattern Class
The `Pattern` class defines a compiled regex pattern.
```java
import java.util.regex.Pattern;

Pattern pattern = Pattern.compile("\d+"); // Matches digits
```

### Matcher Class
The `Matcher` class is used to find matches of a regex pattern in a given string.
```java
import java.util.regex.*;

public class RegexExample {
    public static void main(String[] args) {
        Pattern pattern = Pattern.compile("\d+");
        Matcher matcher = pattern.matcher("123abc");
        
        if (matcher.find()) {
            System.out.println("Match found: " + matcher.group());
        }
    }
}
```

## Common Regex Patterns
| Pattern | Description |
|---------|-------------|
| `\d`    | Matches any digit (0-9) |
| `\D`    | Matches any non-digit |
| `\w`    | Matches any word character (a-z, A-Z, 0-9, _) |
| `\W`    | Matches any non-word character |
| `\s`    | Matches whitespace |
| `.`      | Matches any character |
| `^`      | Matches the start of a string |
| `$`      | Matches the end of a string |

## Using Regex for String Validation
```java
public class RegexValidation {
    public static void main(String[] args) {
        String email = "test@example.com";
        String emailRegex = "^[A-Za-z0-9+_.-]+@(.+)$";
        
        if (email.matches(emailRegex)) {
            System.out.println("Valid email format");
        } else {
            System.out.println("Invalid email format");
        }
    }
}
```

## Replacing Text with Regex
The `replaceAll` method allows replacing parts of a string based on a regex pattern.
```java
public class RegexReplace {
    public static void main(String[] args) {
        String text = "Java is great!";
        String replacedText = text.replaceAll("Java", "Python");
        
        System.out.println(replacedText); // Output: Python is great!
    }
}
```

