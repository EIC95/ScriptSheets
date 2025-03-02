# Forms

## Introduction

Forms in React allow users to input data and interact with the application. Unlike traditional HTML forms, React manages form elements using **controlled components** to maintain state consistency.

## Controlled Components

A controlled component is a form element whose value is managed by React state.

```jsx
import { useState } from "react";

function ControlledForm() {
  const [inputValue, setInputValue] = useState("");

  return (
    <form>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Typed: {inputValue}</p>
    </form>
  );
}
```

## Handling Form Submission

Use `event.preventDefault()` to prevent page reloads on form submission.

```jsx
function FormSubmit() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Submitted: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Handling Multiple Inputs

Use an object in state to manage multiple form fields.

```jsx
function MultiInputForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <form>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </form>
  );
}
```

## Handling Checkboxes & Radio Buttons

```jsx
function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      Accept Terms
    </label>
  );
}
```
