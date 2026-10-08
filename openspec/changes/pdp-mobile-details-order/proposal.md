## Why

On mobile/phone screens, customers evaluating an accessory need immediate visibility into the essential purchase options (brand, title, pricing, discount, model selection, and variant choices) right after inspecting the product photo carousel. Currently, the desktop 2-column layout stacks the entire left column (gallery, delivery guarantee card, and technical specs accordion) before the right column (pricing, model, and variants) on mobile, forcing mobile shoppers to scroll past several screenfuls of secondary trust badges and technical accordions before reaching the variant selector and price.

Reordering the mobile layout so that the product titles, ratings, price breakdown, device model selection, and variant selector appear directly under the image gallery creates a friction-free, conversion-focused mobile purchasing experience while keeping the full desktop 2-column sticky buy-box layout completely intact.

## What Changes

- **Mobile Viewport Reordering**:
  - In `src/routes/product/[slug]/+page.svelte`, restructure the grid flow so that on mobile viewports (`< lg`), the purchasing details (Brand, Best Seller badge, Product Title, Rating & Reviews link, Pricing & Savings card, Phone Model selector, and Option / Variant selector) display immediately below the `ProductGallery` image section.
  - Secondary details (`ProductTrustCard` fulfillment guarantees and `ProductAccordion` specifications) follow below the variant selector on mobile, directly preceding customer reviews.
- **Desktop Layout Preservation**:
  - On desktop viewports (`lg+`), maintain the side-by-side 2-column layout with `ProductGallery` and technical details on the left (7 cols) and the sticky purchase buy-box on the right (5 cols).
  - Use semantic CSS Grid positioning (`lg:col-span-7 lg:col-start-1 lg:row-start-1`, `lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2`, and `lg:col-span-7 lg:col-start-1 lg:row-start-2`) to avoid DOM duplication and ensure optimal performance.

## Capabilities

### New Capabilities
- `mobile-pdp-layout`: Defines the responsive section sequencing for the Product Details Page (PDP), ensuring high-priority purchase information directly succeeds the media gallery on mobile devices.

### Modified Capabilities
*(None)*

## Impact

- **Affected Components**:
  - `src/routes/product/[slug]/+page.svelte`: Rearranges grid direct children into gallery, purchase details, and in-depth specs sections with responsive grid placement.
- **Dependencies**: No external packages required; utilizes native Tailwind CSS grid positioning.
