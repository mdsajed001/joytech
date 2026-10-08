## Why

Solid flat blue buttons across the site look functional but can feel flat and standard. Introducing subtle, low-opacity ambient bubbles/circles partially visible from the corners of blue Call-To-Action (CTA) buttons adds a sleek, dimensional, and premium tech aesthetic without distracting from label readability or clickability.

## What Changes

- Create a reusable, high-performance corner-bubble styling treatment for all blue CTAs across the store:
  - Tucks 1 or 2 partially visible soft ambient circles in opposite corners (top-right and bottom-left)
  - Uses low opacity (10%–22%) translucent white/light-cyan gradients fading smoothly into the brand blue background
  - Preserves crisp white text and icon readability
- Integrate this treatment systematically across:
  - `src/lib/components/Button.svelte` (`variant="primary"`)
  - `src/lib/components/ProductCard.svelte` (the primary "⚡ Buy Now" button)
  - `src/lib/components/Header.svelte` (the search submit button on desktop and mobile)
  - `src/lib/components/Hero.svelte` (the flash sale mini "+ Add" deal button)
  - Standalone page blue action buttons in `src/routes/cart/+page.svelte`, `src/routes/offers/+page.svelte`, and `src/routes/profile/+page.svelte`

## Capabilities

### New Capabilities
- `blue-cta-styling`: Defines the ambient corner-bubble gradient treatment, dimensions, corner positions, and visual specifications for all primary blue CTAs.

### Modified Capabilities

## Impact

- `src/routes/layout.css`: New utility or custom properties for the dual-radial corner-bubble gradient.
- `src/lib/components/Button.svelte`: Primary variant adopts the corner-bubble styling.
- `src/lib/components/ProductCard.svelte`: Buy Now button adopts the corner-bubble styling.
- `src/lib/components/Header.svelte`: Search submit buttons adopt the corner-bubble styling.
- `src/lib/components/Hero.svelte`: Flash sale mini Add button adopts the corner-bubble styling.
- `src/routes/{cart,offers,profile}/+page.svelte`: Empty-state CTA buttons adopt the corner-bubble styling.
