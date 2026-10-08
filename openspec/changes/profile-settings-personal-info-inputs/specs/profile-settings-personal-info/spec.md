## Purpose

Provides standardized, accessible, and responsive form input fields for user personal information within the profile settings view, strictly adhering to the Joytech design system.

## ADDED Requirements

### Requirement: Stacked Form Inputs for Personal Information
The system SHALL present personal information fields (Full Name, Mobile Number, and Email Address) with top-aligned labels positioned directly above their respective input fields rather than compressed single-row horizontal items.

#### Scenario: View personal information on desktop
- **WHEN** user views the Settings tab on a screen 640px or wider
- **THEN** Full Name and Mobile Number inputs SHALL display in a responsive 2-column grid, and Email Address SHALL display with full width

#### Scenario: View personal information on mobile
- **WHEN** user views the Settings tab on a screen narrower than 640px
- **THEN** all personal information inputs SHALL stack vertically in a single full-width column

### Requirement: Design System Token Alignment
The personal information input elements SHALL strictly adhere to the Joytech design system tokens for height, padding, borders, background, and focus styling.

#### Scenario: Input styling and focus states
- **WHEN** user focuses on an editable personal information input
- **THEN** the input SHALL display a 1-pixel border and subtle focus ring using `var(--color-brand-primary)` while maintaining `var(--color-bg-subtle)` background and `rounded-xl` geometry

### Requirement: Phone Verification Indicator
The system SHALL indicate verified contact numbers clearly without obscuring or cramping the phone input field.

#### Scenario: Verified badge presentation
- **WHEN** user inspects the Mobile Number field
- **THEN** a verified badge with a checkmark icon SHALL be displayed adjacent to the field's label rather than cramped inside an uncomfortably short input row

### Requirement: Profile Information Save Action
The system SHALL provide a dedicated action to persist personal information changes and provide immediate user feedback.

#### Scenario: User saves personal details
- **WHEN** user clicks the "Save Changes" button in the personal information section
- **THEN** the updated profile details SHALL be saved and a success confirmation toast SHALL be triggered
