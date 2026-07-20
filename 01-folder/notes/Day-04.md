# Day 04 - React Props

## 📅 Date
03 July 2026

---

# Objective

Learn how to pass data between components using Props.

---

# What are Props?

Props (Properties) are used to pass data from a Parent Component to a Child Component.

Props are Read Only.

---

# Parent Component

```jsx
<Card
name="Jivesh"
age={21}
/>
```

---

# Child Component

```jsx
function Card(props){
    return(
        <>
        <h2>{props.name}</h2>
        <p>{props.age}</p>
        </>
    )
}
```

---

# Destructuring Props

```jsx
function Card({name, age}){
    return(
        <>
        <h2>{name}</h2>
        <p>{age}</p>
        </>
    )
}
```

---

# Types of Props

- String
- Number
- Boolean
- Object
- Array
- Function

---

# Rules

- Props flow from Parent to Child.
- Props are immutable.
- Child cannot modify props.

---

# Key Learnings

- Props pass data between components.
- Parent controls data.
- Child displays data.
- Destructuring makes code cleaner.

---

# Interview Questions

### What are Props?

Props are read-only data passed from parent components to child components.

### Can Props be modified?

No.
Props are immutable.

### Difference between Props and State?

Props come from parent.
State is managed inside the component.

---

# Practice

Create a Card component that receives

- Name
- Image
- Price
- Description

using props.

---

Status

✅ Completed