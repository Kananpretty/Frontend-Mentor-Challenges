# Frontend Mentor - Base Apparel Coming Soon

This is my solution to the [Base Apparel Coming Soon](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-9T2t-2nM4) challenge on Frontend Mentor.

## Overview

### The Challenge

The goal was to build a responsive coming-soon page with an email subscription form that closely matches the provided design across different screen sizes.

The page includes:

- A responsive two-column desktop layout
- A vertically stacked mobile layout
- Responsive images using `<picture>`
- An email input with custom validation feedback
- Accessible error messaging
- Responsive typography and spacing
- Interactive form states

## Links

- [GitHub](https://github.com/Kananpretty/Frontend-Mentor-Challenges/tree/main/Challenge-17-Coming-Soon-page)
- [Live Demo](https://base-apparel-coming-soon-gamma-liart.vercel.app/)

## Built With

- Semantic HTML5
- CSS3
- CSS Grid
- CSS Flexbox
- Responsive design
- CSS `clamp()`
- CSS `:has()`
- HTML form validation
- Vanilla JavaScript
- Accessibility attributes (`aria-invalid`, `aria-describedby`, `role="alert"`)
- Responsive images with `<picture>` and `<source>`

## My Process

I started by building the page structure using semantic HTML and then focused on reproducing the desktop layout using CSS Grid.

The desktop design uses two main columns: the content area and the hero image. On smaller screens, the layout changes to a vertically stacked structure with the image appearing above the content.

For the responsive typography and spacing, I used `clamp()` where a property needed to scale between a minimum and maximum value rather than changing abruptly at a breakpoint.

The form interaction was implemented using the browser's built-in validation APIs with a small amount of vanilla JavaScript to control the custom error state.

## What I Learned

### Using Native Form Validation

One of the main things I explored in this challenge was using the browser's built-in form validation rather than implementing email validation from scratch.

I used `checkValidity()` to determine whether the input satisfies its HTML validation constraints.

The form uses `novalidate` because I wanted to prevent the browser's default validation UI and control the presentation of the error state myself.

This gave me a useful distinction between:

- **Native validation logic** provided by the browser
- **Custom validation presentation** controlled by my JavaScript and CSS

### Using `aria-invalid`

When the input is invalid, JavaScript updates the `aria-invalid` attribute.

This provides an accessible representation of the input's validation state while also giving CSS a state that can be used for styling.

The interaction can be represented as:

```text
User submits form
       ↓
checkValidity()
       ↓
Input validity determined
       ↓
aria-invalid updated
       ↓
CSS :has() responds to state
       ↓
Error UI displayed
```

This allowed JavaScript to focus on determining and updating the state while CSS handled the visual presentation.

### Using `aria-describedby`

I used `aria-describedby` to associate the email input with its error message.

This means that when the error message is present, assistive technologies can associate the message with the input that it describes.

I also kept the form label in the HTML for accessibility while visually hiding it because the visual design does not display a traditional label.

### Using `:has()` for the Error State

I used the relational pseudo-class `:has()` to style the form based on the validation state of the input.

Rather than having JavaScript separately toggle classes on the input, error icon, error message, and form, the CSS can respond to the input's state.

Conceptually:

```text
Input state
    ↓
aria-invalid
    ↓
:has()
    ↓
Error icon + message + styling
```

This was a useful continuation of what I learned in the previous Article Preview challenge, where I first practised using `:has()` to style an element based on the state of another element.

### Responsive Images

I used `<picture>` with `<source>` to provide different image assets for different viewport sizes.

This allowed the mobile and desktop designs to use the appropriate image composition rather than trying to force one image to work for both layouts.

## Responsive Layout

The desktop version uses a two-column CSS Grid layout:

```text
┌───────────────────────────────┬─────────────────────┐
│                               │                     │
│  Logo                         │                     │
│                               │      Hero Image     │
│  WE'RE                        │                     │
│  COMING SOON                  │                     │
│                               │                     │
│  Description                  │                     │
│                               │                     │
│  Email input             →    │                     │
│                               │                     │
└───────────────────────────────┴─────────────────────┘
```

On smaller screens, the layout changes to a vertically stacked structure:

```text
┌──────────────────────┐
│ Logo                 │
├──────────────────────┤
│                      │
│    Hero Image        │
│                      │
├──────────────────────┤
│ WE'RE                │
│ COMING SOON           │
│                      │
│ Description          │
│                      │
│ Email input      →   │
│                      │
└──────────────────────┘
```

The HTML structure remains the same while CSS controls the layout transformation.

One responsive detail I had to handle specifically was the vertical alignment. The desktop design uses vertical centering, while the mobile design needs the content to begin naturally from the top of the viewport rather than inheriting the desktop alignment.

## What I Am Most Proud Of

I'm most proud of the form validation implementation.

I initially approached the validation by having JavaScript toggle multiple CSS classes for the different error elements. While refining the implementation, I realised that the validation state itself could be represented through `aria-invalid`, allowing CSS to respond to that state.

This reduced the amount of presentation logic handled by JavaScript.

I also liked being able to build on my previous understanding of `:has()` and use it for a practical form-validation interaction rather than learning the selector in isolation.

Another part I am proud of is using the browser's native validation capabilities instead of recreating email validation logic unnecessarily.

## Challenges I Encountered

One of the main challenges was getting custom form validation to work alongside the browser's native validation.

Because I wanted to control the error UI myself, I used `novalidate` on the form and then used `checkValidity()` to determine whether the email input was valid.

Another challenge was making the custom error state accessible while matching the visual design.

I used:

- `aria-invalid` to communicate the input's validation state
- `aria-describedby` to associate the input with the error message
- `role="alert"` for the error message

I also had to handle the difference between the desktop and mobile layouts. The desktop design uses a vertically centred two-column layout, while the mobile design needs the content to flow naturally from the top of the page.

## What I Would Do Differently Next Time

Next time, I would establish the responsive layout structure earlier before spending as much time refining the individual desktop styles.

I would also test more intermediate viewport widths during development rather than primarily checking the desktop and mobile endpoints.

For the form, I would spend more time testing different invalid-input scenarios and keyboard interaction to make sure the custom validation experience remains accessible and predictable.

## Continued Development

For future projects, I want to continue improving:

- Accessible form validation
- Native browser validation APIs
- `aria-invalid`, `aria-describedby`, and other form accessibility patterns
- Responsive CSS architecture
- CSS Grid and Flexbox
- Responsive images with `<picture>`
- Fluid sizing with `clamp()`
- Relational selectors with `:has()`
- Separating application state from visual presentation
- Writing simple and maintainable CSS
- Testing responsive layouts at intermediate viewport sizes

## Areas I Would Like Feedback On

I would appreciate feedback on:

- The accessibility of the custom form validation
- Whether the use of `aria-invalid`, `aria-describedby`, and `role="alert"` is appropriate
- My responsive CSS and breakpoint choices
- Whether the use of `:has()` is appropriate for the error state
- My use of native form validation and `checkValidity()`
- The `<picture>` implementation for responsive images
- Opportunities to simplify the CSS without losing clarity
- Whether the overall implementation follows good frontend practices

## Author

**Kanan Mehta**

- GitHub — [@Kananpretty](https://github.com/Kananpretty)
