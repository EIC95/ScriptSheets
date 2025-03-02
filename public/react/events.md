# Event Handling

## Introduction

Event handling in React allows you to capture and respond to user interactions like clicks, inputs, and key presses. React uses a **synthetic event system**, which is a wrapper around native browser events for better performance and consistency across browsers.

## Handling Events in React

In React, event handlers are written as functions and passed as props to elements.

```jsx
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

## Passing Arguments to Event Handlers

You can pass arguments to an event handler using an arrow function.

```jsx
function GreetUser({ name }) {
  function handleClick(userName) {
    alert(`Hello, ${userName}!`);
  }

  return <button onClick={() => handleClick(name)}>Greet</button>;
}
```

## Common Events in React

| Event        | Description |
|-------------|-------------|
| `onClick`    | Fired when an element is clicked |
| `onChange`   | Fired when an input value changes |
| `onSubmit`   | Fired when a form is submitted |
| `onKeyDown`  | Fired when a key is pressed |
| `onMouseOver` | Fired when the mouse hovers over an element |

## Handling Form Events

```jsx
function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Using State with Events

State is often used to update UI dynamically in response to events.

```jsx
import { useState } from "react";

function InputField() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>Typed: {text}</p>
    </div>
  );
}
```

