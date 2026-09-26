# Frontend Mentor - Intro Component With Sign-Up Form

This is my solution to the [Intro Component with Sign-Up Form](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1) challenge on Frontend Mentor.

## Overview

### The Challenge

The goal was to build a responsive sign-up form that closely matches the provided design across different screen sizes.

Users should be able to:

- View the component across different screen sizes.
- Submit the form.
- See validation feedback when required fields are empty or the email address is invalid.
- See visual error states for invalid inputs.
- Use the form with keyboard navigation and assistive technologies.

## Links

- [Github](https://github.com/kanan-mehta/Frontend-Mentor-Challenges/tree/main/Challenge-18-Intro-Component-Signup)
- [Live Demo](https://sign-up-intro.vercel.app/)

## My Process

I started by building the form using semantic HTML and native form controls.

Since the previous challenge introduced me to browser form validation, I wanted to build on that approach rather than writing separate validation logic for every field.

I used HTML validation attributes such as `required` and `type="email"` to define the validation constraints and used JavaScript's `checkValidity()` to determine the state of each input.

For the visual error states, I used `aria-invalid` as the state that connects the JavaScript validation logic with CSS. The CSS then uses `:has()` to display the appropriate error styling and messages.

For the layout, I used CSS Grid and Flexbox along with responsive sizing and `clamp()` to adapt the component across different viewport sizes.

## Built With

- Semantic HTML5
- CSS3
- CSS Grid
- CSS Flexbox
- Responsive design
- CSS `clamp()`
- CSS `:has()`
- Vanilla JavaScript
- HTML form validation
- Accessibility attributes
- Responsive background images

## What I Learned

### Building on Native Form Validation

This challenge gave me more practice with HTML forms and validation, building on the concepts introduced in the previous challenge.

I used native HTML validation constraints such as:

- `required`
- `type="email"`

JavaScript then uses `checkValidity()` to determine whether each input satisfies its constraints.

This helped reinforce the separation between the **validation rules** and the **presentation of validation feedback**.

Instead of recreating the validation rules in JavaScript, I allowed the HTML attributes to define the constraints and used JavaScript primarily to respond to the resulting validity state.

### Generic Validation Logic

One of the main things I practised in this challenge was avoiding separate validation logic for every field.

Instead, I looped through the form inputs and applied the same event-handling logic:

```js
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.setAttribute("aria-invalid", String(!input.checkValidity()));
  });
});
```

Each input can still have different validation rules because those rules are defined in the HTML.

Conceptually:

```text
HTML validation constraints
          ↓
     checkValidity()
          ↓
      aria-invalid
          ↓
        :has()
          ↓
     Visual error state
```

This made the JavaScript smaller and more reusable.

### Using `aria-invalid` as UI State

I used `aria-invalid` to communicate the validation state of each input.

The same state can then be used by CSS to determine whether the input should display its error styling.

For example, the CSS can respond to an invalid input through `:has()` rather than requiring JavaScript to add separate presentation classes.

This continued the pattern I explored in Challenge 17, where I used accessibility state as a bridge between JavaScript and CSS.

### Accessibility

I paid particular attention to the form's accessibility.

Each input has an associated `<label>`. The labels are visually hidden because the design does not display them, but they remain available to assistive technologies.

I also used:

- `aria-describedby` to associate each input with its corresponding error message
- `aria-invalid` to communicate the current validation state
- `role="alert"` for validation feedback
- `alt=""` and `aria-hidden="true"` for decorative error icons

This helped me think about validation feedback as more than just a visual state.

## Responsive Layout

The component uses CSS Grid and Flexbox to create the overall desktop layout.

The desktop design places the introductory content alongside the sign-up form:

```text
┌──────────────────────────┬─────────────────────────┐
│                          │                         │
│  Learn to code by        │  Try it free            │
│  watching others         │                         │
│                          │  First Name             │
│  See how experienced     │  Last Name              │
│  developers solve        │  Email                  │
│  problems in real-time.  │  Password               │
│                          │                         │
└──────────────────────────┴─────────────────────────┘
```

On smaller screens, the content changes to a vertically stacked layout:

```text
┌─────────────────────────┐
│                         │
│  Learn to code by       │
│  watching others        │
│                         │
│  Try it free            │
│                         │
│  First Name             │
│  Last Name              │
│  Email                  │
│  Password               │
│                         │
└─────────────────────────┘
```

I also used different background images for the desktop and mobile layouts so that the background composition matches the intended design at different viewport sizes.

### Responsive Typography With `clamp()`

I continued practising `clamp()` for responsive typography.

Instead of defining a completely different font size at every breakpoint, `clamp()` allows the value to scale within a defined range:

```text
clamp(MIN, PREFERRED, MAX)
```

This helped me become more comfortable thinking about typography as fluid rather than simply switching between fixed values at breakpoints.

## What I Am Most Proud Of

I am most proud of keeping the validation logic generic rather than writing separate JavaScript conditions for each field.

The HTML defines what makes each field valid, while the JavaScript simply checks the validity of each input and updates its validation state.

I also liked seeing how `aria-invalid` can act as the connection between JavaScript and CSS. JavaScript updates the state, while CSS uses `:has()` to control the visual error presentation.

This gave me a cleaner separation between:

- **HTML** → structure and validation constraints
- **JavaScript** → behaviour and state updates
- **CSS** → visual presentation
- **ARIA** → accessibility information

## Challenges I Encountered

The main challenge was deciding how much custom validation logic was actually necessary.

It would have been possible to write separate JavaScript conditions for the first name, last name, email, and password fields. However, the browser's native validation constraints already provide most of the rules required for this challenge.

Using `checkValidity()` allowed me to reuse those rules instead of duplicating them in JavaScript.

Another challenge was making the same validation approach work across different types of inputs. Using a generic loop over the form inputs allowed the same JavaScript logic to handle all of them while the individual HTML attributes determined their validation requirements.

I also continued working with responsive typography and had to consider how the minimum, preferred, and maximum values in `clamp()` affected the design across different viewport sizes.

## What I Would Do Differently Next Time

Next time, I would test the form validation more extensively with different combinations of valid and invalid input, particularly around how validation feedback appears while the user is typing versus when they submit the form.

I would also test more intermediate viewport sizes earlier in the development process to make sure the responsive typography and layout remain balanced between the desktop and mobile endpoints.

## Continued Development

For future projects, I want to continue improving:

- HTML forms and form controls
- Native browser validation APIs
- Generic JavaScript event handling
- Accessible form validation
- `aria-invalid` and `aria-describedby`
- Responsive typography
- `clamp()`
- CSS `:has()`
- CSS Grid and Flexbox
- Responsive background images
- Writing reusable JavaScript without unnecessary abstraction
- Testing forms across different interaction states

## Areas I Would Like Feedback On

I would appreciate feedback on:

- Whether my form validation approach is appropriate for a real-world vanilla JavaScript form
- My use of `aria-invalid`, `aria-describedby`, and `role="alert"`
- Whether using `:has()` for the error states is appropriate
- Whether the generic validation logic can be improved further
- My responsive typography choices using `clamp()`
- My CSS Grid and Flexbox layout
- Whether the responsive background-image approach is appropriate
- Whether there are opportunities to simplify the implementation without losing clarity

## Author

**Kanan Mehta**

- GitHub — [@kanan-mehta](https://github.com/kanan-mehta)
