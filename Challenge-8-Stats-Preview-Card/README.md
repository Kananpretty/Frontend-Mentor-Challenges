# Frontend Mentor - Stats Preview Card Component

This is my solution to the [Stats Preview Card Component](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62) challenge on Frontend Mentor.

## Overview

The challenge was to build a responsive stats preview card that displays business insights alongside a responsive image.

The layout changes between desktop and mobile, including the card direction, statistics layout, and image used.

## Links

- [GitHub Repository](https://github.com/Kananpretty/Frontend-Mentor-Challenges/tree/main/Challenge-8-Stats-Preview-Card)
- [Live Demo](https://stats-preview-card-eight-tau.vercel.app/)

## Screenshot

![Desktop Stats Preview Card](images/screenshot-desktop.JPG)
![Mobile Stats Preview Card](images/screenshot-mobile.JPG)

## Built With

- Semantic HTML5
- CSS3
- CSS Flexbox
- CSS Grid
- Responsive design
- Media queries
- Responsive images using `<picture>` and `<source>`
- CSS pseudo-elements
- HSL and HSLA colors
- CSS `object-fit`
- CSS `overflow`
- Google Fonts

## What I Learned

While building this challenge, I practised and strengthened several CSS, responsive design, and semantic HTML concepts.

### CSS and Layout

- Using CSS Flexbox to create the main desktop card layout
- Using `flex-direction` to change the card layout between desktop and mobile
- Using CSS Grid for repeated statistics
- Changing a three-column Grid into a single-column Grid for mobile
- Using `justify-content` and `align-items` to control content positioning
- Using `column-gap` and `row-gap` for Grid spacing
- Understanding the difference between positioning a container and positioning its children
- Using fixed dimensions on desktop and content-driven dimensions on mobile
- Using `object-fit: cover` to control how images fill their containers
- Using `overflow: hidden` to keep the image and overlay within rounded corners

### Responsive Design

- Creating different layouts for desktop and mobile
- Changing the card from a horizontal layout to a vertical layout
- Using `column-reverse` to change visual order without changing the HTML structure
- Changing the statistics from three columns to one column
- Using media queries to adapt layout, spacing, and typography
- Testing the layout at different viewport sizes

### Responsive Images

- Using the `<picture>` element for responsive images
- Using `<source>` with a media query to provide a different image for mobile
- Understanding when different image assets are required for different screen sizes
- Keeping the image structure semantic while allowing the browser to select the appropriate asset

For this challenge, the desktop and mobile designs use different image assets. The `<picture>` element allows the browser to select the appropriate image based on the viewport.

```html
<picture>
  <source
    media="(max-width: 480px)"
    srcset="./images/image-header-mobile.jpg"
  />
  <img src="./images/image-header-desktop.jpg" alt="" />
</picture>
```

### Image Overlay and Positioning

The purple image treatment is created using a CSS pseudo-element rather than adding an additional HTML element.

The image container provides the positioning context, while the pseudo-element covers the image using `inset: 0`.

This was a useful exercise in:

- `position: relative`
- `position: absolute`
- `inset: 0`
- CSS pseudo-elements
- HSL/HSLA colors
- Opacity
- Layering
- `overflow: hidden`

It also reinforced the idea that visual layers can often be created with CSS without adding unnecessary HTML elements.

## Semantic HTML

The component uses semantic HTML elements based on the meaning and relationship of the content.

- `<main>` for the primary page content
- `<article>` for the self-contained stats card
- `<section>` for related groups of content
- `<ul>` and `<li>` for the repeated statistics
- `<strong>` for the important numerical values
- `<span>` for the descriptive labels
- `<picture>` for responsive image handling

A key learning from this challenge was understanding that semantic HTML is not simply about replacing `<div>` elements with different tags.

The structure should communicate what the content represents.

For example, the statistics form a related collection of repeated data, so representing them as a list is more meaningful than using three unrelated `<div>` elements.

## Semantic Structure

The card is structured approximately as:

```text
main
└── article
    ├── section
    │   ├── heading
    │   ├── description
    │   └── stats list
    │       ├── statistic
    │       ├── statistic
    │       └── statistic
    │
    └── picture
```

This helped me think about HTML structure based on the meaning and relationship of the content rather than starting with generic containers and styling everything with CSS.

## Responsive Layout

The desktop layout uses Flexbox to create two main areas:

```text
Desktop

┌──────────────────────────┬─────────────────┐
│                          │                 │
│ Content                  │ Image           │
│                          │                 │
│ Heading                  │                 │
│ Description              │                 │
│ Stats                    │                 │
│                          │                 │
└──────────────────────────┴─────────────────┘
```

The statistics use CSS Grid with three columns:

```text
10k+          314          12M+
Companies     Templates    Queries
```

On mobile, the card changes to a vertical layout and the statistics become a single-column Grid:

```text
Image

Content

10k+
Companies

314
Templates

12M+
Queries
```

The HTML structure remains the same while CSS controls the responsive presentation.

## Continued Development

For future challenges, I want to continue improving:

- Semantic HTML and accessibility
- Responsive layouts
- CSS Grid and Flexbox
- Responsive image handling
- CSS positioning and layering
- CSS variables and reusable styles
- Typography and spacing
- Writing cleaner and more maintainable CSS
- Testing responsive layouts across different viewport sizes
- Understanding layout relationships instead of relying on positioning hacks
- Strengthening CSS fundamentals through hands-on projects

## Author

**Kanan Mehta**

- GitHub: [@Kananpretty](https://github.com/Kananpretty)
