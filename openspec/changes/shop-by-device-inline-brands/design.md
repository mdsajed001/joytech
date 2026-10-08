## Context

See `proposal.md` for motivation. In Step 2 of `AutoWizardConfigurator.svelte`, brand cards were artificially partitioned into popular brands and a "More Brands" modal launcher. This design removes that modal layer in favor of an in-place search bar and unified brand grid.

## Goals / Non-Goals

**Goals:**
- Eliminate `SearchableListOverlay` and modal state from `AutoWizardConfigurator.svelte`.
- Render all brands for the selected device type directly in the Step 2 grid.
- Provide real-time in-place search filtering supporting brand names and regional aliases.
- Provide a clean empty state with a 1-tap reset action when no brands match.

**Non-Goals:**
- Modifying underlying data in `joy-telecom-device-tree.json` or `devices.ts`.
- Altering Step 1, Step 3, or Step 4 structures.

## Decisions

### Decision 1: Inline Reactive Brand Filtering
- Declare `let brandSearchQuery = $state('')`.
- Derive `filteredBrands = $derived(...)` by filtering `currentBrands` against `brandSearchQuery` across:
  1. `b.name`
  2. `b.shortName`
  3. `b.aliases` array
- When a device type is selected or reset, `brandSearchQuery` is cleared automatically.

### Decision 2: Search Input Pill Component
- Use a rounded-full pill input matching Step 3:
  - Height: 44px (`h-11`)
  - Left icon: `Search01Icon` (18px)
  - Clear button: Quick `×` tap button when query is present
  - Accessible typography and focus ring `focus:ring-2 focus:ring-blue-500/15`

### Decision 3: Direct Card Grid Layout
- Retain the responsive `grid grid-cols-2 sm:grid-cols-3 gap-3` layout.
- Render all `filteredBrands` directly as tactile brand cards with `rounded-[var(--radius-xl)]` and glowing brand pods.
- Remove the "More Brands" tile and `SearchableListOverlay` component usage.

### Decision 4: In-Place Empty State
- When `filteredBrands.length === 0`, display a centered empty card with search icon, helpful description, and a "Clear Search" button that resets `brandSearchQuery`.

## Risks / Trade-offs

- **[Grid Height on Mobile]** → For phones with 11 brands, the grid occupies ~5 rows of cards. The container is already `overflow-y-auto`, and the search bar allows immediate 1-character filtering to narrow down options instantly without requiring modal transitions.
