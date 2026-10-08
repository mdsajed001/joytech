## Context

See `proposal.md` for motivation. Currently, `Header.svelte` imports `page` from `$app/stores` and derives route-specific flags like `isProductPage`. The mobile search bar is contained within an `<div class="md:hidden px-4 pb-3">` block right below the main header bar, unconditionally rendered on all pages.

## Goals / Non-Goals

**Goals:**
- Cleanly suppress the mobile search container on `/cart` and `/profile` routes (and subroutes) without layout shifts or residual padding.
- Maintain full reactivity during client-side navigation between pages (e.g. clicking "Cart" from the homepage instantly hides the search row, and navigating back restores it).
- Keep desktop/tablet header search (`hidden md:flex`) untouched.

**Non-Goals:**
- Removing or altering the search functionality on desktop or discovery pages.
- Altering the bottom navigation or customer care widget on cart/profile pages.

## Decisions

### Decision: Derive route state directly in `Header.svelte` with optional prop override
- **Choice**: Derive `hideMobileSearch` inside `Header.svelte` based on `$page.url.pathname`:
  `let hideMobileSearch = $derived(customHideSearch ?? ($page?.url?.pathname?.startsWith('/cart') || $page?.url?.pathname?.startsWith('/profile') ?? false));`
- **Rationale**: Keeps `Header.svelte` self-contained and DRY so that any layout embedding `Header` gets the correct behavior automatically, while retaining flexibility if parent callers want to override it.
- **Alternatives Considered**:
  - *Passing a flag from `+layout.svelte`*: Works, but requires coordinating props through layouts and makes `Header` less autonomous.

### Decision: Use `{#if !hideMobileSearch}` wrapping the entire mobile search block
- **Choice**: Wrap the `<div class="md:hidden px-4 pb-3">` block in an `{#if !hideMobileSearch}` block.
- **Rationale**: Eliminates DOM nodes and vertical padding entirely when hidden, avoiding empty gaps or border artifacts below the main header bar.
- **Alternatives Considered**:
  - *CSS classes like `class:hidden={hideMobileSearch}`*: Keeps the DOM nodes and can leave border or layout quirks if child classes conflict. `{#if}` is cleaner and idiomatic in Svelte 5.

## Risks / Trade-offs

- **[Risk]** User arrives on `/cart` and desires to search for another item directly from the top bar.  
  → **Mitigation**: Users on `/cart` have cross-sell recommendation rails with add-to-cart buttons directly on the page, and the mobile bottom navigation bar provides 1-tap access back to the catalog / home where search is prominent.
