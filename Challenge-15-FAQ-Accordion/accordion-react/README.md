# Frontend Mentor - FAQ Accordion (React)

This is my React implementation of the [FAQ Accordion](https://www.frontendmentor.io/challenges/faq-accordion-wyfFJ7P4tK) challenge on Frontend Mentor.

I first built this challenge using **semantic HTML, CSS, and vanilla JavaScript**, and then rebuilt the same UI using **React** to compare the two approaches.

## Overview

### The Challenge

The goal was to build a responsive FAQ accordion where users can expand and collapse questions.

The React implementation focuses on understanding **state-driven UI** rather than directly manipulating the DOM.

Building the same interface twice also provided an opportunity to compare imperative DOM manipulation with React's declarative approach.

## Built With

- React
- Vite
- JavaScript
- CSS
- Semantic HTML5
- React `useState`

## Features

- Expand and collapse FAQ answers
- Only one accordion item can be open at a time
- Plus/minus icon changes based on state
- `aria-expanded` is derived from React state
- `aria-controls` connects each question to its associated answer
- Semantic `<button>` elements
- Smooth opening and closing animation using CSS transitions
- FAQ content is stored as data and rendered using `.map()`
- Decorative icons use empty `alt` attributes
- Responsive layout

## Links

- Live Site - #
- GitHub Repository - #

## React Approach

The FAQ content is stored as an array of objects:

```js
const accordionData = [
  {
    id: "faq01",
    question: "...",
    answer: "...",
  },
  // ...
];
```

The UI is generated from this data using `.map()`.

The currently open accordion item is stored in React state:

```js
const [openAccordionId, setOpenAccordionId] = useState(null);
```

When a question is clicked, its FAQ ID becomes the new state.

The rest of the UI is derived from that state:

```text
User clicks
     ↓
Update React state
     ↓
React re-renders
     ↓
UI derives from state
     ↓
Answer / icon / aria-expanded update
```

Instead of finding and modifying DOM elements manually, React determines what the UI should look like based on the current state.

## Vanilla JavaScript vs React

Building the same challenge twice helped me understand the difference between **imperative** and **declarative** UI development.

### Vanilla JavaScript

The vanilla implementation directly interacts with the DOM:

```text
Click
  ↓
Find the relevant DOM elements
  ↓
Toggle a CSS class
  ↓
Determine the resulting state
  ↓
Update attributes
  ↓
Update the icon
```

### React

The React implementation stores the state and derives the UI from it:

```text
Click
  ↓
Update state
  ↓
React re-renders
  ↓
UI reflects the state
```

This comparison was the main reason I built both versions rather than immediately using React.

It helped me understand that React does not remove the underlying concepts of UI state and DOM updates; instead, it provides a declarative model where the UI is described as a function of state.

## Accessibility

The React implementation continues to use semantic HTML and appropriate ARIA attributes.

Each question is a native `<button>` with:

- `aria-expanded` derived from the current React state
- `aria-controls` pointing to the associated answer

Each answer has a unique `id`.

Decorative icons use `alt=""` so they are ignored by screen readers.

Using a native button also provides keyboard interaction without needing to recreate button behaviour manually.

## Component Structure

I intentionally kept the implementation in the main `App` component rather than extracting an `AccordionItem` component.

The FAQ items are already generated from a single data array, and at this scale, extracting the JSX into another component would primarily move code without providing a meaningful architectural benefit.

I would consider extracting an `AccordionItem` component if the UI became more complex, the item needed its own behaviour, or the component became reusable elsewhere.

This was also a deliberate exercise in avoiding unnecessary abstraction.

## What I Learned

This challenge helped reinforce several React concepts:

- State should represent the application's source of truth.
- UI should be derived from state.
- `.map()` can be used to render repeated UI from data.
- `key` provides React with a stable identity for rendered list items.
- Event handlers can update state rather than manipulating the DOM directly.
- Accessibility attributes can also be derived from state.
- Not every piece of JSX needs to become its own component.
- Component extraction should provide a meaningful benefit rather than simply reducing the size of `App`.

Most importantly, rebuilding the same interface in vanilla JavaScript and React made the difference between **DOM-driven UI** and **state-driven UI** much clearer.

## What I Would Improve

For a larger application, I would consider extracting the accordion item into its own component if it became independently reusable or contained more complex behaviour.

I would also consider whether the accordion should support additional behaviours, such as allowing multiple items to remain open simultaneously.

For this challenge, however, I intentionally kept the implementation small so that the React fundamentals and the comparison with vanilla JavaScript remained clear.

## Continued Development

For future React challenges, I want to continue improving:

- React state management
- Component design and composition
- Rendering lists from data
- Event handling
- Accessibility in React
- Controlled and derived UI state
- Deciding when component abstraction is useful
- Writing simple and maintainable React code
- Understanding when React provides value over direct DOM manipulation

## Author

**Kanan Mehta**

- GitHub — [@Kananpretty](https://github.com/Kananpretty)
