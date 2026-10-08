## Why

Currently, the search catalog's price filter only offers rigid preset radio buttons up to "Over ৳3,000". High-tier accessories in the Joytech catalog cost up to ৳5,400+, and shoppers cannot specify custom budget ranges. Adding an interactive dual-thumb range slider along with manual minimum and maximum price inputs gives customers precise, live control over price filtering.

## What Changes

- **Interactive Dual-Thumb Range Slider**:
  - Implement a dual-handle range slider spanning from ৳0 to ৳10,000 with a highlighted active track between the thumbs.
  - Smooth dragging on desktop mice and mobile touch screens with collision prevention (`min <= max`).
- **Manual Min & Max Price Input Fields**:
  - Add side-by-side numerical input fields with `৳` currency prefix.
  - Two-way reactive synchronization: typing numbers adjusts slider handles, and moving handles updates input fields.
  - Debounced real-time filtering (~150ms) to ensure smooth catalog updates while typing.
- **Compact Quick Preset Chips**:
  - Replace the vertical radio list with compact clickable chips: `Under ৳1k`, `৳1k – ৳2.5k`, `৳2.5k – ৳5k`, and `৳5k+`.
  - Clicking a preset snaps both the slider handles and manual input values instantly.
- **Active Filter Pills & Reset**:
  - Render a dismissible active filter tag (`Price: ৳Min – ৳Max`) with instant removal.
  - Provide a dedicated "Reset" button inside the price section to restore the full ৳0 – ৳10,000 range.
- **Mobile & Desktop Parity**:
  - Deliver consistent dual-slider and manual input functionality in both `SearchSidebar.svelte` and `SearchMobileFilterDrawer.svelte`.

## Capabilities

### New Capabilities
- `price-range-slider`: Provides dual-handle price range slider controls, manual min/max price inputs with two-way synchronization, quick preset chips, and real-time client-side catalog filtering up to ৳10,000.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/components/search/SearchSidebar.svelte`: Replace price radio list with dual slider, manual inputs, and preset chips.
  - `src/lib/components/search/SearchMobileFilterDrawer.svelte`: Implement mobile touch-friendly dual slider, inputs, and chips.
  - `src/routes/search/+page.svelte`: Update price filter state from discrete enum to continuous `[minPrice, maxPrice]` range, handle real-time product filtering, and synchronize active filter pills and URL parameters.
- **Dependencies**: None. Pure Svelte 5 runes and Tailwind CSS utilities.
