## 1. Shared Search State

- [x] 1.1 In `src/lib/state.svelte.ts`, export `SearchState` and `searchState` singleton with `isMobileOpen = $state(false)`, `openMobile()`, and `closeMobile()`, verifying type compatibility.

## 2. Header Search Integration

- [x] 2.1 In `src/lib/components/Header.svelte`, connect `searchState.isMobileOpen` to the existing mobile search overlay lifecycle (`openMobileSearch` and `closeMobileSearch`), verifying the overlay opens and locks body scroll when `searchState.isMobileOpen` is set.

## 3. Hero Search Area Trigger

- [x] 3.1 In `src/lib/components/AuthenticityBanner.svelte`, intercept click and focus on mobile viewports (`< 768px`) on the search input and search button to call `searchState.openMobile()` without transferring query text.
- [x] 3.2 Ensure on desktop viewports (`>= 768px`), standard inline search behavior is preserved.

## 4. Verification & Validation

- [x] 4.1 Run `npm run check` and verify 0 Svelte/TypeScript errors.
- [x] 4.2 Run `npm run build` and verify successful production bundle compilation.
