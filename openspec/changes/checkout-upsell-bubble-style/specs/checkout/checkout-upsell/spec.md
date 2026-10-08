## Purpose

Defines the visual presentation and interaction behavior of the complementary setup recommendation section in the checkout order review, styled with a high-converting Joytech blue bubble aesthetic.

## ADDED Requirements

### Requirement: Blue Bubble Recommendations Container
The checkout order review component SHALL render the complementary upsell recommendations container with a branded blue bubble background styling (`profile-hero-bubble` inspired), rounded corners, and crisp white / high-contrast header typography.

#### Scenario: Viewing complementary setup recommendations in checkout
- **WHEN** the customer views the checkout order review and recommendations are present
- **THEN** the system displays the "COMPLETE YOUR SETUP" section styled with a blue bubble background and rounded borders

### Requirement: Frosted Upsell Item Cards
The system SHALL display each recommended product in a rounded bubble card featuring a clear product thumbnail, item title, prominent price, and a high-contrast "+ Add" action button.

#### Scenario: Interacting with complementary item card
- **WHEN** the customer taps "+ Add" on a recommended setup item
- **THEN** the system invokes `cartState.addItem` to add the product to the active order, immediately recalculating the order total and providing active feedback
