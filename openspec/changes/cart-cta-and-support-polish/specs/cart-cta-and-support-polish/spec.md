## Purpose

Provides consistent design system styling for cart checkout CTAs with signature gradient background bubbles and hides the floating support widget on cart screens.

## ADDED Requirements

### Requirement: Support Widget Visibility Control
The floating support widget SHALL NOT be displayed on the cart route (`/cart`) to prevent obstruction of the mobile sticky checkout bar.

#### Scenario: Navigating to the cart page
- **WHEN** user navigates to `/cart`
- **THEN** the floating customer support headset widget is hidden from the viewport

#### Scenario: Navigating to non-cart pages
- **WHEN** user navigates to `/`, `/offers`, or `/profile`
- **THEN** the floating customer support widget remains visible and accessible

### Requirement: Consistent Checkout CTA Styling
All primary checkout call-to-action buttons in the cart experience SHALL use the design system's signature `cta-blue-bubble` gradient styling with `rounded-[var(--radius-sm)]` (8px) border radius and a minimum 44px tap target height.

#### Scenario: Viewing the mobile sticky checkout bar
- **WHEN** user views the cart page on mobile viewport
- **THEN** the checkout button renders with `cta-blue-bubble` gradient, `rounded-[var(--radius-sm)]` radius, min 44px height, and bold text

#### Scenario: Viewing desktop order summary and modal
- **WHEN** user views the desktop order summary or opens the checkout confirmation modal
- **THEN** primary action buttons render with matching `cta-blue-bubble` gradient and design system geometry
