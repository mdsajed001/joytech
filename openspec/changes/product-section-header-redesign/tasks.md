## 1. ProductSection Header Restructure

- [x] 1.1 Restructure the header markup in `src/lib/components/ProductSection.svelte` into a stacked editorial column, positioning the kicker, `<h2>` title, and contextual `subtitle` together with `min-w-0 flex-1` and `whitespace-nowrap`
- [x] 1.2 Update the right action slot in `src/lib/components/ProductSection.svelte` to isolate `viewAllLink` with `shrink-0`, allowing both subtitle and action link to render concurrently without layout collision

## 2. Verification & Validation

- [x] 2.1 Run `cmd /c npm run check` to verify TypeScript and Svelte diagnostics pass with 0 errors and 0 warnings
- [x] 2.2 Visually verify the live New Arrivals header in the browser across mobile and desktop viewports, confirming that "New Arrivals" and "LATEST ADDITIONS" remain intact without premature word wrapping and the subtitle renders cleanly beneath the headline
