## Purpose

Ensures consistent single-dispatch toast notifications on add-to-cart operations and applies cohesive, boxy button styling for contextual action CTAs matching brand aesthetics.

## ADDED Requirements

### Requirement: Single Toast Dispatch on Cart Additions
The system SHALL dispatch exactly one rich toast notification per user add-to-cart action.

#### Scenario: User clicks Add to Cart on product detail page
- **WHEN** user clicks the "Add to Cart" button on `/product/[slug]`
- **THEN** exactly one toast notification of type `cart` appears containing the product artwork, title, and "View Cart" CTA
- **THEN** no secondary generic or duplicate notification is dispatched

#### Scenario: User clicks Quick Add on related product cards
- **WHEN** user clicks the add button on any related product card
- **THEN** exactly one toast notification of type `cart` appears

### Requirement: Boxy Action CTA Styling
The system SHALL render toast action buttons with crisp, boxy border radiuses aligned with the primary brand button design tokens.

#### Scenario: Action button renders in toast
- **WHEN** a toast with an action (such as "View Cart") is displayed
- **THEN** the CTA button renders with a boxy radius (`rounded-[var(--radius-sm)]` or `rounded-lg`) rather than a full circular pill (`rounded-full`)
- **THEN** the button includes subtle border contrast, bold typography, and interactive hover elevation
