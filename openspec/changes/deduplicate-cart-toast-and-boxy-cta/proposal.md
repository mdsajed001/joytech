## Why

When users click "Add to Cart" on the product details page, two toast notifications are currently triggered simultaneously:
1. The rich cart toast emitted automatically by `cartState.addItem(product)` containing product artwork, title, and the "View Cart" CTA.
2. A duplicate generic "INFORMATION" toast triggered by an obsolete manual `cartState.showToast(...)` call left over in `src/routes/product/[slug]/+page.svelte`.

Additionally, the "View Cart" action CTA in `ToastItem.svelte` currently uses a pill shape (`rounded-full`), which deviates from the site's brand design system where action buttons feature crisp, boxy geometries (`rounded-[var(--radius-sm)]`).

## What Changes

- Remove redundant manual `cartState.showToast(...)` invocations from `src/routes/product/[slug]/+page.svelte` (`handleAddToCart` and related products add-to-cart).
- Update the action button in `src/lib/components/toast/ToastItem.svelte` from `rounded-full` (pill) to boxy `rounded-[var(--radius-sm)]` (8px) with subtle border, crisp padding, and hover elevation to match Joy Telecom primary CTAs.

## Capabilities

### New Capabilities
- `stacked-toast-system`: Unified single-dispatch cart toast notifications and brand-consistent boxy action CTA controls.

### Modified Capabilities
<!-- None -->

## Impact

- `src/routes/product/[slug]/+page.svelte`: Eliminates redundant toast dispatches so only 1 rich toast fires per add action.
- `src/lib/components/toast/ToastItem.svelte`: Changes action button radius to boxy brand styling.
- Zero breaking changes to store types or external APIs.
