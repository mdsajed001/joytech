## Context

See `proposal.md` for motivation. The raw dataset `src/lib/data/joy-telecom-device-tree.json` contains a structured JSON hierarchy of 4 gadget types (`phone`, `tablet`, `watch`, `audio`) with nested brands, gradients, and series-categorized models. Currently `AutoWizardConfigurator.svelte` hardcodes phones and manual brand arrays, ignoring non-phone selections.

## Goals / Non-Goals

**Goals:**
- Provide a clean TypeScript abstraction layer (`src/lib/data/devices.ts`) for querying the device hierarchy without direct JSON coupling in UI components.
- Dynamically update Step 2 (Brand) and Step 3 (Model) in `AutoWizardConfigurator.svelte` based on the user's active device type selection.
- Support dynamic series filter chips and real-time model searching for all 4 device categories.
- Retain the back button flow (`goBack`) and guaranteed fit confirmation screen.

**Non-Goals:**
- Changing existing product database or accessory catalog models.
- Rewriting the drawer or page layout components (they consume `AutoWizardConfigurator`).

## Decisions

### Decision 1: Dedicated Devices Access Module (`src/lib/data/devices.ts`)
Rather than importing raw JSON directly inside Svelte components:
- Define strict interfaces: `DeviceModel` (with optional `aliases?: string[]`), `DeviceBrand` (with optional `aliases?: string[]`), `DeviceTypeNode`.
- Provide query helpers:
  - `getDeviceTypes()`: Returns the 4 categories with icons, labels, and badges.
  - `getBrandsForType(deviceTypeId)`: Returns brands with popularity flags and gradients.
  - `getModelsForBrand(deviceTypeId, brandId)`: Returns the brand's model list with regional aliases.
  - `getModelBySlug(slug)`: Looks up model info by slug across all categories.
  - `searchModels(models, query)`: Multi-attribute search matching `name`, `series`, and `aliases`.
- *Alternatives considered:* Parsing in `catalog.ts` (would bloat catalog with device hierarchy concerns).

### Decision 2: Icon Association Mapping
Keep HugeIcons references (`SmartPhone01Icon`, `Tablet01Icon`, `Watch01Icon`, `HeadsetIcon`) in TypeScript mapped by device type ID (`phone`, `tablet`, `watch`, `audio`), ensuring tree-shaking and type safety.

### Decision 3: Reactive State and Alias Matching in `AutoWizardConfigurator.svelte`
- `activeBrands`: Derived from `getBrandsForType(autoWizardState.deviceType)`.
- `popularBrands`: Filtered by `isPopular` for the 1-tap grid.
- `allBrands`: Formatted for `SearchableListOverlay` with searchable aliases (e.g. searching "Poco" matches "Xiaomi").
- `activeModels`: Derived from `getModelsForBrand(autoWizardState.deviceType, autoWizardState.brand)`.
- `seriesChips`: Derived uniquely from `activeModels.map(m => m.series)`.
- Instant search matches both model name and any regional aliases (e.g. searching "Ace 3" finds "OnePlus 12R").

## Risks / Trade-offs

- **[Large JSON data bundle]** → 98KB uncompressed JSON gzips to ~14KB, bundled cleanly with Vite. Instant client-side switching with zero network loading states.
- **[Slug collisions across categories]** → Slugs in JSON are prefixed or distinct (e.g. `iphone-16-pro-max`, `ipad-pro-13-m4`, `apple-watch-ultra-2`, `airpods-pro-2`).
