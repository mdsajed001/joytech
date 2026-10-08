## Context

See `proposal.md` for background and motivation. [`ProductCard.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/ProductCard.svelte) previously duplicated discount savings in two locations: on the image badge (`-14%`) and in a green footer line (`Save ৳400 (14%)`). The prices were arranged horizontally (`৳2,450 ৳2,850`), competing for horizontal space with the action button, which was an ambiguous shopping bag icon button. In addition, the mini deal cards in [`Hero.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/Hero.svelte) displayed an "Add" button instead of a direct purchasing action.

## Goals / Non-Goals

**Goals:**
- Eliminate the redundant `Save ৳... (%)` text from the pricing footer, keeping the top `-XX%` badge on the product image as the sole discount indicator.
- Stack the crossed-off original price (when present) directly on top of the active price for clean, predictable vertical alignment.
- Replace the shopping bag button with a responsive "Buy Now" CTA button:
  - Desktop (≥ 640px): `Buy Now` with a mini icon.
  - Mobile (< 640px): `Buy` with a mini icon.
- Update the mini deal cards in `Hero.svelte` to match the stacked price layout and use "Buy Now".

**Non-Goals:**
- Changing product catalog data or cart checkout architecture.
- Changing product card image heights or aspect ratios.

## Decisions

### 1. Removing Duplicate Savings Footer
- **Choice**: Delete `{#if savings > 0} <span>Save ৳...</span> {/if}` from the pricing area.
- **Rationale**: The top-left badge on the image already highlights the discount percentage. Removing the extra line reclaims ~18px of height and prevents visual clutter.

### 2. Vertical Price Stacking Layout
- **Choice**:
  ```svelte
  <div class="flex flex-col min-w-0">
    {#if product.originalPrice && product.originalPrice > product.price}
      <span class="text-[11.5px] font-medium text-[var(--color-text-disabled)] line-through leading-tight">
        ৳{product.originalPrice.toLocaleString('en-BD')}
      </span>
    {/if}
    <span class="text-[15px] font-black text-[var(--color-text-primary)] leading-tight">
      ৳{product.price.toLocaleString('en-BD')}
    </span>
  </div>
  ```
- **Rationale**: Stacking the original price above the real price follows standard e-commerce conventions (Amazon, Daraz, Apple) and guarantees that horizontal space remains dedicated to the action button without text wrapping.

### 3. Responsive "Buy Now" CTA
- **Choice**:
  - Button with text: `<span class="hidden sm:inline">Buy Now</span><span class="sm:hidden">Buy</span>`.
  - Icon: Mini flash/action icon (`size={13}`) for visual energy.
  - Out of stock state: Disabled with `Sold Out` (desktop) and `Sold` (mobile).
- **Rationale**: Provides clear purchasing intent that fits cleanly across both compact mobile cards and wider desktop grids.

## Risks / Trade-offs

- **[Risk] Long pricing numbers in cards** → **Mitigation**: Price column has `min-w-0` and button has `shrink-0`, ensuring the button never wraps or clips.
