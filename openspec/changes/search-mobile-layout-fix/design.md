## Context

See `proposal.md` for motivation. In `src/lib/components/Header.svelte`, the mobile search was previously rendered with a secondary disconnected overlay using a hardcoded pixel offset `fixed top-[128px]`. On mobile devices with announcement bars or dynamic toolbars, this caused the results canvas to render directly on top of the mobile search input in Row 2, obscuring the query and hiding the typed text. Furthermore, the back button was in Row 1 beside the logo, and the mobile hamburger menu was still visible.

## Goals / Non-Goals

**Goals:**
- Unify the mobile search experience into a single full-screen flex column container (`fixed inset-0 z-50 flex flex-col md:relative md:inset-auto md:z-40`) when `isMobileSearchOpen` is active.
- Row 1: Display brand logo cleanly; conditionally hide the mobile menu hamburger button when search is open.
- Row 2: Align the back button `[<]` on the far left, the search input in the center, and the Search CTA button on the far right.
- Text & Styling: Ensure typed text and placeholder are horizontally centered (`text-center`); input border is neutral subtle (`border-[var(--color-border-strong)]`), strictly avoiding any colored brand blue outlines.
- Row 3: Render the results canvas as a native `flex-1 min-h-0 overflow-y-auto` container directly underneath Row 2, eliminating any possibility of layout overlap.

**Non-Goals:**
- Altering the desktop search dropdown, desktop navigation, or category subheader.
- Changing search catalog filtering algorithms or product ranking.

## Decisions

### Decision 1: Unified Flexbox Takeover vs. Fixed Coordinate Offsets
- **Choice**: When `isMobileSearchOpen` is true, the header element adopts `fixed inset-0 z-50 flex flex-col bg-[var(--color-bg-surface)] md:relative md:inset-auto md:z-40`.
- **Rationale**: A unified flex column guarantees that Row 1 (header), Row 2 (search row), and Row 3 (results canvas) flow sequentially in the DOM. Row 3 takes `flex-1 min-h-0 overflow-y-auto`, ensuring that it starts exactly where Row 2 ends, regardless of screen height, zoom level, or presence of an announcement bar.
- **Alternatives Considered**: Measuring dynamic DOM heights with JavaScript `getBoundingClientRect()` or calculating via CSS `calc()`. Flexbox is purely declarative, instantaneous, and immune to layout thrashing.

### Decision 2: Row 2 Layout Composition
- **Choice**:
  ```html
  <div class="flex items-center gap-2">
    <!-- Left: Back Button [<] -->
    <button type="button" onclick={closeMobileSearch} ...>
      <Icon icon={ArrowLeft01Icon} size={20} />
    </button>
    <!-- Center: Search Input Box + Clear Button + Search CTA -->
    <div class="relative flex-1 flex items-center h-11 ... border border-[var(--color-border-strong)] rounded-[var(--radius-sm)]">
      <input ... class="text-center" />
      ...
      <button type="submit" class="cta-search-animated rounded-[var(--radius-sm)]">Search</button>
    </div>
  </div>
  ```
- **Rationale**: Places the back button in the direct physical context of the search input bar, mirroring standard mobile OS and e-commerce application patterns.

### Decision 3: Clean Neutral Borders
- **Choice**: Maintain neutral subtle borders (`border-[var(--color-border-strong)]`) on the mobile input container, removing any `border-[var(--color-brand-primary)]` class on focus or expansion.
- **Rationale**: Satisfies the user's explicit aesthetic requirement for a clean, borderless/subtle appearance without prominent blue outlines.

## Risks / Trade-offs

- **[Risk]** Keyboard opening on mobile may trigger viewport resize in some mobile browsers.
  → **Mitigation**: Using `fixed inset-0 flex flex-col` naturally handles visual viewport height adjustments without breaking flex-1 scrollable areas.
- **[Risk]** Background body scrolling underneath takeover.
  → **Mitigation**: Existing `document.body.style.overflow = 'hidden'` lock remains active during `isMobileSearchOpen`.
