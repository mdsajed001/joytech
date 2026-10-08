## Purpose

Provides interactive tactile feedback and animation states for icon action buttons on cart item cards.

## ADDED Requirements

### Requirement: Tactile Nod and Lift Micro-Interaction
The system SHALL animate the cart item card action buttons (Wishlist and Remove) with a nod-and-lift micro-interaction when triggered by user tap or click. The animation SHALL translate upward, rotate clockwise to the right, and settle back smoothly to neutral rest position within 350 milliseconds.

#### Scenario: User clicks wishlist icon button
- **WHEN** user clicks the Wishlist (heart) icon button on a cart card
- **THEN** the icon button performs a smooth nod-and-lift motion tilting to the right and rising upward before returning to rest, and the wishlist confirmation toast is displayed

#### Scenario: User clicks remove icon button
- **WHEN** user clicks the Remove (trash) icon button on a cart card
- **THEN** the icon button performs the nod-and-lift motion tilting to the right and rising upward prior to item removal from the cart state

### Requirement: Grace Period on Item Removal
The system SHALL provide a brief visual grace delay of at least 180 milliseconds when the Remove icon button is triggered so the micro-interaction completes visibly before the cart item is unmounted from the DOM.

#### Scenario: Cart item card removal timing
- **WHEN** user triggers the Remove button on an item in the cart
- **THEN** the deletion action completes after the nod-and-lift animation has initiated, preventing abrupt immediate disappearing
