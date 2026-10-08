## Why

The long search bar placeholder text ("Search products, brands or phone models..." / "Search accessories or phone models...") gets truncated or looks crowded, especially on narrow phone viewports.

## What Changes

- Simplify search input placeholder text to concise `"Search"` across desktop and mobile header search inputs.

## Capabilities

### New Capabilities
- `header-search`: Standardizes search input placeholder text and display in the main header.

### Modified Capabilities

## Impact

- `src/lib/components/Header.svelte`: Update placeholder attribute values on search inputs.
