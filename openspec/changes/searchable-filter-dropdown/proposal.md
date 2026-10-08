## Why

The phone model filter currently relies on a standard browser `<select>` dropdown. With dozens of flagship and mid-range devices across Apple, Samsung, Google, and Xiaomi, the native browser popup presents an unstyled, cumbersome list that cannot be searched by typing. Replacing this with a custom, searchable combobox dropdown allows customers to type keywords (e.g. "16", "S24", "Pixel") directly inside the open dropdown to shortlist matching options instantly, providing a fast, premium shopping experience.

## What Changes

- **New Component (`SearchableSelect.svelte`)**:
  - A custom, reusable searchable combobox dropdown component replacing native `<select>` elements.
  - Features an embedded search input at the top of the dropdown menu with real-time fuzzy/shortlist filtering.
  - Supports custom trigger button with current value, placeholder, open/close chevron, and quick clear button (`×`).
  - Supports keyboard navigation (Escape to close, click outside dismissal).
  - Matches Joytech's design system: custom scrollbars, surface backgrounds, dark mode support, and focus ring compliance.
- **Desktop Sidebar Integration (`SearchSidebar.svelte`)**:
  - Replace the native `<select>` for Exact Model (and Brand) with the custom `<SearchableSelect>`.
- **Mobile Filter Drawer Integration (`SearchMobileFilterDrawer.svelte`)**:
  - Replace native selects with the searchable dropdown tailored for mobile tap comfort.

## Capabilities

### New Capabilities
- `searchable-select-component`: Provides a custom, searchable dropdown (combobox) with integrated typeahead filtering, accessible state management, clear actions, and customizable option rendering.

### Modified Capabilities
<!-- None -->

## Impact

- **New Files**:
  - `src/lib/components/ui/SearchableSelect.svelte`: Reusable custom searchable dropdown component.
- **Modified Files**:
  - `src/lib/components/search/SearchSidebar.svelte`: Use `SearchableSelect` for device model selection.
  - `src/lib/components/search/SearchMobileFilterDrawer.svelte`: Use `SearchableSelect` for device model selection.
- **Dependencies**: No external libraries; pure Svelte 5 runes (`$state`, `$derived`, `$props`) and Tailwind CSS.
