# Strings

## Introduction  
A **string** in C++ is a sequence of characters used to represent text. C++ provides two main ways to handle strings:  
- **C-style strings** (character arrays)  
- **`std::string`** (from the Standard Library)

## C-Style Strings (Character Arrays)  
A C-style string is an array of characters terminated by a null character `'\0'`.

### Declaring and Initializing C-Style Strings  
```cpp
char message[] = "Hello"; // Implicitly adds '\0' at the end
char name[6] = {'H', 'e', 'l', 'l', 'o', '\0'}; // Explicit null termination
```

### Printing a C-Style String
```cpp
#include <iostream>

int main() {
    char greeting[] = "Hello, world!";
    std::cout << greeting << std::endl;

    return 0;
}
```

### Taking Input for a C-Style String
```cpp
#include <iostream>

int main() {
    char name[20];
    std::cout << "Enter your name: ";
    std::cin >> name;
    std::cout << "Hello, " << name << "!" << std::endl;

    return 0;
}
```
> **Warning**: `cin` stops reading at spaces. Use `cin.getline()` for full sentences.

```cpp
#include <iostream>

int main() {
    char sentence[50];
    std::cout << "Enter a sentence: ";
    std::cin.getline(sentence, 50);
    std::cout << "You entered: " << sentence << std::endl;

    return 0;
}
```

### String Functions from `<cstring>`
C-style strings use functions from the `<cstring>` library.

| Function | Description |
|----------|------------|
| `strlen(str)` | Returns the length of `str` (excluding `\0`). |
| `strcpy(dest, src)` | Copies `src` into `dest`. |
| `strcat(dest, src)` | Concatenates `src` to `dest`. |
| `strcmp(str1, str2)` | Compares two strings (`0` if equal). |

```cpp
#include <iostream>
#include <cstring>

int main() {
    char str1[] = "Hello";
    char str2[] = "World";

    std::cout << "Length of str1: " << strlen(str1) << std::endl;

    char result[20];
    strcpy(result, str1);
    strcat(result, " ");
    strcat(result, str2);
    std::cout << "Concatenated: " << result << std::endl;

    return 0;
}
```

## `std::string` (Preferred Modern Approach)
The `std::string` class from the `<string>` library is easier to use and provides many functionalities.

### Declaring and Initializing `std::string`
```cpp
#include <iostream>
#include <string>

int main() {
    std::string text = "Hello, C++!";
    std::cout << text << std::endl;
    return 0;
}
```

### Taking Input for `std::string`
```cpp
#include <iostream>
#include <string>

int main() {
    std::string name;
    std::cout << "Enter your name: ";
    std::getline(std::cin, name);
    std::cout << "Hello, " << name << "!" << std::endl;

    return 0;
}
```

### String Operations
| Operation | Example |
|-----------|---------|
| Get length | `s.length()` |
| Concatenation | `s1 + s2` or `s1.append(s2)` |
| Access character | `s[index]` |
| Substring | `s.substr(start, length)` |
| Find substring | `s.find("text")` |
| Replace | `s.replace(pos, len, "new")` |

```cpp
#include <iostream>
#include <string>

int main() {
    std::string str1 = "Hello";
    std::string str2 = "World";

    std::string combined = str1 + " " + str2;
    std::cout << "Concatenated: " << combined << std::endl;

    std::cout << "Length: " << combined.length() << std::endl;
    std::cout << "Substring (0-4): " << combined.substr(0, 5) << std::endl;

    return 0;
}
```

### Iterating Through a String
```cpp
#include <iostream>
#include <string>

int main() {
    std::string word = "Example";

    for (char c : word) {
        std::cout << c << " ";
    }

    return 0;
}
```

### Comparing Strings
Using `==`, `!=`, `<`, `>`, etc.

```cpp
#include <iostream>
#include <string>

int main() {
    std::string str1 = "apple";
    std::string str2 = "banana";

    if (str1 < str2) {
        std::cout << str1 << " comes before " << str2 << std::endl;
    }

    return 0;
}
```

## Converting Between Strings and Numbers
Using `std::stoi()`, `std::stod()`, and `std::to_string()`.

```cpp
#include <iostream>
#include <string>

int main() {
    std::string numStr = "123";
    int num = std::stoi(numStr);
    std::cout << "Number: " << num + 10 << std::endl;

    double d = 3.14;
    std::string str = std::to_string(d);
    std::cout << "String: " << str << std::endl;

    return 0;
}
```
