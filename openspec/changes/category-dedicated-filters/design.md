## Context

Currently, the search page (`/search`) operates primarily on free-text query string `?q=...` with generic global filters (categories, brands, price range, in-stock, and device model). Clicking header categories currently links to `#anchors` instead of search results. When a customer navigates to browse a specific category, there are no category-tailored filters (such as wattage for chargers or glass type for screen protectors).

See [proposal.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/category-dedicated-filters/proposal.md) for motivation.

## Goals / Non-Goals

**Goals:**
- Connect category navigation links in Header and MobileDrawer to `/search?category={catId}`.
- Create a declarative `CATEGORY_FACETS` configuration defining the dedicated filter groups for all 6 core categories.
- Render dynamic, category-specific filter sections in `SearchSidebar.svelte` (desktop) and `SearchMobileFilterDrawer.svelte` (mobile) when a single category is active.
- Enrich `Product` items in `catalog.ts` with structured category attributes (`attributes?: Record<string, string[]>`).
- Integrate real-time multi-facet filtering in `displayedProducts` on `/search`.
- Show dismissible active filter badges for dedicated category facets.

**Non-Goals:**
- Creating separate standalone `/category/...` route pages; keeping a unified, robust `/search` catalog engine.
- Full server-side backend facet indexing (all client-side catalog filtering with zero network lag).

## Decisions

### 1. Unified Facet Schema & Registry
- **Decision:** Define a clear, extensible facet interface:
  ```ts
  export interface FacetOption {
    id: string;
    label: string;
    badge?: string;
  }

  export interface CategoryFacetGroup {
    id: string;
    title: string;
    options: FacetOption[];
  }
  ```
- **Rationale:** This keeps filter definitions data-driven. Adding new options or modifying copy does not require rewriting UI components.

### 2. Dedicated Facet Definitions per Category
- **`cases` (Cases & Covers)**:
  - `caseStyle`: Clear / Transparent, Matte / Frosted, Rugged Armor, Slim Barely-There, Leather Folio.
  - `features`: Ring Kickstand, Camera Slider, MagSafe Magnet.
- **`screen-glass` (Screen Protectors)**:
  - `glassType`: Ultra-HD Clear, 28° Privacy Anti-Spy, Matte Anti-Glare, UV Liquid.
  - `coverage`: Case-Friendly Cut, Edge-to-Edge Full Adhesive.
- **`chargers` (Fast Chargers)**:
  - `wattage`: 20W – 30W, 45W (Samsung SFC), 65W – 67W (Laptops), 100W+ (Heavy Duty).
  - `ports`: Single USB-C, Dual USB-C, 3+ Ports Multi-Device.
- **`cables` (Cables & Docks)**:
  - `connector`: USB-C to USB-C, USB-C to Lightning, USB-A to USB-C.
  - `length`: 1m / 3ft, 2m / 6ft, 3m / 10ft.
- **`magsafe` (MagSafe Accessories)**:
  - `subType`: MagSafe Power Banks, Magnetic Wallets, Car Vent Mounts, 3-in-1 Charging Trees, Ring Grips.
- **`audio` (Audio & Earphones)**:
  - `audioStyle`: TWS Earbuds, Over-Ear Headphones, Sports Neckband, Wired In-Ear.
  - `noiseControl`: Hybrid ANC, ENC Call Clear, Transparency Mode.

### 3. URL Parameter Standardization
- **Decision:** Support both `?category=chargers` and `?cat=chargers` on `/search`, preserving any active query `q=...`.
- **Rationale:** Ensures clean routing from header links, promotional cards, or external bookmarks.

## Risks / Trade-offs

- **[Risk]** Missing attributes on newly added products in catalog could hide them from faceted searches.
  - **Mitigation:** Attribute filters use loose string matching against both `product.attributes` and existing `product.features` tags as a fallback.
- **[Risk]** Drawer height on mobile with many filter groups.
  - **Mitigation:** Use compact chip/checkbox layouts with collapsible or scroll-contained containers.
