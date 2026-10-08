## 1. Cart State & Animation Keyframes

- [x] 1.1 Add `lastAddedTimestamp = $state<number>(0)` to `CartState` in `src/lib/state.svelte.ts` and update it on `addItem`, verifying state update
- [x] 1.2 Define `@keyframes badge-pop` and `.badge-pop-active` class in `src/routes/layout.css` for the spring scale pop micro-interaction

## 2. Mobile Header Cart Component Integration

- [x] 2.1 Add the mobile cart button (`href="/cart"`) with `ShoppingBag01Icon` and floating count badge in `Header.svelte` on `< sm` viewports
- [x] 2.2 Wire reactive animation effect in `Header.svelte` listening to `cartState.lastAddedTimestamp` to trigger `.nod-lift-active` and `.badge-pop-active`
- [x] 2.3 Ensure desktop cart button in `Header.svelte` also shares the animated nod and badge pop feedback

## 3. Verification & Responsive Checks

- [x] 3.1 Verify with `npm run check` for TypeScript and Svelte syntax correctness
- [x] 3.2 Test on mobile viewport (390px): verify cart icon renders beside hamburger menu, navigation to `/cart` works, and clicking "Add to Cart" triggers icon nod and badge count pop
