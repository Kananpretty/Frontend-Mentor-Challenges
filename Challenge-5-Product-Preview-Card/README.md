# Product Preview Card

This is my solution to the **Product Preview Card Component** challenge on Frontend Mentor.

## Overview

The challenge was to build a responsive product preview card that displays product information, pricing, and an add-to-cart action.

The layout changes between desktop and mobile, including the product image and card structure.

## Screenshot

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

While building this challenge, I practiced and learned:

- Using the `<picture>` element to display different images for desktop and mobile
- Using `<source>` with media queries
- Using CSS Grid for the main product card layout
- Switching a two-column Grid layout into a single-column layout on mobile
- Using Flexbox to structure and align the product details
- Using `object-fit: cover` for responsive images
- Using `gap` to manage spacing between Flexbox items
- Using `letter-spacing` for typography
- Working with multiple font families
- Using semantic HTML for product content
- Using `<del>` to represent the original price
- Using `<strong>` to emphasize the current price
- Building hover states for interactive buttons

## Responsive Layout

### Desktop

The product card uses a two-column Grid layout:

```text
┌──────────────┬──────────────┐
│              │              │
│    Product   │   Product    │
│    Image     │   Details    │
│              │              │
└──────────────┴──────────────┘
```
