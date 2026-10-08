## 1. Hero and Countdown Clock Theme Repairs

- [x] 1.1 Replace hardcoded `bg-white` and frosted white overlays in `Hero.svelte` with `bg-[var(--color-bg-surface)]` and semantic overlays, and verify visually
- [x] 1.2 Fix countdown timer digit styling in `Hero.svelte` and `FlashSaleSection.svelte` using `bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]`, and verify numbers are sharp and legible

## 2. Category Section and Mobile Flash Sale Theme Repairs

- [x] 2.1 Replace hardcoded `bg-white`, `from-white` gradient mask, and arrow button styles in `CategorySection.svelte` with `bg-[var(--color-bg-surface)]` and semantic tokens, and verify category rail in dark mode
- [x] 2.2 Replace hardcoded `bg-white` in `FlashSaleSection.svelte` with `bg-[var(--color-bg-surface)]`, and verify mobile flash deals section

## 3. Product Sections, Trust Grid, Header, and Global Tokens

- [x] 3.1 Update `ProductSection.svelte` default `bgColor` to `'bg-[var(--color-bg-surface)]'` and update `+page.svelte` Best Sellers `bgColor` to match, and verify alternating section contrast
- [x] 3.2 Update `TrustGrid.svelte` hover background and `Header.svelte` search focus background to use `bg-[var(--color-bg-surface)]`, and verify interactive states
- [x] 3.3 Update `MobileDrawer.svelte` phone brand button backgrounds to use `bg-[var(--color-bg-surface)]` and enhance dark status badge tokens in `layout.css`, and verify build succeeds with `npm run check` and `npm run build`
