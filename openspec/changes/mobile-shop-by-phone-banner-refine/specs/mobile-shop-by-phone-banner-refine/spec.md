## Purpose

Refines the mobile drawer Shop by Phone section with a full-bleed, straight-edged background where breathing motion is isolated to ambient bubbles and the CTA button corner radius matches the global design token.

## ADDED Requirements

### Requirement: Full-Width Straight-Edged Banner Strip
The system SHALL render the mobile "Shop by Phone" section with square corners (`rounded-none`) spanning edge-to-edge across the drawer width without outer side margins.

#### Scenario: Viewing mobile menu drawer
- **WHEN** the user opens the mobile navigation drawer
- **THEN** the blue "Shop by Phone" banner extends completely across the drawer from edge to edge with straight/square corners (`rounded-none`).

---

### Requirement: Background-Only Bubble Breathing Effect
The system SHALL isolate breathing scale and glow animations strictly to the background bubbles, keeping the outer container and the CTA button geometrically stationary.

#### Scenario: Observing breathing animations
- **WHEN** the user views the "Shop by Phone" section in the open drawer
- **THEN** the outer blue container div and the white button remain stable without breathing or scaling, while the translucent bubbles float and pulse organically in the background.

---

### Requirement: Consistent Button Corner Radius
The system SHALL render the inner white "Shop by Phone" CTA button with the standard `--radius-sm` (8px) corner radius.

#### Scenario: Inspecting button corners
- **WHEN** the user observes the white CTA card inside the banner
- **THEN** its corners match the standard 8px border radius (`rounded-[var(--radius-sm)]`) used across Joytech buttons and cards.
