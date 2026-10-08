# Proposal: CTA Border Radius Consistency

## Why
Across the storefront, the core design system establishes `rounded-[var(--radius-sm)]` (8px) for buttons and interactive CTAs, as seen on `ProductCard.svelte`, `Button.svelte`, and modal actions. However, the product details sticky bar and on-page desktop action buttons were using `rounded-xl`, resulting in an overly rounded / pill appearance inconsistent with the site's design language.

This change brings visual consistency by updating the CTAs and stepper controls in `ProductStickyBar.svelte` and `src/routes/product/[slug]/+page.svelte` to use the standard `rounded-[var(--radius-sm)]` corner radius, matching the product card CTA shape.

## What Changes
- **Sticky Bar CTA Corner Radius**: Update "Add to Cart", "Buy Now", and the quantity stepper container in `ProductStickyBar.svelte` from `rounded-xl` to `rounded-[var(--radius-sm)]`.
- **Desktop Purchase Action Corner Radius**: Update desktop "Add to Cart", "Buy Now", and the stepper container in `src/routes/product/[slug]/+page.svelte` from `rounded-xl` to `rounded-[var(--radius-sm)]`.
- **Visual Uniformity**: Ensure crisp, consistent 8px curvature matching `ProductCard` across mobile and desktop product actions.

## Capabilities

### New Capabilities
- `cta-border-radius`: Defines standardized border-radius rules ensuring all primary and secondary purchase CTAs adhere to `rounded-[var(--radius-sm)]`.

### Modified Capabilities
<!-- None. -->

## Impact
- `src/lib/components/product/ProductStickyBar.svelte`
- `src/routes/product/[slug]/+page.svelte`
- No data or behavioral logic changes; purely CSS styling and design system harmonization.
