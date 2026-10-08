## 1. Design Token & Badge Component Migration

- [x] 1.1 Update `CartItemCard.svelte` outer shell and thumbnail radii to `--radius-md` and `--radius-sm`, and replace hardcoded Slate background/border utilities with `--color-bg-subtle`, `--color-border-default`, and `--color-border-strong`
- [x] 1.2 Import and replace hardcoded `rose-600` discount overlay with `<Badge variant="accent" size="sm">` component, verifying badge matches homepage product grid badges

## 2. Pricing Hierarchy & Action Controls Layout

- [x] 2.1 Refactor unit price and line item total rendering in `CartItemCard.svelte` so item total is rendered only when `quantity > 1`, verifying `qty = 1` items render no duplicate price numbers
- [x] 2.2 Remove internal mobile horizontal divider line (`border-t`) and align mobile bottom controls bar (stepper on left, Wishlist & Delete action icons on right)

## 3. Verification & Diagnostic Check

- [x] 3.1 Run `npm run check` to verify TypeScript and Svelte diagnostics pass with 0 errors
- [x] 3.2 Verify cart item card layout on mobile and desktop viewports across both light and dark themes

