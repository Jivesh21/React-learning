# Day 02 - JSX

## 📅 Date
03 July 2026

---

# Objective

Understand JSX syntax and how React renders HTML inside JavaScript.

---

# What is JSX?

JSX stands for JavaScript XML.

It allows writing HTML inside JavaScript.

Example

```jsx
const element = <h1>Hello React</h1>;
```

---

# Why JSX?

- Easier to write UI
- More readable
- Supports JavaScript expressions
- Converts into React.createElement()

---

# Rules of JSX

- Return only one parent element.
- Tags must be closed.
- Use className instead of class.
- JavaScript expressions are written inside {}.

---

# Expressions

```jsx
const name = "Jivesh";

<h1>Hello {name}</h1>
```

---

# Attributes

```jsx
<img src="image.png" alt="image" />

<input type="text" />
```

---

# Fragments

Instead of wrapping everything inside div

```jsx
<>
<h1>Hello</h1>
<p>React</p>
</>
```

---

# Key Learnings

- JSX is not HTML.
- JSX gets converted into JavaScript.
- Curly braces allow JavaScript expressions.
- Every component returns JSX.

---

# Interview Questions

### What is JSX?

JSX is a syntax extension that allows writing HTML-like code inside JavaScript.

### Why use JSX?

It makes UI development easier and more readable.

### Can browsers understand JSX?

No.
Babel converts JSX into JavaScript.

---

# Practice

Create

- Heading
- Paragraph
- Image
- Button

using JSX.

---

Status

✅ Completed