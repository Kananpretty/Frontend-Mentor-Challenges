# Frontend Mentor - Social Links Profile

This is my solution to the [Social Links Profile challenge](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ).

## Overview

### The challenge

The goal was to build a social links profile card as closely as possible to the provided design.

Users should be able to:

- View the profile card on different screen sizes
- See the user's profile information and avatar
- Navigate to the user's social profiles
- See visual feedback when interacting with the social links

### Screenshot

![Social Links Profile](./images/screenshot.png)

## Built with

- Semantic HTML5
- CSS
- Flexbox
- Responsive design
- CSS pseudo-classes
- Accessible focus states
- Google Fonts

## What I learned

This challenge helped me refresh and practice:

- Choosing semantic HTML elements based on their purpose
- Understanding the difference between `<a>` and `<button>`
- Using `<nav>`, `<ul>`, and `<li>` for a collection of navigation links
- Using `<h1>` for the primary profile heading
- Understanding when to use `<div>` instead of `<section>`
- Making inline `<a>` elements behave as full-width blocks using `display: block`
- Using `gap` for consistent spacing between flex items
- Using `margin` for element-specific spacing
- Using `padding` for internal spacing
- Creating responsive cards using `width` and `max-width`
- Implementing `:hover`, `:focus-visible`, and `:active` states
- Providing keyboard-accessible visual feedback

## Semantic HTML

The profile uses semantic HTML to describe the purpose of each element:

- `<main>` for the primary page content
- `<article>` for the self-contained profile card
- `<h1>` for the profile name
- `<nav>` for the social navigation
- `<ul>` and `<li>` for the collection of social links
- `<a>` for links to external social profiles

A key learning from this challenge was understanding the difference between links and buttons:

- `<a>` is used when the user is navigating to another destination
- `<button>` is used when the user is performing an action on the current page

## Accessibility

The social links include a `:focus-visible` state so that keyboard users can clearly identify the currently focused link.

The profile avatar also includes alternative text describing the person in the image.

## Continued development

For future challenges, I want to continue improving:

- Semantic HTML
- Accessibility and keyboard navigation
- Responsive layouts
- CSS Flexbox and Grid
- Interactive states
- Reusable and maintainable CSS
- Design-to-code implementation

## Author

Kanan Mehta
