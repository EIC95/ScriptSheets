# Hooks

## Introduction

Hooks are special functions in React that allow **functional components** to manage state and side effects. They were introduced in React 16.8 to replace class components.

## Common Hooks

### `useState`: Managing Component State

The `useState` hook allows a component to have local state.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### `useEffect`: Handling Side Effects

`useEffect` is used for data fetching, DOM updates, and setting up subscriptions.

```jsx
import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    
    return () => clearInterval(interval); // Cleanup function
  }, []); // Empty dependency array = run once on mount

  return <p>Seconds: {seconds}</p>;
}
```

### `useContext`: Accessing Context API

`useContext` allows a component to access values from a **React Context**.

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

## Additional Hooks

### `useReducer`: Alternative to `useState`

Used for managing complex state logic.

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </div>
  );
}
```

### `useRef`: Referencing DOM Elements

Allows direct access to a DOM element without triggering a re-render.

```jsx
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```

### `useMemo`: Optimizing Expensive Calculations

Caches the result of a function to avoid unnecessary recalculations.

```jsx
import { useState, useMemo } from "react";

function ExpensiveCalculation({ num }) {
  const squared = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]);

  return <p>Squared: {squared}</p>;
}
```

### `useCallback`: Optimizing Function References

Returns a memoized version of a function to prevent unnecessary re-creations.

```jsx
import { useCallback, useState } from "react";

function Button({ handleClick }) {
  return <button onClick={handleClick}>Click Me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const memoizedHandleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button handleClick={memoizedHandleClick} />
    </div>
  );
}
```

## Summary

| Hook           | Purpose |
|---------------|---------|
| `useState`    | Manage local state |
| `useEffect`   | Handle side effects |
| `useContext`  | Access context values |
| `useReducer`  | Alternative to `useState` for complex state logic |
| `useRef`      | Access DOM elements directly |
| `useMemo`     | Optimize expensive calculations |
| `useCallback` | Optimize function references |

Hooks make React components more readable, maintainable, and powerful!

