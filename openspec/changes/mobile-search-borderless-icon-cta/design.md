## Context

See `proposal.md` for motivation. In `src/lib/components/Header.svelte`, the mobile search row was restructured into a 3-item Row 2: back button `[<]`, search input container, and search CTA button. However, the input container still had a border outline (`border border-[var(--color-border-strong)]`), and the CTA button displayed full text "Search" in expanded state rather than an icon.

## Goals / Non-Goals

**Goals:**
- Render the text input container completely borderless (`border-none`) in the expanded state, while maintaining the back button's defined border (`border border-[var(--color-border-strong)]`).
- Replace the text `"Search"` with the search icon (`Search01Icon`, size 18) inside the CTA button in the expanded state.
- Guarantee that no blue outline, blue border, or focus ring appears on focus.

**Non-Goals:**
- Altering the desktop search dropdown or desktop header.
- Modifying search query behavior, catalog data, or filtering.

## Decisions

### Decision 1: Selective Borderless Text Area vs. Button Borders
- **Choice**: Apply `border-none` exclusively to the text input container when `isMobileSearchOpen` is active:
  ```svelte
  class="relative flex-1 flex items-center h-11 bg-[var(--color-bg-subtle)] shadow-inner transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] {isMobileSearchOpen ? 'border-none rounded-[var(--radius-sm)]' : 'border border-[var(--color-border-strong)] rounded-full'}"
  ```
  While the back button retains `border border-[var(--color-border-strong)]`.
- **Rationale**: Direct implementation of the user's requirement: "the borderless will be only the text area not the buttons".

### Decision 2: Expanded State Icon-Only Search Button
- **Choice**:
  ```svelte
  <button
    type="submit"
    class="h-full cta-search-animated text-white text-xs font-bold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center shrink-0 cursor-pointer {isMobileSearchOpen ? 'w-11 px-0 rounded-[var(--radius-sm)]' : 'px-4 sm:px-5 rounded-r-full'}"
    aria-label="Search"
  >
    {#if isMobileSearchOpen}
      <Icon icon={Search01Icon} size={18} />
    {:else}
      <span class="relative z-10">Search</span>
    {/if}
  </button>
  ```
- **Rationale**: When expanded, `w-11 h-11` forms a balanced square icon button matching the back button's `w-11 h-11` dimensions on the opposite side of the row.

### Decision 3: Complete Suppression of Focus Outlines
- **Choice**: Include explicit outline and ring reset utilities on the `<input>` element:
  ```svelte
  class="... outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 border-none"
  ```
- **Rationale**: Eliminates browser default webkit-focus-ring and Tailwind ring utility side-effects.

## Risks / Trade-offs

- **[Risk]** Tap target size of icon-only button.
  → **Mitigation**: Using `w-11 h-11` (44px × 44px) complies with mobile accessibility standards (minimum 44×44px tap target).
