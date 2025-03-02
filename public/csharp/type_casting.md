# Type Casting

## Introduction to Type Casting in C#
Type casting is the process of converting a variable from one data type to another. There are two types of type casting in C#:
- **Implicit Casting (automatically done by the compiler)**
- **Explicit Casting (manually done by the programmer)**

## Implicit Casting
Implicit casting occurs when converting a smaller type to a larger type without data loss. It is automatically handled by C#.

Supported conversions:
- `int` → `long`
- `float` → `double`

### Example:
```csharp
int num = 10;
double doubleNum = num; // Implicit casting from int to double
Console.WriteLine(doubleNum); // Output: 10
```

## Explicit Casting
Explicit casting is needed when converting a larger type to a smaller type, as there is a risk of data loss.

Supported conversions:
- `double` → `int`
- `float` → `int`

### Example:
```csharp
double pi = 3.14;
int intPi = (int)pi; // Explicit casting from double to int
Console.WriteLine(intPi); // Output: 3
```

## Using Convert Class
C# provides the `Convert` class to handle type conversions more safely.

### Example:
```csharp
string strNumber = "123";
int number = Convert.ToInt32(strNumber);
Console.WriteLine(number); // Output: 123
```

## Parsing Strings to Numbers
We can also use `int.Parse()` or `double.Parse()` to convert a string into a number.

### Example:
```csharp
string strNum = "45";
int parsedNum = int.Parse(strNum);
Console.WriteLine(parsedNum); // Output: 45
```

## TryParse for Safe Conversion
`TryParse` prevents runtime errors when converting strings to numbers by returning `true` or `false`.

### Example:
```csharp
string input = "100";
if (int.TryParse(input, out int result))
{
    Console.WriteLine("Conversion successful: " + result);
}
else
{
    Console.WriteLine("Invalid number format");
}
```

## Boxing and Unboxing
- **Boxing**: Converting a value type to an object type.
- **Unboxing**: Extracting the value type from an object.

### Example:
```csharp
int num = 42;
object obj = num; // Boxing
int unboxedNum = (int)obj; // Unboxing
Console.WriteLine(unboxedNum); // Output: 42
```
