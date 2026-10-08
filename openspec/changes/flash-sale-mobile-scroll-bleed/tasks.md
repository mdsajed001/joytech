## 1. FlashSaleSection Mobile Scroll Implementation

- [x] 1.1 Update the scroll container in `src/lib/components/FlashSaleSection.svelte` to add full-bleed negative margins and internal padding (`-mx-4 px-4 sm:mx-0 sm:px-0`).
- [x] 1.2 Add scroll-snap padding (`scroll-pl-4 scroll-pr-4 sm:scroll-p-0`) to ensure snap alignment matches the 16px page gutter at rest.
- [x] 1.3 Verify existing card widths (`w-[180px]`) and ensure no gradient mask or blur cutoff is present on the scroll track.

## 2. Validation & Verification

- [x] 2.1 Run `npm run check` and verify zero Svelte/TypeScript errors.
- [x] 2.2 Run `npm run build` to verify clean production compilation.
- [x] 2.3 Verify in browser across mobile viewports (<640px) that Flash Sale cards scroll smoothly edge-to-edge without 16px clipping, while tablet/desktop grid layout remains intact.
