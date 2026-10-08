## Why

The user provided a complete, high-fidelity device tree dataset (`src/lib/data/joy-telecom-device-tree.json`) encompassing 4 major gadget categories (`phone`, `tablet`, `watch`, `audio`), all major consumer brands in Bangladesh, and exhaustive model lists grouped by series with release years. Currently, the "Shop by Device" UI (`AutoWizardConfigurator.svelte`) is hardcoded with a static list of phones, leaving Tablet, Watch, and Audio non-functional or showing mismatched phone data. Integrating this comprehensive JSON tree elevates the configurator into a complete, authentic multi-device finder.

## What Changes

- **Typed Catalog Helper (`src/lib/data/devices.ts`)**: Load and type `joy-telecom-device-tree.json`, providing typed utility functions to query device types, brands by device type, models by brand, series groupings, and model lookup by slug.
- **Dynamic Configurator (`src/lib/components/AutoWizardConfigurator.svelte`)**:
  - Connect Step 1 (Device Type) to load brands dynamically according to the chosen device (`phone`, `tablet`, `watch`, `audio`).
  - Connect Step 2 (Brand) so popular brand tiles and "More Brands" search overlay display the exact brands available for the selected device type with matching colors/gradients.
  - Connect Step 3 (Model) so series filter chips and model cards reflect the chosen brand's actual models from the tree.
  - Keep search, back step navigation, and model selection routing responsive and seamless.
- **Backward Compatibility & Type Safety**: Ensure catalog searches (`/search?phoneModel=...`) and existing catalog fixtures remain compatible.

## Capabilities

### New Capabilities
- `device-catalog-tree`: Dynamic multi-category device catalog data provider and interactive 3-step wizard integration supporting smartphones, tablets, smartwatches, and audio devices.

### Modified Capabilities
<!-- None: No existing main specs are being changed. -->

## Impact

- `src/lib/data/joy-telecom-device-tree.json`: Primary data source (already added by user).
- `src/lib/data/devices.ts`: New data helper module.
- `src/lib/types/index.ts`: Extended type definitions for device hierarchy.
- `src/lib/components/AutoWizardConfigurator.svelte`: Reactive adaptation to dynamic multi-device data.
- `src/lib/components/SearchableListOverlay.svelte`: Dynamic brand search overlay support.
