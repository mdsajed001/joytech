## Context

The global `ShopByPhoneDrawer` is already configured in the layout to respond to `autoWizardState.isDrawerOpen`. Currently, the `SearchSidebar` and `SearchMobileFilterDrawer` use local inline dropdowns (`SearchableSelect`) to manipulate `autoWizardState` manually by lifting state up through component props. 

## Goals / Non-Goals

**Goals:**
- Connect the search sidebar UI directly to the `autoWizardState` global drawer.
- Improve the visual prominence of device filtering with a branded blue CTA.
- Provide a clear, dismissible active state when a device is already selected.

**Non-Goals:**
- Restructuring the internal workings of the `ShopByPhoneDrawer` or `autoWizardState` logic (only changing how they are invoked).
- Modifying other filter behaviors (price, category) in the sidebar.

## Decisions

- **Direct Global State Mutation:** Instead of emitting `onOpenShopByPhone` events up the component tree from the sidebar, `SearchSidebar` and `SearchMobileFilterDrawer` will directly import `autoWizardState` from `$lib/state.svelte`. Clicking the CTA will simply execute `autoWizardState.isDrawerOpen = true`. This simplifies prop drilling and keeps side-effects isolated.
- **Dynamic CTA Component rendering:** 
  - If `selectedPhoneBrand` or `selectedPhoneModel` props are active (indicating an active filter state passed down from `+page.svelte`), the filter component will display a "Selected Device" pill (e.g., "iPhone 17 Pro Max") alongside a "Change" and clear (✕) button.
  - If no device is selected, it will display the full "Shop by Phone" blue CTA card.

## Risks / Trade-offs

- **Risk: Prop vs Global State Conflict** → `+page.svelte` still tracks `selectedPhoneBrand` and `selectedPhoneModel` via URL params and reactive statements. We must ensure that the "clear" (✕) button triggers the existing `onSelectPhoneModel('')` prop callback so the search results actually update, rather than just clearing `autoWizardState`. Mitigation: Keep the `onSelectPhoneModel` and `onSelectPhoneBrand` props, and bind the CTA's "clear" action to them.
