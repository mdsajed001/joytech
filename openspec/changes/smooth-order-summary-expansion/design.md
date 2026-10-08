## Context

See `proposal.md` for motivation. On mobile devices, the Order Summary sheet previously expanded while the user was still arriving at the "You Might Also Like" section, and when triggered, it snapped instantly from 60px to 480px due to an unmounted DOM swap in Svelte.

## Goals / Non-Goals

**Goals:**
- Provide a clear ~112px clearance gap (`h-28`) below the recommendation rail before the trigger zone.
- Calibrate the `IntersectionObserver` so the summary only unrolls after the user has scrolled past "You Might Also Like" and cleared the gap.
- Animate the sheet expansion and collapse smoothly using CSS Grid `grid-template-rows: 0fr` ➔ `1fr` (`0.45s cubic-bezier(0.16, 1, 0.3, 1)`).
- Morph the header action between `Checkout Now` and `Collapse` so exactly one Checkout CTA is visible at all times.

**Non-Goals:**
- Modifying desktop column view (`lg: >= 1024px`).
- Changing coupon or points calculation logic.

## Decisions

### Decision 1: Dedicated Clearance Gap & Tuned Root Margin
- **Choice**: Insert `<div class="h-28 lg:hidden pointer-events-none" aria-hidden="true"></div>` directly beneath `<CrossSellRail />` in `src/routes/cart/+page.svelte`, followed by the sentinel, with `rootMargin: '0px 0px -160px 0px'`.
- **Rationale**: Ensures the recommendation rail is comfortably visible and swipable without triggering the sheet. The user must intentionally scroll past the rail and through the gap to trigger expansion.
- **Alternatives Considered**: Triggering purely on total scroll percentage was rejected because cart length varies dynamically with item count.

### Decision 2: CSS Grid Height Transition (`grid-template-rows: 0fr -> 1fr`)
- **Choice**: Replace the `{#if !isExpanded} ... {:else} ... {/if}` DOM destruction with persistent CSS Grid transition:
  `grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`
  - Collapsed: `grid-rows-[0fr] opacity-0 pointer-events-none`
  - Expanded: `grid-rows-[1fr] opacity-100 pointer-events-auto`
- **Rationale**: Animating `height: auto` directly in CSS is impossible, but CSS Grid fractional rows (`0fr` to `1fr`) natively interpolate height smoothly without JavaScript layout measurements or frame drops.
- **Alternatives Considered**: Hardcoding `max-height: 500px` causes ease distortion because the content height doesn't match 500px.

### Decision 3: Header Action Morph & Single CTA Invariant
- **Choice**:
  - When collapsed: Top bar displays `Total Amount ৳...` (tap to expand) and the single animated `Checkout Now >` CTA button.
  - When expanded: The top bar action smoothly transforms into a `Collapse ∨` button, while the single primary `Proceed to Checkout` CTA appears at the bottom of the unrolled receipt.
- **Rationale**: Eliminates duplicate CTA buttons on screen at all times while maintaining clear visual affordances for both actions.

## Risks / Trade-offs

- **[Risk] Sheet overflowing on very short viewports (e.g. landscape phone)** → **Mitigation**: Constrain the unrolled body with `max-h-[70vh] overflow-y-auto overscroll-contain`.
