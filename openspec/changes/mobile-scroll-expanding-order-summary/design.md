## Context

See `proposal.md` for motivation. On mobile screens (`< 1024px`), rendering both the in-flow `OrderSummary` card and the floating bottom checkout bar resulted in two identical checkout CTA buttons on screen simultaneously. The user selected Option A: hiding the static card from the mobile stream and having the sticky bottom bar smoothly expand into the full Order Summary when the user scrolls past "You Might Also Like".

## Goals / Non-Goals

**Goals:**
- Eliminate the duplicate checkout button on mobile viewports so exactly one CTA exists.
- Implement an `IntersectionObserver` on a sentinel below `<CrossSellRail />` to detect when the user scrolls past "You Might Also Like" and auto-expand the bottom sheet.
- Support manual tap-to-toggle on the compact bar so users can peek at the breakdown anytime.
- Maintain full-bleed geometry (`left: 0; right: 0;`, `rounded-t-2xl`, `rounded-b-none`) resting flush at `bottom-14` above the mobile bottom nav.
- Ensure desktop view (`lg: >= 1024px`) remains completely unaffected as a clean sticky card in the right column.

**Non-Goals:**
- Removing the desktop sticky order summary.
- Altering coupon verification or Joy Club points calculation algorithms.

## Decisions

### Decision 1: Shared Component with `variant` Prop
- **Choice**: Add `variant?: 'card' | 'sheet'` and `isCollapsible?: boolean` to `OrderSummary.svelte`.
- **Rationale**: Keeps promo code input, instant coupon suggestions, Joy Club points toggle, savings calculation, and Grand Total logic in a single canonical component with zero duplication.
- **Alternatives Considered**: Duplicating the entire receipt markup in `+page.svelte` was rejected to avoid code drift.

### Decision 2: Sentinel-Based Expansion (Option A)
- **Choice**: Place `<div bind:this={crossSellSentinel} class="h-1 sm:hidden pointer-events-none"></div>` directly below `<CrossSellRail />`. Use `IntersectionObserver` with appropriate root margins to expand the bottom sheet as the user scrolls past the recommendations.
- **Rationale**: Smooth, reliable, works seamlessly across iOS Safari and Android Chrome with momentum scrolling, and avoids janky manual scroll scrubbing.

### Decision 3: Touch & Tap Affordance
- **Choice**: Add a grab pill (`w-10 h-1 rounded-full bg-slate-300 dark:bg-slate-700`) at the top of the mobile sheet with a subtle chevron toggle button so users can manually peek or dismiss the sheet anytime.

## Risks / Trade-offs

- **[Risk] Expanded sheet covering the bottom of the page content** → **Mitigation**: Add dynamic or generous bottom padding (`pb-[480px]` or `min-h` buffer) so users can easily scroll "You Might Also Like" completely into view above the expanded sheet.
