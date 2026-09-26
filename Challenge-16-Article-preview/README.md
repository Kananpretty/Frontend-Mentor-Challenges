# Frontend Mentor - Article Preview Component

This is my solution to the [Article Preview Component](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT) challenge on Frontend Mentor.

## Overview

### The Challenge

The goal was to build a responsive article preview component that closely matches the provided design across different screen sizes.

Users should be able to:

- View the article preview component across different screen sizes.
- Click the share button to show and hide the sharing options.
- See the sharing component adapt between desktop and mobile layouts.

### Links

- [Github](https://github.com/kanan-mehta/Frontend-Mentor-Challenges/tree/main/Challenge-16-Article-preview)
- [Live Demo](https://article-preview-six-gamma.vercel.app/)

## My Process

I started by building the component using semantic HTML and then focused primarily on the CSS layout and responsive behaviour.

This challenge was particularly useful for practising modern CSS sizing functions and relational selectors while keeping the JavaScript interaction intentionally small.

### Built With

- Semantic HTML5
- CSS Flexbox
- Responsive CSS
- CSS `min()`
- CSS `clamp()`
- CSS `:has()`
- CSS pseudo-elements
- Vanilla JavaScript
- Accessibility attributes (`aria-label`, `aria-expanded`, `aria-controls`)

## What I Learned

This challenge was primarily a CSS-focused exercise for me. I practised several modern CSS features while using a small amount of vanilla JavaScript for the share interaction.

### Using `min()`

I used `min()` to create a responsive maximum width without needing a separate mobile width declaration:

```css
.article {
  width: min(700px, calc(100% - 3rem));
}
```

This helped me understand how `min()` can be used to choose the smaller of two values and create a layout that is constrained on larger screens while still adapting to smaller viewports.

### Using `clamp()`

I used `clamp()` for responsive spacing and typography:

```css
.article-details {
  padding: clamp(1.25rem, 3vw, 2rem);
}

.article-heading {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
}
```

This helped me understand the relationship between the minimum, preferred fluid value, and maximum value:

```text
clamp(MIN, PREFERRED, MAX)
```

Rather than changing values abruptly at multiple breakpoints, `clamp()` allowed some properties to scale fluidly within a defined range.

### Using `:has()`

I also practised the CSS `:has()` relational pseudo-class.

Instead of adding an `active` class directly to the share button, the parent element can respond to the state of a descendant:

```css
.article-details:has(.share-details.active) .share-button {
  ...
}
```

This allowed the share button to change its appearance based on whether the share menu contains the `active` state.

This was particularly useful for understanding that modern CSS can express relationships between elements rather than requiring JavaScript to add a separate state class to every element that needs to react to that state.

### Accessibility

I used `aria-expanded` to communicate whether the share menu is currently open and `aria-controls` to associate the share button with the element it controls.

The JavaScript updates `aria-expanded` whenever the share menu is toggled.

This reinforced the idea that interactive UI state should be reflected in accessibility attributes as well as visual styling.

## JavaScript Interaction

The interaction is intentionally small because the component only needs to show and hide the share menu.

The share button toggles the `active` class on the share menu and updates the accessibility state:

```js
shareOptions.classList.toggle("active");

const isOpen = shareOptions.classList.contains("active");

event.currentTarget.setAttribute("aria-expanded", isOpen);
```

The JavaScript is responsible for the behaviour, while CSS handles the visual presentation of the different states.

This kept the interaction simple without introducing unnecessary JavaScript logic.

## React Decision

I considered creating a React version of this challenge, but decided not to for this exercise.

Although the component could certainly be implemented as a React component, the interaction is very small and most of the challenge focuses on semantic HTML, CSS layout, responsive behaviour, and accessibility.

For my current learning goals, converting this component to React would add abstraction without providing much additional React practice.

I would consider implementing this as a React component in a larger application or component library where the component could become reusable, configurable, or data-driven.

This was also a useful exercise in deciding **when React provides meaningful value rather than using it automatically for every UI component**.

## Responsive Layout

The component uses the same HTML structure across screen sizes while CSS controls how the layout changes.

On larger screens, the article content and image are presented as a horizontal composition with the sharing UI positioned according to the desktop design.

On smaller screens, the layout adapts to the available viewport width and the share interaction changes to fit the mobile composition.

The goal was to make the layout responsive through CSS rather than creating separate desktop and mobile markup.

## What I Am Most Proud Of

I'm particularly happy with using modern CSS features such as `min()`, `clamp()`, and `:has()` because each solved an actual layout or state-related problem.

I also liked keeping the JavaScript intentionally small. The interaction did not require a complex state-management solution, so I focused on using JavaScript only where behaviour was actually needed.

Another useful takeaway was recognising that not every interactive component needs to become a React component. Choosing vanilla JavaScript here was itself part of the exercise.

## What I Learned From the Challenge

This challenge helped reinforce:

- Responsive sizing with `min()`
- Fluid sizing with `clamp()`
- The difference between fixed, fluid, and constrained sizing
- Relational selectors with `:has()`
- CSS pseudo-elements
- Responsive Flexbox layouts
- DOM manipulation
- `event.currentTarget`
- Accessibility attributes such as `aria-expanded` and `aria-controls`
- Separating JavaScript behaviour from CSS presentation
- Deciding when React abstraction is useful

## Challenges I Encountered

One of the main challenges was understanding how to choose meaningful values for `clamp()`.

Initially, it was easy to think of the three values simply as numbers. Through this challenge, I became more comfortable thinking about them as a **minimum**, a **fluid preferred value**, and a **maximum**, and considering how the property should behave between different viewport sizes.

Another useful challenge was using `:has()` to allow a parent element to respond to the state of a descendant.

This helped me understand how modern CSS can handle certain UI relationships that might otherwise require additional JavaScript or extra state classes.

I also had to make decisions about where the responsibility for each part of the interaction should live — JavaScript for changing the state, CSS for presenting that state, and ARIA attributes for communicating the state to assistive technologies.

## What I Would Do Differently Next Time

Next time, I would experiment more with different responsive sizing strategies and compare approaches such as `clamp()`, `min()`, `max()`, and media queries to better understand when each is the most appropriate choice.

I would also test the share interaction more extensively with keyboard navigation and different viewport sizes to further strengthen the accessibility and responsive behaviour.

## Continued Development

For future projects, I would like to continue improving:

- Modern CSS sizing functions
- `min()`, `max()`, and `clamp()`
- Relational selectors such as `:has()`
- Responsive layouts without unnecessary media queries
- CSS transitions and animations
- Accessibility for interactive components
- JavaScript event handling
- Separating behaviour from presentation
- Deciding when CSS can handle a UI relationship versus when JavaScript or React state is more appropriate
- Identifying when React provides meaningful value instead of using it automatically

## Areas I Would Like Feedback On

I would appreciate feedback on:

- My use of `min()` and `clamp()`
- Whether the responsive sizing approach is appropriate
- My use of `:has()` and whether it is being used meaningfully
- The balance between CSS and JavaScript responsibilities
- Accessibility of the share interaction
- Whether the responsive layout can be simplified further
- Whether choosing vanilla JavaScript instead of React was appropriate for this component

## Author

**Kanan Mehta**

- GitHub — [@kanan-mehta](https://github.com/kanan-mehta)
