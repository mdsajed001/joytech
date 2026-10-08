## Why

In `ProfileDrawer.svelte` under the `Request Accessory` drawer (`type === 'request'`), the form and concierge header are wrapped inside an unnecessary nested card container (`<div class="w-full p-4 sm:p-5 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)]">`). Because the drawer body already has padding (`p-4 sm:p-5`), this creates double-nested padding and an extra grey card layer for a single module form. Removing this wrapper flattens the layout, reduces visual clutter, and provides more breathing room for form inputs.

## What Changes

- **Remove Nested Card Wrapper**: Eliminate the inner `<div class="... bg-[var(--color-bg-subtle)] border ...">` box around the Request Accessory form.
- **Direct Body Layout**: Position the concierge header banner and sourcing request form directly inside the drawer body (`space-y-4`).

## Capabilities

### New Capabilities
- `request-accessory`: Layout specifications for the Request Accessory form in the Profile Drawer.

### Modified Capabilities
(None)

## Impact

- `src/lib/components/profile/ProfileDrawer.svelte`: Refactored DOM structure for `type === 'request'`.
