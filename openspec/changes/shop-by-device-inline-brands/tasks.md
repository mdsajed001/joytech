## 1. State & Component Simplification

- [x] 1.1 In `src/lib/components/AutoWizardConfigurator.svelte`, introduce reactive `brandSearchQuery = $state('')` and derived `filteredBrands = $derived(...)` supporting brand name, shortName, and alias matching.
- [x] 1.2 In `src/lib/components/AutoWizardConfigurator.svelte`, remove unused modal states (`isBrandSearchOpen`, `popularBrands`, `otherBrands`, `overlayBrands`) and delete the `SearchableListOverlay` import and overlay container.

## 2. In-Place Search Bar & Unified Brand Grid

- [x] 2.1 In `src/lib/components/AutoWizardConfigurator.svelte`, add a rounded-full brand search pill input at the top of Step 2 with search icon, clear button, and focus ring.
- [x] 2.2 In `src/lib/components/AutoWizardConfigurator.svelte`, render all `filteredBrands` directly as cards in the grid (`grid-cols-2 sm:grid-cols-3`) and remove the "More Brands" action tile.
- [x] 2.3 In `src/lib/components/AutoWizardConfigurator.svelte`, add an in-place empty search state with a 1-tap "Clear Search" button when no brands match.

## 3. Verification & Testing

- [x] 3.1 Run `npm run check` (`svelte-check`) to verify zero type errors and clean compilation.
- [x] 3.2 Verify in browser that all 11 phone brands (and tablet/watch/audio brands) appear directly in Step 2, and that typing in the search bar filters the grid in real-time.
