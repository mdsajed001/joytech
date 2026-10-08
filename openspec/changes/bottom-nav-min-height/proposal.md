## Why

The mobile bottom navigation container (`<nav>` in `BottomNav.svelte`) does not explicitly declare a minimum height constraint, allowing it to collapse or vary depending on child item line heights and safe-area padding.

## What Changes

- Add explicit `min-h-[44px]` (and set link targets to `min-h-[44px]`) on `BottomNav.svelte` container to guarantee a minimum 44px height across all mobile devices.

## Capabilities

### New Capabilities
- `bottom-nav-height`: Specifies minimum container height constraints for the mobile navigation bar.

### Modified Capabilities

## Impact

- `src/lib/components/BottomNav.svelte`: Add `min-h-[44px]` class to `<nav>` element and align link target minimum heights to `min-h-[44px]`.
