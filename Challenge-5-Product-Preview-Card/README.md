# Frontend Mentor - Product Preview Card Component

This is my solution to the **[Product Preview Card Component](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa)** challenge on Frontend Mentor.

## Overview

The challenge was to build a responsive product preview card that displays product information, pricing, and an add-to-cart action.

The layout changes between desktop and mobile, including the product image and card structure.

### Links

- **[GitHub Repository](https://github.com/Kananpretty/Frontend-Mentor-Challenges/tree/main/Challenge-5-Product-Preview-Card)**
- **[Live Demo](https://product-preview-card-three-drab.vercel.app/)**

### Screenshot

![Product Preview Card](images/screenshot.JPG)

## Built With

- Semantic HTML5
- CSS
- CSS Grid
- Flexbox
- Responsive design
- Media queries
- HTML `<picture>` element
- Google Fonts

## What I Learned

While building this challenge, I practised and learned:

### Responsive Images

- Using the `<picture>` element to display different images for desktop and mobile
- Using `<source>` with media queries
- Understanding when responsive images are more appropriate than simply resizing the same image
- Using `object-fit: cover` for responsive images

### CSS Layout

- Using CSS Grid for the main product card layout
- Switching a two-column Grid layout into a single-column layout on mobile
- Using Flexbox to structure and align the product details
- Using `gap` to manage spacing between Flexbox items
- Using media queries to change the layout at different viewport sizes

### Typography

- Using `letter-spacing` to fine-tune typography
- Working with multiple font families
- Adjusting font sizes, line heights, and spacing to match the provided design

### Semantic HTML

- Using semantic HTML to describe product content
- Using `<del>` to represent the original price
- Using `<strong>` to emphasize the current price
- Using meaningful elements instead of relying entirely on generic `<div>` elements

### Interactive States

- Building hover states for the add-to-cart button
- Providing visual feedback for interactive elements

## Responsive Layout

### Desktop

The product card uses a two-column CSS Grid layout:

```text
┌──────────────┬──────────────┐
│              │              │
│   Product    │   Product    │
│   Image      │   Details    │
│              │              │
└──────────────┴──────────────┘
```

The product image occupies one column while the product information and add-to-cart action occupy the second column.

### Mobile

On smaller screens, the layout switches to a single-column structure:

```text
┌────────────────────────────┐
│                            │
│       Product Image        │
│                            │
├────────────────────────────┤
│                            │
│       Product Details      │
│                            │
│        Add to Cart         │
│                            │
└────────────────────────────┘
```

The `<picture>` element also allows a different image asset to be displayed for the mobile layout.

## Continued Development

For future challenges, I want to continue improving:

- Responsive image techniques
- Semantic HTML and accessibility
- CSS Grid and Flexbox
- Responsive layouts and breakpoints
- Typography and spacing systems
- Interactive states and transitions
- CSS variables and reusable styles
- Writing clean and maintainable CSS
- Pixel-accurate design implementation

## Author

**Kanan Mehta**

- GitHub - [@Kananpretty](https://github.com/Kananpretty)
