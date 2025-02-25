# User Input

## Introduction to User Input in C#
In C#, user input is typically handled using the `Console.ReadLine()` method, which reads input as a string from the console. The input can then be converted into other data types if needed.

## Reading a String Input
The `Console.ReadLine()` method reads user input as a string.

### Example:
```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter your name: ");
        string name = Console.ReadLine();
        Console.WriteLine("Hello, " + name + "!");
    }
}
```

### Explanation:
- `Console.Write()` displays a prompt without a new line.
- `Console.ReadLine()` reads the user input.
- The input is stored in the `name` variable and printed with a greeting.

## Reading Numeric Input
Since `Console.ReadLine()` returns a string, numeric inputs need to be converted using `Convert` or `Parse`.

### Example:
```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter your age: ");
        int age = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("You are " + age + " years old.");
    }
}
```

### Explanation:
- `Console.ReadLine()` reads the input as a string.
- `Convert.ToInt32()` converts it into an integer.

## Handling Invalid Input with TryParse
To prevent errors, `int.TryParse()` can be used to safely convert user input.

### Example:
```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter a number: ");
        string input = Console.ReadLine();
        if (int.TryParse(input, out int number))
        {
            Console.WriteLine("Valid number: " + number);
        }
        else
        {
            Console.WriteLine("Invalid input, please enter a number.");
        }
    }
}
```

### Explanation:
- `int.TryParse()` attempts to convert the input.
- If successful, it stores the result in `number`.
- If the conversion fails, an error message is displayed.

## Reading a Single Character
To read a single character, use `Console.ReadKey()`.

### Example:
```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Press any key to continue...");
        Console.ReadKey();
    }
}
```

### Explanation:
- `Console.ReadKey()` waits for a key press and does not require Enter.