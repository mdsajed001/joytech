## Why

The active indicator dot below the active bottom navigation bar item takes up vertical space and forces cramped vertical padding on mobile screen navigation elements.

## What Changes

- Remove the active indicator dot element from `BottomNav.svelte`.
- Utilize freed vertical space by adjusting padding, label font size, and element spacing so icon and text are cleanly aligned and legible.

## Capabilities

### New Capabilities
- `bottom-nav`: Standardizes mobile bottom navigation layout, active item state styling, and spatial utilization without indicator dots.

### Modified Capabilities

## Impact

- `src/lib/components/BottomNav.svelte`: Remove active dot span, optimize item vertical padding and typography.
