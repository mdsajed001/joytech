## Why

The product details page header can be made even tighter and more intuitive by repurposing the top right space: stock count is not needed in this header, so moving the review score and reviews link up to the top row alongside the brand/status eliminates an entire horizontal row. Meanwhile, stacking the crossed-out original price directly above the large active price and anchoring the savings text to the right side of the price row creates a balanced, conversion-focused pricing block.

## What Changes

- **Remove In-Stock Indicator**: Remove the in-stock count indicator from the product details header.
- **Relocate Reviews to Top Row**: Move the star rating, numerical rating, and underlined review count hyperlink up into the top row opposite the brand/status (Brand/Status on left, Reviews on right).
- **Stacked Crossed Price**: Place the strikethrough original price directly above the large active price on the left side of the pricing row.
- **Right-Aligned Savings Text**: Move the discount percentage and savings calculation text (`-X% (Save ৳Y)`) to the right side of the pricing row.

## Capabilities

### New Capabilities
- `pdp-header-top-reviews-stacked-price`: Controls the alignment of social proof reviews in the top metadata row and the stacked original price / right-aligned savings layout in the pricing block.

### Modified Capabilities
<!-- No existing capabilities modified -->

## Impact

- `src/routes/product/[slug]/+page.svelte`: Refactor the header top row and pricing container in the product purchasing details column.
- No breaking changes or data model updates.
