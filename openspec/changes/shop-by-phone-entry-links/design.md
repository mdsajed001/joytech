## Context

The Shop by Phone auto-wizard configurator exists in two presentations:
1. Desktop: A slide-over side drawer (`ShopByPhoneDrawer.svelte`) bound to `autoWizardState.isDrawerOpen`.
2. Mobile: A dedicated page route (`src/routes/shop-by-phone/+page.svelte`).

Currently, the entry triggers in `Header.svelte`, `MobileDrawer.svelte`, and `PromoBannerSlider.svelte` are inert or pointing to generic routes. See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**
- Provide accessible, styled, and responsive click triggers for Shop by Phone.
- On desktop, clicking "★ Shop by Phone" in the secondary category bar directly opens `ShopByPhoneDrawer`.
- On mobile, clicking the "Shop by Phone" card in `MobileDrawer` cleanly closes the drawer and routes to `/shop-by-phone`.
- Allow the promotional banner (#2) to trigger the Shop by Phone flow.

**Non-Goals:**
- Altering the wizard step logic or catalog database.
- Modifying the existing category list links.

## Decisions

### 1. Direct State Manipulation via `autoWizardState`
- **Choice**: In `Header.svelte`, import `autoWizardState` from `$lib/state.svelte` and set `autoWizardState.isDrawerOpen = true` on click.
- **Rationale**: `autoWizardState` is already a reactive singleton used by `ShopByPhoneDrawer.svelte`. Using it directly eliminates prop-drilling or custom event dispatching through `+layout.svelte`.
- **Alternative considered**: Passing an `onOpenShopByPhone` callback prop from `+layout.svelte` through `Header.svelte`. Rejected as unnecessary boilerplate for a global reactive state.

### 2. Smooth Navigation and Drawer Dismissal in `MobileDrawer`
- **Choice**: In `MobileDrawer.svelte`, replace the inert `(e) => e.preventDefault()` handler on the breathing card with an interaction that calls `onClose()` followed by `goto('/shop-by-phone')`.
- **Rationale**: Dismissing the mobile drawer scrim immediately gives instant visual feedback while SvelteKit navigates to the page.
- **Alternative considered**: Simple `<a href="/shop-by-phone">` with `onclick={onClose}`. Both work, but using `goto` or `<a href>` with `onclick={onClose}` ensures native SvelteKit prefetching and instant dismiss.

### 3. Responsive Action on Promotional Banner #2
- **Choice**: In `PromoBannerSlider.svelte`, inspect or handle banner #2 click: if desktop (viewport >= 640px), open the drawer; if mobile, navigate to `/shop-by-phone`.
- **Rationale**: Keeps promo banner click behavior completely aligned with the user's current platform experience.

## Risks / Trade-offs

- **[Risk]** Potential transition collision when mobile drawer closes while navigating to `/shop-by-phone`.
  - **Mitigation**: Call `onClose()` before `goto('/shop-by-phone')`; the fade/fly transition cleanly exits while page loads.
