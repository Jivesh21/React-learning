# Day 03 - React Components

## 📅 Date
03 July 2026

---

# Objective

Learn how components make React applications reusable.

---

# What is a Component?

A component is an independent and reusable piece of UI.

Everything in React is built using components.

---

# Functional Component

```jsx
function App() {
    return <h1>Hello React</h1>;
}
```

---

# Arrow Function Component

```jsx
const App = () => {
    return <h1>Hello React</h1>;
}
```

---

# Component Rules

- First letter should be Capital.
- Return JSX.
- Export component.
- One parent element.

---

# Import Component

```jsx
import Navbar from "./Navbar";
```

---

# Use Component

```jsx
<Navbar />
```

---

# Benefits

- Reusable
- Easy Maintenance
- Better Organization
- Modular Code

---

# Key Learnings

- Components are reusable.
- Components can contain JSX.
- Components can call other components.

---

# Interview Questions

### What is a Component?

A reusable UI block that returns JSX.

### Why Components?

To improve code reusability and maintainability.

### Difference between HTML element and React Component?

HTML tags start with lowercase.
Components start with uppercase.

---

# Practice

Create

- Header
- Card
- Footer

as separate components.

---

Status

✅ Completed