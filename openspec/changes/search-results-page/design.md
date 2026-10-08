## Context

Joytech stores all catalog products in `src/lib/data/catalog.ts` (`PRODUCTS`, `CATEGORIES`, `PHONE_BRANDS`, `PHONE_MODELS`). Product rendering is standardized through `src/lib/components/ProductCard.svelte`. Currently, the global header search form does not navigate to a results page; it only triggers a temporary toast. This design specifies the architecture for a dedicated `/search` route featuring a desktop left sidebar filter, mobile filter drawer, multi-token search engine, and reactive catalog filtering.

See [proposal.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/search-results-page/proposal.md) for background and motivation.

## Goals / Non-Goals

**Goals:**
- Provide a dedicated, shareable search route at `/search?q=<query>`.
- Execute fast, client-side multi-token search across English titles, Bengali titles, brands, categories, compatible phone models, and feature tags.
- Present a desktop left sidebar filter column (Categories, Brands, Price range, In-stock) and a responsive mobile filter drawer.
- Support multi-factor sorting (Relevance, Price Low-High, Price High-Low, Highest Rated, Highest Discount).
- Implement an empty state with search suggestions and fallback recommended product cards.
- Restrict search navigation to explicit user submission (pressing Enter or tapping the search CTA button).

**Non-Goals:**
- External server-side search indexing (Elasticsearch / Meilisearch / Algolia) since the catalog is currently client-side and static.
- Live URL navigation on every intermediate keystroke (keystrokes stay local to the input; navigation occurs on Enter/Submit).
- Full text search across blog posts or static legal pages.

## Decisions

### 1. URL Parameter as Single Source of Truth
- **Decision:** Drive search state from `$page.url.searchParams.get('q')`.
- **Rationale:** Enables direct links, browser history (back/forward), page reloads, and clean integration across both desktop and mobile header inputs.
- **Alternatives Considered:** Storing query in a Svelte store without URL synchronization (rejected: would break bookmarking and sharing).

### 2. Multi-Token Search Algorithm
- **Decision:** Break the query string into lowercase whitespace-delimited tokens. Each product must match all tokens across any of its searchable fields:
  ```ts
  const tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  // Every token must match at least one attribute of the product:
  const matches = tokens.every(token => 
    product.name.toLowerCase().includes(token) ||
    (product.nameBn && product.nameBn.includes(token)) ||
    product.brand.toLowerCase().includes(token) ||
    product.categoryId.toLowerCase().includes(token) ||
    product.compatibleModels.some(model => model.toLowerCase().includes(token)) ||
    product.features?.some(f => f.toLowerCase().includes(token))
  );
  ```
- **Rationale:** Allows flexible multi-intent queries like `"iphone 16 spigen"`, `"anker charger"`, or `"s24 ultra case"`.
- **Alternatives Considered:** Single exact substring match on product name only (rejected: too strict, fails on multi-word combinations).

### 3. Layout Architecture: Desktop Sidebar vs. Mobile Drawer
- **Decision:**
  - On desktop (`md:` and up): Two-column layout with a fixed-width left sidebar (`w-64 shrink-0`) and an expansive product grid (`grid-cols-2 md:grid-cols-3 lg:grid-cols-4`).
  - On mobile (`< md`): Clean full-width product grid (2 columns) with a top sticky controls bar (result count, "Filter" button with badge, and compact sort select). Tapping "Filter" opens a slide-up bottom sheet drawer with the same filter controls.
- **Rationale:** Follows top e-commerce standards (Amazon, Apple, StarTech) providing maximum visual clarity and comfortable tap targets on phones.
- **Alternatives Considered:** Top horizontal chips on desktop (rejected: user specifically requested left sidebar filter).

### 4. Navigation Flow: "Wait for Enter"
- **Decision:**
  - Typing in the search input does NOT navigate immediately.
  - When the user presses Enter or clicks/taps the Search CTA button, the header executes `goto('/search?q=' + encodeURIComponent(query))`.
  - If mobile search modal is open, it automatically closes so the user directly sees the search results page.
  - When the search page loads or query changes in the URL, the header input is kept in sync with the active query.
- **Rationale:** Prevents disorienting page re-renders while typing and honors the user's explicit preference.

## Risks / Trade-offs

- **[Risk]** Bengali or special character encoding in URLs.
  - **Mitigation:** Wrap URL parameter reading in `decodeURIComponent` with try/catch fallbacks.
- **[Risk]** Search query with zero matches looks broken.
  - **Mitigation:** Render a rich zero-results empty state featuring quick-search chips and a "Popular Genuine Accessories" product cards rail.
- **[Risk]** Filter state reset when changing search query.
  - **Mitigation:** Reset brand and category filters when a distinctly new search query is submitted, but maintain sort order.
