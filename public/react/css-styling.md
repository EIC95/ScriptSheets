# CSS Styling in React

## Introduction

React allows multiple ways to apply styles to components, including **inline styles, CSS files, CSS Modules, and styled-components**.

## 1. Inline Styles

Inline styles are applied directly to elements using the `style` attribute, which takes an object.

```jsx
function InlineStyledComponent() {
  return <h1 style={{ color: "blue", fontSize: "24px" }}>Hello, React!</h1>;
}
```

**Pros**: Scoped to the element, dynamic styling possible.  
**Cons**: Hard to maintain, lacks pseudo-classes (`:hover`, `:focus`).

## 2. CSS Stylesheets

You can use traditional CSS files and import them into your components.

```css
/* styles.css */
.title {
  color: red;
  font-size: 24px;
}
```

```jsx
import "./styles.css";

function StyledComponent() {
  return <h1 className="title">Hello, React!</h1>;
}
```

**Pros**: Easy to use, supports all CSS features.  
**Cons**: Styles are **global**, which can cause conflicts.

## 3. CSS Modules

CSS Modules create **scoped styles** that apply only to the component where they are imported.

```css
/* styles.module.css */
.title {
  color: green;
  font-size: 24px;
}
```

```jsx
import styles from "./styles.module.css";

function CSSModuleComponent() {
  return <h1 className={styles.title}>Hello, React!</h1>;
}
```

**Pros**: Locally scoped, avoids conflicts.  
**Cons**: Slightly more complex setup.

## 4. Styled Components (CSS-in-JS)

Styled Components use JavaScript to define component-specific styles.

```sh
npm install styled-components
```

```jsx
import styled from "styled-components";

const Title = styled.h1`
  color: purple;
  font-size: 24px;
`;

function StyledComponent() {
  return <Title>Hello, React!</Title>;
}
```

**Pros**: Dynamic styling, scoped styles.  
**Cons**: Adds extra dependency.