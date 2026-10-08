## Purpose

Provides a unified, stackable toast notification system with soft full-background dissolving expiration, semantic type hierarchy, contextual action CTAs, and tactile micro-animations.

## ADDED Requirements

### Requirement: Multi-Notification Stacking
The system SHALL support simultaneous toast notifications rendered in a stacked vertical queue with spring animations and smooth layout reflow upon item dismissal.

#### Scenario: Multiple rapid actions
- **WHEN** multiple toasts are dispatched in rapid succession
- **THEN** up to 3 active toasts SHALL stack vertically with smooth entry physics without prematurely clobbering preceding notifications.

#### Scenario: Automatic reflow on dismissal
- **WHEN** an active toast expires or is dismissed
- **THEN** the remaining toasts in the stack SHALL smoothly slide upward into their updated positions.

### Requirement: Full-Background Dissolving Expiration Bleed
The system SHALL animate the entire background color fill and ambient glow of the toast with a smooth continuous horizontal dissolve/fade-out over the notification lifetime instead of a sharp bottom line.

#### Scenario: Smooth background dissipation
- **WHEN** a toast is mounted
- **THEN** its luminous colored background fill SHALL smoothly bleed and sweep from 100% to 0% width with feathered blur across its countdown duration.

#### Scenario: Hover or touch pause
- **WHEN** a user hovers a mouse cursor over the toast or holds a touch press on mobile
- **THEN** the background dissipation and countdown timer SHALL immediately pause until the pointer leaves.

### Requirement: Contextual Action Buttons & Dismiss Cross
The system SHALL render dedicated CTA action buttons for actionable notifications and a close cross for general notices.

#### Scenario: Cart addition toast
- **WHEN** a product is added to the cart
- **THEN** the toast SHALL display a prominent "View Cart" CTA button that navigates directly to `/cart`.

#### Scenario: Non-actionable toast
- **WHEN** a toast with no custom action is rendered
- **THEN** a close cross icon button (`[×]`) SHALL be displayed, allowing immediate dismissal upon click.

### Requirement: Semantic Variants & Tactile Depth
The system SHALL render toasts with distinct semantic iconography, specular highlights, and colored ambient glow corresponding to `cart`, `success`, `warning`, `error`, and `info` types.

#### Scenario: Error toast display
- **WHEN** an error toast is triggered (e.g. form validation failure)
- **THEN** the toast SHALL render with an error icon, ruby-red ambient glow, and red accent styling rather than a success checkmark.

#### Scenario: Specular top highlight and glassmorphism
- **WHEN** any toast renders
- **THEN** it SHALL feature an acrylic glassmorphic backdrop (`backdrop-blur-xl`), top beveled specular highlight, and multi-layer physical drop shadow.
