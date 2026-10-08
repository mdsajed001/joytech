## Purpose

Provides a clean, compact phone model selection interface on product pages featuring boxy CTA button styling and a single-row horizontally scrollable touch rail on mobile screens.

## ADDED Requirements

### Requirement: Boxy CTA Button Style for Phone Model Options
The system SHALL render compatible phone model options as boxy CTA-styled buttons using compact corner radius (`rounded-[var(--radius-sm)]`), crisp borders, and confident high-contrast styling with active states.

#### Scenario: Model option rendered in unselected state
- **WHEN** the user views the compatible phone model list and a model is not selected
- **THEN** the model button displays boxy corners (`rounded-[var(--radius-sm)]`), subtle background, crisp border, and hover/press interaction feedback.

#### Scenario: Model option rendered in selected state
- **WHEN** the user selects a phone model
- **THEN** the button displays active brand primary background styling, white text, and a checkmark icon confirming selection.

### Requirement: Horizontally Scrollable Rail on Mobile Viewports
The system SHALL arrange compatible phone model options into a single horizontal touch rail on mobile viewports (`overflow-x-auto`, `flex-nowrap`, `touch-pan-x`), hiding native scrollbars and preventing vertical row wrapping.

#### Scenario: Viewing phone models on mobile screen
- **WHEN** a user views the product variant selector on a mobile viewport with multiple compatible phone models
- **THEN** all model buttons are laid out in a single horizontal row without wrapping, allowing the user to swipe or scroll horizontally to inspect all available models.

#### Scenario: Model button text integrity during horizontal scroll
- **WHEN** phone model buttons are placed inside the horizontal rail
- **THEN** each button retains its full label without wrapping or squashing (`shrink-0 whitespace-nowrap`).

### Requirement: Responsive Desktop Layout and Validation Affordance
The system SHALL allow the phone model options to wrap naturally on desktop screens while preserving smooth validation error styling across all viewports.

#### Scenario: Viewing phone models on desktop viewports
- **WHEN** a user views the variant selector on tablet or desktop screens (`sm:` breakpoint and above)
- **THEN** the phone model container wraps options (`sm:flex-wrap`) to take advantage of available horizontal width.

#### Scenario: Validation error indicator
- **WHEN** an action is triggered without a required phone model selected
- **THEN** the model selector container highlights with a validation border and warning message without clipping buttons during horizontal scroll.
