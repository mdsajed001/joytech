## Why

In the price filter widget, the formatted price range text (e.g. `৳2,000 – ৳7,800`) is rendered directly above the slider track while the exact same numbers are already displayed and editable in the `MIN (৳)` and `MAX (৳)` input boxes directly below. This creates redundant visual duplication and adds unnecessary vertical height to the filter sidebar and mobile drawer.

## What Changes

- **Eliminate Duplicate Price Header**:
  - Remove the redundant `৳Min – ৳Max` text block from above the slider in `PriceRangeFilter.svelte`.
- **Relocate Reset Action to Section Header**:
  - Relocate the "Reset" action to the `Price Range` section header, matching the established layout pattern of the `Device Compatibility` section.
- **Compact & Focused Slider Layout**:
  - Allow the slider track to sit directly beneath the section header with clean spacing.
  - The `MIN (৳)` and `MAX (৳)` input boxes below the slider remain the single, clear source of truth for current price bounds and manual editing.

## Capabilities

### New Capabilities
- `price-filter-cleanup`: Streamlines the price filter UI by eliminating redundant price range text labels and aligning the section Reset button with standard filter section headers.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/components/search/PriceRangeFilter.svelte`: Remove duplicate top text row and expose reset state or simplify layout.
  - `src/lib/components/search/SearchSidebar.svelte`: Position Reset action inside the `Price Range` header.
  - `src/lib/components/search/SearchMobileFilterDrawer.svelte`: Position Reset action inside the `Price Range` header on mobile.
- **Dependencies**: None.
