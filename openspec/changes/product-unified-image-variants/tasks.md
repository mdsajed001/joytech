## 1. Type & Catalog Data Modeling

- [x] 1.1 Update `src/lib/types.ts` to export `ProductVariant` interface and add `variants?: ProductVariant[]` to `Product`, verifying by type-checking without errors.
- [x] 1.2 Update `src/lib/data/catalog.ts` with compound single-thread variants featuring direct image thumbnails, titles (e.g. `Red • 64W`, `Blue • 64W`, `Red • 30W`, `Blue • 30W`), and per-variant pricing.

## 2. Component Implementation

- [x] 2.1 Update `src/lib/components/product/ProductVariantSelector.svelte` to render single-thread cards with 40x40px image thumbnails, compound labels, and active selection highlights.
- [x] 2.2 Update `src/lib/components/product/ProductGallery.svelte` to accept an `activeImageOverride` prop and synchronize hero preview when variants switch.

## 3. PDP Route Assembly & Cart Flow

- [x] 3.1 Update `src/routes/product/[slug]/+page.svelte` to synchronize `selectedVariant` with gallery hero photo and dynamic price calculations.
- [x] 3.2 Update `ProductStickyBar.svelte` and cart dispatch logic to include the selected variant's title, image, and price in `cartState.addItem`.

## 4. Verification & Deployment

- [x] 4.1 Run `cmd /c npm run check` to verify 0 type or syntax errors across all components.
- [x] 4.2 Deploy to Vercel production (`cmd /c npx vercel --prod --yes`) and verify the live single-thread variant experience.
