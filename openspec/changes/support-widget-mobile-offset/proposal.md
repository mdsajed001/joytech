## Why

On mobile viewports (<640px), the floating support widget (`SupportWidget.svelte`) sits directly over the fixed bottom navigation bar (`BottomNav.svelte`), obstructing access to bottom navigation items such as "Profile".

## What Changes

- Adjust bottom positioning of `SupportWidget.svelte` on mobile viewports so it floats above the mobile bottom navigation bar (`bottom-20` on mobile, maintaining `bottom-5` on tablet/desktop viewports `sm:`).

## Capabilities

### New Capabilities
- `support-widget`: Defines positioning and display requirements for the floating customer support widget to ensure unobstructed bottom navigation on mobile devices.

### Modified Capabilities

## Impact

- `src/lib/components/SupportWidget.svelte`: Update root container Tailwind `bottom-*` positioning classes.
