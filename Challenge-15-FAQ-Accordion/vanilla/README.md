# Frontend Mentor - FAQ Accordion (Vanilla JavaScript)

This is my solution to the [FAQ Accordion](https://www.frontendmentor.io/challenges/faq-accordion-wyfFJ7P4tK) challenge on Frontend Mentor.

I built this version using **semantic HTML, CSS, and vanilla JavaScript** without a framework.

## Overview

### The Challenge

The goal was to build a responsive FAQ accordion where users can expand and collapse individual questions.

I intentionally built this version with vanilla JavaScript to strengthen my understanding of DOM manipulation, event handling, accessibility, and the relationship between HTML, CSS, and JavaScript.

This implementation focuses on understanding the underlying JavaScript behaviour before recreating the same component using React.

### Features

- Expand and collapse individual FAQ answers
- Multiple accordion items can be open independently
- Plus/minus icon changes based on the accordion state
- `aria-expanded` updates dynamically
- `aria-controls` connects each question to its corresponding answer
- Semantic `<button>` elements for keyboard accessibility
- Smooth opening and closing animation using CSS transitions
- Decorative icons use empty `alt` attributes
- Responsive layout

## Links

- [Live Demo](https://faq-accordion-vanilla.vercel.app/)
- [GIthub](https://github.com/Kananpretty/Frontend-Mentor-Challenges/tree/main/Challenge-15-FAQ-Accordion/vanilla)

## Built With

- Semantic HTML5
- CSS3
- Vanilla JavaScript
- CSS transitions
- Responsive design
- Local custom fonts

## JavaScript Approach

Each accordion question is a native `<button>` with its own click event listener.

When a question is clicked, JavaScript:

1. Identifies the clicked button using `event.currentTarget`.
2. Finds the corresponding accordion item and answer.
3. Toggles the `active` class on the answer.
4. Determines whether the answer is currently open.
5. Updates the `aria-expanded` attribute.
6. Switches between the plus and minus icons.

The basic interaction can be represented as:

```text
User clicks
     ↓
Identify clicked button
     ↓
Find associated DOM elements
     ↓
Toggle state/class
     ↓
Update attributes
     ↓
Update icon
```

This helped me understand the imperative nature of DOM manipulation: JavaScript directly finds and modifies the elements on the page.

## Understanding `event.currentTarget`

One of the concepts I specifically practised in this challenge was `event.currentTarget`.

Because the question button contains both text and an icon, the actual element clicked could be a nested element.

Using `event.currentTarget` allows the event handler to consistently reference the element that the listener was attached to — the FAQ button itself.

This made it easier to find the corresponding answer and update the correct accordion item.

## Accessibility

The accordion uses native HTML semantics wherever possible.

Each question is a real `<button>` rather than a clickable `<div>`. This provides built-in keyboard interaction and makes the controls more appropriate for assistive technologies.

The buttons use:

- `aria-expanded` to communicate whether the answer is open
- `aria-controls` to identify the associated answer

Each answer has a matching unique `id`.

Decorative icons use `alt=""` so they are ignored by screen readers.

## CSS Transitions

The opening and closing animation is handled with CSS rather than JavaScript animation.

JavaScript is responsible for changing the state, while CSS is responsible for presenting that state visually.

This reinforced the separation between:

- **Content** → HTML
- **Presentation** → CSS
- **Behaviour** → JavaScript

## What I Learned

The main learning from this challenge was understanding how much accordion behaviour can be implemented with a relatively small amount of vanilla JavaScript when the HTML structure is designed well.

I also gained more confidence with:

- DOM selection and traversal
- Event listeners
- `event.currentTarget`
- `classList`
- Dynamic attribute updates
- Working with `aria-expanded` and `aria-controls`
- CSS transitions
- Separating JavaScript behaviour from CSS presentation

Most importantly, this implementation became a useful baseline for my React version.

Building the same component twice gave me an opportunity to compare **imperative DOM manipulation in vanilla JavaScript** with the **state-driven and declarative approach used by React**.

## What I Would Improve

For a larger application, I would consider extracting the accordion behaviour into reusable functionality rather than keeping all of the interaction logic specific to this page.

I would also consider whether the component should support a different interaction model, such as allowing only one FAQ item to remain open at a time.

For this challenge, however, I intentionally kept the implementation straightforward so that the underlying JavaScript concepts remain clear.

## Continued Development

For future challenges, I want to continue improving:

- JavaScript event handling
- DOM manipulation
- Accessibility and ARIA
- CSS transitions and animations
- Responsive interaction patterns
- Reusable JavaScript logic
- Understanding the difference between imperative and declarative approaches
- React state management and component design

## Author

**Kanan Mehta**

- GitHub — [@Kananpretty](https://github.com/Kananpretty)
