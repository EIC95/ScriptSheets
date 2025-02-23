# File Handling in C

## Introduction
- C provides functions to **read, write, and manipulate** files.
- Uses the **`stdio.h`** library.
- A file must be **opened**, **processed**, and **closed** properly.

## File Operations

| Function | Description |
|----------|-------------|
| `fopen()` | Opens a file. |
| `fclose()` | Closes a file. |
| `fprintf()` | Writes formatted text to a file. |
| `fscanf()` | Reads formatted data from a file. |
| `fgets()` | Reads a line from a file. |
| `fputc()` | Writes a character to a file. |
| `fgetc()` | Reads a character from a file. |
| `fwrite()` | Writes binary data to a file. |
| `fread()` | Reads binary data from a file. |

## Opening a File
- Syntax:  
  ```c
  FILE *file = fopen("filename.txt", "mode");
  ```
- **File Modes**:

| Mode | Description |
|------|------------|
| `"r"`  | Read mode (file must exist). |
| `"w"`  | Write mode (creates or overwrites file). |
| `"a"`  | Append mode (adds content at the end). |
| `"r+"` | Read & write (file must exist). |
| `"w+"` | Read & write (creates or overwrites). |
| `"a+"` | Read & append (creates if missing). |

## Writing to a File
```c
#include <stdio.h>

int main() {
    FILE *file = fopen("example.txt", "w");

    if (file == NULL) {
        printf("Error opening file!\n");
        return 1;
    }

    fprintf(file, "Hello, File Handling!\n");
    fputs("This is another line.\n", file);

    fclose(file); // Always close the file
    return 0;
}
```

## Reading from a File
```c
#include <stdio.h>

int main() {
    FILE *file = fopen("example.txt", "r");
    char line[100];

    if (file == NULL) {
        printf("File not found!\n");
        return 1;
    }

    while (fgets(line, sizeof(line), file)) {
        printf("%s", line);
    }

    fclose(file);
    return 0;
}
```

## Writing and Reading a Character
```c
#include <stdio.h>

int main() {
    FILE *file = fopen("example.txt", "w");

    if (file != NULL) {
        fputc('A', file);
        fclose(file);
    }

    file = fopen("example.txt", "r");

    if (file != NULL) {
        char c = fgetc(file);
        printf("Character read: %c\n", c);
        fclose(file);
    }

    return 0;
}
```

## Closing a File
- Always **close a file** after use to prevent data corruption.
```c
fclose(file);
```

## Checking for End of File
- `feof()` returns **true** if end-of-file is reached.
```c
while (!feof(file)) {
    char c = fgetc(file);
    printf("%c", c);
}
```

## Error Handling
- Use `perror()` to print errors.
```c
FILE *file = fopen("missing.txt", "r");

if (file == NULL) {
    perror("Error opening file");
}
```
