## Purpose

Defines the mobile-optimized homepage layout including a promo banner slider hero, flash sale section, design-system-aligned product cards, and corrected component tokens for buttons and badges.

## ADDED Requirements

### Requirement: Mobile hero displays promo banner slider
On viewports narrower than 640px, the hero section SHALL display a full-width promotional banner slider instead of the desktop CTA-heavy hero. The slider SHALL contain at least 2 promotional banners and support horizontal swipe navigation using CSS scroll-snap.

#### Scenario: Mobile hero renders slider
- **WHEN** the viewport is narrower than 640px
- **THEN** the hero section shows a horizontally scrollable banner slider with dot indicators, no headline text, no subheading, and no CTA buttons

#### Scenario: Desktop hero unchanged
- **WHEN** the viewport is 640px or wider
- **THEN** the hero section displays the existing desktop layout with headline, subheading, CTAs, and feature card

### Requirement: Homepage section order on mobile
On mobile, the homepage sections SHALL appear in this order from top to bottom: (1) Promo banner slider hero, (2) Category grid, (3) Flash sale section, (4) Best sellers product grid, (5) Promotional brand banner, (6) New arrivals product grid, (7) Trust grid.

#### Scenario: Section ordering
- **WHEN** the user scrolls down the homepage on a mobile viewport
- **THEN** sections appear in the specified order without any section being skipped

### Requirement: Flash sale section with countdown
The homepage SHALL include a "Flash Sale" section between Categories and Best Sellers. It SHALL display a countdown timer and a horizontally scrollable row of product cards.

#### Scenario: Flash sale visible
- **WHEN** the homepage loads
- **THEN** a "Flash Sale" section is visible with a countdown timer showing hours, minutes, and seconds, and a horizontal scrollable row of flash sale products

#### Scenario: Horizontal scroll on mobile
- **WHEN** the user swipes horizontally on the flash sale product row on mobile
- **THEN** the row scrolls smoothly through product cards using CSS scroll-snap

### Requirement: Product card matches design system spec
Product cards SHALL match the design system `.product-card` specification: `border-radius: --radius-sm` (8px), 1px solid border `--color-border-default`, `background: --color-bg-surface`, shadow only on hover (`--shadow-sm`), hover border color `--color-border-strong`.

#### Scenario: Card resting state
- **WHEN** a product card is rendered and not being interacted with
- **THEN** it has `border-radius: 8px`, no box-shadow, a 1px border in `--color-border-default`, and `--color-bg-surface` background

#### Scenario: Card hover state
- **WHEN** the user hovers over a product card
- **THEN** the card gains `--shadow-sm` box-shadow and border color changes to `--color-border-strong`

### Requirement: Product card thumbnail follows design system
The product card thumbnail area SHALL have a fixed height of 130px with a gradient background from `--color-bg-subtle` to `--color-border-default`.

#### Scenario: Thumbnail dimensions
- **WHEN** a product card is rendered
- **THEN** the thumbnail area has exactly 130px height and a linear gradient background

### Requirement: Product card body follows design system
The product card body SHALL use padding `--space-3` (12px). The product title SHALL be 12.5px / font-weight 700 with a minimum height of 34px and line-height 1.4.

#### Scenario: Card body layout
- **WHEN** a product card is rendered
- **THEN** the body has 12px padding, the title is 12.5px/700 weight, and the title container has a minimum height of 34px

### Requirement: Price display matches design system
Product price SHALL use the `.price-current` pattern: font-size 20px (or 15px inside cards), font-weight 800, color `--color-text-primary`. The original/struck-through price SHALL use `.price-was`: font-size 13px, color `--color-text-disabled`, text-decoration line-through. Savings SHALL use `.price-save`: font-size 11.5px, font-weight 700, color `--color-success-text`.

#### Scenario: Discounted product price rendering
- **WHEN** a product has an original price higher than the current price
- **THEN** the current price uses 800 weight, the original price is struck through in disabled color, and the savings text shows in success-text color

### Requirement: Rating display matches design system
Product rating SHALL use the `.rating` pattern: inline-flex, 4px gap, 12.5px/700 weight. Stars SHALL be 14px using `--color-rating-star` for filled and `--color-border-strong` for empty.

#### Scenario: Rating rendering
- **WHEN** a product card displays its rating
- **THEN** it shows a filled star icon in rating-star color, the numeric rating in 700 weight, and the review count in secondary text color

### Requirement: Button component matches design system spec
The `Button` component SHALL match the design system `.btn` specification: min-height 40px, font-size 13.5px, font-weight 600, padding `0 --space-4`, border-radius `--radius-sm` (8px), `:active` transform `translateY(1px)`. Size variants: `.btn-small` at min-height 32px / 12.5px, `.btn-lg` at min-height 48px / 14.5px / padding `0 --space-5`.

#### Scenario: Default button sizing
- **WHEN** a button with default (md) size is rendered
- **THEN** it has min-height 40px, font-size 13.5px, font-weight 600, border-radius 8px

#### Scenario: Small button sizing
- **WHEN** a button with size "sm" is rendered
- **THEN** it has min-height 32px, font-size 12.5px, padding `0 --space-3`

#### Scenario: Large button sizing
- **WHEN** a button with size "lg" is rendered
- **THEN** it has min-height 48px, font-size 14.5px, padding `0 --space-5`

#### Scenario: Button press feedback
- **WHEN** the user presses (`:active`) a button
- **THEN** the button visually shifts down by 1px via `translateY(1px)`

### Requirement: Badge component matches design system spec
The `Badge` component SHALL match the design system `.badge` specification: font-size 11.5px, font-weight 700, padding 4px 10px, border-radius `--radius-full`. Each variant SHALL include a 1px solid border matching its semantic color border token.

#### Scenario: Badge sizing and shape
- **WHEN** a badge is rendered
- **THEN** it has font-size 11.5px, font-weight 700, padding 4px 10px, and full-radius rounding

### Requirement: Stub pages exist for navigation targets
The SvelteKit routes `/offers`, `/cart`, and `/profile` SHALL exist as valid routes with a page title and a minimal "Coming soon" placeholder body.

#### Scenario: Offers page loads
- **WHEN** the user navigates to `/offers`
- **THEN** a page loads with the title "Offers" and placeholder content

#### Scenario: Cart page loads
- **WHEN** the user navigates to `/cart`
- **THEN** a page loads with the title "Cart" and placeholder content

#### Scenario: Profile page loads
- **WHEN** the user navigates to `/profile`
- **THEN** a page loads with the title "Profile" and placeholder content
