# Frontend Mentor - NFT Preview Card Component

This is my solution to the **NFT Preview Card Component** challenge on [Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U).

## Overview

The challenge was to build an NFT preview card displaying an NFT image, title, description, price, remaining time, and creator information.

The card also includes interactive hover states for the NFT image, title, and creator name.

One of the main learning goals of this challenge was understanding how to **layer elements on top of an image** to create an interactive hover overlay.

### Links

- **[GitHub Repository](https://github.com/Kananpretty/Frontend-Mentor-Challenges/tree/main/Challenge-6-NFT-Preview-Card)**
- **[Live Demo](https://product-preview-card-three-drab.vercel.app/)**

## Screenshot

![Normal State](images/screenshot.JPG)

![Hover State](images/screenshot-hover.JPG)

## Built With

- Semantic HTML5
- CSS
- Flexbox
- CSS positioning
- HSL and HSLA colors
- Hover states
- CSS transitions
- Google Fonts

## What I Learned

While building this challenge, I practiced and learned:

- Using Flexbox to structure and align content inside the card
- Using nested Flexbox layouts for the price and remaining-time information
- Using `position: relative` to create a positioning context
- Using `position: absolute` to layer elements on top of an image
- Creating an image hover overlay
- Using `opacity` to hide and reveal the overlay
- Triggering changes in child elements when hovering over a parent element
- Using `z-index` to control element layering
- Using `overflow: hidden` with `border-radius` to keep the overlay within the image boundaries
- Using `object-fit: cover` to control image sizing
- Using `transition` to create smoother hover effects
- Using HSL and HSLA colors for backgrounds and transparency
- Building hover states for interactive elements
- Using `gap` to manage spacing between Flexbox items
- Using semantic HTML to structure card content

## Image Hover Interaction

The NFT image includes a hover interaction where a transparent cyan overlay appears on top of the image along with a view icon.

The structure used for this interaction is:

```text
NFT image container
│
├── NFT image
│
└── NFT image overlay
    │
    └── View icon
```

The image container acts as the positioning context using `position: relative`, while the overlay is positioned over the image using `position: absolute`.

The overlay is initially hidden using `opacity` and becomes visible when the image container is hovered. This allowed the interaction to be created without JavaScript.

## Semantic HTML

The card content was structured using semantic HTML elements where appropriate:

- `<main>` for the main page content
- `<article>` for the NFT card
- `<h1>` for the NFT title
- `<p>` for the description
- `<a>` for interactive links such as the NFT title and creator name
- `<footer>` for the creator information

Using semantic elements makes the structure more meaningful and provides a better foundation for accessibility.

## CSS & Layout

This challenge gave me additional practice with:

- Flexbox for the overall card layout
- Nested Flexbox layouts for grouped information
- Relative and absolute positioning
- Element layering with `z-index`
- `opacity` and transparency
- `overflow: hidden`
- `border-radius`
- `gap`, padding, and margins
- HSL and HSLA color values
- Hover states and transitions
- Image sizing with `object-fit`

## Continued Development

Going forward, I want to continue improving:

- Semantic HTML and accessibility
- Responsive layouts using Flexbox and CSS Grid
- Interactive states and transitions
- CSS positioning and layering
- Typography and spacing
- CSS variables and reusable styles
- Writing clean and maintainable CSS
- Translating designs into accurate, responsive interfaces

## Author

**Kanan Mehta**

- GitHub - [@Kananpretty](https://github.com/Kananpretty)
