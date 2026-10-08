## Context

In the current search results top bar, the mobile filter button sits on the left and the sort dropdown sits on the right inside a boxed container. The user requested:
1. Move the Filters button to the right.
2. Move the Sort dropdown to the left.
3. Make the Sort control look minimalist / inline rather than a heavy boxed button.
4. Move the result count ("Showing X items") to the right side of the header row.

See [proposal.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/search-header-controls-layout/proposal.md) for motivation.

## Goals / Non-Goals

**Goals:**
- Position the search query title on the left and the result counter on the right in the top bar header.
- Position the Sort dropdown on the left of the action row and the mobile Filters button on the right.
- Add a `variant="ghost"` mode to `SearchableSelect.svelte` to allow borderless, lightweight text triggers without button outlines.
- Ensure the popover opens cleanly left-aligned (`align="left"`) without clipping or viewport overflow.

**Non-Goals:**
- Altering the desktop sidebar or mobile filter drawer contents.
- Altering search query URL parameters or sorting algorithms.

## Decisions

### 1. Two-Tier Header Layout in Search Top Bar
- **Decision:** Split the top control card into two structured tiers:
  1. **Top Tier (Header)**: Flex container with `justify-between`. Left has `<h1>` query title; right has item count counter (e.g. `6 items` or `Showing 6 items`).
  2. **Bottom Tier (Controls)**: Flex container with `justify-between`. Left has minimal Sort selector; right has mobile Filters trigger button (with filter count badge).
- **Rationale:** Matches the red directional annotations provided in the user's diagram and guarantees responsive behavior on all mobile screen widths (320px–430px).

### 2. `SearchableSelect` Ghost Variant
- **Decision:** Add a `variant?: 'default' | 'ghost'` prop to `SearchableSelect.svelte`.
  - When `variant === 'ghost'`:
    - Renders with `bg-transparent border-transparent hover:bg-[var(--color-bg-subtle)] shadow-none px-1.5 py-1 text-xs font-bold`.
    - No border box or background fill, achieving the requested "sort don't need to look like a btn" aesthetic.
- **Rationale:** Keeps `SearchableSelect` highly reusable across different contexts where both boxed and minimal select triggers are needed.

## Risks / Trade-offs

- **[Risk]** Ghost variant click area may be too small on mobile touch screens.
  - **Mitigation:** Ensure the trigger retains a minimum tap height of 36px and subtle hover/active highlight.
- **[Risk]** Desktop screen where mobile filter button is hidden (`md:hidden`) leaves the right side of the controls tier empty.
  - **Mitigation:** With `justify-between`, Sort sits naturally on the left while desktop sidebar handles filtering.
