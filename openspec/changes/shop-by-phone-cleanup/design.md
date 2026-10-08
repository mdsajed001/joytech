## Context

The repository contains a legacy slide-over component (`ShopByPhoneDrawer.svelte`) controlled by a global state class `PhoneDrawerState` in `src/lib/state.svelte.ts`. This drawer was hooked into several points: desktop secondary navigation (`Header.svelte`), mobile navigation drawer (`MobileDrawer.svelte`), promotional slider banner (`PromoBannerSlider.svelte`), and the empty cart view (`EmptyCartView.svelte`). See [proposal.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/shop-by-phone-cleanup/proposal.md).

## Goals / Non-Goals

**Goals:**
- Completely remove `ShopByPhoneDrawer.svelte` and `PhoneDrawerState`.
- Retain the exact positioning of "Shop by Phone" in both the desktop secondary navbar and the mobile menu drawer as inert visual entries without click side-effects.
- Safely decouple any secondary triggers (in banners and empty cart) without introducing console or runtime errors.
- Ensure 0 Svelte/TypeScript errors and successful production build compilation.

**Non-Goals:**
- Implementing any new "Shop by Phone" feature or page (this will be explored and designed in a separate future change).

## Decisions

### 1. Inactive Desktop Navigation Link
- **Decision:** In `Header.svelte`, render `★ Shop by Phone` as an inert styled element or anchor with `href="#shop-by-phone"` and `onclick={(e) => e.preventDefault()}` with cursor style adjustments.
- **Rationale:** Preserves the desktop subnav layout and visual spacing without opening any drawer or scrolling unexpectedly.

### 2. Streamlining Mobile Menu Item
- **Decision:** In `MobileDrawer.svelte`, replace the prominent promotional card (which featured a headline, description, and multi-column brand button grid) with a clean, single menu item row containing a smartphone icon and the label `Shop by Phone`.
- **Rationale:** Satisfies the requirement to maintain the menu entry position while stripping out the drawer trigger and cluttered brand selectors.

### 3. Clean State Deletion
- **Decision:** Remove `PhoneDrawerState` class and `phoneDrawerState` singleton export from `src/lib/state.svelte.ts`.
- **Rationale:** Eliminates dead state code. Any component referencing it will be cleaned up to ensure strict type checking passes.

## Risks / Trade-offs

- *[Risk: Stray imports]* → Mitigation: Grep for `phoneDrawerState` and `ShopByPhoneDrawer` across the entire codebase to verify zero remaining references before running `npm run check`.
