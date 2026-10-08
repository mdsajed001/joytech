## 1. Search Sidebar Desktop

- [x] 1.1 In `src/lib/components/search/SearchSidebar.svelte`, import `autoWizardState` from `$lib/state.svelte`. Verify it compiles without errors.
- [x] 1.2 In `src/lib/components/search/SearchSidebar.svelte`, replace the `SearchableSelect` dropdowns for Brand and Exact Model with a styled "Shop by Phone" CTA button that sets `autoWizardState.isDrawerOpen = true` when clicked. Verify clicking the button opens the drawer.
- [x] 1.3 In `src/lib/components/search/SearchSidebar.svelte`, add conditional rendering to display the currently selected device model (using `selectedPhoneModel` or `selectedPhoneBrand` props) as an active chip alongside a "Change" button (opens drawer) and a clear button (calls `onSelectPhoneModel('')` and `onSelectPhoneBrand('')`). Verify clearing the selection correctly triggers the parent callback.

## 2. Search Mobile Filter Drawer

- [x] 2.1 In `src/lib/components/search/SearchMobileFilterDrawer.svelte`, import `autoWizardState` from `$lib/state.svelte`. Verify it compiles without errors.
- [x] 2.2 In `src/lib/components/search/SearchMobileFilterDrawer.svelte`, apply the same CTA structure implemented in `SearchSidebar.svelte`: replace the dropdowns with the "Shop by Phone" CTA button. Verify clicking it opens the drawer on mobile view.
- [x] 2.3 In `src/lib/components/search/SearchMobileFilterDrawer.svelte`, apply the active device chip state (with "Change" and clear actions) mirroring the desktop implementation. Verify the clear action properly clears the selection and updates search results.
- [x] 2.4 Run `npx svelte-check --tsconfig ./tsconfig.json` to verify no new type or syntax errors were introduced across both modified files.
