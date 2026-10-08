## Context

See `proposal.md` for motivation. In `src/lib/components/Header.svelte`, the desktop and mobile search bars use absolute positioning (`absolute right-1.5 top-1/2 -translate-y-1/2 h-8`) for the Search button inside an `h-11` input. This creates unwanted top, bottom, and right crescent gaps around the button. In addition, the mobile search row has an `h-10` height and an `h-7` button, which feels cramped and does not meet the 44px minimum tap target guidelines of the design system.

## Goals / Non-Goals

**Goals:**
- Eliminate all gaps (top, bottom, right) between the Search button and the search bar pill on desktop and mobile.
- Make the Search button span 100% of the input height (`h-full`) and sit flush against the right edge, matching the container's rounded pill curve.
- Upgrade the mobile search bar from `h-10` to `h-11` (44px) with corresponding flush button ergonomics according to the design system.
- Ensure smooth `focus-within` styling across the entire search container.

**Non-Goals:**
- Changing search autocomplete logic or backend integration.
- Altering header navigation links or cart trigger behavior.

## Decisions

### 1. Flex Container with `rounded-full overflow-hidden`
- **Choice**: Structure the search bar as:
  ```svelte
  <div class="relative flex items-center w-full h-11 bg-[var(--color-bg-subtle)] border border-[var(--color-border-strong)] rounded-full overflow-hidden focus-within:border-[var(--color-brand-primary)] focus-within:bg-white transition-all shadow-inner">
    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-disabled)] pointer-events-none">
      <Icon icon={Search01Icon} size={18} />
    </span>
    <input
      type="text"
      bind:value={searchQuery}
      placeholder="Search products, brands or phone models..."
      class="flex-1 h-full pl-11 pr-3 bg-transparent text-sm font-medium placeholder:text-[var(--color-text-disabled)] outline-none border-none"
    />
    <button
      type="submit"
      class="h-full px-5 sm:px-6 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] text-white text-xs font-bold transition-colors flex items-center justify-center shrink-0 cursor-pointer"
    >
      Search
    </button>
  </div>
  ```
- **Rationale**: By placing the button inside an `overflow-hidden` container with `h-full`, the button fills the top, bottom, and right boundaries precisely with zero outer gaps. The right edge of the button naturally clips to the exact curve of the container.

### 2. Mobile Search Bar Height (44px `h-11`)
- **Choice**: Upgrade the mobile search container from `h-10` (40px) to `h-11` (44px) and apply the same flush button integration (`h-full px-4`).
- **Rationale**: 44px is the universal standard for touch targets in modern mobile UI design systems, preventing accidental mis-taps and creating visual harmony with the header logo and icon buttons.

## Risks / Trade-offs

- **[Risk] Input text could run under the button if right padding is too small** → **Mitigation**: Use flex child flow (`flex-1`) so the input text stops naturally before the button boundary, preventing text clipping.
