## Context

The search page (`/search`) currently models price filtering with discrete buckets (`under1000`, `1000to2000`, `2000to3000`, `over3000`) rendered as HTML radio inputs. See [proposal.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/price-range-slider-and-inputs/proposal.md) and [spec.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/price-range-slider-and-inputs/specs/price-range-slider/spec.md) for requirements and user intent.

## Goals / Non-Goals

**Goals:**
- Provide a dual-thumb slider spanning ৳0 to ৳10,000 with a highlighted active track.
- Provide manual Min and Max numeric inputs with currency prefix (`৳`) and input validation.
- Implement two-way synchronization: slider adjustments update input boxes, and typing numbers moves slider handles.
- Provide compact quick preset chips (`Under ৳1k`, `৳1k – ৳2.5k`, `৳2.5k – ৳5k`, `৳5k+`).
- Filter catalog products live in real time on slider drag and debounced (~150ms) on text typing.
- Display dismissible active filter pill in search results when price constraints are active.
- Support both desktop [`SearchSidebar.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/search/SearchSidebar.svelte) and mobile [`SearchMobileFilterDrawer.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/search/SearchMobileFilterDrawer.svelte).

**Non-Goals:**
- Multi-currency conversion (Joytech operates natively in Bangladeshi Taka ৳).
- External heavyweight UI dependencies (slider must be zero-dependency, pure Svelte 5 + Tailwind).

## Decisions

### 1. Dual-Thumb Slider Implementation
- **Decision:** Use two overlapping standard `<input type="range">` elements with CSS `pointer-events: none` on the tracks and `pointer-events: auto` on the slider thumb pseudo-elements (`::-webkit-slider-thumb` / `::-moz-range-thumb`), combined with a dynamically styled active track highlight element:
  ```html
  <div class="relative w-full h-2 bg-[var(--color-border-default)] rounded-full">
    <div
      class="absolute h-full bg-[var(--color-brand-primary)] rounded-full"
      style="left: {(minVal / maxLimit) * 100}%; right: {100 - (maxVal / maxLimit) * 100}%"
    ></div>
    <input type="range" min="0" max="10000" step="50" bind:value={minVal} ... />
    <input type="range" min="0" max="10000" step="50" bind:value={maxVal} ... />
  </div>
  ```
- **Rationale:** Native HTML range inputs are accessible, lightweight, hardware-accelerated, and naturally support keyboard arrow keys and mobile touch gestures without external libraries.
- **Alternatives Considered:**
  - *Third-party slider packages (e.g. nouislider)*: Increases bundle size and complicates styling.
  - *Custom pointer event tracking*: Error-prone on edge cases (touch cancellations, page scrolling collisions).

### 2. State Modeling & Normalization
- **Decision:** Model the price state in `src/routes/search/+page.svelte` as `minPrice: number` and `maxPrice: number` (defaults `0` and `10000`):
  ```ts
  let minPrice = $state(0);
  let maxPrice = $state(10000);
  let isPriceFiltered = $derived(minPrice > 0 || maxPrice < 10000);
  ```
- **Filter Evaluation:**
  ```ts
  if (isPriceFiltered) {
    list = list.filter((p) => p.price >= minPrice && p.price <= maxPrice);
  }
  ```
- **Preset Mapping:**
  - `Under ৳1k`: `[0, 1000]`
  - `৳1k – ৳2.5k`: `[1000, 2500]`
  - `৳2.5k – ৳5k`: `[2500, 5000]`
  - `৳5k+`: `[5000, 10000]`

### 3. Reusable PriceRangeFilter Component
- **Decision:** Extract the price filter into a focused, reusable component `src/lib/components/search/PriceRangeFilter.svelte` that is shared by both `SearchSidebar.svelte` (desktop) and `SearchMobileFilterDrawer.svelte` (mobile).
- **Rationale:** Eliminates duplicate slider logic, CSS styling, input validation, and preset chip handlers across desktop and mobile drawer files.

## Risks / Trade-offs

- **[Risk] Thumb Collision on Touch Devices**: When Min and Max are very close or identical, one thumb might cover the other and prevent dragging.
  - **Mitigation**: Enforce a minimum separation threshold (e.g., 50–100৳) and adjust `z-index` so that moving one thumb pushes or yields to the other cleanly.
- **[Risk] Jitter during Rapid Text Input**: User typing "5000" might briefly trigger filters on "5", "50", "500".
  - **Mitigation**: Apply a 150ms debounce before applying manual number input changes to the search product filtering.
