## Why

When the mobile search bar expanded, the lower results canvas used a fixed pixel offset (`fixed top-[128px]`) that misaligned and overlaid directly on top of the search input, obscuring the typed query. Additionally, the back navigation button was placed in Row 1 beside the logo, and the mobile hamburger menu remained visible, creating an unbalanced layout and disconnecting the back button from the active search input row.

## What Changes

- **Row 1 Mobile Cleanup**: Hide the mobile hamburger menu when mobile search is active. Keep the Joy Telecom brand logo centered/anchored in Row 1 without the back button in this row.
- **Row 2 Mobile Alignment**: Move the back button `[<]` to Row 2 immediately to the left of the search input box. Position the Search CTA button on the right side of Row 2.
- **Search Input In-Place Visibility**: Ensure the active search input container remains clearly visible in Row 2 with typed text horizontally centered, a clean neutral border (no colored brand blue border), and a clear button `(X)` when a query exists.
- **Natural Flexbox Results Flow (Row 3)**: Replace the detached `fixed top-[128px]` results canvas with a native flex child (`flex-1 overflow-y-auto`) inside a full-screen header container (`fixed inset-0 z-50 flex flex-col`), making layout overlapping physically impossible.

## Capabilities

### New Capabilities
- `search-mobile-layout`: Comprehensive mobile search header takeover layout with Row 1 logo, Row 2 (back button + centered search input + search CTA), and Row 3 (flex child results canvas).

### Modified Capabilities
<!-- None -->

## Impact

- `src/lib/components/Header.svelte`: Mobile header layout structure when `isMobileSearchOpen` is active, replacing absolute/fixed canvas stacking with a 3-row flexbox takeover.
- Desktop search suggestions, navigation bar, and desktop header remain completely unaffected.
