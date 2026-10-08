## Why

When dark mode is enabled, the homepage currently suffers from blinding white stripes (hardcoded `bg-white` on Hero, CategorySection, FlashSaleSection, and Best Sellers), invisible countdown timer digits (white-on-white text bug), and bright white hover/mask artifacts. This change repairs and unifies all Home Page components to use semantic design system tokens for flawless dark mode support.

## What Changes

- **Desktop Hero & Split Deal Module**: Replace hardcoded `bg-white` and frosted glass white tints with `bg-[var(--color-bg-surface)]` and semantic translucent surface overlays.
- **Countdown Clock Fix**: Fix the white-on-white text bug in `Hero.svelte` and `FlashSaleSection.svelte` by styling timer units with `bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]` so digits remain sharp and legible across light and dark modes.
- **Category Chip Rail**: Replace hardcoded `bg-white` container, `from-white` gradient mask, and light arrow button backgrounds with `bg-[var(--color-bg-surface)]` and semantic border tokens.
- **Mobile Flash Sale Section**: Replace hardcoded `bg-white` with `bg-[var(--color-bg-surface)]`.
- **Best Sellers & Product Sections**: Replace hardcoded `bgColor="bg-white"` with `bgColor="bg-[var(--color-bg-surface)]"` in `+page.svelte` and `ProductSection.svelte`.
- **Search and Trust Grid**: Replace `focus-within:bg-white` in `Header.svelte` with `focus-within:bg-[var(--color-bg-surface)]`, and `hover:bg-white` in `TrustGrid.svelte` with `hover:bg-[var(--color-bg-surface)]`.
- **Mobile Drawer**: Replace hardcoded `bg-white` on phone brand buttons with `bg-[var(--color-bg-surface)]`.
- **Status Badge Dark Overlays**: Provide sleek dark-mode translucent background/border overrides in `layout.css` for danger, warning, and success badges.

## Capabilities

### New Capabilities
- `homepage-darkmode`: Dark mode visual styling, contrast compliance, and semantic token usage across the Home Page and its core sections.

### Modified Capabilities
None.

## Impact

- `src/routes/+page.svelte`
- `src/lib/components/Hero.svelte`
- `src/lib/components/CategorySection.svelte`
- `src/lib/components/FlashSaleSection.svelte`
- `src/lib/components/ProductSection.svelte`
- `src/lib/components/TrustGrid.svelte`
- `src/lib/components/Header.svelte`
- `src/lib/components/MobileDrawer.svelte`
- `src/routes/layout.css`
