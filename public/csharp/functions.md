# Functions

## Introduction to Functions in C#
A function (also called a method in C#) is a block of code that performs a specific task. Functions help in modular programming and code reusability.

## Declaring and Calling Functions
### Function Declaration
```csharp
returnType FunctionName(parameters)
{
    // Function body
    return value; // If returnType is not void
}
```

### Example
```csharp
int Add(int a, int b)
{
    return a + b;
}

static void Main()
{
    int result = Add(5, 3);
    Console.WriteLine(result); // Outputs 8
}
```

## Function Parameters
### Required Parameters
Functions can take parameters as input:
```csharp
void Greet(string name)
{
    Console.WriteLine("Hello, " + name + "!");
}
```

### Default Parameters
```csharp
void Greet(string name = "User")
{
    Console.WriteLine("Hello, " + name + "!");
}
```

### Named Parameters
```csharp
void DisplayInfo(string name, int age)
{
    Console.WriteLine($"Name: {name}, Age: {age}");
}

DisplayInfo(age: 25, name: "John");
```

## Return Types
### Functions Returning a Value
```csharp
int Multiply(int a, int b)
{
    return a * b;
}
```

### Void Functions
```csharp
void PrintMessage()
{
    Console.WriteLine("This is a message.");
}
```

## Function Overloading
Function overloading allows defining multiple functions with the same name but different parameters.
```csharp
int Add(int a, int b)
{
    return a + b;
}

double Add(double a, double b)
{
    return a + b;
}
```