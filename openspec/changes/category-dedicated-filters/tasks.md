## 1. Data Schema & Category Facets Registry

- [x] 1.1 Update `src/lib/types.ts` to add `CategoryFacetGroup`, `FacetOption`, and optional `attributes` on `Product`.
- [x] 1.2 Create `src/lib/data/facets.ts` with the declarative `CATEGORY_FACETS` registry for all 6 core categories.
- [x] 1.3 Enrich existing products in `src/lib/data/catalog.ts` with category-specific attribute metadata.

## 2. Navigation & URL Parameter Routing

- [x] 2.1 Update header category navigation links in `src/lib/components/Header.svelte` to route to `/search?category={cat.id}`.
- [x] 2.2 Update mobile navigation drawer links in `src/lib/components/MobileDrawer.svelte` to route to `/search?category={cat.id}`.
- [x] 2.3 Update `src/routes/search/+page.svelte` to initialize and react to `?category=` and `?cat=` URL query parameters.

## 3. Sidebar & Mobile Drawer Category Filters

- [x] 3.1 Update `src/lib/components/search/SearchSidebar.svelte` to render the dynamic category-specific filter section when a single category is active.
- [x] 3.2 Update `src/lib/components/search/SearchMobileFilterDrawer.svelte` to render the dynamic category-specific filter section on mobile devices.
- [x] 3.3 Connect facet selections to `displayedProducts` filtering and active filter pills in `src/routes/search/+page.svelte`.

## 4. Verification & Validation

- [x] 4.1 Run `npm run check` and verify 0 Svelte/TypeScript diagnostics.
- [x] 4.2 Run `npm run build` and verify successful production bundle compilation.
