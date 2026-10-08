## 1. Data Layer & Type Infrastructure

- [x] 1.1 In `src/lib/types/index.ts`, define TypeScript interfaces `DeviceModel` (including `aliases?: string[]`), `DeviceBrand` (including `aliases?: string[]`), `DeviceTypeNode`, and `DeviceTree`.
- [x] 1.2 In `src/lib/data/devices.ts`, import `joy-telecom-device-tree.json` and export typed helper functions (`getDeviceTypes`, `getBrandsForType`, `getModelsForBrand`, `getModelBySlug`, `filterModelsWithAliases`), and verify by checking that types compile without errors.

## 2. Configurator UI Integration

- [x] 2.1 In `src/lib/components/AutoWizardConfigurator.svelte`, bind Step 1 (Device Type) to `getDeviceTypes()` and dynamically derive `popularBrands` and `allBrands` (with alias searchable tags) in Step 2 from `getBrandsForType(autoWizardState.deviceType)`.
- [x] 2.2 In `src/lib/components/AutoWizardConfigurator.svelte`, bind Step 3 (Model Selection) to `getModelsForBrand(autoWizardState.deviceType, autoWizardState.brand)`, compute dynamic `seriesChips` from the active brand's models, and connect instant search that matches both primary model names and regional aliases.
- [x] 2.3 In `src/lib/components/AutoWizardConfigurator.svelte`, verify that the back button (`goBack`), category chips, `SearchableListOverlay.svelte`, and Step 4 guaranteed fit view work properly across `phone`, `tablet`, `watch`, and `audio`.

## 3. End-to-End Verification

- [x] 3.1 Run `npm run check` (`svelte-check`) to ensure 0 TypeScript or Svelte errors, and verify the multi-device configurator in the browser at `/shop-by-phone` and the desktop drawer.
