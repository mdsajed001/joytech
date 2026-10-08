## Why

The current Wizard Fit Session reassurance banner appears as a small, constrained box in the right column, alongside the sidebar. It feels like a footnote rather than a premium, curated experience. The user wants a full-bleed, edge-to-edge hero banner at the top of the search page with an animated green/white bubble background. This elevates the device name to be the primary focus, immediately assuring the user that the entire page is tailored specifically to their device.

## What Changes

- **Full-Bleed Layout**: Move the Fit Session banner outside the `max-w-7xl` container padding on the search page, making it stretch edge-to-edge.
- **Hero Typography**: Make the device name (`modelDisplayName`) the most prominent text (large, bold), with the fit reassurance message as a subtitle.
- **Green Animated Background**: Implement an animated green-and-white bubble background (similar to `profile-hero-bubble` but using green/emerald variants).
- **Breadcrumb Integration**: Move the search page breadcrumbs (`Home / Search`) inside this new hero banner or directly underneath it without extra top padding.
- **Dismiss Button Styling**: Update the "Show All Devices" dismiss button to match the new hero banner aesthetic (ghost style, top right).

## Capabilities

### New Capabilities
- None (purely a visual/UI layout change).

### Modified Capabilities
- None (skip_specs is enabled as behavior remains the same).

## Impact

- `src/routes/search/+page.svelte`: Major layout restructuring for the `isWizardFitSession` block.
- `src/routes/layout.css`: Added CSS for the green animated bubble background (e.g., `.fit-session-hero-bubble`).
