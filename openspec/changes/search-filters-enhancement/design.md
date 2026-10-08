## Context

The search results page currently provides basic category, brand, price, and stock filters. In authentic mobile accessory retail, customers primarily shop by phone model (e.g. "iPhone 16 Pro Max", "Galaxy S24 Ultra") and specific hardware technology (e.g. MagSafe magnetic alignment, fast charging deals). This technical design details how device compatibility selection and feature filters are integrated into the search state machine, desktop sidebar, and mobile drawer.

See [proposal.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/search-filters-enhancement/proposal.md) for background and motivation.

## Goals / Non-Goals

**Goals:**
- Provide a responsive 2-stage Device Compatibility filter (Phone Brand > Phone Model) sourcing from `PHONE_BRANDS` and `PHONE_MODELS`.
- Provide a "MagSafe / Magnetic" feature toggle that matches MagSafe cases, mounts, and wireless accessories.
- Provide an "On Sale / Flash Sale Deals" toggle that filters to discounted products (`discountPercent > 0` or `isFlashSale: true`).
- Display clear active filter badges with single-click dismissal and automatic count updates.
- Keep desktop left sidebar and mobile slide-up filter sheet perfectly synchronized.

**Non-Goals:**
- Modifying the homepage Shop by Phone drawer (it remains a dedicated standalone flow).
- Server-side faceted indexing (all filtering runs client-side on `catalog.ts`).

## Decisions

### 1. Two-Tier Device Compatibility Filter
- **Decision:** Structure device filtering into a Brand dropdown (All Brands, Apple, Samsung, Google Pixel, Xiaomi) that dynamically filters the Model dropdown to only models belonging to the selected brand:
  ```ts
  let availableModels = $derived(
    selectedPhoneBrand
      ? PHONE_MODELS.filter((m) => m.brandId === selectedPhoneBrand)
      : PHONE_MODELS
  );
  ```
- **Rationale:** Prevents cluttering the UI with 20+ models at once and mirrors the user's mental model (they know their phone brand first, then their exact model).

### 2. Feature & Promotion Flags Evaluation
- **Decision:**
  - **MagSafe Filter:** Evaluates whether `product.features` includes any term matching `/magsafe|magnetic/i` or `product.name` contains `"magsafe"`.
  - **On Sale Filter:** Evaluates `Boolean((product.discountPercent && product.discountPercent > 0) || product.isFlashSale)`.
- **Rationale:** Directly leverages the existing rich data properties in `src/lib/data/catalog.ts` without requiring schema migrations.

### 3. Unified Props Interface Across Sidebar & Drawer
- **Decision:** Both `SearchSidebar.svelte` and `SearchMobileFilterDrawer.svelte` will accept:
  - `selectedPhoneBrand: string`
  - `selectedPhoneModel: string`
  - `magsafeOnly: boolean`
  - `onSaleOnly: boolean`
  - `onSelectPhoneBrand: (brandId: string) => void`
  - `onSelectPhoneModel: (modelSlug: string) => void`
  - `onToggleMagSafe: () => void`
  - `onToggleOnSale: () => void`
- **Rationale:** Keeps the component API uniform, highly maintainable, and completely responsive.

## Risks / Trade-offs

- **[Risk]** User selects a phone model that has zero matching products for the current query.
  - **Mitigation:** The empty state clearly highlights the active device filter pill with a quick "Reset Filters" action.
- **[Risk]** Selecting a new brand leaves an invalid model selected.
  - **Mitigation:** `onSelectPhoneBrand` automatically resets `selectedPhoneModel = ''`.
