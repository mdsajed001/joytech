## Why

The current profile settings page uses a fragmented modular card layout with heavy borders, colored circular icon containers, redundant multi-line explanations, and divider lines. This creates visual clutter and "card fatigue." Modernizing this into a single, cohesive body with clean single-row settings items and whitespace-only section separation creates a faster, cleaner, and more premium user experience.

## What Changes

- **Eliminate Box/Card Modules**: Remove all card wrappers (`rounded-2xl`, borders, background containers, and shadows) from the profile body so settings live in a unified, seamless body.
- **Remove Explanatory Subtitle Clutter**: Strip out all redundant multi-line explanatory paragraphs beneath titles and settings rows.
- **Single-Row Settings Items**: Reformat every preference and detail into a clean single-row layout with the setting label on the left and the interactive control (pill selector, input field, or toggle switch) aligned on the right.
- **Whitespace-Only Section Division**: Separate settings groups (Appearance, Personal Details, Notifications, Security) using vertical spacing and clean uppercase section headers without background color blocks, border outlines, or divider lines.
- **Single-Tab Body Flow**: Unify the main profile settings into one continuous, harmonious page body.

## Capabilities

### New Capabilities
- `profile-settings-layout`: Streamlined single-body layout for customer settings and preferences with single-row controls and whitespace-only section division.

### Modified Capabilities
<!-- None: No existing specs in openspec/specs/ -->

## Impact

- `src/lib/components/profile/SettingsTab.svelte`: Major visual refactoring from boxed cards to clean single-row items with whitespace division.
- `src/lib/components/profile/ProfileNavTabs.svelte` / `src/routes/profile/+page.svelte`: Container layout adjustments for seamless single-body presentation.
