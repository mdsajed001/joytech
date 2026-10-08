## Why

The current desktop and mobile search bars in the Header have visual layout defects:
1. The desktop Search button floats inside the input container with awkward gaps (padding from the top, bottom, and right curved edge), rather than integrating seamlessly into the search bar pill.
2. The mobile search bar is excessively thin (`h-10` with a miniature `h-7` button), which fails to meet the 44px touch target guidelines of the design system and feels fragile.

Refactoring the search component so the Search button fits flush against the top, bottom, and right edges creates a cohesive, modern e-commerce search bar, while upgrading the mobile search bar to a refined 44px height ensures comfortable touch ergonomics and aesthetic consistency.

## What Changes

- **Flush Search Button Integration (Desktop & Mobile)**:
  - Eliminate top, bottom, and right padding around the Search button.
  - Make the button span the full height (`h-full`) of the search bar and sit flush with the right rounded edge of the container (`rounded-r-full` / `overflow-hidden`).
- **Mobile Search Bar Touch Target & Proportion Upgrade**:
  - Increase the mobile search bar height from `h-10` to `h-11` (44px), meeting mobile touch-target guidelines.
  - Apply the same seamless, flush right button layout on mobile for consistent visual rhythm.
- **Enhanced Focus & States**:
  - Use `focus-within:border-[var(--color-brand-primary)] focus-within:bg-white` on the wrapper for a unified focus highlight.
  - Refine typography, placeholder readability, and search icon positioning.

## Capabilities

### New Capabilities
- `search-bar-fit-refresh`: Seamless, flush button integration for desktop search and upgraded ergonomic height for mobile search according to the design system.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/lib/components/Header.svelte` (desktop and mobile search input markup).
- **APIs/State**: No state changes; keeps existing `searchQuery`, `onSearch`, and form submission behavior intact.
- **Visual Impact**: Modern flush pill search bar with zero border gaps and a robust 44px mobile touch target.
