## Why

On mobile screens, compatible phone model selector pills wrap into multiple rows, taking up excessive vertical screen space and fragmenting the selection layout. Additionally, the rounded pill aesthetic does not match the store's modern, boxy CTA button styling (`rounded-[var(--radius-sm)]`), reducing visual coherence.

## What Changes

- **Boxy CTA Button Styling**: Re-style compatible phone model option buttons with a refined boxy geometry (`rounded-[var(--radius-sm)]`), clear active/selected state, crisp borders, and confident typography matching site CTA buttons.
- **Single-Row Horizontal Scroll Rail on Mobile**: Reconfigure the model options container to scroll horizontally on phone/mobile screens (`overflow-x-auto no-scrollbar flex-nowrap`) with non-shrinking items (`shrink-0 whitespace-nowrap`), allowing users to swipe through all phone models without breaking onto multiple lines.
- **Desktop Responsiveness**: Retain wrap or comfortable row layout on larger viewports (`sm:flex-wrap`) where screen real estate is ample.
- **Scroll Affordance & Validation**: Ensure touch panning (`touch-pan-x`), smooth scrolling, and proper padding so validation error states and borders remain crisp without clipping during horizontal scroll.

## Capabilities

### New Capabilities
- `pdp-model-picker-boxy-rail`: Phone model selection rail featuring boxy CTA button styling and smooth horizontal scrolling on mobile viewports.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**: `src/lib/components/product/ProductVariantSelector.svelte`.
- **Dependencies & APIs**: No external dependency or API changes; uses Tailwind CSS utility classes and design tokens.
