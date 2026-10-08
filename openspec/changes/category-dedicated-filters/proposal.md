## Why

When customers click a specific category from the top navigation bar (e.g., Cases & Covers, Fast Chargers, Screen Protectors), they enter the search and catalog page with focused shopping intent. Currently, the filter sidebar only shows generic criteria (brand, price, in-stock), omitting the specialized technical and stylistic attributes that buyers prioritize (e.g., charger wattage and port count, case style and drop protection, glass privacy and coverage). Adding dedicated, category-specific filter sections dramatically accelerates product discovery and elevates the shopping experience.

## What Changes

- **Navigation Integration**:
  - Update category links in `src/lib/components/Header.svelte` and `src/lib/components/MobileDrawer.svelte` to route to `/search?category={cat.id}`, seamlessly passing category intent into the search page.
- **Context-Aware Sidebar & Drawer Filters**:
  - In both `SearchSidebar.svelte` and `SearchMobileFilterDrawer.svelte`, detect when a single category is selected and dynamically inject a dedicated **Category Specifics** filter section tailored specifically to that product type:
    - **Cases & Covers (`cases`)**: Case Style / Finish (Clear, Frosted, Rugged Armor, Slim, Leather) and Special Features (Ring Kickstand, Camera Slider, MagSafe).
    - **Screen Protectors (`screen-glass`)**: Glass Type (HD Clear, 28° Anti-Spy Privacy, Matte Anti-Glare, UV Liquid) and Fit/Coverage (Case-Friendly, Full Coverage).
    - **Fast Chargers (`chargers`)**: Wattage (20W-30W, 45W, 65W-67W, 100W+) and Port Configuration (1x USB-C, Dual USB-C, 3+ Ports).
    - **Cables & Docks (`cables`)**: Connector Type (USB-C to USB-C, USB-C to Lightning, USB-A to C) and Cable Length (1m / 3ft, 2m / 6ft, 3m).
    - **MagSafe Accessories (`magsafe`)**: Accessory Sub-Type (Magnetic Wallets, Car Mounts, Power Banks, 3-in-1 Stands, Ring Grips) and Qi2 standard.
    - **Audio & Earphones (`audio`)**: Wearing Style (TWS Earbuds, Over-Ear Headphones, Sports Neckband) and Noise Cancellation (Hybrid ANC, ENC Mic).
- **Product Data & Query Engine Enrichment**:
  - Enrich catalog products in `src/lib/data/catalog.ts` with structured category attributes and facets.
  - Update `src/routes/search/+page.svelte` to parse, filter, and synchronize active category facets via reactive state and URL search parameters.
  - Display dedicated active filter pills with instant clear actions.

## Capabilities

### New Capabilities
- `category-dedicated-filters`: Dynamically presents dedicated, specialized filter facet sections in the search sidebar and mobile drawer based on the selected category, allowing real-time filtering of specialized attributes (wattage, material, glass type, ports, etc.).

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/types.ts`: Define types for category facets and product attributes.
  - `src/lib/data/catalog.ts`: Enrich catalog products with category-specific facet metadata.
  - `src/lib/components/Header.svelte`: Update category navigation links to point to `/search?category={cat.id}`.
  - `src/lib/components/MobileDrawer.svelte`: Update mobile drawer category navigation links.
  - `src/lib/components/search/SearchSidebar.svelte`: Render dynamic category-specific filter sections on desktop.
  - `src/lib/components/search/SearchMobileFilterDrawer.svelte`: Render dynamic category-specific filter sections on mobile.
  - `src/routes/search/+page.svelte`: Wire query parameter synchronization, multi-facet filtering logic, and active filter tags.
- **Dependencies**: None. Pure Svelte 5 runes and existing Tailwind CSS utility system.
