## Purpose

Standardizes the corner radius of all primary and secondary purchase action buttons to match the product card shape across the platform.

## ADDED Requirements

### Requirement: Standardized CTA Border Radius
All purchase action buttons, including sticky bar CTAs, on-page product CTAs, and associated quantity steppers, SHALL use the design system's `var(--radius-sm)` (8px) corner radius.

#### Scenario: Mobile sticky bar CTAs rendering
- **WHEN** the product sticky bar is displayed on mobile or desktop viewports
- **THEN** the "Add to Cart" and "Buy Now" buttons are styled with `rounded-[var(--radius-sm)]` instead of `rounded-xl` or pill styling

#### Scenario: Desktop purchase CTAs rendering
- **WHEN** the desktop product actions section is displayed
- **THEN** the desktop "Add to Cart" button, "Buy Now" button, and quantity stepper container are styled with `rounded-[var(--radius-sm)]`
