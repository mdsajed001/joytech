## Purpose

Defines visual and structural requirements for segmented control toggles in user settings, ensuring balanced rounded indicators with equal minimum width and height, and subtle borders.

## ADDED Requirements

### Requirement: Round Indicator with Equal Minimum Width and Height
The segmented control buttons in `SettingsTab` SHALL have a fully rounded pill or circular geometry where the minimum width is at least equal to the button height.

#### Scenario: Icon buttons form perfect circles
- **WHEN** an icon-only option (e.g. Light theme Sun icon, Dark theme Moon icon) is rendered in the segmented control
- **THEN** its minimum width SHALL equal its height (1:1 aspect ratio), forming a symmetric circle when active

#### Scenario: Text buttons form smooth rounded pills
- **WHEN** an option containing text (e.g. "System", "English", "বাংলা") is rendered
- **THEN** it SHALL have `rounded-full` styling with horizontal padding, matching the height of icon buttons

### Requirement: Segmented Track Inner Padding and Soft Borders
The segmented control track container SHALL provide internal padding around child buttons and display a soft, harmonious border without harsh black lines.

#### Scenario: Internal padding separates indicators from outer boundary
- **WHEN** the segmented control track renders
- **THEN** it SHALL provide internal padding (`p-1`) so the active indicator is fully contained and does not clip flush against the container border

#### Scenario: Subtle border in light and dark modes
- **WHEN** rendered in light mode
- **THEN** the track container border SHALL use a soft border token (`#E2E6EF` / `--color-border-default` or `--color-border-subtle`), and SHALL NOT render as a harsh black outline
