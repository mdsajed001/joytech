## Purpose

Provides authentic, high-fidelity vector brand logos and badges for all supported payment methods in the checkout flow and payment management interfaces.

## ADDED Requirements

### Requirement: Authentic Vector Brand Badges for Payment Gateways
The system SHALL present official brand identity logos for all supported payment options—specifically bKash, Nagad, Visa / Mastercard, and Cash on Delivery—replacing generic single-color outline device icons.

#### Scenario: Rendering bKash brand logo
- **WHEN** the checkout payment method list displays the bKash option
- **THEN** the system SHALL render the authentic bKash origami bird emblem in brand magenta (`#E2136E`) within a dedicated, high-contrast badge tile.

#### Scenario: Rendering Nagad brand logo
- **WHEN** the checkout payment method list displays the Nagad option
- **THEN** the system SHALL render the authentic Nagad swirl/flame emblem with official brand colors (`#F7941D` / `#ED1C24`) within a dedicated, high-contrast badge tile.

#### Scenario: Rendering Card Payment brand logo
- **WHEN** the checkout payment method list displays the Visa / Mastercard option
- **THEN** the system SHALL render authentic card network badges showing Mastercard's overlapping red/yellow spheres and Visa's signature styling.

#### Scenario: Rendering Cash on Delivery emblem
- **WHEN** the checkout payment method list displays the Cash on Delivery option
- **THEN** the system SHALL render a dedicated delivery cash symbol featuring Bangladesh Taka (`৳`) iconography in high-trust emerald theme styling (`#059669`).

### Requirement: Visual State and Theme Adaptation
The payment logo tiles SHALL be optimized for contrast across both light and dark display modes, and provide distinct visual feedback when selected.

#### Scenario: Theme adaptation in dark and light modes
- **WHEN** a user switches between light mode and dark mode
- **THEN** each payment gateway badge tile SHALL remain clearly legible with harmonious contrast backgrounds (`bg-white` or subtle brand-tinted containers in dark mode) without inverted colors distorting the brand marks.

#### Scenario: Active selection indication
- **WHEN** a user taps or selects any payment method
- **THEN** the corresponding option card SHALL display an active selection border with primary brand tinting, a focus ring, and a checkmark badge while retaining the crisp brand logo.

### Requirement: Consistency with Design System Boxy Radii
The payment method logo containers and method selection buttons SHALL adhere to the project's boxy corner design tokens.

#### Scenario: Payment card tile corner radius
- **WHEN** payment option cards and their inner logo badges are rendered
- **THEN** the outer card SHALL use `rounded-[var(--radius-sm)]` (8px) and the inner logo badge SHALL use `rounded-[var(--radius-xs)]` (4px), matching the boxy design system tokens.
