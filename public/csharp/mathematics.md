# Mathematics

## Introduction to Mathematics in C#
C# provides various mathematical operations and functions through built-in operators and the `System.Math` class.

## Basic Arithmetic Operations
C# supports standard arithmetic operators:

| Operator | Description    | Example  |
|----------|--------------|----------|
| `+`      | Addition      | `a + b`  |
| `-`      | Subtraction   | `a - b`  |
| `*`      | Multiplication| `a * b`  |
| `/`      | Division      | `a / b`  |
| `%`      | Modulus       | `a % b`  |

### Example:
```csharp
int a = 10, b = 3;
Console.WriteLine(a + b); // Output: 13
Console.WriteLine(a - b); // Output: 7
Console.WriteLine(a * b); // Output: 30
Console.WriteLine(a / b); // Output: 3 (integer division)
Console.WriteLine(a % b); // Output: 1
```

## Using `System.Math` Class
The `Math` class provides several useful mathematical functions.

### Common Math Functions
| Method                | Description                  | Example  |
|-----------------------|----------------------------|----------|
| `Math.Abs(x)`        | Absolute value              | `Math.Abs(-5)` → `5` |
| `Math.Pow(x, y)`     | Exponentiation (x^y)        | `Math.Pow(2, 3)` → `8` |
| `Math.Sqrt(x)`       | Square root                 | `Math.Sqrt(16)` → `4` |
| `Math.Max(x, y)`     | Maximum of two values       | `Math.Max(5, 10)` → `10` |
| `Math.Min(x, y)`     | Minimum of two values       | `Math.Min(5, 10)` → `5` |
| `Math.Round(x)`      | Rounds to the nearest whole number | `Math.Round(3.6)` → `4` |

### Example:
```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine(Math.Abs(-10)); // Output: 10
        Console.WriteLine(Math.Pow(2, 3)); // Output: 8
        Console.WriteLine(Math.Sqrt(25)); // Output: 5
        Console.WriteLine(Math.Max(10, 20)); // Output: 20
        Console.WriteLine(Math.Min(10, 20)); // Output: 10
        Console.WriteLine(Math.Round(4.7)); // Output: 5
    }
}
```

## Random Numbers
The `Random` class generates random numbers.

### Example:
```csharp
Random rand = new Random();
int randomNumber = rand.Next(1, 101); // Random number between 1 and 100
Console.WriteLine(randomNumber);
```
