# Technical Design: Restrict Mobile Top Header Cart Icon to Product Details Page

## Context
See `proposal.md` for background.
Currently, `Header.svelte` renders the mobile cart button (`sm:hidden`) unconditionally on all mobile pages. On the homepage and generic browsing pages, `BottomNav` is already rendered at the bottom of the viewport with a dedicated cart icon and badge, causing visual redundancy in the top header. However, on product details pages (`/product/...`), `BottomNav` is omitted to provide room for the sticky purchase bar.

## Goals / Non-Goals

**Goals:**
- Detect route context in `Header.svelte` using SvelteKit's `$page` store.
- Conditionally render the mobile cart button only when `$page.url.pathname.startsWith('/product/')`.
- Ensure desktop header cart functionality remains active across all pages.
- Retain the nod and badge pop animations when items are added to cart on the product details page.

**Non-Goals:**
- Altering the bottom navigation or footer logic.
- Modifying desktop navigation layout.

## Decisions

### 1. Route Detection via SvelteKit Page Store
- **Decision**: Import `page` from `$app/stores` in `Header.svelte` and compute a reactive `$derived` property:
  ```ts
  let isProductPage = $derived($page.url.pathname.startsWith('/product/'));
  ```
- **Rationale**: Leverages built-in SvelteKit reactive stores, which update immediately during client-side navigation without prop drilling from layout.

### 2. Template Scoping
- **Decision**: Wrap the mobile cart anchor tag in `{#if isProductPage}`:
  ```svelte
  {#if isProductPage}
    <!-- Mobile Cart Button (Visible on < sm next to hamburger menu) -->
    <a
      href="/cart"
      class="btn-nod sm:hidden p-2 text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)] rounded-[var(--radius-sm)] tap-target relative flex items-center justify-center transition-colors cursor-pointer select-none"
      aria-label="Cart with {cartCount} items"
    >
      ...
    </a>
  {/if}
  ```
- **Rationale**: Keeps the DOM lean and clean on non-product mobile pages while preserving full functionality on `/product/*`.

## Risks / Trade-offs

- **[Risk]** Route transitions could delay the button rendering.
  - **Mitigation**: SvelteKit's `$page` store updates synchronously before DOM reconciliation, ensuring immediate appearance when entering `/product/*` and immediate suppression when leaving.
