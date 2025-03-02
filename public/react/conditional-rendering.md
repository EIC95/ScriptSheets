# Conditional Rendering

## Introduction

Conditional rendering in React allows components to display different content based on conditions. This makes UI updates dynamic and responsive to state changes.

## Using `if` Statements

You can use an `if` statement inside a function to determine what to render.

```jsx
function Message({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please log in.</h1>;
}
```

## Using Ternary Operators

A **ternary operator** is a shorter way to write conditional rendering.

```jsx
function Message({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
}
```

## Using Logical `&&` Operator

If you only need to render something when a condition is true, you can use `&&`.

```jsx
function Notification({ hasMessages }) {
  return (
    <div>
      <h1>Inbox</h1>
      {hasMessages && <p>You have new messages!</p>}
    </div>
  );
}
```

## Conditional Rendering with `switch`

For multiple conditions, a `switch` statement can be useful.

```jsx
function Status({ status }) {
  switch (status) {
    case "loading":
      return <p>Loading...</p>;
    case "success":
      return <p>Data loaded successfully!</p>;
    case "error":
      return <p>Error loading data.</p>;
    default:
      return <p>Unknown status.</p>;
  }
}
```