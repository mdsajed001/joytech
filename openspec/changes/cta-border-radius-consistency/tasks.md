## 1. Sticky Bar CTA Corner Radius Update

- [x] 1.1 Update the "Add to Cart" and "Buy Now" button corner radii in `ProductStickyBar.svelte` from `rounded-xl` to `rounded-[var(--radius-sm)]` and verify in the markup
- [x] 1.2 Update the quantity stepper container corner radius in `ProductStickyBar.svelte` to `rounded-[var(--radius-sm)]`

## 2. Desktop Purchase CTAs & Stepper Corner Radius Update

- [x] 2.1 Update the desktop "Add to Cart" and "Buy Now" button corner radii in `src/routes/product/[slug]/+page.svelte` to `rounded-[var(--radius-sm)]`
- [x] 2.2 Update the desktop quantity stepper container in `src/routes/product/[slug]/+page.svelte` to `rounded-[var(--radius-sm)]`

## 3. Visual Verification

- [x] 3.1 Verify with `npm run check` and compare visual geometry against `ProductCard.svelte` to confirm consistent 8px corner styling
