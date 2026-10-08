## Purpose

Provides resilient cross-device color contrast specifications for cart promotional banners, recommendations surfaces, and transaction savings indicators across desktop PC and mobile screens.

## ADDED Requirements

### Requirement: 1st Order Free Delivery Banner Cross-Device Color Contrast
The 1st Order Delivery Free banner SHALL render with a discernible, saturated light blue background tint and coordinating border in light mode so that it appears clearly blue on both standard sRGB PC desktop monitors and high-contrast mobile OLED screens.

#### Scenario: Rendering in light mode on desktop and mobile
- **WHEN** the cart contains items and the site is in light mode
- **THEN** the banner displays a distinct light blue surface (`bg-blue-100/70` or brand token equivalent) that does not wash out to neutral gray on PC monitors
- **AND** the border provides a clean bounding contrast (`border-blue-200/80` or brand token equivalent)

### Requirement: Recommendation Rail Cross-Device Blue Background
The "You Might Also Like" cross-sell recommendation section SHALL display a resilient light blue background tint in light mode that maintains noticeable blue saturation across PC and mobile viewports.

#### Scenario: Viewing cart recommendations on PC web and mobile
- **WHEN** the user views the cart with active cross-sell recommendations in light mode
- **THEN** the recommendation container background renders with perceptible brand blue tint (`bg-blue-100/60` or brand token equivalent) rather than washing out to neutral gray

### Requirement: Luminous E-Commerce Green for Cart Savings and Badges
All promotional savings text, coupon deductions, delivery fee discounts, and positive status indicators in the cart SHALL utilize a luminous, high-chroma green (`text-emerald-500` or equivalent) that preserves vibrant readability and energetic visual tone on PC desktop monitors.

#### Scenario: Free delivery and discount display
- **WHEN** free delivery is active or a coupon is applied in the cart
- **THEN** the free delivery badge, coupon discount deduction, and total savings amount display in luminous emerald green (`text-emerald-500`)
- **AND** the green text remains radiant and readable on both light and dark backgrounds
