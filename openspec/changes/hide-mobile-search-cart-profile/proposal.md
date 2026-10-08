## Why

On mobile and phone viewports (`< md`), the global header renders an omnipresent search input directly beneath the navigation bar. While helpful on the homepage, catalog, and product discovery routes, this search bar consumes valuable vertical screen space on dedicated task-focused pages—specifically the shopping cart (`/cart`) and customer profile (`/profile`) pages. Hiding the mobile search bar on these pages eliminates visual clutter, reduces accidental taps, and grants immediate visibility to cart items, order summaries, profile shortcuts, and personal account details.

## What Changes

- Suppress the secondary mobile search row in `Header.svelte` on viewports below tablet breakpoint (`< md`) whenever the active route is `/cart` or `/profile` (including any child routes).
- Preserve the desktop/tablet search bar in the main header bar for users on `md:` breakpoints and larger screens.
- Keep the mobile search row active and visible on all other discovery-oriented pages (home, category views, product details, search results, etc.).

## Capabilities

### New Capabilities
- `header-search-visibility`: Controls conditional visibility of the mobile header search bar based on route context (`/cart` and `/profile`).

### Modified Capabilities
<!-- No existing capabilities modified -->

## Impact

- `src/lib/components/Header.svelte`: Conditionally hide the mobile search block (`<div class="md:hidden px-4 pb-3">`) when current route pathname matches `/cart` or `/profile`.
- No breaking changes, external API modifications, or database changes.
