## Why

The Shop by Phone configurator and drawer were implemented, but users cannot access them because the entry points across the site are currently inert:
1. In desktop view, the "★ Shop by Phone" item in the secondary header navigation bar is a static `<span>` with no click action.
2. In mobile view, the "Shop by Phone" card inside `MobileDrawer` has an `onclick={(e) => e.preventDefault()}` handler that blocks user interaction.
3. The promotional banner slider (#2) links to generic `/search` rather than the dedicated Shop by Phone flow.

Connecting these interactive triggers ensures customers on both desktop and mobile can seamlessly discover and launch the device configuration wizard.

## What Changes

- **Desktop Header Navigation**: Convert the static `<span>` in `Header.svelte` into a clickable button styled with hover transitions and a pointer cursor that toggles `autoWizardState.isDrawerOpen = true`.
- **Mobile Menu Drawer**: Update the breathing "Shop by Phone" card in `MobileDrawer.svelte` to close the mobile menu (`onClose()`) and navigate to `/shop-by-phone`.
- **Promotional Banner**: Update Banner #2 in `PromoBannerSlider.svelte` to direct mobile users to `/shop-by-phone` and desktop users to open the drawer.

## Capabilities

### New Capabilities
- `shop-by-phone-navigation`: Covers interactive entry points and activation triggers for the Shop by Phone desktop drawer and mobile dedicated route.

### Modified Capabilities
None.

## Impact

- `src/lib/components/Header.svelte`: Imports `autoWizardState` and binds click trigger.
- `src/lib/components/MobileDrawer.svelte`: Navigates to `/shop-by-phone` upon tapping the banner card and closes the drawer.
- `src/lib/components/PromoBannerSlider.svelte`: Updates action destination for Banner #2.
