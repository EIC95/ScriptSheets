# Basics

## Introduction to C#  
C# is a modern, object-oriented programming language developed by Microsoft. It supports multiple programming paradigms, including:  
- **Object-oriented programming (OOP)**: Based on classes and objects.  
- **Functional programming**: Supports lambda expressions and LINQ.  
- **Component-oriented programming**: Encourages modular development.  

C# is widely used for desktop applications, web applications, game development (Unity), and enterprise software.

## Basic C# Program  
Every C# program must contain a `Main()` method, which serves as the entry point of the program.  

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Welcome to C#");
    }
}
```

### Explanation:
- `using System;`: Includes the System namespace for basic functionalities.
- `class Program`: Defines a class named `Program`.
- `static void Main()`: The main entry point of the application.
- `Console.WriteLine()`: Prints text to the console.

## Variables and Data Types  
C# is statically typed, meaning variables must be declared with a type.  

| Type     | Description                 | Example          |
|----------|-----------------------------|------------------|
| `int`    | Integer numbers              | `int x = 5;`     |
| `double` | Floating-point numbers       | `double y = 3.14;` |
| `char`   | Single character             | `char c = 'A';`  |
| `bool`   | Boolean values (true/false)  | `bool isOn = true;` |
| `string` | Sequence of characters       | `string name = "John";` |

### Declaring Variables
```csharp
int age = 25;
double price = 99.99;
char grade = 'A';
bool isActive = true;
string name = "John";
```

## Operators  
Operators allow performing operations on variables and values.  

### Arithmetic Operators  
| Operator | Description | Example |
|----------|------------|---------|
| `+`      | Addition   | `x + y` |
| `-`      | Subtraction | `x - y` |
| `*`      | Multiplication | `x * y` |
| `/`      | Division   | `x / y` |
| `%`      | Modulus (remainder) | `x % y` |

```csharp
int a = 10, b = 5;
Console.WriteLine(a + b); // 15
Console.WriteLine(a % b); // 0
```

### Comparison Operators  
| Operator | Description | Example |
|----------|------------|---------|
| `==`     | Equal to   | `x == y` |
| `!=`     | Not equal to | `x != y` |
| `>`      | Greater than | `x > y` |
| `<`      | Less than  | `x < y` |
| `>=`     | Greater than or equal to | `x >= y` |
| `<=`     | Less than or equal to | `x <= y` |

```csharp
Console.WriteLine(a > b); // True
```

### Logical Operators  
| Operator | Description | Example |
|----------|------------|---------|
| `&&`     | Logical AND | `(x > 5 && y < 10)` |
| `\|\|`     | Logical OR  | `(x > 5 \|\| y < 10)` |
| `!`      | Logical NOT | `!(x == y)` |

```csharp
bool x = true, y = false;
Console.WriteLine(x && y); // False
```

### Assignment Operators  
| Operator | Equivalent to |
|----------|--------------|
| `=`      | `x = 5` |
| `+=`     | `x += 3` (same as `x = x + 3`) |
| `-=`     | `x -= 2` (same as `x = x - 2`) |
| `*=`     | `x *= 4` (same as `x = x * 4`) |
| `/=`     | `x /= 2` (same as `x = x / 2`) |
| `%=`     | `x %= 3` (same as `x = x % 3`) |

```csharp
int x = 5;
x += 2;  // x is now 7
```


## Comments  
Comments help explain the code.  

```csharp
// This is a single-line comment

/*
   This is a multi-line
   comment
*/
```
