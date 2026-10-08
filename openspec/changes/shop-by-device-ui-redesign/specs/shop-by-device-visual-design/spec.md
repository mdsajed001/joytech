## Purpose

Defines visual and interaction design requirements that bring the Shop by Device configurator, side drawer, and dedicated page into complete alignment with the Joy Telecom design system.

## ADDED Requirements

### Requirement: Stepper Progress Rail Scale & Tactile Styling
The progress rail at the top of the configurator SHALL use tactile, accessible step indicators with a minimum touch target diameter of 32px (36px on tablet/desktop) and distinct active, completed, and pending visual states.

#### Scenario: Active step rendering with ambient blue bubble
- **WHEN** user is on an active step (e.g. Step 1, Step 2, or Step 3)
- **THEN** that step circle SHALL render with the Joy Telecom ambient blue bubble background (`cta-blue-bubble`), white bold text, and subtle elevation.

#### Scenario: Step circle touch target and completed state
- **WHEN** user has completed a prior step and is on a subsequent step
- **THEN** the completed step circle SHALL display a checkmark icon with success styling and maintain an accessible touch target of at least 32px.

### Requirement: Pill-Capsule Selection Chips Hierarchy
The active selection chips displaying chosen Device Type and Brand SHALL render as high-contrast pill capsules with distinct brand accent styling and clear tap-to-edit affordances.

#### Scenario: Selected item representation
- **WHEN** user selects a Device Type or Brand and advances downstream
- **THEN** the top summary area SHALL display pill-shaped chips with brand subtle background (`bg-[var(--color-brand-primary-subtle)]`), brand primary text, and an edit icon with min 36px touch height.

### Requirement: Device and Brand Cards Visual Design
Device type selection cards (Step 1) and brand selection cards (Step 2) SHALL use soft container radii (`rounded-[var(--radius-xl)]`), generous padding, elevated icon pods (min 48px), and dynamic category inventory counts.

#### Scenario: Soft corner radius and elevated tile states
- **WHEN** user views Step 1 or Step 2
- **THEN** device and brand tiles SHALL render with rounded corners of at least 16px–24px, subtle border highlight on hover/active, and distinct brand gradient pods.

#### Scenario: More Brands action tile presentation
- **WHEN** user views Step 2 brand selection
- **THEN** the "More Brands" action tile SHALL render as an active elevated directory card with a glowing search icon pod rather than a dashed placeholder.

### Requirement: Series Filter Chips and Search Input Redesign
Series filter chips in Step 3 SHALL adopt the `CategorySection.svelte` visual pill standard (rounded-full, minimum 40px touch height, active `.cta-blue-bubble` state), and the search field SHALL adopt the rounded-full header search pill style.

#### Scenario: Series chip rendering and active state
- **WHEN** user views available series chips in Step 3
- **THEN** chips SHALL render as rounded-full pills, and the active series chip SHALL render with `.cta-blue-bubble` background and crisp white text.

#### Scenario: Model cards touch target and alias presentation
- **WHEN** models are rendered in Step 3
- **THEN** each model card SHALL have a minimum height of 52px, display primary name in bold typography (min 13px), and display matched regional aliases in a distinctive tag if searched.

### Requirement: Step 4 Confirmation Hero & Quick Shortcuts
The Step 4 confirmation screen SHALL provide a hero device summary with verified fit guarantee badge, 1-tap quick category shortcuts (`Cases`, `Screen Glass`, `Fast Chargers`, `MagSafe`), and an animated primary CTA button (`.cta-search-animated`).

#### Scenario: Confirmed model view with category shortcuts
- **WHEN** user completes model selection and enters Step 4
- **THEN** the view SHALL display a confirmed hero card displaying the selected device type, brand, and exact model name, alongside quick category links and the animated primary CTA.
