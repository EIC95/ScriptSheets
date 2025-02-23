# Structures and Records in C

## Introduction
- A **structure (`struct`)** is a user-defined data type that groups different types of variables.
- Used for **better organization** of complex data.

## Defining a Structure
- Use the `struct` keyword.
```c
struct Student {
    char name[50];
    int age;
    float gpa;
};
```

## Declaring and Initializing a Structure
```c
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float gpa;
};

int main() {
    struct Student s1 = {"Alice", 20, 3.5};

    printf("Name: %s\n", s1.name);
    printf("Age: %d\n", s1.age);
    printf("GPA: %.2f\n", s1.gpa);

    return 0;
}
```

## Accessing Structure Members
- Use the `.` operator.
```c
s1.age = 21;
```

## Using `typedef` for Simplification
```c
typedef struct {
    char name[50];
    int age;
    float gpa;
} Student;

int main() {
    Student s1 = {"Bob", 22, 3.8};
    printf("Student: %s\n", s1.name);
    return 0;
}
```

## Structures with Pointers
- Use the `->` operator for accessing members via pointers.
```c
#include <stdio.h>

struct Student {
    char name[50];
    int age;
};

int main() {
    struct Student s1 = {"Charlie", 19};
    struct Student *ptr = &s1;

    printf("Name: %s\n", ptr->name);
    printf("Age: %d\n", ptr->age);

    return 0;
}
```

## Nested Structures
```c
struct Address {
    char city[50];
    int zip;
};

struct Student {
    char name[50];
    struct Address addr;
};
```

## Array of Structures
```c
#include <stdio.h>

struct Student {
    char name[50];
    int age;
};

int main() {
    struct Student students[2] = {{"Alice", 20}, {"Bob", 22}};

    for (int i = 0; i < 2; i++) {
        printf("Name: %s, Age: %d\n", students[i].name, students[i].age);
    }

    return 0;
}
```
