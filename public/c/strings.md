# Strings in C

## Introduction
- A **string** in C is an array of characters ending with a **null character (`\0`)**.
- Strings are **not** a built-in type in C; they are handled using character arrays or the `char*` type.

## Declaring and Initializing Strings

### Declaration Syntax
```c
char str[size]; // Character array
char *str;      // Pointer to char
```

### Examples
```c
char str1[6] = {'H', 'e', 'l', 'l', 'o', '\0'}; // Manual null-terminated array
char str2[] = "Hello"; // Automatically adds '\0'
char *str3 = "Hello";  // Pointer to a string literal
```

## Input and Output of Strings

### Printing a String (`printf()`)
```c
#include <stdio.h>

int main() {
    char name[] = "Alice";
    printf("Name: %s\n", name);
    return 0;
}
```

### Reading a String (`scanf()`)
- `scanf()` reads until a space is encountered.
```c
#include <stdio.h>

int main() {
    char name[20];
    printf("Enter your name: ");
    scanf("%s", name); // Reads a single word
    printf("Hello, %s!\n", name);
    return 0;
}
```

### Reading a Full Line (`fgets()`)
```c
#include <stdio.h>

int main() {
    char sentence[100];
    printf("Enter a sentence: ");
    fgets(sentence, sizeof(sentence), stdin);
    printf("You entered: %s", sentence);
    return 0;
}
```

## String Functions (from `<string.h>`)

| Function             | Description                        | Example |
|----------------------|----------------------------------|---------|
| `strlen(str)`        | Returns string length            | `strlen("Hello") → 5` |
| `strcpy(dest, src)`  | Copies `src` into `dest`         | `strcpy(str1, str2);` |
| `strncpy(dest, src, n)` | Copies first `n` characters    | `strncpy(str1, str2, 3);` |
| `strcmp(str1, str2)` | Compares two strings             | `strcmp("A", "B") → -1` |
| `strncmp(str1, str2, n)` | Compares first `n` characters | `strncmp("Hello", "Hey", 2);` |
| `strcat(dest, src)`  | Appends `src` to `dest`          | `strcat(str1, str2);` |
| `strncat(dest, src, n)` | Appends first `n` characters | `strncat(str1, str2, 3);` |
| `strchr(str, ch)`    | Finds first occurrence of `ch`   | `strchr("Hello", 'e');` |
| `strrchr(str, ch)`   | Finds last occurrence of `ch`    | `strrchr("Hello", 'l');` |
| `strstr(str1, str2)` | Finds `str2` in `str1`           | `strstr("Hello", "lo");` |

