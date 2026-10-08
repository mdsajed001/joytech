## 1. Banner Layout & Corner Geometry

- [x] 1.1 Update `src/lib/components/MobileDrawer.svelte` to remove outer border-radius (`rounded-none`) and apply full-bleed edge-to-edge width (`-mx-5 px-5 py-3.5`).
- [x] 1.2 Update the inner white CTA button in `src/lib/components/MobileDrawer.svelte` to use consistent `--radius-sm` (8px) corner radius (`rounded-[var(--radius-sm)]`).

## 2. Animation Decoupling

- [x] 2.1 Remove breathing scale animation from `.shop-by-phone-container` and isolate breathing expansion and glow strictly to ambient bubbles.

## 3. Verification & Validation

- [x] 3.1 Run `npm run check` and verify 0 Svelte/TypeScript errors.
- [x] 3.2 Run `npm run build` and verify successful production bundle compilation.
