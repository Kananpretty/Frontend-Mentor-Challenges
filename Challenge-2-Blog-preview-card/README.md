# Frontend Mentor - Blog Preview Card

This is my solution to the [Blog Preview Card challenge](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS).

## Overview

### The Challenge

The goal was to build a blog preview card as closely as possible to the provided design.

Users should be able to:

- View the blog preview card on different screen sizes
- See the article category, publication date, title, and description
- View the author's avatar and name
- Experience the hover state on interactive elements

### Links

- **[GitHub Repository](https://github.com/Kananpretty/Frontend-Mentor-Challenges/tree/main/Challenge-2-Blog-preview-card)**
- **[Live Demo](https://blog-preview-card-bay-two.vercel.app/)**

### Screenshot

![Blog Preview Card](images/screenshot.JPG)

## Built With

- Semantic HTML5
- CSS
- Flexbox
- Responsive design
- Google Fonts
- CSS box model
- CSS `box-shadow`
- CSS `border-radius`

## What I Learned

This challenge helped me refresh and practise:

- Using semantic HTML elements appropriately
- Using `<article>` for self-contained content
- Using `<time>` with the `datetime` attribute for publication dates
- Understanding the difference between semantic elements and generic `<div>` elements
- Working with typography, spacing, and line-height
- Creating a responsive card layout
- Using CSS `box-shadow` to create an offset shadow
- Using `border-radius` and borders to match a design
- Understanding how padding, borders, and content dimensions interact through the CSS box model
- Implementing hover states for interactive elements

## Semantic HTML

The card uses semantic HTML to describe the content structure rather than relying entirely on generic `<div>` elements.

The main content is structured using:

- `<main>` for the primary page content
- `<article>` for the self-contained blog preview
- `<section>` for grouping related article content
- `<time>` for the publication date, including a machine-readable `datetime` value
- `<h1>` for the article title
- `<p>` for the article description
- `<footer>` for the author information

Using semantic elements makes the document structure more meaningful and provides a better foundation for accessibility.

## CSS and Layout

The card layout was created using Flexbox to control alignment and spacing.

I also used:

- `box-shadow` to recreate the distinctive offset shadow from the design
- `border-radius` to create rounded corners
- Borders to define the card structure
- Typography and line-height adjustments to closely match the reference design
- Responsive sizing to ensure the card works across different screen sizes

## Continued Development

For future challenges, I want to continue improving:

- Semantic HTML and accessibility
- Responsive design
- Flexbox and CSS Grid
- Typography and spacing systems
- Interactive states
- CSS transitions and animations
- Writing clean and maintainable CSS
- Pixel-accurate implementation of designs

## Author

**Kanan Mehta**

- GitHub - [@Kananpretty](https://github.com/Kananpretty)
