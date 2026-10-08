## Why

On mobile devices (< md viewports), the sticky header accommodates both the logo branding bar (72px) and the full-width mobile search bar row (56px), totaling approximately 128px in height. Currently, the global toast notification container is positioned at `top-4 sm:top-6`, causing active notifications to render directly over the logo and search bar. This obscures the search input, blocks typing and clear buttons, and hampers user navigation. Repositioning the notification container to sit cleanly below the header bar across all viewports ensures full usability of search controls while maintaining prominent visual feedback.

## What Changes

- Modify `ToastContainer.svelte` top positioning from `top-4 sm:top-6` to responsive clearance offsets:
  - Mobile (< md): `top-34` (~136px) to cleanly clear the sticky logo and search bar rows with an 8px breathing margin.
  - Tablet/Desktop (md): `md:top-22` (~88px) to float just below the single-row desktop header.
  - Wide Desktop (lg): `lg:top-30` (~120px) to clear the secondary category navigation strip.
- Ensure entrance transitions smoothly slide downwards below the header without crossing over the search input.

## Capabilities

### New Capabilities
- `stacked-toast-system`: Global toast positioning with responsive viewport header clearance, stacking order, and non-blocking notification delivery.

### Modified Capabilities
<!-- None -->

## Impact

- `src/lib/components/toast/ToastContainer.svelte`: Update layout and positioning classes.
- Zero breaking changes to store or API contracts.
