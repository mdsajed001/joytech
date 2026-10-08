## 1. Support Widget Visibility

- [x] 1.1 Update `src/routes/+layout.svelte` to conditionally render `<SupportWidget />` only when `$page.url.pathname !== '/cart'`, and verify the widget disappears on `/cart`.

## 2. Cart CTA Design System & Background Bubble Alignment

- [x] 2.1 Update the mobile sticky checkout button in `src/routes/cart/+page.svelte` to use `cta-blue-bubble`, `rounded-[var(--radius-sm)]`, `min-h-[46px]`, and `font-black`, and verify visual styling and gradient.
- [x] 2.2 Update the desktop checkout CTA in `src/lib/components/cart/OrderSummary.svelte` with `cta-blue-bubble`, `rounded-[var(--radius-sm)]`, and `min-h-[48px]`, and verify consistency.
- [x] 2.3 Update the confirmation button in `src/lib/components/cart/CheckoutModal.svelte` with `cta-blue-bubble` and `rounded-[var(--radius-sm)]`, and verify modal appearance.

## 3. Verification & Typecheck

- [x] 3.1 Run `npm run check` to verify zero type or markup errors.
- [x] 3.2 Test mobile and desktop viewport layouts to confirm clean button geometry and unobstructed checkout flow.
