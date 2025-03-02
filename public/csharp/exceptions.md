# Exception Handling in C#

## Introduction to Exceptions
Exceptions in C# are runtime errors that can be handled using `try`, `catch`, and `finally` blocks to prevent program crashes.

## Basic Try-Catch Block
A `try` block contains code that may throw an exception, while a `catch` block handles the exception.
```csharp
using System;

class Program
{
    static void Main()
    {
        try
        {
            int x = 10;
            int y = 0;
            int result = x / y; // This will throw a DivideByZeroException
        }
        catch (DivideByZeroException ex)
        {
            Console.WriteLine("Cannot divide by zero: " + ex.Message);
        }
    }
}
```

## Multiple Catch Blocks
You can catch different types of exceptions separately.
```csharp
try
{
    int[] numbers = { 1, 2, 3 };
    Console.WriteLine(numbers[5]); // Throws IndexOutOfRangeException
}
catch (IndexOutOfRangeException ex)
{
    Console.WriteLine("Index out of range: " + ex.Message);
}
catch (Exception ex)
{
    Console.WriteLine("An error occurred: " + ex.Message);
}
```

## Finally Block
The `finally` block is always executed, regardless of whether an exception occurs.
```csharp
try
{
    Console.WriteLine("Opening file...");
    throw new Exception("File error");
}
catch (Exception ex)
{
    Console.WriteLine("Exception caught: " + ex.Message);
}
finally
{
    Console.WriteLine("Closing file...");
}
```

## Throwing Exceptions
You can manually throw exceptions using the `throw` keyword.
```csharp
void CheckAge(int age)
{
    if (age < 18)
    {
        throw new ArgumentException("Age must be 18 or older.");
    }
}
```

## Custom Exceptions
You can define custom exceptions by extending `Exception`.
```csharp
class MyCustomException : Exception
{
    public MyCustomException(string message) : base(message) {}
}

class Program
{
    static void Main()
    {
        try
        {
            throw new MyCustomException("This is a custom exception.");
        }
        catch (MyCustomException ex)
        {
            Console.WriteLine("Caught custom exception: " + ex.Message);
        }
    }
}
```
