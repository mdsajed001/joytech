## Why

The product details page (`/product/[slug]`) currently displays product metadata, title, reviews, price, savings, and inventory across 5 separate fragmented horizontal rows with alternating alignments and 7 competing color accents. This creates visual fatigue and an unorganized feel. Restructuring this section into cohesive, single-line clusters—unifying brand, product status, and stock availability on a top line, and aligning price, strikethrough, and savings on a single baseline—will produce a clean, modern luxury look that improves scannability and purchasing confidence.

## What Changes

- **Unified Top Meta Row**: Combine Brand (`product.brand`), inline product status label (e.g. `• New Arrival` or `• Best Seller` as clean text without bulky badge containers), and inventory availability (`● In Stock (N)` / `Out of Stock`) into a single balanced top bar.
- **Product Title**: Keep high-contrast, comfortable line-height typography.
- **Social Proof**: Retain golden rating stars, numerical score, and the clickable underlined review count hyperlink (`(N reviews)`) linking smoothly to the reviews section.
- **Single-Line Pricing**: Unify the current price, original strikethrough price, and discount/savings calculation (`-X% (Save ৳Y)`) onto a single horizontal baseline without bulky pill badges.
- **Visual Polish**: Eliminate the empty vacuum under the right side of the price row caused by the previous multi-line layout.

## Capabilities

### New Capabilities
- `pdp-header-pricing-hierarchy`: Governs the restructured information architecture, typography hierarchy, and single-line pricing layout of the product details page header.

### Modified Capabilities
<!-- No existing capabilities modified -->

## Impact

- `src/routes/product/[slug]/+page.svelte`: Refactor the header and pricing markup blocks in the right column above the variant selector.
- No breaking changes, external API dependencies, or database modifications.
