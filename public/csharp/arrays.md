# Arrays

## Introduction to Arrays in C#
An array is a collection of elements of the same type stored in contiguous memory locations. Arrays allow storing multiple values in a single variable.

## Declaring and Initializing Arrays
### Declaration
```csharp
int[] numbers;
```

### Initialization
```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
```
Or using the `new` keyword:
```csharp
int[] numbers = new int[5]; // Creates an array of 5 integers
numbers[0] = 10; // Assigning values
```

## Accessing Elements
Array elements are accessed using an index (starting from 0):
```csharp
int[] numbers = { 10, 20, 30 };
Console.WriteLine(numbers[0]); // Outputs 10
```

## Looping Through Arrays
### Using `for` Loop
```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
for (int i = 0; i < numbers.Length; i++)
{
    Console.WriteLine(numbers[i]);
}
```

### Using `foreach` Loop
```csharp
int[] numbers = { 1, 2, 3, 4, 5 };
foreach (int num in numbers)
{
    Console.WriteLine(num);
}
```

## Multi-Dimensional Arrays
C# supports multi-dimensional arrays like 2D and 3D arrays.

### 2D Array
```csharp
int[,] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
Console.WriteLine(matrix[1, 2]); // Outputs 6
```

### Jagged Array (Array of Arrays)
```csharp
int[][] jaggedArray = new int[2][];
jaggedArray[0] = new int[] { 1, 2, 3 };
jaggedArray[1] = new int[] { 4, 5 };
Console.WriteLine(jaggedArray[0][1]); // Outputs 2
```

## Array Methods
### `Length` Property
Gets the total number of elements in an array.
```csharp
int[] numbers = { 1, 2, 3 };
Console.WriteLine(numbers.Length); // Outputs 3
```

### `Array.Sort()`
Sorts an array in ascending order.
```csharp
int[] numbers = { 3, 1, 4, 2 };
Array.Sort(numbers);
```

### `Array.Reverse()`
Reverses the elements in an array.
```csharp
Array.Reverse(numbers);
```