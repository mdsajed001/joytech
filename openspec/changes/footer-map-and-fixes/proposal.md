## Why

The current global footer has two issues:
1. The Svelte dynamic classes for the mobile accordions (`hidden`/`block`) are not triggering properly due to how Svelte compiles template strings inside class attributes.
2. We want to add a map preview of the Mirpur store location to build trust and assist foot traffic. The current 5-column desktop layout doesn't leave enough space for a clean map presentation.

## What Changes

- Fix the accordion toggle logic in `Footer.svelte` by utilizing the idiomatic Svelte `class:hidden` directive instead of template string class manipulation.
- Consolidate the "Customer Service", "Policies & Legal", and "Top Categories" links into two cleaner columns ("Quick Links" and "Support & Legal") on desktop.
- Add an interactive Google Maps iframe (or placeholder image linking to Maps) for the Mirpur store on the right side of the desktop footer.
- Position the map directly under the contact information on mobile so it's highly visible before the link accordions.

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- None

## Impact

- `src/lib/components/Footer.svelte` will undergo layout adjustments and logic fixes.
