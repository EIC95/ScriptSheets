# Enumerations in C#

## Introduction to Enumerations
An **enumeration (`enum`)** is a special data type in C# that defines a set of named integer constants. Enums improve code readability by providing meaningful names instead of numeric values.

## Declaring an Enum
Enums are declared using the `enum` keyword.
```csharp
enum Day
{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
```
By default, the first value is assigned `0`, the second `1`, and so on.

## Using an Enum
```csharp
class Program
{
    static void Main()
    {
        Day today = Day.Wednesday;
        Console.WriteLine(today); // Outputs "Wednesday"
    }
}
```

## Assigning Specific Values
You can manually assign integer values to enum members.
```csharp
enum Status
{
    Pending = 1,
    Approved = 2,
    Rejected = 3
}
```

## Using Enums in Conditions
Enums can be used in conditional statements to improve readability.
```csharp
class Program
{
    static void Main()
    {
        Status currentStatus = Status.Approved;
        if (currentStatus == Status.Approved)
        {
            Console.WriteLine("Your request is approved.");
        }
    }
}
```

## Casting Enums
You can cast an enum to an integer and vice versa.
```csharp
int numericValue = (int)Status.Rejected;
Console.WriteLine(numericValue); // Outputs 3

Status statusFromNumber = (Status)2;
Console.WriteLine(statusFromNumber); // Outputs "Approved"
```

## Enum with Flags Attribute
The `[Flags]` attribute allows bitwise operations on enum values.
```csharp
[Flags]
enum FileAccess
{
    Read = 1,
    Write = 2,
    Execute = 4
}

class Program
{
    static void Main()
    {
        FileAccess permission = FileAccess.Read | FileAccess.Write;
        Console.WriteLine(permission); // Outputs "Read, Write"
    }
}
```