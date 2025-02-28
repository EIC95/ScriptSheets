# Arrays

## Introduction
Arrays in Java are used to store multiple values of the same data type in a single variable. They provide a structured way to manage large amounts of data efficiently.

## Declaring and Initializing Arrays

### One-Dimensional Array
```java
int[] numbers = new int[5]; // Declares an array of size 5
numbers[0] = 10; // Assigning values
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;
```
Alternatively, you can declare and initialize an array in a single step:
```java
int[] numbers = {10, 20, 30, 40, 50};
```

### Accessing Array Elements
```java
System.out.println(numbers[2]); // Output: 30
```

## Looping Through an Array
### Using a for Loop
```java
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```
### Using an Enhanced for Loop
```java
for (int num : numbers) {
    System.out.println(num);
}
```

## Multidimensional Arrays
Java supports arrays with multiple dimensions.

### Declaring a 2D Array
```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

### Accessing 2D Array Elements
```java
System.out.println(matrix[1][2]); // Output: 6
```

## Array Methods
### Finding the Length of an Array
```java
System.out.println(numbers.length); // Output: 5
```

### Sorting an Array
```java
import java.util.Arrays;
Arrays.sort(numbers); // Sorts the array in ascending order
```

### Copying an Array
```java
int[] copy = Arrays.copyOf(numbers, numbers.length);
```

### Searching an Element
```java
int index = Arrays.binarySearch(numbers, 30); // Returns index of element
```
