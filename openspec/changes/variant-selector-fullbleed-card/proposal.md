## Why

On the product detail page (`/product/[slug]`), the compatible phone model chips and product variant selection cards currently render directly onto the page canvas with no visual boundary or background differentiation. This lacks visual hierarchy and feels floating. Giving this selector section a distinct contrasting background color clearly frames the critical purchasing decisions, while extending the background full-width to the screen edge without rounded corners on mobile viewports creates an intentional, modern full-bleed band aesthetic.

## What Changes

- Wrap the phone model and product variant selectors in a dedicated container with a distinct background color (`bg-[var(--color-bg-surface)]` / elevated card surface in light/dark themes) that visually separates it from the general canvas background.
- On mobile viewports (`< sm`), make the selector container bleed full-width to the viewport edge (`-mx-4 px-4 py-4`) with square/flush corners (`rounded-none`) and top/bottom borders (`border-y border-[var(--color-border-default)]`).
- On tablet and desktop viewports (`sm:` and up), style the container as a floating boxed card with comfortable internal padding, rounded corners (`sm:rounded-2xl sm:mx-0 sm:border`), and subtle shadow.
- Preserve the existing inner model chip and variant card styles, ensuring clear visual hierarchy against the new container background.

## Capabilities

### New Capabilities
- `pdp-variant-selector-container`: Defines the visual containment, contrasting background styling, and mobile full-bleed layout behavior for the product detail page variant and model selectors.

### Modified Capabilities
<!-- No existing capabilities modified -->

## Impact

- `src/lib/components/product/ProductVariantSelector.svelte`: Outer container wrapper updated with responsive layout classes (`-mx-4 px-4 py-4 sm:mx-0 sm:p-5 rounded-none sm:rounded-2xl bg-[var(--color-bg-surface)] border-y sm:border border-[var(--color-border-default)]`).
- No breaking API or data model changes.
