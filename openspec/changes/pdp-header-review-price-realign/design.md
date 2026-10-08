## Context

See `proposal.md` for motivation. The product details page (`/product/[slug]`) currently places the review link in its own row below the title, stock count in the top-right, and pricing in a single horizontal baseline.

## Goals / Non-Goals

**Goals:**
- Move reviews up into the top row opposite the brand name, saving vertical space and removing the dedicated review row under the title.
- Remove the stock count indicator from this header section.
- In the pricing row, stack the strikethrough original price directly above the active current price on the left.
- Anchor the discount and savings text (`-X% (Save ৳Y)`) to the right side of the pricing container, bottom-aligned with the active price.

**Non-Goals:**
- Modifying reviews modal/drawer or scrolling logic (`scrollToReviews` remains unchanged).
- Changing variant selector or purchase actions.

## Decisions

### Decision: Top metadata row pairs Brand with Social Proof
- **Choice**: Structure the top row as a flex container with `justify-between`:
  - Left: `product.brand` + optional status (`• Best Seller` / `• New Arrival`).
  - Right: `StarIcon` + `product.rating` + clickable underlined `({reviewCount} reviews)`.
- **Rationale**: Removes an entire vertical row from the page, pulling the title and purchasing details higher up the viewport.

### Decision: 2-column pricing block with stacked left column
- **Choice**: Wrap pricing in `flex items-end justify-between`:
  - Left column (`flex flex-col`): Strikethrough price on top (`text-xs sm:text-sm text-[var(--color-text-disabled)] line-through mb-1`), active price on bottom (`text-2xl sm:text-3xl font-black`).
  - Right column: Savings text (`text-xs sm:text-sm font-bold text-rose-600 dark:text-rose-400 text-right pb-0.5`).
- **Rationale**: Naturally guides the eye from the old price down to the active price, with the clear savings value anchoring the right side.

## Risks / Trade-offs

- **[Risk]** Long title or many review counts on narrow mobile viewports.  
  → **Mitigation**: Using `gap-3` and `items-center` ensures that on narrow screens, the top row items sit gracefully without overlap.
