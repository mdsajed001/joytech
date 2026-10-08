# Technical Design: Sticky Bar Price & CTA Refresh

## Context
See `proposal.md` for motivation.
Currently, `ProductStickyBar.svelte` presents prices in a horizontal row (`flex items-baseline gap-1.5`) followed by a stock indicator (`In Stock & Ready`). The action buttons use `h-10 sm:h-11`, with "Add to Cart" styled using a light blue background and blue border (`border-[var(--color-brand-primary)] bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)]`) alongside "Buy Now" using `cta-checkout-animated`. The desktop purchase block in `src/routes/product/[slug]/+page.svelte` shares similar styling.

## Goals / Non-Goals

**Goals:**
- Realign the price block in `ProductStickyBar.svelte` into a vertical column matching `ProductCard.svelte` (strikethrough original price on top, active price below).
- Strip out the stock badge text from the sticky bar to maximize breathing room on narrow viewports.
- Standardize CTA height to `h-12` (48px) across both buttons.
- Apply an outlined accent style (`border-2 border-[var(--color-accent)] text-[var(--color-accent)] bg-transparent hover:bg-[var(--color-accent-subtle)] active:scale-98`) to "Add to Cart", while preserving `cta-checkout-animated` on "Buy Now".
- Align desktop CTAs in `src/routes/product/[slug]/+page.svelte` to match the new accent outline pattern and height.

**Non-Goals:**
- Modifying product inventory data logic or checkout flow handlers.
- Changing mobile quantity stepper behavior (already hidden on mobile < 640px).

## Decisions

### 1. Vertical Price Layout Structure
- **Decision**: Wrap the original price in a conditional check above the active price inside a `flex flex-col justify-center min-w-0 shrink-0` container.
- **Rationale**: Reuses the exact pattern proven in `ProductCard.svelte`:
  ```svelte
  <div class="flex flex-col justify-center min-w-0 shrink-0">
    {#if activeOriginalPrice && activeOriginalPrice > activePrice}
      <span class="text-[11px] sm:text-xs font-medium text-[var(--color-text-disabled)] line-through leading-none mb-0.5">
        ৳{activeOriginalPrice.toLocaleString('en-BD')}
      </span>
    {/if}
    <span class="text-base sm:text-xl font-black text-[var(--color-text-primary)] leading-tight whitespace-nowrap">
      ৳{activePrice.toLocaleString('en-BD')}
    </span>
  </div>
  ```
- **Alternative considered**: Keeping horizontal baseline layout. Rejected because original prices can crowd the CTA buttons on screens < 360px.

### 2. CTA Button Height Upgrade
- **Decision**: Standardize button height to `h-12` (48px) across both mobile and desktop sticky bar buttons, with appropriate padding and font weight.
- **Rationale**: 48px is the touch target standard (WCAG / Apple / Google guidelines) and provides a much more tactile and premium feel.

### 3. Outlined Accent Style for Add to Cart
- **Decision**: Use `border-2 border-[var(--color-accent)] text-[var(--color-accent)] bg-transparent hover:bg-[var(--color-accent-subtle)] dark:hover:bg-[var(--color-accent)]/10` for "Add to Cart".
- **Rationale**: Incorporates the project's secondary/accent color (`--color-accent`: `#F2790B`), immediately separating it from the primary blue "Buy Now" button while keeping its outline visual weight subordinate to the solid animated "Buy Now".

## Risks / Trade-offs

- **[Risk]** The increased button height might increase the overall sticky bar height on small screens.
  - **Mitigation**: Adjust container padding to `py-2 sm:py-2.5` so the overall bar remains compact (~64px-68px) and does not obscure page content.
- **[Risk]** Text wrapping on narrow screens (e.g. iPhone SE / 320px).
  - **Mitigation**: Use `whitespace-nowrap`, compact icon gaps (`gap-1.5`), and responsive padding (`px-3 sm:px-5`).
