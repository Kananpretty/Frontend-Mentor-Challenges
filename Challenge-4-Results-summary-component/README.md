# Results Summary Component

This is my solution to the **Results Summary Component** challenge on Frontend Mentor.

## Overview

The challenge was to build a results summary card that displays a user's overall score alongside a summary of scores across different categories.

The category data is loaded dynamically from a JSON file and rendered using JavaScript.

## Screenshot

![challenge-4](./images/image.png)

## Built with

- Semantic HTML5
- CSS
- CSS Grid
- Flexbox
- JavaScript
- Fetch API
- JSON
- HSL and HSLA colors
- CSS linear gradients

## What I learned

While building this challenge, I practiced and learned:

- Using **CSS Grid** to create the main two-column card layout
- Using **Flexbox** for aligning content inside each section
- Using nested Flexbox layouts for the category score rows
- Creating gradients using `linear-gradient()`
- Using `hsla()` transparency to create subtle category background colors
- Working with semantic HTML elements such as `main`, `article`, `section`, `ul`, and `li`
- Fetching data from a local JSON file using the Fetch API
- Looping through JSON data with `forEach()`
- Dynamically creating DOM elements using:
  - `document.createElement()`
  - `appendChild()`
  - `append()`
- Dynamically applying CSS classes based on JSON data
- Using template literals for dynamic class names

## Dynamic Data Rendering

The category results are stored in a JSON file and rendered dynamically using JavaScript.

The process is:

```text
JSON data
   ↓
Fetch API
   ↓
Loop through each category
   ↓
Create DOM elements
   ↓
Apply category-specific classes
   ↓
Render the results in the UI
```
