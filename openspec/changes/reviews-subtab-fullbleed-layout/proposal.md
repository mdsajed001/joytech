## Why

The current sub-tab control bar in `ProfileDrawer.svelte` for `Pending Reviews` and `Past Reviews` features an inset grey container with `p-1` inner padding, creating uneven gaps/margins above, to the left, and to the right of the active tab. Updating the layout to a full-bleed, edge-to-edge sub-tab bar attaches seamlessly to the drawer panel borders, creating a cleaner, more spacious design system aesthetic.

## What Changes

- **Full-Bleed Positioning**: Apply negative margins (`-mx-4 -mt-4 sm:-mx-5 sm:-mt-5 mb-4`) to the sub-tab bar inside the Reviews view in `ProfileDrawer.svelte`.
- **Flush Edge-to-Edge Tabs**: Remove inner padding (`p-0`), rounded pill wrappers (`rounded-none`), and internal gaps (`gap-0`) from the sub-tab control bar wrapper.
- **Full-Width Block Tab Buttons**: Format `Pending Reviews` and `Past Reviews` as two equal-width 50% block tabs (`grid grid-cols-2 h-11 sm:h-12 border-b border-[var(--color-border-default)]`) with active background/border highlight indicators.

## Capabilities

### New Capabilities
- `customer-reviews`: Full-bleed sub-tab layout specifications for pending vs past customer reviews in the Profile Drawer.

### Modified Capabilities
(None)

## Impact

- `src/lib/components/profile/ProfileDrawer.svelte`: Refactored sub-tab bar markup and CSS utility classes for `reviewsSubTab`.
