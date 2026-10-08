## Context

See `proposal.md` for motivation. Currently, `src/lib/components/cart/CrossSellRail.svelte` separates itself from cart items via a top border line (`border-t border-[var(--color-border-subtle)]`). The user requested removing this line and using an ambient, brand-tinted shade (Option 3) to differentiate the section naturally.

## Goals / Non-Goals

**Goals:**
- Remove the top border line from `CrossSellRail.svelte`.
- Apply a brand-tinted background (`bg-blue-50/70 dark:bg-blue-950/25`) to the section.
- On mobile (`< 1024px`), render the brand tint as an edge-to-edge full-bleed background band using negative margins (`-mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0`) while keeping cards swipeable without clipping.
- On desktop (`lg: >= 1024px`), render the brand tint as a rounded panel (`lg:rounded-2xl lg:p-6`) inside the left column.

**Non-Goals:**
- Altering the product card styling or carousel logic.
- Adding arbitrary divider elements or solid borders.

## Decisions

### Decision 1: Choice of Brand-Tinted Palette (Option 3)
- **Choice**: `bg-blue-50/70 dark:bg-blue-950/25` with `border border-blue-100/60 dark:border-blue-900/30` on desktop or clean borderless bleed on mobile.
- **Rationale**: The subtle blue tint reflects Joy Telecom's brand primary color (#1D5FCB) and gives the recommendations an elevated "Joy Staff Picks" vibe while keeping high contrast with the white/dark cards.
- **Alternatives Considered**: Solid neutral subtle grey (`bg-subtle`) felt less branded; gradient fade had awkward vertical endpoints.

### Decision 2: Mobile Full-Bleed vs Desktop Rounded Island
- **Choice**:
  ```html
  <section class="-mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:p-6 lg:rounded-2xl bg-blue-50/70 dark:bg-blue-950/25 py-6 mt-6 transition-colors">
  ```
- **Rationale**: On mobile, an island panel with side margins would clip swipeable cards. Full-bleed allows cards to glide freely across the full screen width over the tinted background. On desktop, the left column has plenty of space for a rounded panel.

## Risks / Trade-offs

- **[Risk] Tint being too loud or conflicting with dark mode** → **Mitigation**: Use low-opacity tints (`blue-50/70` in light, `blue-950/25` in dark) that remain soft and accessible under all lighting conditions.
