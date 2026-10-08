## Purpose

Ensures product variant option tiles remain in two balanced columns across all viewport sizes, preventing text truncation inside constrained sidebar containers.

## ADDED Requirements

### Requirement: Enforced Two-Column Variant Grid Layout
The system SHALL render product variant options in a strict 2-column grid (`grid-cols-2`) on all breakpoints, distributing 4 options across 2 balanced rows of 2.

#### Scenario: Viewing variants in desktop sidebar
- **WHEN** a user views a product with multiple variants on desktop within the purchase sidebar
- **THEN** the options arrange into 2 columns (e.g. 2 rows of 2 for 4 variants), providing adequate width (~210px) per tile so titles, prices, and checkmarks do not truncate or collide.

#### Scenario: Viewing variants on mobile viewport
- **WHEN** a user views variant options on a mobile device
- **THEN** the options display in 2 columns with compact touch padding, maintaining clear visibility of images, titles, and checkmark indicators.
