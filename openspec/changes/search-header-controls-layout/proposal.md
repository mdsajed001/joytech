## Why

In the current search results top bar, the mobile filter trigger button is on the left and the sort dropdown is on the right with a boxed button appearance. Shifting the sort dropdown to the left with a clean, borderless inline presentation, moving the filter button to the right, and displaying the item count on the right side of the header bar improves visual hierarchy and thumb reachability on mobile devices.

## What Changes

- **Header Result Count Alignment**:
  - Reposition the results count ("Showing X items") to the right side of the search header row opposite the search query title.
- **Sort Dropdown Repositioning & Styling**:
  - Move the Sort selector to the left side of the controls bar.
  - Redesign the Sort dropdown trigger to look like a clean, minimal inline control ("Sort: [Option] ▾") rather than a boxed button, removing heavy borders and backgrounds while retaining full dropdown functionality.
  - Set popover alignment to left-aligned (`align="left"`).
- **Filter Button Repositioning**:
  - Move the mobile Filter button to the right side of the controls row with full tap-target ergonomics and badge counter.

## Capabilities

### New Capabilities
- `search-controls-layout`: Defines the layout, visual hierarchy, and component styling for the search results top control bar, including left-aligned minimal sort trigger, right-aligned mobile filter button, and right-aligned result count.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/routes/search/+page.svelte`: Header row layout, controls ordering, and sort trigger styling.
  - `src/lib/components/ui/SearchableSelect.svelte`: Add support for a `minimal` or `variant="ghost"` trigger appearance to strip button-like borders and solid background when desired.
- **Dependencies**: No new external dependencies.
