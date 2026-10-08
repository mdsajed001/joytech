## Purpose

Defines the presentation, layout, radii, and visual hierarchy standards for the 8 profile auxiliary shopping and account modules within desktop side drawers and mobile bottom sheets.

## ADDED Requirements

### Requirement: Boxy radii on CTAs, badges, and chips
The profile drawer, bottom sheet views, and related modals SHALL render all status indicators, category chips, count badges, and action buttons using Joytech's boxy radius design tokens (`rounded-[var(--radius-xs)]` / 4px for badges and chips; `rounded-[var(--radius-sm)]` / 8px for buttons and interactive controls), strictly avoiding capsule or pill shapes (`rounded-full`).

#### Scenario: Order status badge rendering
- **WHEN** a customer views an order in the Orders or History panel
- **THEN** the status badge (`Delivered`, `Shipped`, `Processing`, `Cancelled`) SHALL be rendered with a 4px boxy radius (`rounded-[var(--radius-xs)]`), bold uppercase label, and tonal border

#### Scenario: Action CTA button styling
- **WHEN** a customer interacts with action buttons (`Buy Again`, `Track`, `+ Cart`, `Save Address`, `Submit Claim`, `Post Review`)
- **THEN** each button SHALL have a tactile 8px boxy radius (`rounded-[var(--radius-sm)]`) and clear active state feedback

#### Scenario: Drawer header and notification counter badges
- **WHEN** an item count is displayed in the drawer header or profile hero shortcut grid
- **THEN** the count indicator SHALL render with a boxy 4px radius (`rounded-[var(--radius-xs)]`) rather than a circular capsule

### Requirement: Unboxed full-width modular containers
The profile drawer views SHALL structure content items as full-width modular containers spanning the interior width of the drawer panel with generous internal padding (`p-3.5` to `p-5`), eliminating stacked card-in-card border outlines.

#### Scenario: Order card full-width structure
- **WHEN** order cards are displayed in the drawer
- **THEN** each order card SHALL render as a full-width modular container with comfortable internal padding rather than nested cards with multiple stroke borders

#### Scenario: Single-column address cards
- **WHEN** the customer views saved delivery destinations in the Addresses drawer
- **THEN** all address entries SHALL render in a single-column full-width layout with legible multi-line text and comfortable action spacing

### Requirement: Tone-on-tone surface background differentiation
The profile drawer views SHALL establish visual hierarchy between interactive forms, status strips, and list content through subtle background tone variations (`--color-bg-subtle` and `--color-bg-surface`) rather than heavy 1px stroke lines.

#### Scenario: Review and sourcing form distinction
- **WHEN** the customer views the Reviews, Returns, or Request Accessory panel
- **THEN** the active input form SHALL be framed within a subtle background container (`bg-[var(--color-bg-subtle)]`) with inputs situated on `bg-[var(--color-bg-surface)]`, cleanly distinguishing the interactive area from existing items without heavy borders

#### Scenario: Default address visual priority
- **WHEN** customer addresses are rendered in the Addresses panel
- **THEN** the default address SHALL be highlighted with a distinctive subtle surface tint (`bg-[var(--color-brand-primary-subtle)]/30` or elevated surface) alongside a boxy Default badge
