# Proposal: Sticky Bar Price & CTA Refresh

## Why
On the mobile product details page, the bottom sticky action bar currently displays the current and original price in a single horizontal line alongside a redundant "In Stock & Ready" badge. Additionally, the CTAs ("Add to Cart" and "Buy Now") currently both use shades of blue, reducing visual hierarchy and color contrast. Furthermore, the 40px/44px CTA button heights are slightly compact for mobile thumb interactions.

This change modernizes the sticky bar to match the clean product card price layout (original price stacked on top with strikethrough, active price prominent below, stock badge removed) and elevates the CTAs with increased 48px height, an outlined secondary style using the project's accent color (`--color-accent`), and maintaining "Buy Now" as the vibrant primary action.

## What Changes
- **Price Block Restructure**:
  - Remove the "In Stock & Ready" / "Sold Out" status badge from the sticky bar price column to reduce visual clutter.
  - Stack prices vertically: the original price appears on top with a subtle strikethrough (`text-[11px] sm:text-xs font-medium text-[var(--color-text-disabled)] line-through leading-none mb-0.5`), with the active selling price displayed underneath (`text-base sm:text-xl font-black text-[var(--color-text-primary)] leading-tight whitespace-nowrap`), mirroring the `ProductCard` pricing pattern.
- **CTA Height Upgrade**:
  - Increase button height from `h-10 sm:h-11` (40px/44px) to `h-12` (48px) for both "Add to Cart" and "Buy Now" to improve ergonomic touchability.
- **CTA Color & Hierarchy Refresh**:
  - **Add to Cart (Secondary CTA)**: Restyled as an outlined button utilizing the project's accent color token (`border-2 border-[var(--color-accent)] text-[var(--color-accent)] bg-transparent hover:bg-[var(--color-accent-subtle)]`), creating clear visual distinction.
  - **Buy Now (Primary CTA)**: Preserved as the dominant action with vibrant brand blue background, animated dual-bubble shimmer (`cta-checkout-animated`), solid white text, and prominent elevation/shadow.
- **Desktop Actions Alignment**:
  - Ensure the desktop purchase actions container in `src/routes/product/[slug]/+page.svelte` reflects the updated accent outline style and consistent button heights.

## Capabilities

### New Capabilities
- `product-sticky-bar`: Defines requirements for the product details sticky bar layout, pricing presentation, and action button hierarchy.

### Modified Capabilities
<!-- None. Existing capabilities have no spec files in openspec/specs yet. -->

## Impact
- `src/lib/components/product/ProductStickyBar.svelte`: Price block template, CTA height, and style classes.
- `src/routes/product/[slug]/+page.svelte`: Matching desktop Add to Cart styling with the accent outline variant and height alignment.
- No breaking API or data changes; purely UI and design system alignment.
