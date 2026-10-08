## Context

See proposal.md - Why.

The application currently has primary blue action buttons styled with flat background colors (`bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)]`). The user requested that all blue CTAs feature low-opacity ambient bubbles/circles partially visible in 1 or 2 corners with a gradient.

## Goals / Non-Goals

**Goals:**
- Implement a reusable, pure-CSS corner-bubble treatment for blue CTAs.
- Position two opposite-diagonal ambient circular gradients (top-right at 22% opacity, bottom-left at 12% opacity).
- Apply this treatment across all blue CTAs in the application (`Button.svelte`, `ProductCard.svelte`, `Header.svelte`, `Hero.svelte`, and standalone pages).
- Guarantee perfect text and icon contrast and smooth hover transitions.

**Non-Goals:**
- Altering non-blue buttons (e.g. orange accent buttons, outline, or danger buttons).
- Introducing heavy runtime JavaScript or complex nested DOM wrappers.

## Decisions

### 1. Pure CSS Multi-Radial Gradient via `.cta-blue-bubble`
Instead of injecting multiple `<span>` elements inside every button, we use CSS multiple background radial gradients:
```css
.cta-blue-bubble {
  position: relative;
  overflow: hidden;
  background-color: var(--color-brand-primary);
  background-image:
    radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 60%),
    radial-gradient(circle at 0% 100%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 50%);
  background-repeat: no-repeat;
  transition: all 0.15s ease-in-out;
}
```
- **Rationale**:
  - Extremely lightweight with zero DOM overhead.
  - Automatically scales across buttons of any aspect ratio (from small 32px product card buttons to full-width drawer CTAs).
  - Preserves native button flex centering, icon positioning, and focus outlines.
  - Hover states smoothly intensify the corner bubbles (`0.28` top-right, `0.16` bottom-left) alongside the background color shift.

### 2. Systematic Integration Across Components
- **`src/routes/layout.css`**: Define the `.cta-blue-bubble` utility with standard and hover states.
- **`src/lib/components/Button.svelte`**: Update `variantStyles.primary` to use `cta-blue-bubble`.
- **`src/lib/components/ProductCard.svelte`**: Apply `cta-blue-bubble` to the Buy Now button.
- **`src/lib/components/Header.svelte`**: Apply `cta-blue-bubble` to desktop and mobile search submit buttons.
- **`src/lib/components/Hero.svelte`**: Apply `cta-blue-bubble` to the flash sale deal "+ Add" button.
- **`src/routes/{cart,offers,profile}/+page.svelte`**: Apply `cta-blue-bubble` to the primary action links.

## Risks / Trade-offs

- **Color token synchronicity**: The utility must use `var(--color-brand-primary)` and `var(--color-brand-primary-hover)` so theme changes propagate automatically.
