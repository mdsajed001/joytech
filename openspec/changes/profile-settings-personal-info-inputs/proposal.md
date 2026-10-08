## Why

The Personal Information section in the Profile Settings tab currently forces text fields (Full Name, Mobile Number, Email Address) into a horizontal single-row flex layout with labels on the left and squeezed right-aligned text inputs on the right. This causes poor readability, cramped text editing, and awkward mobile ergonomics. Transitioning these editable fields to standard stacked form inputs aligns them with the Joytech design system (used in Address Book and Checkout) while maintaining the clean, boxless, whitespace-separated page structure.

## What Changes

- **Stacked Form Inputs**: Transform Full Name, Mobile Number, and Email Address into standard form inputs with labels placed directly above each input field.
- **Responsive Form Grid**: Arrange personal information inputs in a responsive grid (2 columns on tablet/desktop, stacked single-column on mobile screens) with consistent gap spacing.
- **Design System Token Alignment**: Apply standard Joytech input styling (`h-11`, `px-3.5`, `rounded-xl`, `border-[var(--color-border-default)]`, `bg-[var(--color-bg-subtle)]`, `focus:border-[var(--color-brand-primary)]`, `focus:ring-1`).
- **Verified Badge Refinement**: Relocate the `Verified` badge next to the Mobile Number label (`Mobile Number  [✓ Verified]`), keeping the phone input clean and unobstructed.
- **Profile Save Action**: Add an intuitive, design-system compliant "Save Changes" action button with toast feedback when personal details are updated.
- **Preserved Row Settings**: Retain single-row layouts for non-text-entry settings (Appearance theme/language pickers, Notification toggle switches, Security session actions).

## Capabilities

### New Capabilities
- `profile-settings-personal-info`: Standardized responsive form input fields and design-system tokens for user personal details in the Profile Settings view.

### Modified Capabilities
<!-- None -->

## Impact

- `src/lib/components/profile/SettingsTab.svelte`: Updated Personal Information section markup and styling.
- No breaking changes to existing data stores or user profile models.
