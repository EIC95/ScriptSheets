# File Handling in C#

## Introduction to File Handling
File handling in C# is done using the `System.IO` namespace, which provides classes to work with files and directories.

## Reading a File
Use `File.ReadAllText()` to read the entire content of a file.
```csharp
using System;
using System.IO;

class Program
{
    static void Main()
    {
        string content = File.ReadAllText("example.txt");
        Console.WriteLine(content);
    }
}
```

## Writing to a File
Use `File.WriteAllText()` to write text to a file (overwriting existing content).
```csharp
File.WriteAllText("example.txt", "Hello, C#!");
```

## Appending to a File
Use `File.AppendAllText()` to add content without overwriting the file.
```csharp
File.AppendAllText("example.txt", "\nAppending this text.");
```

## Reading a File Line by Line
Use `File.ReadLines()` to read a file line by line.
```csharp
foreach (string line in File.ReadLines("example.txt"))
{
    Console.WriteLine(line);
}
```

## Writing to a File Line by Line
Use `File.WriteAllLines()` to write multiple lines to a file.
```csharp
string[] lines = { "Line 1", "Line 2", "Line 3" };
File.WriteAllLines("example.txt", lines);
```

## Checking if a File Exists
Use `File.Exists()` to check if a file is present before performing operations.
```csharp
if (File.Exists("example.txt"))
{
    Console.WriteLine("File exists.");
}
```

## Deleting a File
Use `File.Delete()` to remove a file.
```csharp
File.Delete("example.txt");
```

## Working with Streams
### Reading a File with StreamReader
`StreamReader` allows reading a file efficiently.
```csharp
using (StreamReader sr = new StreamReader("example.txt"))
{
    string content = sr.ReadToEnd();
    Console.WriteLine(content);
}
```

### Writing to a File with StreamWriter
`StreamWriter` allows writing data to a file.
```csharp
using (StreamWriter sw = new StreamWriter("example.txt"))
{
    sw.WriteLine("Hello, C#!");
    sw.WriteLine("Another line.");
}
```
