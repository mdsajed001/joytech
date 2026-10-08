## 1. Mobile Header & Flash Sale Section Layout Updates

- [x] 1.1 In `src/lib/components/Header.svelte`, move the mobile menu trigger button to the right side of the main header bar for `<lg` viewports while keeping the logo on the left.
- [x] 1.2 In `src/lib/components/FlashSaleSection.svelte`, update the section header layout so that on mobile:
  - The left column stacks the "⚡ Flash Sale" heading on top with the "Up to 40% OFF" badge directly underneath.
  - The right column right-aligns and stacks the "Ends in:" label directly above the countdown digit blocks.
- [x] 1.3 Ensure clean responsive layout on viewports ≥640px and desktop views.

## 2. Validation & Verification

- [x] 2.1 Run `npm run check` and verify zero Svelte/TypeScript errors.
- [x] 2.2 Run `npm run build` to verify clean production compilation.
- [x] 2.3 Verify in browser across mobile viewports (<640px and <1024px) that the hamburger button sits on the right, and the Flash Sale header renders cleanly in two non-wrapping columns.
