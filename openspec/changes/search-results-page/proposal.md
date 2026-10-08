## Why

Joytech users currently have no dedicated search results page when typing a query and submitting the search form (pressing Enter or tapping the search CTA button). Instead, submission currently triggers only a temporary toast message while keeping the user on their existing view. This change introduces a dedicated, high-performance Search Results page at `/search?q=...` that renders matching products in standard product cards, complete with a desktop left sidebar filter, responsive mobile filter controls, relevance sorting, and a graceful zero-results fallback state.

## What Changes

- **Route Addition (`/search`)**: Add a new SvelteKit page route `src/routes/search/+page.svelte` that reads the query parameter `q` from the URL, queries the catalog, and presents matching products.
- **Search Submission & Navigation**:
  - Update `Header.svelte` and `+layout.svelte` to navigate to `/search?q=<query>` upon form submission (pressing Enter or clicking the search CTA button).
  - Search submission waits for Enter or CTA tap rather than navigating on every keystroke.
  - Automatically close the mobile search overlay upon navigating to the search results page.
  - Keep the search input populated with the current query when navigating to or loading the search page.
- **Desktop Left Sidebar Filter**:
  - Implement a sticky left sidebar filter on desktop (`md:` / `lg:` breakpoints).
  - Filters include: Category checklist/chips, Brand checklist (Apple, Samsung, Spigen, Anker, Baseus, etc.), Price Range slider/filters, and In-Stock Only toggle.
  - Clear All Filters button.
- **Mobile Filter Drawer & Summary Bar**:
  - A compact horizontal summary bar on mobile displaying matching product count and quick filter toggle button + sort dropdown.
  - Tapping "Filter" on mobile opens a clean slide-up drawer containing the same filter controls.
- **Sorting Controls**:
  - Support sorting by: Relevance (default), Price: Low to High, Price: High to Low, Highest Rated, and Highest Discount.
- **Product Card Grid**:
  - Display matching products using the existing `ProductCard.svelte` component (2 columns on mobile, 3–4 columns on desktop beside the sidebar).
  - Include quick Add to Cart and direct navigation to product detail pages.
- **Zero-Results Experience**:
  - When a query yields 0 products, display a user-friendly empty state with query feedback, recommended search chips (e.g., iPhone 16 Pro Max, Spigen, Anker), and a curated "Popular Genuine Accessories" product grid so users never encounter a dead end.

## Capabilities

### New Capabilities
- `catalog-search`: Covers search query parsing, catalog filtering algorithms (multi-token matching across titles, brands, categories, compatible phone models, and Bengali titles), URL search synchronization, sidebar filtering, sorting, and empty state fallbacks.

### Modified Capabilities
<!-- None: No existing specs to modify -->

## Impact

- **New Files**:
  - `src/routes/search/+page.svelte`: Search results page layout, reactive query binding, product grid, and filter state.
  - `src/lib/components/search/SearchSidebar.svelte`: Desktop left sidebar filter column.
  - `src/lib/components/search/SearchMobileFilterDrawer.svelte`: Mobile filter drawer modal.
- **Modified Files**:
  - `src/lib/components/Header.svelte`: Update search form submission to route to `/search?q=...`.
  - `src/routes/+layout.svelte`: Update `handleSearch` to navigate cleanly to `/search?q=...`.
- **Dependencies**: No external dependencies added; uses existing `@hugeicons/core-free-icons`, Tailwind CSS, and SvelteKit navigation (`goto`).
