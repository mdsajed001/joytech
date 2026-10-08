## Why

In Step 2 (Brand Selection) of the Shop by Device configurator, brands were previously split into a subset of "popular brands" and a "More Brands" card that opened a full-screen drawer overlay modal. Because each device category has a manageable number of brands (11 for phones, 4 for tablets, 4 for watches, and 5 for audio), hiding brands behind a secondary modal added unnecessary interaction friction. 

By adding an in-place search bar at the top of Step 2 and displaying all category brands directly within the grid, users gain instant 1-tap access to every brand alongside real-time search filtering.

## What Changes

- **In-Place Brand Search**: Add a rounded-full search pill at the top of Step 2 with support for brand names, short names, and aliases (e.g. searching "Pixel", "Poco", "Mi"), matching the search bar design in Step 3.
- **Unified Brand Grid**: Render all brands for the selected device category directly in the grid without an artificial "popular" cutoff.
- **Removal of Secondary Overlay**: Eliminate the "More Brands" tile, the modal trigger state (`isBrandSearchOpen`), and the `SearchableListOverlay` layer from `AutoWizardConfigurator.svelte`.
- **Empty State & Reset**: Display an in-place empty state when search produces no matches, including a 1-tap "Clear Search" button.

## Capabilities

### New Capabilities
- `shop-by-device-brand-selection`: Defines requirements for inline brand searching, alias matching, and unified card presentation within the device selection wizard.

### Modified Capabilities
*(None)*

## Impact

- **Affected Code**: `src/lib/components/AutoWizardConfigurator.svelte`.
- **Architecture**: Eliminates unnecessary overlay state management and renders all brands in a single responsive container.
