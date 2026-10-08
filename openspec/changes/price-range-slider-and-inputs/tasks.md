## 1. Price Range Component

- [x] 1.1 Create `src/lib/components/search/PriceRangeFilter.svelte` featuring the dual-thumb range slider (৳0 – ৳10,000), highlighted active fill track, side-by-side Min and Max numeric inputs with `৳` prefix, and compact quick preset chips.

## 2. Desktop & Mobile Integration

- [x] 2.1 Update `src/lib/components/search/SearchSidebar.svelte` to integrate `PriceRangeFilter`, replacing the old radio button list.
- [x] 2.2 Update `src/lib/components/search/SearchMobileFilterDrawer.svelte` to integrate `PriceRangeFilter` for mobile devices.

## 3. Search Page State & Live Filtering

- [x] 3.1 Update `src/routes/search/+page.svelte` to manage continuous `minPrice` and `maxPrice` state, filter `displayedProducts` live in real time, and update active filter count.
- [x] 3.2 Update active filter badges in `src/routes/search/+page.svelte` to render a dismissible `Price: ৳Min – ৳Max` pill with instant clear action.

## 4. Verification & Validation

- [x] 4.1 Run `npm run check` and verify 0 Svelte/TypeScript errors.
- [x] 4.2 Run `npm run build` and verify successful production bundle compilation.
