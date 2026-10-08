## 1. CSS Utility Definition

- [x] 1.1 In `src/routes/layout.css`, add the `.cta-blue-bubble` utility class with dual radial corner gradients (top-right 22% white, bottom-left 12% white) and hover states, and verify the stylesheet compiles without errors

## 2. Component Integration

- [x] 2.1 In `src/lib/components/Button.svelte`, update `variantStyles.primary` to apply `cta-blue-bubble` and verify buttons rendered via `<Button variant="primary">` display the corner bubbles
- [x] 2.2 In `src/lib/components/ProductCard.svelte`, update the Buy Now button to apply `cta-blue-bubble` and verify corner bubbles appear on all product cards
- [x] 2.3 In `src/lib/components/Header.svelte`, update desktop and mobile search submit buttons to apply `cta-blue-bubble`
- [x] 2.4 In `src/lib/components/Hero.svelte`, update the flash sale mini Add button to apply `cta-blue-bubble`
- [x] 2.5 In `src/routes/cart/+page.svelte`, `src/routes/offers/+page.svelte`, and `src/routes/profile/+page.svelte`, update the primary action buttons to apply `cta-blue-bubble`

## 3. Verification

- [x] 3.1 Run `npm run check` and `npm run build` to verify zero TypeScript, Svelte, or build errors
- [x] 3.2 Verify visually in the browser that corner bubbles appear subtly on all blue CTAs, text remains crisp and readable, and hover transitions are smooth
