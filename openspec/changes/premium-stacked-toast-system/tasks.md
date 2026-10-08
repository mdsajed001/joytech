## 1. State Store Upgrade

- [x] 1.1 Update `src/lib/state.svelte.ts` to manage a reactive array of `ToastPayload` items, supporting `cart`, `success`, `warning`, `error`, `info`, contextual action callbacks, and backwards-compatible `showToast` string overload

## 2. Toast Components & Dissolving Background Engine

- [x] 2.1 Create `src/lib/components/toast/ToastItem.svelte` with acrylic glassmorphism, specular top highlight, full-background dissolving progress layer, pause on hover/touch, and action/close buttons
- [x] 2.2 Create `src/lib/components/toast/ToastContainer.svelte` with vertical spring stacking, responsive top-right desktop / top-center mobile positioning, and dismiss transitions

## 3. Integration & Consolidation

- [x] 3.1 Mount `ToastContainer.svelte` in `src/routes/+layout.svelte` and remove obsolete legacy toast markup
- [x] 3.2 Remove duplicate ad-hoc toast markup from `src/routes/cart/+page.svelte`
- [x] 3.3 Update `addItem(product)` in `src/lib/state.svelte.ts` to dispatch `cart` type toasts with "View Cart" action button and product name

## 4. Verification & Polish

- [x] 4.1 Run `npm run check` to verify zero type, syntax, or Svelte compiler errors across the codebase
- [x] 4.2 Verify in the running dev server that toasts stack smoothly, the background color organically dissolves out over time, hover pauses the timer, "View Cart" navigates properly, and dismiss crosses function instantly
