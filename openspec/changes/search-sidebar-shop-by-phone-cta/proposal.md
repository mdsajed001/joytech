## Why

The current Device Compatibility filter relies on standard dropdowns that feel utilitarian. By replacing them with a prominent, branded blue call-to-action (CTA) card that opens the dedicated "Shop by Phone" drawer, we can drive higher engagement with the configurator tool, making the shopping experience more interactive, guided, and premium.

## What Changes

- Replace the existing Brand and Exact Model dropdowns in the `SearchSidebar` with a blue "Shop by Phone" CTA card.
- The card will act as a trigger to open the existing global `ShopByPhoneDrawer` (`autoWizardState.isDrawerOpen = true`).
- If a device is already selected in the global state, the CTA card will display the currently active device model with a "Change" button and a clear (✕) action.
- Ensure the mobile filter drawer (`SearchMobileFilterDrawer`) receives the same CTA treatment for consistency across breakpoints.

## Capabilities

### New Capabilities
- `search-sidebar-shop-by-phone-cta`: Integrates the global Shop by Phone drawer trigger directly into the search filters sidebar and mobile filter drawer in place of standard dropdowns.

### Modified Capabilities
- 

## Impact

- **UI Components:** Modifies `SearchSidebar.svelte` and `SearchMobileFilterDrawer.svelte` to import and interact with `autoWizardState`.
- **User Flow:** Shifts device filtering from inline dropdowns to a focused, modal-based wizard experience.
- **State Management:** Tighter coupling between the search filters and the global `autoWizardState`.
