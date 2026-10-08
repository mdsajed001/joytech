## Purpose

Defines the progressive, auto-advancing UX flow for selecting Device Type, Brand, and Model, replacing the traditional inline or manual form selection process with a linear, hand-holding wizard.

## ADDED Requirements

### Requirement: Single active step visibility
The wizard SHALL display only the currently active selection step to the user, keeping future steps hidden or disabled to ensure a focused, linear progression.

#### Scenario: Initial wizard load
- **WHEN** the user opens the Shop by Phone wizard
- **THEN** only the "Device Type" selection is presented for interaction, and the Brand and Model steps are hidden or disabled.

### Requirement: Auto-collapsing and stacked summary
Completed steps SHALL automatically collapse into a compact, stacked summary format at the top of the view, allowing the user to clearly see their progression.

#### Scenario: Step completion
- **WHEN** the user makes a selection (e.g., taps "Smartphone")
- **THEN** the selection immediately animates into a summary pill at the top of the wizard.

### Requirement: Step modification
The stacked summary pills SHALL be interactive, allowing the user to modify past selections.

#### Scenario: Changing a past selection
- **WHEN** the user taps an "Edit" or "Change" button on a completed summary pill (e.g., Brand)
- **THEN** the wizard reverts to that step, expanding its options, and clears any subsequent selections (e.g., Model).

### Requirement: Auto-advancing to next step
The wizard SHALL instantly reveal the next logical step immediately after a selection is made, without requiring the user to explicitly tap a "Next" or "Continue" button.

#### Scenario: Selection triggers progression
- **WHEN** the user selects a Brand
- **THEN** the Brand step collapses, and the Model selection step immediately animates into view.

### Requirement: Searchable overlay for massive lists
When a step contains a large dataset (e.g., Brands or Models), the wizard SHALL present the options within a dedicated, full-view searchable overlay to prevent excessive scrolling.

#### Scenario: Opening the Model selector
- **WHEN** the wizard advances to the "Select Model" step
- **THEN** the interface displays a dedicated search input at the top and an A-Z quick-jump index for navigating the large list of models.

### Requirement: Final success state
Upon completing the final selection step, the wizard SHALL indicate a successful match and present a clear call-to-action to view the compatible items.

#### Scenario: Completing the wizard
- **WHEN** the user selects their exact device Model
- **THEN** the wizard displays a success message ("We found items that fit!") and a prominent CTA button to browse the accessories.
