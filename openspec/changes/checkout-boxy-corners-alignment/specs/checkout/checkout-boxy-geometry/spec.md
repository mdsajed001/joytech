## Purpose

Enforces strict design system alignment on the checkout page by applying Joytech's boxy geometric radii (`--radius-sm`, `--radius-md`, `--radius-xs`) to action buttons, container cards, and interactive modules instead of generic over-rounded pill shapes.

## ADDED Requirements

### Requirement: Boxy Action CTAs
The checkout confirmation buttons on both desktop and mobile SHALL adhere to a boxy corner profile utilizing `--radius-sm` (8px).

#### Scenario: Viewing checkout proceed buttons
- **WHEN** the customer views the desktop proceed button or mobile sticky proceed bar
- **THEN** both buttons display with `rounded-[var(--radius-sm)]` (8px) corners matching the store's primary CTAs

### Requirement: Disciplined Section Card Radii
All checkout sections (Order Review, Destination Address, Payment Selection, Policy Agreement, and Sticky Summary) SHALL utilize `--radius-md` (12px) for outer card wrappers and `--radius-sm` (8px) for inner selectable modules.

#### Scenario: Inspecting section card geometry
- **WHEN** the checkout page is rendered
- **THEN** outer section containers use `rounded-[var(--radius-md)]` and internal selection cards/buttons use `rounded-[var(--radius-sm)]` or `rounded-[var(--radius-xs)]`, eliminating over-rounded pill styling
