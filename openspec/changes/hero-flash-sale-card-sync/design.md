## Context

See proposal.md - Why.

The desktop Hero section (`Hero.svelte`, lines 60-176) features a split view: 65% width banner slider on the left, 35% width Flash Sale spotlight on the right. Currently, the Flash Sale module renders custom mini-cards that differ from `ProductCard.svelte`.

## Goals / Non-Goals

**Goals:**
- Add `showRating: boolean = true` to `ProductCard.svelte` so rating stars & reviews can be hidden when requested.
- In `Hero.svelte`, replace the ad-hoc cards with `<ProductCard {product} showRating={false} onAddToCart={handleAddToCart} />`.
- Arrange the cards in a 2-column grid (`grid-cols-2`) that scrolls vertically (`overflow-y-auto flex-1 min-h-0`).
- Limit the number of deals shown to a defined count (top 6 deals).
- Keep header (countdown timer) and footer ("Explore All Flash Deals") pinned in place.

**Non-Goals:**
- Modifying the mobile Flash Sale section (`FlashSaleSection.svelte`), which already renders standard product cards in a horizontal or standard grid.
- Modifying `ProductCard` on standard product sections (Best Sellers, New Arrivals continue showing ratings).

## Decisions

### 1. `ProductCard` Prop-driven Rating Visibility
```typescript
interface Props {
  product: Product;
  showRating?: boolean;
  onAddToCart?: (product: Product) => void;
}

let { product, showRating = true, onAddToCart }: Props = $props();
```
- Wrap lines 66-72 (the star icon, rating number, review count) in `{#if showRating}`.
- All existing uses of `<ProductCard>` default to `showRating = true` with zero regression.

### 2. Scrollable 2-Column Track in `Hero.svelte`
Replace the rigid `grid grid-cols-2 gap-2.5 xl:gap-3 px-4 xl:px-5 my-auto min-h-0 flex-1 py-1.5` with:
```html
<div class="flex-1 min-h-0 overflow-y-auto px-3 xl:px-4 py-3 grid grid-cols-2 gap-2.5 xl:gap-3 [scrollbar-width:thin]">
  {#each topFlashDeals as product (product.id)}
    <ProductCard {product} showRating={false} onAddToCart={handleAddToCart} />
  {/each}
</div>
```
- `overflow-y-auto` + `flex-1 min-h-0`: Enables smooth vertical scrolling while maintaining the outer container's fixed `h-[425px] xl:h-[450px]` height.
- `[scrollbar-width:thin]`: Ensures a sleek, modern scrollbar appearance on Firefox and Chromium.

### 3. Deal Count Configuration
Update `topFlashDeals` from 4 to 6:
```typescript
const topFlashDeals = FLASH_SALE_PRODUCTS.slice(0, 6);
```
This guarantees an initial visible pair of cards with immediate visual cues that additional cards can be scrolled into view.

## Risks / Trade-offs

- Card height in a 2-column layout: Standard `ProductCard` is approximately ~250px tall, so approximately 2 cards are visible before scrolling. This is expected and precisely matches the scrollable requirement.
