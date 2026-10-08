## Context

The current `ProductVariantSelector.svelte` renders separate phone model pills and simple color swatches. For complex mobile accessories (such as chargers with different power ratings and colorways: `Red • 64W`, `Blue • 64W`, `Red • 30W`, `Blue • 30W`, or phone cases with different finishes and stands), having separated tiers causes confusion and provides no visual preview of the exact SKU selected.

The user specified:
> "there will be only one thred type varient color and other types will be under same threds like red 64w blue 64w red 30w blue30w so in same tred"
> "for eatch varient there will be a image and a labeal of that varient"

## Goals / Non-Goals

**Goals:**
- Provide a unified single-thread variant selector where every purchasable option combination is presented as an interactive card.
- Each variant card features a product photo thumbnail (40x40px), a clear compound label (e.g., `Red • 64W`), and price.
- Synchronize hero gallery image automatically when a variant is selected.
- Dynamically update product pricing and sticky bottom bar pricing when switching between variants of different prices.
- Pass the exact variant title, image, and price to the cart store.

**Non-Goals:**
- Multiple nested dropdowns or cascading attribute selectors (kept strictly single-thread per requirements).

## Decisions

### 1. Data Model Definition (`src/lib/types.ts`)
Define `ProductVariant`:
```typescript
export interface ProductVariant {
  id: string;              // e.g. 'red-64w', 'blue-64w', 'red-30w', 'blue-30w'
  title: string;           // 'Red • 64W'
  titleBn?: string;        // 'লাল • ৬৪ ওয়াট'
  image: string;           // Direct photo thumbnail
  price: number;           // Variant specific price
  originalPrice?: number;  // Optional strikethrough original price
  inStock: boolean;        // Stock status for this variant
  stockCount: number;      // Exact available units
}
```
In `Product`:
`variants?: ProductVariant[];`

### 2. Backward Compatibility Fallback
In `enrichProduct` in `src/lib/data/catalog.ts`:
If `product.variants` is not explicitly declared, auto-generate single-thread variants using the product's colors and features (e.g. for Spigen case: `Matte Black • MagSafe`, `Crystal Clear • MagSafe`, `Natural Titanium • Stand`), ensuring every product in the store enjoys the new rich visual cards.

### 3. Card Anatomy & Responsive Layout
In `ProductVariantSelector.svelte`:
- Render variants as a responsive 2-column grid (`grid grid-cols-1 sm:grid-cols-2 gap-2.5`).
- Each card contains:
  1. Left: 40x40px rounded square thumbnail image with subtle border.
  2. Right: Variant compound title in bold text, with price badge below.
  3. Active state: 2px solid `[var(--color-brand-primary)]`, soft tint background, and small checkmark icon.

### 4. Hero Gallery & Price Synchronization
In `src/routes/product/[slug]/+page.svelte`:
- Maintain `selectedVariant = $state<ProductVariant | null>(null)`.
- Pass an `imageOverride` prop to `ProductGallery.svelte` so that clicking any variant immediately flips the main hero gallery photo to that variant's dedicated image.
- Compute `activePrice = selectedVariant?.price ?? product.price` and `activeOriginalPrice = selectedVariant?.originalPrice ?? product.originalPrice`.
- Bind `activePrice` to both the in-page price display and `ProductStickyBar.svelte`.

## Risks / Trade-offs

- **[Risk]** Variant image taking time to load.
  - **Mitigation**: Use lazy loading with subtle gradient skeleton placeholder; fallback to `product.image` if variant image fails.
- **[Risk]** Compact mobile screen space with 4+ variants.
  - **Mitigation**: Clean 2-column grid layout with 52px card height keeps 4 variants within ~115px vertical space.
