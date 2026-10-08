## Context

In [`PriceRangeFilter.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/search/PriceRangeFilter.svelte), the component currently renders an extra header row with the text `৳{localMin} – ৳{localMax}` and a Reset button above the dual-slider track. The same price values are rendered and editable right below the slider in the `MIN (৳)` and `MAX (৳)` input fields. See [proposal.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/price-filter-ui-cleanup/proposal.md).

## Goals / Non-Goals

**Goals:**
- Remove the redundant top text row (`৳{localMin} – ৳{localMax}`) from `PriceRangeFilter.svelte`.
- Align the "Reset" action into the `Price Range` section header in both [`SearchSidebar.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/search/SearchSidebar.svelte) and [`SearchMobileFilterDrawer.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/search/SearchMobileFilterDrawer.svelte), identical to the `Device Compatibility` section pattern.
- Preserve full functionality of the dual slider, manual inputs, live debounced filtering, and quick presets.

**Non-Goals:**
- Modifying underlying price filter state or filtering logic in `+page.svelte`.

## Decisions

### 1. Section Header Reset Action
- **Decision:** Place the "Reset" button inside the section title header flex row in `SearchSidebar.svelte` and `SearchMobileFilterDrawer.svelte`:
  ```svelte
  <div class="flex items-center justify-between">
    <h3 class="text-xs font-bold tracking-wide uppercase text-[var(--color-text-secondary)]">Price Range</h3>
    {#if minPrice > 0 || maxPrice < 10000}
      <button
        type="button"
        onclick={onResetPrice}
        class="text-[10px] text-[var(--color-brand-primary)] hover:underline cursor-pointer"
      >
        Reset
      </button>
    {/if}
  </div>
  ```
- **Rationale:** Consistent design language across all sidebar sections (Filters, Device Compatibility, Category Options, Price Range).

### 2. Streamlining PriceRangeFilter Layout
- **Decision:** Delete the top row containing `৳{localMin} – ৳{localMax}` and internal reset button from `PriceRangeFilter.svelte`. The slider track begins immediately with balanced top/bottom padding.
- **Rationale:** The `MIN (৳)` and `MAX (৳)` input fields beneath the slider clearly convey the active range while serving as interactive inputs, eliminating duplication.

### 3. Position Price Range at the Top
- **Decision:** Relocate the Price Range section to the top of the filter panel, appearing right below the main Filters header in both `SearchSidebar.svelte` and `SearchMobileFilterDrawer.svelte`.
- **Rationale:** Price is universally applicable to all searches regardless of device or category, making top-level placement the most accessible for shoppers.

## Risks / Trade-offs

- None. Visual hierarchy and vertical density improve without touching filter logic.
