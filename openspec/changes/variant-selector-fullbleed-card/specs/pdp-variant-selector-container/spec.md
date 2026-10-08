## Purpose

Defines visual containment and responsive screen-edge full-bleed behavior for the product page variant and phone model selection section.

## ADDED Requirements

### Requirement: Contrasting Background for Variant and Model Selector
The product detail page variant selector SHALL be wrapped in a visually distinct container featuring a background color that separates it from the main canvas background across both light and dark themes.

#### Scenario: Viewing product options in light theme
- **WHEN** the user views the product details page in light mode
- **THEN** the model and variant selector container renders with an elevated surface background (`var(--color-bg-surface)` / white) contrasting against the off-white page canvas (`var(--color-bg-canvas)`)

#### Scenario: Viewing product options in dark theme
- **WHEN** the user views the product details page in dark mode
- **THEN** the model and variant selector container renders with a distinct dark surface background contrasting against the darker base page canvas

### Requirement: Screen-Edge Full Bleed on Mobile Viewports
On mobile viewports below the small breakpoint (`< sm`), the variant and model selector container SHALL extend full-width from the left edge of the screen to the right edge with square corners.

#### Scenario: Mobile viewport edge-to-edge rendering
- **WHEN** the product page is rendered on a viewport narrower than the `sm` breakpoint (e.g. mobile phone)
- **THEN** the selector container uses negative horizontal margins (`-mx-4 px-4`) to touch both screen edges
- **AND** the container has square corners (`rounded-none`) with top and bottom borders (`border-y border-[var(--color-border-default)]`)

### Requirement: Boxed Rounded Card on Desktop Viewports
On tablet and desktop viewports (`sm:` breakpoint and wider), the selector container SHALL render as a bounded, rounded card inside the product details column.

#### Scenario: Desktop viewport card rendering
- **WHEN** the product page is rendered on a viewport at or above the `sm` breakpoint
- **THEN** the container does not bleed outside its column (`sm:mx-0`)
- **AND** the container features rounded corners (`sm:rounded-2xl`), four-sided borders (`sm:border`), and comfortable internal padding (`sm:p-5`)
