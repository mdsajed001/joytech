## Why

Currently, product options on the Product Details Page (PDP) are represented with basic color pills and dots. However, modern accessories often feature compound variants (such as Color + Wattage: `Red • 64W`, `Blue • 64W`, `Red • 30W`, `Blue • 30W`, or Color + Stand: `Frosted Black • MagSafe`). Splitting these into multiple independent selectors causes combination dead-ends and fails to provide visual feedback.

A unified "single-thread" variant selector allows customers to see all valid purchasing configurations in a single view, with each variant featuring its own high-resolution image thumbnail, clear compound label, and price.

## What Changes

- **Unified Single-Thread Variant Selector**: Replaces split attribute pickers with a unified thread where each variant card contains:
  - An image thumbnail showing that exact product version.
  - A comprehensive compound label (e.g., `Red • 64W`, `Blue • 64W`, `Matte Black • MagSafe`).
  - Per-variant price tag (e.g., `৳2,850` vs `৳1,950`).
  - Active selection indicator (thick brand blue ring, checkmark, highlight background).
- **Hero Gallery Image Synchronization**: Tapping a variant card automatically switches the main product gallery preview to that variant's dedicated photo.
- **Dynamic Price & Sticky Bar Synchronization**: Real-time price updates across the main product page and the mobile sticky bottom bar based on the active variant.
- **Cart State Integration**: Passes the chosen variant's title, image, and price to `cartState.addItem` so the cart summary accurately reflects the exact item ordered.

## Capabilities

### New Capabilities
- `unified-image-variants`: Unified single-thread variant selector supporting image thumbnails, compound labels, per-variant pricing, and gallery hero image synchronization.

### Modified Capabilities
<!-- None: No existing main specs in openspec/specs/ are being altered. -->

## Impact

- **Types (`src/lib/types.ts`)**: Defines `ProductVariant` interface with `id`, `title`, `titleBn`, `image`, `price`, `originalPrice`, `inStock`, `stockCount`.
- **Catalog (`src/lib/data/catalog.ts`)**: Provides compound image-enabled variants for catalog items (e.g. 64W vs 30W with color combinations, cases with finishes).
- **Component (`src/lib/components/product/ProductVariantSelector.svelte`)**: Replaces simple color dots with responsive image + label variant cards.
- **PDP Route (`src/routes/product/[slug]/+page.svelte`)**: Synchronizes selected variant with the hero gallery and sticky purchase bar.
