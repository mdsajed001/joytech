## Context

See `proposal.md` for motivation. Currently in `src/routes/product/[slug]/+page.svelte` (lines 190–256), the product details header is split across 5 micro-rows with competing alignments and separate badge components (`<Badge>`), with stock status floating in isolation on the bottom-right of the pricing block.

## Goals / Non-Goals

**Goals:**
- Unify metadata (Brand, Status text, and Stock indicator) into a single cohesive top row.
- Replace the bulky `<Badge>` component with clean inline typographic labels (`• New Arrival` / `• Best Seller`).
- Render stock availability cleanly on the right of the top row (`● In Stock (N)` / `● Out of Stock`) with a colored status dot and no bulky pill container.
- Consolidate pricing into a single horizontal baseline containing the active price, strikethrough original price, and inline discount/savings calculation (`-{percent}% (Save ৳{amount})`) in rose accent text.
- Preserve the star rating block and the clickable underlined review count hyperlink with smooth scrolling to `#reviews`.

**Non-Goals:**
- Modifying the variant selection card, gallery, or sticky bottom purchase bar.
- Changing catalog data models or discount calculation logic.

## Decisions

### Decision: Relocate stock status to the top metadata line
- **Choice**: Place the stock indicator in the top metadata row opposite the brand and status text, using `justify-between`.
- **Rationale**: Inventory status is product-level metadata. Moving it out of the price row allows the price row to be a single, full-width baseline without awkward vertical alignment voids.

### Decision: Inline discount text instead of badge containers
- **Choice**: Display `-{discountPercent}% ({saveAmount})` directly adjacent to the strikethrough price in `text-rose-600 dark:text-rose-400 font-bold`.
- **Rationale**: Eliminates pill-badge visual clutter while delivering immediate, high-contrast savings visibility at the exact moment the customer evaluates price.

## Risks / Trade-offs

- **[Risk]** Long brand names or translations causing top row wrap on narrow screens.  
  → **Mitigation**: Use `flex-wrap` and `gap-2` so that if a brand/status overflows on extremely narrow 320px screens, it breaks gracefully without clipping.
