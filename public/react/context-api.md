# Context API

## Introduction

The **Context API** in React provides a way to share data between components without manually passing props at every level (**prop drilling**). It is useful for global state management, such as themes, authentication, and user settings.

## Creating a Context

To create a context, use `createContext()`.

```jsx
import { createContext } from "react";

const ThemeContext = createContext();
```

## Providing Context

Wrap components inside a **Provider** to make the context available to them.

```jsx
import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

## Consuming Context

Components inside the provider can access the context using `useContext()`.

```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current Theme: {theme}
    </button>
  );
}
```

## Using Context in the Application

Wrap your app with the `ThemeProvider` to provide context globally.

```jsx
function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}
```
