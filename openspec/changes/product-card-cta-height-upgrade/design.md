## Context

See `proposal.md` for background. In [`ProductCard.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/ProductCard.svelte), the previous shopping bag button was built with `Button size="sm"` which enforced a `min-h-[32px]`. The recent change to a custom `<button class="px-3 py-1.5 text-[11px]">` reduced the total height to ~26px, making the purchase CTA look diminished and visually deprioritized.

## Goals / Non-Goals

**Goals:**
- Restore the card purchase CTA button to a prominent height (`min-h-[32px]` / `h-8 sm:h-[34px]`) matching the design system's `size="sm"` specification.
- Expand horizontal padding to `px-3.5 sm:px-4` and typography to `text-[12px] sm:text-[12.5px] font-extrabold` with a 14px `FlashIcon`.
- Maintain responsive text copy (`Buy Now` on screens ≥ 640px, `Buy` on screens < 640px).
- Maintain robust alignment with stacked pricing in the card footer.

**Non-Goals:**
- Altering the stacked pricing layout or top discount badge.
- Changing click action, cart state, or toast notifications.

## Decisions

### 1. Button Dimension & Hierarchy Tuning
- **Decision**: Update classes to:
  ```svelte
  class="inline-flex items-center justify-center gap-1.5 min-h-[32px] sm:min-h-[34px] px-3.5 sm:px-4 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] active:translate-y-[1px] disabled:bg-[var(--color-bg-subtle)] disabled:text-[var(--color-text-disabled)] disabled:border disabled:border-[var(--color-border-default)] disabled:cursor-not-allowed text-white text-[12px] sm:text-[12.5px] font-extrabold rounded-[var(--radius-sm)] transition-all shadow-xs hover:shadow-sm shrink-0 cursor-pointer"
  ```
- **Rationale**: 32px–34px height guarantees tap ergonomic comfort and visual prominence without crowding the title or thumbnail area above.
- **Alternatives Considered**: Full width button on bottom row was considered, but keeping it inline beside the stacked price preserves compact card density and matches the established UI layout.

### 2. Proportional Icon & Typography Scaling
- **Decision**: Upgrade icon size from `size={13}` to `size={14}`, and text size from `text-[11px]` to `text-[12px] sm:text-[12.5px]`.
- **Rationale**: Balances the larger button envelope with crisp visual proportion and high legibility.

## Risks / Trade-offs

- **[Risk] Price/CTA horizontal collision on narrow cards (e.g. mobile 180px cards)** → **Mitigation**: Price column uses `min-w-0 flex flex-col` and button uses `shrink-0` with compact "Buy" label on screens <640px, leaving ample room for 5-digit prices.
