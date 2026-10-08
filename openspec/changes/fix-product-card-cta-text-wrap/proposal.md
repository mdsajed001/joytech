## Why

The user noticed that in the desktop (PC) view, the "Buy Now" text inside the CTA button wraps onto two lines. This is caused by the button attempting to fit within the 50% grid column we introduced, combined with the fact that text within buttons is allowed to wrap by default in browsers. To keep the UI clean, the text inside the button should stay on a single line.

## What Changes

- Add the `whitespace-nowrap` utility class to the CTA button (or its text span) in `ProductCard.svelte` to prevent the text from wrapping onto a second line regardless of the container width.

## Capabilities

### New Capabilities
None

### Modified Capabilities
None. The `.openspec.yaml` has been configured with `skip_specs: true` as this is purely a UI layout styling fix.

## Impact

- `src/lib/components/ProductCard.svelte`: Tailwind classes for the CTA button will be updated.
