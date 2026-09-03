# Frontend Mentor - Results Summary Component

This is my solution to the **[Results Summary Component](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV)** challenge on Frontend Mentor.

## Overview

The challenge was to build a results summary card that displays a user's overall score alongside a summary of scores across different categories.

The category data is loaded dynamically from a local JSON file and rendered using JavaScript.

### Links

- **[GitHub Repository](https://github.com/Kananpretty/Frontend-Mentor-Challenges/tree/main/Challenge-4-Results-summary-component)**
- **[Live Demo](https://results-summary-section.vercel.app/)**

### Screenshot

![Results Summary Component](images/image.png)

## Built With

- Semantic HTML5
- CSS
- CSS Grid
- Flexbox
- JavaScript
- Fetch API
- JSON
- HSL and HSLA colors
- CSS `linear-gradient()`

## What I Learned

While building this challenge, I practised and learned:

### CSS and Layout

- Using **CSS Grid** to create the main two-column card layout
- Using **Flexbox** for aligning content inside each section
- Using nested Flexbox layouts for the category score rows
- Creating gradients using `linear-gradient()`
- Using `hsl()` and `hsla()` colors
- Using transparency to create subtle category backgrounds
- Creating responsive layouts that adapt between mobile and desktop

### Semantic HTML

- Using semantic HTML elements such as `<main>`, `<article>`, `<section>`, `<ul>`, and `<li>`
- Structuring repeated category results as a list
- Choosing elements based on their semantic purpose rather than using generic `<div>` elements for everything

### JavaScript and Dynamic Data

- Fetching data from a local JSON file using the Fetch API
- Working with JSON data
- Looping through an array using `forEach()`
- Dynamically creating DOM elements
- Using `document.createElement()`
- Using `appendChild()` and `append()`
- Dynamically applying CSS classes based on data
- Using template literals to generate dynamic class names
- Separating data from the HTML structure

## Dynamic Data Rendering

The category results are stored in a JSON file and rendered dynamically using JavaScript.

The process is:

```text
JSON data
   ↓
Fetch API
   ↓
Parse the response
   ↓
Loop through each category
   ↓
Create DOM elements
   ↓
Apply category-specific classes
   ↓
Render the results in the UI
```

This approach means the category results do not need to be manually written into the HTML. The UI is generated based on the data provided by the JSON file.

## CSS Layout

The main results card uses **CSS Grid** to create the two-column desktop layout.

Flexbox is then used inside the individual sections to control:

- Vertical and horizontal alignment
- Score positioning
- Category icon and text alignment
- Spacing between elements

The layout changes on smaller screens to provide a more suitable mobile experience.

## Continued Development

For future challenges, I want to continue improving:

- Semantic HTML and accessibility
- Responsive layouts
- CSS Grid and Flexbox
- CSS variables and reusable styles
- JavaScript fundamentals
- DOM manipulation
- Working with APIs and asynchronous data
- Writing cleaner and more maintainable JavaScript
- Separating data, logic, and presentation
- Understanding modern JavaScript patterns

## Author

**Kanan Mehta**

- GitHub - [@Kananpretty](https://github.com/Kananpretty)
