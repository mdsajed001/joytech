## Purpose

Defines visual design system compliance, component reuse, and pricing presentation requirements for cart item cards to ensure consistency with homepage catalog styling.

## ADDED Requirements

### Requirement: Design System Token Compliance for Cart Item Cards
Cart item cards SHALL use established design system variables for borders, background surfaces, corner radii, and badges, avoiding ad-hoc hardcoded utility colors.

#### Scenario: Rendering cart item card shell and thumbnail
- **WHEN** a user views a cart item card
- **THEN** the card shell uses `--color-bg-surface` background and `--color-border-default` border with `--radius-md` corners
- **AND** the thumbnail container uses `--color-bg-subtle` background with `--radius-sm` corners
- **AND** any discount overlay uses the reusable `<Badge variant="accent">` component

### Requirement: Non-Redundant Item Price Display
Cart item cards SHALL display unit prices and item total calculations without duplicating identical numeric values when item quantity is 1.

#### Scenario: Displaying single item quantity in cart
- **WHEN** an item in the cart has a quantity of 1
- **THEN** the unit price (and original price strikethrough if applicable) is displayed under the product title
- **AND** no duplicate item total value is rendered at the bottom or far right of the card

#### Scenario: Displaying multiple item quantities in cart
- **WHEN** an item in the cart has a quantity greater than 1
- **THEN** the calculated line item total (`price * quantity`) is displayed distinctly next to the quantity controls

### Requirement: Clean Card Action Layout Without Divider Lines
Cart item cards SHALL present quantity controls, wishlist actions, and remove actions in a unified layout without internal dividing border lines.

#### Scenario: Mobile viewport cart item actions
- **WHEN** viewing a cart item card on a mobile screen
- **THEN** the quantity stepper sits on the bottom-left and action buttons sit on the bottom-right of the card without an intervening horizontal divider line
