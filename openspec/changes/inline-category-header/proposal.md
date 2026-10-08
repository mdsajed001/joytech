## Why

The current Category section UI occupies two vertical rows (the "Categories 6" header on top, and the scrolling chips below it). On mobile, this takes up unnecessary vertical space. Additionally, the "Quick filter by accessory type" text is redundant and clutters the interface on desktop.

## What Changes

- Remove the "Quick filter by accessory type" text.
- Consolidate the "Categories" header and the scrollable chips into a single horizontal row on both mobile and desktop.
- Ensure the header text is fixed to the left, while the chips scroll horizontally alongside it.

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- None

## Impact

- `src/lib/components/CategorySection.svelte` will undergo layout adjustments to merge two grid/flex rows into one.
