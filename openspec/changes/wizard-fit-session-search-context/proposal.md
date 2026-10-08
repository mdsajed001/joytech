## Why

When users configure their device in the "Shop by Device" Wizard and click "Browse Compatible Accessories" (or a category card), they are redirected to `/search?phoneModel=<slug>`. Currently, the search page (`/search/+page.svelte`) ignores the `phoneModel` URL parameter entirely, displaying unfiltered catalog products and breaking the wizard's 100% Fit Guarantee promise. Furthermore, users who arrive from the wizard lack clear contextual reassurance on the search page that the displayed products are guaranteed to fit their specific device model.

## What Changes

- **URL Parameter Synchronization**: Parse `?phoneModel=<slug>` on `/search/+page.svelte` on page load / URL changes, setting `selectedPhoneModel` accordingly to filter products immediately.
- **Wizard Fit Session Bar**: Display a dedicated, prominent "Fit Session" reassurance bar at the top of search results when (and only when) arriving with a `phoneModel` URL parameter from the wizard.
  - Reassures the customer that all listed items fit their device model (e.g., "All products shown are guaranteed to fit your [Brand] [Model Name]").
  - Intentionally omits item counts (focuses purely on fit assurance).
  - Designed using Joy Telecom's boxy, modern aesthetic (`rounded-[var(--radius-sm)]` or `rounded-[var(--radius-md)]`, brand green/blue tones).
  - Includes a clear action to dismiss or exit the wizard fit session, clearing the filter.
  - Does NOT display when a user manually filters by phone model via the search sidebar controls.

## Capabilities

### New Capabilities
- `wizard-fit-session-context`: URL parameter synchronization for device model filtering on the search page and presentation of the wizard-origin Fit Session reassurance bar.

### Modified Capabilities
<!-- None -->

## Impact

- `src/routes/search/+page.svelte`: Added `phoneModelParam` reactive reader, sync effect to `selectedPhoneModel`, wizard origin detection, and the Fit Session reassurance bar UI.
- No database or backend API changes; uses existing catalog models and phone brand metadata from `src/lib/data/catalog.ts`.
