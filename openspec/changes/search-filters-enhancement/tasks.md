## 1. Search Results Page State Machine

- [x] 1.1 Add device compatibility state (`selectedPhoneBrand`, `selectedPhoneModel`) and feature flags (`magsafeOnly`, `onSaleOnly`) to `src/routes/search/+page.svelte`, and verify filter computation restricts products accordingly.
- [x] 1.2 Add removable filter badges for Phone Model, MagSafe, and On Sale to the active filters bar in `src/routes/search/+page.svelte`, and verify clicking a badge removes that specific filter.

## 2. Desktop Left Sidebar Enhancements

- [x] 2.1 Update `src/lib/components/search/SearchSidebar.svelte` with a 2-tier Phone Brand and Phone Model selector matching `PHONE_BRANDS` and `PHONE_MODELS`.
- [x] 2.2 Add "MagSafe / Magnetic" and "On Sale / Deals" toggle controls to `SearchSidebar.svelte`, and verify desktop sidebar controls update the search results.

## 3. Mobile Filter Drawer Enhancements

- [x] 3.1 Update `src/lib/components/search/SearchMobileFilterDrawer.svelte` to include Phone Brand and Phone Model selectors with touch-friendly options.
- [x] 3.2 Add MagSafe and On Sale filter options to `SearchMobileFilterDrawer.svelte`, and verify applying filters in the mobile drawer refines the product grid.

## 4. Verification & Validation

- [x] 4.1 Run `npm run check` and verify 0 Svelte/TypeScript diagnostics.
- [x] 4.2 Run `npm run build` and verify successful production bundle compilation.
