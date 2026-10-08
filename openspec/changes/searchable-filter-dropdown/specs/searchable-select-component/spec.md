## Purpose

Provides a custom, reusable searchable combobox dropdown component that replaces native browser selects, allowing users to type to shortlist and select options from long lists.

## ADDED Requirements

### Requirement: Searchable Dropdown Presentation
The system SHALL render custom dropdown triggers displaying the active option's label or placeholder, along with a chevron icon and a styled popover menu that matches the application's design system.

#### Scenario: Dropdown trigger activation
- **WHEN** the user clicks the custom dropdown trigger
- **THEN** the dropdown popover menu opens with a search input automatically focused and all available options listed

#### Scenario: Dropdown dismissal on outside click
- **WHEN** the dropdown is open and the user clicks outside the component boundaries
- **THEN** the popover menu closes without altering the current selection

---

### Requirement: Typeahead In-Dropdown Search
The dropdown popover SHALL contain a dedicated search input at the top that filters the visible options in real time as the user types.

#### Scenario: Shortlisting options by typing
- **WHEN** the user opens the model dropdown and types "16" into the embedded search input
- **THEN** only options containing "16" (e.g. "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16") remain visible in the list

#### Scenario: No matching options in typeahead
- **WHEN** the user types a query that matches no options in the dropdown list
- **THEN** the dropdown displays a "No matching models found" message with an option to clear the search input

---

### Requirement: Option Selection and Clearing
The searchable dropdown SHALL allow selecting any visible option with a single click, updating the parent filter state and closing the popover menu.

#### Scenario: User selects an option
- **WHEN** the user clicks a shortlisted option in the dropdown list
- **THEN** the value is updated, the dropdown closes, and the parent filter state is triggered

#### Scenario: User clears selected option
- **WHEN** the user clicks the clear icon (`×`) on the dropdown trigger
- **THEN** the value resets to empty/all and the filter updates immediately
