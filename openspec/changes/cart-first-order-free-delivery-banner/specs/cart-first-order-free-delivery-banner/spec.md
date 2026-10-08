## Purpose

Defines the full-width, zero-top-gap 1st order free delivery announcement banner on the cart page without a progress bar.

## ADDED Requirements

### Requirement: Full-Width Zero-Gap Delivery Banner
The system SHALL render the free delivery announcement banner spanning the full width of the cart page, docked flush against the top with zero top margin or padding gaps.

#### Scenario: Viewing the cart page
- **WHEN** user opens the cart page
- **THEN** the delivery announcement banner spans full width and sits flush at the top without an initial vertical gap

### Requirement: Elimination of Progress / Loading Bar
The system SHALL display the delivery perk without a progress track bar, without percentage badges, and without threshold remainder calculations.

#### Scenario: Inspecting the delivery announcement
- **WHEN** user views the delivery section
- **THEN** no progress bar, loading indicator, or percentage chip is rendered

### Requirement: 1st Order Free Delivery Messaging and Fee Waiver
The system SHALL announce "1st Order Delivery FREE" ("১ম অর্ডারে ফ্রি ডেলিভারি") and waive the delivery fee (৳0) in the order calculations.

#### Scenario: Verifying delivery messaging
- **WHEN** user checks the banner on the cart page
- **THEN** it displays "1st Order Delivery FREE" alongside nationwide coverage information

#### Scenario: Verifying delivery fee in summary
- **WHEN** user checks the order summary
- **THEN** the delivery fee displays as FREE (৳0)
