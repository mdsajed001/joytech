## 1. Product Sticky Bar Layout & Price Restructure

- [x] 1.1 Remove the "In Stock & Ready" / "Sold Out" status text from `ProductStickyBar.svelte` and verify no stock badge renders in the price column
- [x] 1.2 Restructure the price block in `ProductStickyBar.svelte` into a vertical column with strikethrough original price on top and active price below, matching `ProductCard` style, and verify layout on mobile viewports

## 2. CTA Height & Styling Upgrade

- [x] 2.1 Update button heights in `ProductStickyBar.svelte` to `h-12` (48px) and adjust bar padding (`py-2 sm:py-2.5`) for compact framing
- [x] 2.2 Restyle the "Add to Cart" button in `ProductStickyBar.svelte` to an outlined accent variant (`border-2 border-[var(--color-accent)] text-[var(--color-accent)] bg-transparent hover:bg-[var(--color-accent-subtle)] active:scale-98`)
- [x] 2.3 Verify "Buy Now" retains primary dominance (`cta-checkout-animated`, solid brand blue background, bold white text) at `h-12` height

## 3. Desktop CTAs Alignment & Verification

- [x] 3.1 Update the desktop "Add to Cart" and "Buy Now" buttons in `src/routes/product/[slug]/+page.svelte` to match the accent outlined style and `h-12` height standard
- [x] 3.2 Run browser inspection across mobile (360px-430px) and desktop (1280px+) views to verify visual hierarchy, touch targets, and absence of text wrapping
