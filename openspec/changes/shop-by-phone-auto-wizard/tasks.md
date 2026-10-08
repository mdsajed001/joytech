## 1. Core State Machine

- [x] 1.1 Implement `AutoWizardState` class in `src/lib/state.svelte.ts` (or equivalent file) to manage step progression and selected values, and verify by writing a basic unit test or console log demonstrating the step logic.

## 2. Shared Components

- [x] 2.1 Create `SearchableListOverlay.svelte` component with a sticky search bar, full-height scrollable list, and mock A-Z index, and verify by mounting it temporarily on a page and confirming the search input filters a dummy list.
- [x] 2.2 Create `AutoWizardConfigurator.svelte` component that instantiates `AutoWizardState` and renders the Device Type step, and verify by visually confirming it displays on the screen.
- [x] 2.3 Implement the stacked summary pill logic within `AutoWizardConfigurator.svelte` so past steps collapse with an 'Edit' button, and verify by interacting with the UI to ensure pills collapse and expand correctly.
- [x] 2.4 Wire `SearchableListOverlay` into `AutoWizardConfigurator` for the Brand and Model steps, ensuring they trigger auto-advance, and verify by clicking through the full flow to the 'Done' state.

## 3. Integration & Routing

- [x] 3.1 Create a new mobile route `src/routes/shop-by-phone/+page.svelte` and mount `AutoWizardConfigurator.svelte` taking up the full viewport, and verify by navigating to `/shop-by-phone` on a mobile viewport and testing the wizard.
- [x] 3.2 Update `src/lib/components/ShopByPhoneDrawer.svelte` to replace its internal content with `AutoWizardConfigurator.svelte` for desktop, and verify by opening the drawer on desktop to ensure the wizard functions correctly within the slide-over constraints.
- [x] 3.3 Create a "Success State" screen inside `AutoWizardConfigurator.svelte` with a "Browse Accessories" button that appears when the flow is complete, and verify by completing the flow and confirming the CTA is visible and clickable.
