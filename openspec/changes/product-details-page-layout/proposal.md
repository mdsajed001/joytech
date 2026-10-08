## Why

Joytech currently lacks a dedicated Product Details Page (PDP) route. Customers who discover products on the homepage, search, or category rails cannot inspect detailed high-resolution gallery angles, verified device compatibility, technical specifications, or warranty and delivery terms before purchasing.

To maximize mobile conversion and provide an AAA buy-friendly experience, we need a phone-first dedicated page (`/product/[slug]`). Unlike root pages (`/`, `/cart`, `/offers`, `/profile`), this product page intentionally omits the standard 5-tab root bottom navigation bar to remove distraction and avoid interface clutter, replacing it with a focused, high-conversion sticky purchase bar containing both "Add to Cart" and "Buy Now" with icons.

## What Changes

- **Dedicated PDP Route**: Create a standalone route at `/product/[slug]` (`src/routes/product/[slug]/+page.svelte`) rather than a temporary modal, allowing direct sharing, SEO friendliness, and deep-linking.
- **Product Card Navigation**: Wrap product card media and titles in [`ProductCard.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/ProductCard.svelte) to navigate smoothly to `/product/[slug]`, while preserving direct quick-purchase on the card's action button.
- **Root Bottom Nav Suppression**: Configure layout conditional logic in [`+layout.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/routes/+layout.svelte) so the standard root bottom nav (`BottomNav.svelte`) is hidden on `/product/[slug]`.
- **Mobile-First AAA Sticky Bottom Action Bar**:
  - Pinned to the bottom viewport with safe-area padding.
  - Features real-time price, quantity selector, secondary "Add to Cart" (with cart icon), and primary high-contrast "Buy Now" CTA (with flash/arrow icon).
  - Offset appropriately from the floating support widget to prevent overlap.
- **Hero Media Gallery**:
  - Mobile swipeable/tappable gallery with image dots.
  - Desktop thumbnail strip with zoom preview.
  - Discount, stock, and official authenticity badges.
- **Device & Variant Selection**:
  - Compatible phone model selectors (prominent pills ensuring zero purchasing mistakes).
  - Color swatches with selected state label.
  - Mandatory selection guard before purchase.
- **Fulfilment & Trust Guarantees**:
  - Inside Dhaka (24–48h) & Outside Dhaka (48–72h) delivery estimates.
  - Cash on Delivery (COD) badge.
  - 6 Months Official Warranty & 7-day return guarantee.
- **Collapsible Technical Specifications & Overview**:
  - Interactive accordions/tabs for Overview, Specs, and What's in the Box.
- **Customer Reviews & Ratings**:
  - Star breakdown summary and verified customer review cards.
- **Related Accessories Carousel**:
  - "You May Also Like" compatible items rail.

## Capabilities

### New Capabilities
- `product-details-page`: Dedicated mobile-first product details page route (`/product/[slug]`), media gallery, variant/device compatibility selection, customer trust cards, accordion details, customer review highlights, and dedicated bottom purchase action bar replacing root navigation.

### Modified Capabilities
<!-- None: No existing main specs in openspec/specs/ are being altered. -->

## Impact

- **Routing & Layout**: Adds `src/routes/product/[slug]/+page.svelte` and updates `src/routes/+layout.svelte` to conditionally suppress `BottomNav.svelte` on PDP routes.
- **Components**: Adds PDP sub-components under `src/lib/components/product/` (e.g. `ProductGallery.svelte`, `ProductPurchaseBar.svelte`, `ProductVariantSelector.svelte`, `ProductAccordion.svelte`).
- **Cards**: Connects `ProductCard.svelte` to the new route.
- **Cart State**: Interacts cleanly with `cartState.addItem(...)` and toast notifications.
