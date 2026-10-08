## Context

In `Header.svelte`, the mobile search overlay is controlled by internal state `isMobileSearchOpen`. The homepage hero section in `AuthenticityBanner.svelte` has an inline search input and button that do not invoke the header's search modal. See [proposal.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/mobile-hero-search-trigger/proposal.md).

## Goals / Non-Goals

**Goals:**
- Provide a clean shared `searchState` reactive module to coordinate mobile search overlay visibility between `Header.svelte` and `AuthenticityBanner.svelte`.
- Trigger the existing mobile search overlay from the hero section on mobile screens (`< 768px`).
- Preserve the exact existing mobile search UI and layout without introducing any new search components.
- Keep desktop behavior (`>= 768px`) completely intact as an inline search form.

**Non-Goals:**
- Transferring text between the hero input and the top mobile search bar.
- Creating new search modals, dropdowns, or alternate search interfaces.
- Modifying the styling or layout of the hero banner.

## Decisions

### 1. Minimal Reactive State in `src/lib/state.svelte.ts`
- **Decision:** Export a lightweight `SearchState` class instance `searchState` with `isMobileOpen = $state(false)`, `openMobile()`, and `closeMobile()`.
- **Rationale:** Joytech standardizes shared reactive state in `src/lib/state.svelte.ts` (alongside `CartState`, `ThemeState`, and `I18nState`). Using this pattern avoids prop drilling or fragile DOM dispatch events.
- **Alternatives Considered:**
  - *Custom DOM Events (`window.dispatchEvent`)*: Less idiomatic in Svelte 5 and harder to test/track.
  - *Context API (`setContext`/`getContext`)*: Unnecessary hierarchy coupling since Header and AuthenticityBanner are in different branches of the component tree (`+layout.svelte` vs `+page.svelte`).

### 2. Header State Synchronization
- **Decision:** In `Header.svelte`, integrate `searchState.isMobileOpen` directly into the existing `openMobileSearch()` and `closeMobileSearch()` lifecycle:
  - An `$effect` monitors `searchState.isMobileOpen` and executes DOM focus and scroll-lock when true.
  - The Back button and overlay dismiss calls set `searchState.closeMobile()`.

### 3. Responsive Touch Interception in `AuthenticityBanner.svelte`
- **Decision:** In `AuthenticityBanner.svelte`, detect mobile viewports (`window.innerWidth < 768`) on input focus/click or button click. When true, call `searchState.openMobile()` and prevent native mobile keyboard popup in the hero input.
- **Rationale:** Prevents a jarring double-focus animation (where the virtual keyboard opens for the hero input, only to immediately jump to the top header input).

## Risks / Trade-offs

- *[Risk]* Window resize between desktop and mobile while search is open.
  → *Mitigation*: The header already has `md:hidden` on mobile-specific rows and desktop media queries in place. Closing mobile search on desktop transition ensures consistency.
