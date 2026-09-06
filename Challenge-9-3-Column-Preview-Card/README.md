# Frontend Mentor - 3 Column Preview Card Component

This is my solution to the [3 Column Preview Card Component](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-) challenge on Frontend Mentor.

## Overview

The challenge was to build a responsive three-column preview card displaying different vehicle categories: Sedans, SUVs, and Luxury.

The layout uses CSS Grid on desktop and changes to a single-column layout on smaller screens.

## Links

- [GitHub Repository](https://github.com/Kananpretty/Frontend-Mentor-Challenges/tree/main/Challenge-9-3-Column-Preview-Card)
- [Live Demo](https://three-column-preview-card-bice.vercel.app/)

## Screenshot

![3 Column Preview Card Component](images/image.png)

## Built With

- Semantic HTML5
- CSS
- CSS Grid
- CSS Flexbox
- Responsive design
- Media queries
- HSL and HSLA colors
- CSS hover states
- Google Fonts

## What I Learned

While building this challenge, I practised and strengthened my understanding of:

### CSS and Layout

- Using CSS Grid to create a three-column layout
- Using `grid-template-columns` with `repeat()` and `1fr`
- Changing a three-column Grid into a single-column Grid for mobile
- Using Flexbox inside Grid items to control vertical layout
- Using `flex-direction: column` for vertically stacked content
- Using `margin-top: auto` to push an element toward the bottom of a Flexbox container
- Understanding how `margin-top: auto` can help align buttons across cards with different amounts of text
- Using `overflow: hidden` to maintain rounded corners on the overall card
- Using `padding` to create consistent internal spacing

### Responsive Design

- Creating a desktop three-column layout
- Changing the layout to a single column on smaller screens
- Using media queries to adapt the layout based on viewport size
- Keeping the HTML structure unchanged while allowing CSS to control the responsive presentation
- Thinking about layout relationships rather than adding extra HTML elements just to control positioning

### Semantic HTML

- Using semantic HTML elements instead of relying on `<div>` elements for everything
- Using `<main>` for the primary page content
- Using `<article>` for the self-contained preview card
- Using `<section>` to group each vehicle category
- Using `<h2>` for individual category headings
- Using `<p>` for descriptive text
- Using `<a>` for navigation actions rather than using a `<button>` when the action represents navigation
- Using empty `alt=""` text for decorative icons

A key learning from this challenge was understanding that HTML elements should be chosen based on their meaning and purpose, rather than simply based on how they look or how JavaScript can interact with them.

For example:

- `<button>` is generally used when the user is performing an action.
- `<a>` is used when the user is navigating to another location.

This reinforced the difference between **semantic HTML** and simply making an element clickable.

## Reusable CSS Structure

The three category sections share common styling through the `.category-section` class:

```text
category-section
├── Sedan-specific styles
├── SUV-specific styles
└── Luxury-specific styles
```

The common class handles the shared layout and spacing, while the individual classes control the different background and button colors.

This helped me practise separating shared component styles from variant-specific styles.

### Button Alignment

The three cards contain different amounts of text, so simply adding a fixed margin to the button would not guarantee that all buttons remain aligned.

The category sections use Flexbox with:

```css
.learn-more-button {
  margin-top: auto;
}
```

This allows the button to use the remaining available vertical space and keeps the buttons aligned toward the bottom of the cards.

The description also maintains intentional spacing from the button.

This was a useful exercise in understanding how Flexbox can solve layout problems without adding unnecessary wrapper elements.

## Responsive Layout

The desktop layout uses CSS Grid:

```text
┌──────────────┬──────────────┬──────────────┐
│    SEDANS    │     SUVS     │    LUXURY    │
│              │              │              │
│     Icon     │     Icon     │     Icon     │
│    Heading   │    Heading   │    Heading   │
│     Text     │     Text     │     Text     │
│              │              │              │
│  Learn More  │  Learn More  │  Learn More  │
└──────────────┴──────────────┴──────────────┘
```

On smaller screens, the Grid changes to a single column:

```text
┌──────────────┐
│    SEDANS    │
├──────────────┤
│     SUVS     │
├──────────────┤
│    LUXURY    │
└──────────────┘
```

The HTML structure remains the same while CSS controls the responsive presentation.

## Continued Development

For future challenges, I want to continue improving:

- Semantic HTML and accessibility
- Responsive layouts
- CSS Grid and Flexbox
- CSS positioning and spacing
- Reusable CSS patterns
- Typography and visual hierarchy
- Hover and focus states
- Writing cleaner and more maintainable CSS
- Understanding layout relationships instead of relying on positioning hacks
- Choosing HTML elements based on their semantic purpose
- Strengthening CSS fundamentals through hands-on projects

## Author

**Kanan Mehta**

- GitHub - [@Kananpretty](https://github.com/Kananpretty)
