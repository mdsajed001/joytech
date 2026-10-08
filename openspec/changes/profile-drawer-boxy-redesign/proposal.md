## Why

The current profile drawer, bottom sheets, and action shortcuts use heavily rounded corners (e.g., `rounded-full`, `rounded-2xl`) and nested tinted cards with borders. This visual style conflicts with the core "boxy" design system of the application, making the profile area feel disconnected and cluttered. We need to align these components with the clean, flat, 8px/12px radius standard of our design system.

## What Changes

- Change the circular action shortcuts in `ProfileHeader.svelte` to square tiles with an 8px (`var(--radius-sm)`) border radius.
- Change the drawer/bottom sheet top edges in `ProfileDrawer.svelte` from `rounded-t-2xl` to `rounded-t-[var(--radius-md)]` (or none on desktop) for a sharper look.
- Remove heavily nested bordered cards within the drawer tabs (Returns, Reviews, Promos, Request).
- Flatten background shading by relying on `var(--color-bg-surface)` and `var(--color-bg-canvas)` for section contrast rather than tinted boxes.

## Capabilities

### New Capabilities
None

### Modified Capabilities
None. This change only updates CSS utility classes for styling and layout and doesn't modify any specification logic. We will set `skip_specs: true` for this pure UI redesign change.

## Impact

- **Affected Code:** `src/lib/components/profile/ProfileDrawer.svelte`, `src/lib/components/profile/ProfileHeader.svelte`
