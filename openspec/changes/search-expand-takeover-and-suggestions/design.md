## Context

Currently in `Header.svelte`, the mobile search row sits directly below the top nav bar:
```html
<div class="md:hidden px-4 pb-3">
  <form onsubmit={handleSubmit} class="w-full">
    <div class="relative flex items-center w-full h-11 bg-[var(--color-bg-subtle)] border border-[var(--color-border-strong)] rounded-full ...">
      ...
    </div>
  </form>
</div>
```
Tapping the input currently only focuses it in place, leaving the rest of the page visible and cluttered. Desktop search also has no live autocomplete suggestion dropdown.

## Goals / Non-Goals

**Goals:**
- Provide a smooth mobile search takeover (`100vw` × `100vh`) on phone tap with solid white background (`fixed inset-0 z-50`).
- Ensure zero vertical drift: the search field stays at the exact top header height.
- Center the placeholder and active query horizontally (`text-center`).
- Smoothly animate the search container and action button from capsule (`rounded-full`) to boxy (`rounded-[var(--radius-sm)]`).
- Auto-focus the input on open to raise the virtual keyboard.
- Include a back arrow `[<]` button on the left to dismiss the takeover and restore normal page view.
- Show popular search tags when the query is empty.
- Show live matching products with thumbnails and prices as the user types.
- Provide desktop in-place autocomplete dropdown with keyboard navigation and click-away dismiss.

**Non-Goals:**
- Replacing the global catalog data structure.
- Breaking existing header navigation and routing.

## Decisions

### 1. Mobile Full-Screen Takeover Component Architecture
- **Choice**: Integrate the takeover directly in `Header.svelte` (or via a dedicated `SearchOverlay.svelte` component imported into `Header.svelte`).
- **State**: `isMobileSearchOpen: boolean`. When `true`, body scroll is locked (`overflow-hidden` on document body).
- **Animation**: CSS transitions on `border-radius` (`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`) morph the outer search container from `rounded-full` to `rounded-[var(--radius-sm)]` and button from `rounded-r-full` to `rounded-[var(--radius-sm)]`.

### 2. Auto-Focus Handling
- When mobile search opens, invoke `requestAnimationFrame` or `tick()` to call `.focus()` on the input element, ensuring the browser triggers the soft keyboard.

### 3. Popular Tags & Catalog Search Filtering
- Tags: `['iPhone 16 Pro Max', 'Anker 30W', 'MagSafe Case', 'Fast Charger', 'Spigen', 'AirPods', 'Power Bank', 'Samsung S24']`.
- Live query matching: filters `PRODUCTS` by checking if `name`, `brand`, or `categoryId` includes `searchQuery.toLowerCase().trim()`.
- Renders top 5–6 matching products with thumbnail, title, category, and price formatted with `formatPrice`.

### 4. Desktop Dropdown Autocomplete
- When desktop search input is focused and `searchQuery.trim().length > 0`, an `absolute top-full left-0 right-0 mt-2` panel displays live matching products.
- Click outside or pressing Escape closes the dropdown.

## Risks / Trade-offs

- **Mobile Viewport Height (`100vh` vs `100dvh`)**: Mobile browsers change inner height when the soft keyboard pops up. Using `fixed inset-0` or `100dvh` ensures the takeover reliably occupies the visible viewport without weird layout jitter.
- **Scroll Locking**: Cleanly restore body `overflow` when the search overlay is closed or when navigating to a product page.
