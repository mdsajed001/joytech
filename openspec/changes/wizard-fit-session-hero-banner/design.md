## Context

See proposal.md for motivation. The search page (`src/routes/search/+page.svelte`) currently renders the `isWizardFitSession` block inside the right column, constrained by the page's global `max-w-7xl` container and padding.

## Goals / Non-Goals

**Goals:**
- Move the Fit Session banner out of the grid and above the main container to be full-bleed.
- Add a new CSS animation class `.fit-session-hero-bubble` in `src/routes/layout.css` that implements a slow-drifting green-tinted background (using Joy Telecom's emerald success/brand colors).
- Restructure the banner HTML to prioritize the device name (`modelDisplayName`) with large typography (`text-3xl sm:text-4xl font-black`).
- Bring the page breadcrumbs into or directly beneath this full-bleed banner.

**Non-Goals:**
- Altering the logic for when `isWizardFitSession` is triggered (this remains tied to the `phoneModel` URL parameter).

## Decisions

### 1. Structural Changes in `+page.svelte`
- **Decision**: Wrap the main search page content (`<div class="max-w-7xl...">`) in a conditional block. If `isWizardFitSession` is true, render a new `<div class="w-full fit-session-hero-bubble ...">` at the very top of the page, above the `max-w-7xl` content container.
- **Rationale**: Achieves the full-bleed layout without disrupting the sidebar and product grid below.

### 2. Animated Green Background
- **Decision**: Define `.fit-session-hero-bubble` in `src/routes/layout.css`. It will mirror the `profile-hero-bubble` drift animation but use emerald/green radial gradients (e.g., `rgba(16, 185, 129, 0.15)` / `emerald-500`) over a deep green or dark surface.
- **Rationale**: Meets the user's request for a green background ("instade ot blue make it grean bg") while retaining the premium animated feel.

### 3. Typography and Layout within the Banner
- **Decision**: Use a centered or left-aligned layout inside a `max-w-7xl mx-auto px-4` container *within* the full-bleed banner. The device name will be `text-3xl md:text-5xl font-black text-white`. The "100% Fit Guaranteed" message will sit below it with the `CheckmarkCircle01Icon`.
- **Rationale**: Establishes the clear priority of the device name over the fit message.

## Risks / Trade-offs

- **[Risk] Contrast issues on green background** → **Mitigation**: Ensure the green gradients are subtle enough or the text is white/contrasting enough to remain readable. Using dark green for the base with bright emerald gradients works well in dark mode, and a fresh green in light mode.
