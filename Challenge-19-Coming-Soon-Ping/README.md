# Frontend Mentor - Ping Coming Soon Page

## Overview

This is my solution to the [Ping Coming Soon Page](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da) challenge from Frontend Mentor.

The challenge is a responsive coming-soon landing page with an email subscription form, validation feedback, social media links, and a responsive dashboard illustration.

## The Challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- Submit their email address and receive validation feedback if the format is incorrect
- See hover and focus states for interactive elements
- Navigate the interactive elements using a keyboard

## Links

- [Github](https://github.com/Kananpretty/Frontend-Mentor-Challenges/tree/main/Challenge-19-Coming-Soon-Ping)
- [Live Demo](https://ping-coming-soon-omega-sable.vercel.app/)

## My Process

I started by building the page structure using semantic HTML, including the subscription form and social links.

I then created the desktop layout using CSS Grid and Flexbox before adapting the form and spacing for smaller screens.

For the subscription form, I reused the native HTML validation approach I practiced in the previous challenges. The email input uses `type="email"` and `required`, while JavaScript uses `checkValidity()` to determine whether the input is valid.

I used `aria-invalid` to communicate the validation state and `aria-describedby` to associate the input with its error message. CSS `:has()` then responds to the validation state to control the visual error styling.

I also worked with inline SVGs for the social icons. After initially using the icons through `<img>`, I switched to inline SVG with `currentColor` so the icons could inherit their link color and respond naturally to hover and focus states.

## Built With

- Semantic HTML5
- CSS3
- CSS Grid
- Flexbox
- Responsive design
- Inline SVG
- Vanilla JavaScript
- Native HTML form validation
- ARIA attributes

## What I Learned

### Responsive Grid Layout

The subscription form uses CSS Grid on larger screens:

```css
grid-template-columns: 2fr 1fr;
```

This gives the email field more space than the submit button.

On smaller screens, the layout changes to:

```css
grid-template-columns: 1fr;
```

This allows the input and button to stack vertically and the button to become full width.

### Inline SVG and `currentColor`

I initially used the social media SVGs through `<img>`, but discovered that an externally loaded SVG does not inherit the parent's CSS `color`.

I switched to inline SVG and used:

```html
<path fill="currentColor" ... />
```

This allows the SVG to inherit the color of its parent and makes hover and focus styling straightforward.

```css
.social-link:hover {
  color: white;
  background-color: hsl(223, 87%, 63%);
}
```

This gave me a better understanding of the difference between using SVG as an external image and embedding SVG directly in the HTML.

### Form Validation

The email field uses native HTML validation:

```html
<input type="email" required />
```

JavaScript uses:

```js
inputElement.checkValidity();
```

to check the browser's built-in validation constraints.

The validation state is communicated through:

```html
aria-invalid="true"
```

and the error message is associated with the input using:

```html
aria-describedby="email-error"
```

This allowed me to build custom validation feedback without replacing the browser's underlying validation rules.

### Using `:has()` for Validation Styling

I used `:has()` to allow CSS to respond to the validation state:

```css
.input-wrapper:has(input[aria-invalid="true"]) + .error-message {
  /* error styling */
}
```

This means JavaScript is responsible for updating the validation state, while CSS is responsible for presenting that state visually.

### Accessibility

This challenge gave me another opportunity to practice accessible form validation.

The form includes:

- A real `<label>` associated with the email input
- Native `type="email"` and `required` constraints
- `aria-invalid` for the validation state
- `aria-describedby` for the error message relationship
- `role="alert"` for the validation message
- Visible keyboard focus indicators
- Accessible names for social links
- Decorative SVG icons marked with `aria-hidden="true"`

The label is visually hidden while remaining available to assistive technologies.

## Responsive Layout

The desktop layout uses a single-column page structure with the subscription form arranged horizontally.

```text
Desktop

        Logo
         ↓
   Heading + Text
         ↓
  ┌─────────────┬─────────┐
  │ Email       │ Notify  │
  └─────────────┴─────────┘
         ↓
     Illustration
         ↓
    Social Links
```

On smaller screens, the form changes to a single-column layout:

```text
Mobile

       Logo
        ↓
   Heading + Text
        ↓
     Email
        ↓
     Notify
        ↓
   Illustration
        ↓
   Social Links
```

This keeps the form usable without trying to preserve the desktop two-column structure on narrow screens.

## Challenges I Encountered

### Styling SVG Icons

The biggest challenge was styling the social media icons.

I initially used the SVGs through `<img>` elements and tried to control their color through the parent element. This did not work because externally loaded SVGs do not inherit the parent's CSS `color`.

Switching to inline SVG with `currentColor` solved the problem and gave me more control over the icon styling.

### Responsive Form Layout

Another challenge was adapting the subscription form for smaller screens.

The desktop design uses a two-column layout, while the mobile design requires the input and button to stack vertically. I used CSS Grid to change the column structure rather than creating separate markup for desktop and mobile.

### Accessible Validation

I also continued refining the validation pattern I introduced in the previous challenges.

Rather than relying only on visual error styling, I used `aria-invalid`, `aria-describedby`, and `role="alert"` so the validation feedback has semantic meaning as well.

## What I Am Most Proud Of

I am most proud of keeping the implementation in vanilla HTML, CSS, and JavaScript while still creating a complete validation flow.

The validation follows a clear separation of responsibilities:

**HTML constraints → JavaScript `checkValidity()` → `aria-invalid` → CSS `:has()` → visual error state**

I am also happy with the work I did with inline SVG and `currentColor. It was a small part of the challenge, but it introduced a useful concept that I had not worked with before.

## What I Would Do Differently Next Time

Next time, I would test more intermediate viewport widths earlier instead of primarily checking desktop and mobile.

I would also spend some time testing the form through different interaction paths, such as typing an invalid email, correcting it, submitting an empty field, and submitting a valid email.

For the SVG icons, I would also explore whether the SVG markup could be organized more efficiently when working with multiple icons.

## Why I Used Vanilla JavaScript

The interaction in this challenge is limited to email validation, so React would add more abstraction without providing much additional value.

Vanilla JavaScript was enough to:

- Listen for input changes
- Check the email's validity
- Update `aria-invalid`
- Handle form submission
- Prevent the default submission when necessary

Keeping the implementation in vanilla JavaScript made the solution proportional to the problem and allowed me to focus on HTML, CSS, validation, and accessibility.

## Continued Development

I would like to continue practicing:

- More complex responsive layouts
- Advanced CSS positioning and composition
- SVG manipulation and styling
- Accessible interactive components
- More JavaScript-driven UI states
- Form validation patterns
- Responsive design across intermediate viewport sizes

## Areas I Would Like Feedback On

I would appreciate feedback on:

- My responsive form layout and breakpoint decisions
- The use of inline SVG and `currentColor`
- SVG accessibility and the use of `aria-hidden`
- The form validation and ARIA implementation
- The use of `:has()` for validation styling
- My CSS Grid and Flexbox choices
- Whether the JavaScript is appropriately scoped for the interaction
- Any opportunities to simplify the HTML or CSS without sacrificing accessibility

## Author

- GitHub - [@Kananpretty](https://github.com/Kananpretty)
