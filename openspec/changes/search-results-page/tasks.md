## 1. Search Navigation & Header Submission

- [x] 1.1 Update search form submission in `src/lib/components/Header.svelte` to execute `goto('/search?q=' + encodeURIComponent(query))` on Enter or Search CTA click, and verify Enter navigation redirects to the `/search` route.
- [x] 1.2 Update `handleSearch` in `src/routes/+layout.svelte` to perform navigation to `/search?q=...` and verify global search events route to the results page.
- [x] 1.3 Ensure mobile search modal closes upon navigation and the header search input stays in sync with the active query parameter.

## 2. Search Page Route & Multi-Token Matching

- [x] 2.1 Create `src/routes/search/+page.svelte` with reactive URL query reading and multi-token matching across names (English & Bengali), brands, categories, compatible phone models, and features.
- [x] 2.2 Implement result sorting (Relevance, Price: Low to High, Price: High to Low, Highest Rated, Highest Discount) and verify sort selector reorders products as expected.

## 3. Desktop Left Sidebar & Mobile Filter Drawer

- [x] 3.1 Create `src/lib/components/search/SearchSidebar.svelte` featuring sticky positioning, category checkboxes, brand checkboxes, in-stock switch, and a "Clear All Filters" button for desktop.
- [x] 3.2 Create `src/lib/components/search/SearchMobileFilterDrawer.svelte` with a slide-up sheet and touch-friendly controls for mobile viewports.
- [x] 3.3 Connect the sidebar and drawer filter states to the product list and verify selecting filters immediately refines the displayed product cards.

## 4. Responsive Product Grid & Zero-Results Fallback

- [x] 4.1 Display filtered products using `ProductCard.svelte` in a 2-column mobile and 3-4 column desktop grid beside the left sidebar.
- [x] 4.2 Implement an empty state when a query returns zero results, featuring suggestion pills and a "Popular Genuine Accessories" product cards rail.
- [x] 4.3 Verify Add to Cart interactions and product detail page navigation function properly from search result cards.

## 5. Build Verification & Quality Assurance

- [x] 5.1 Run `npm run check` and verify 0 Svelte/TypeScript errors.
- [x] 5.2 Run `npm run build` and verify production bundle compiles successfully.
