# Control Structures

## Introduction to Control Structures in C#
Control structures are used to manage the flow of execution in a program. C# provides various control structures, including conditional statements and loops.

## Conditional Statements
Conditional statements allow a program to make decisions based on conditions.

### `if` Statement
Executes a block of code if the condition is `true`.
```csharp
int number = 10;
if (number > 5)
{
    Console.WriteLine("Number is greater than 5");
}
```

### `if-else` Statement
Executes one block if the condition is `true`, otherwise executes another block.
```csharp
int number = 3;
if (number > 5)
{
    Console.WriteLine("Greater than 5");
}
else
{
    Console.WriteLine("5 or less");
}
```

### `else if` Statement
Checks multiple conditions in sequence.
```csharp
int number = 10;
if (number < 5)
{
    Console.WriteLine("Less than 5");
}
else if (number < 10)
{
    Console.WriteLine("Between 5 and 9");
}
else
{
    Console.WriteLine("10 or more");
}
```

### `switch` Statement
Used to simplify multiple conditional checks.
```csharp
int day = 3;
switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    case 3:
        Console.WriteLine("Wednesday");
        break;
    default:
        Console.WriteLine("Other day");
        break;
}
```

## Looping Statements
Loops are used to execute a block of code multiple times.

### `for` Loop
Executes a block of code a specific number of times.
```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine("Iteration " + i);
}
```

### `while` Loop
Executes a block of code while the condition is `true`.
```csharp
int count = 0;
while (count < 5)
{
    Console.WriteLine("Count: " + count);
    count++;
}
```

### `do-while` Loop
Executes the block of code at least once before checking the condition.
```csharp
int count = 0;
do
{
    Console.WriteLine("Count: " + count);
    count++;
} while (count < 5);
```

### `foreach` Loop
Used to iterate over collections like arrays or lists.
```csharp
string[] fruits = { "Apple", "Banana", "Cherry" };
foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

## Jump Statements
Jump statements are used to change the flow of execution.

### `break` Statement
Exits a loop or `switch` statement.
```csharp
for (int i = 0; i < 10; i++)
{
    if (i == 5)
        break;
    Console.WriteLine(i);
}
```

### `continue` Statement
Skips the current iteration and moves to the next one.
```csharp
for (int i = 0; i < 5; i++)
{
    if (i == 2)
        continue;
    Console.WriteLine(i);
}
```

### `return` Statement
Exits from a method and optionally returns a value.
```csharp
int GetNumber()
{
    return 42;
}
```