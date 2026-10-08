## Context

See `proposal.md` for motivation. Currently, `DeliveryProgressBar.svelte` and `CrossSellRail.svelte` use `blue-50/90` and `blue-50/70` in light mode. At only ~3.8% saturation, standard sRGB PC desktop monitors with backlights and matte anti-glare finish wash this tint out into a muddy, neutral gray, whereas phone OLED displays show it as pale blue. Additionally, `text-emerald-600` (`#059669`) appears dark and olive on PC monitors, compared to mobile screens which render vibrant green.

## Goals / Non-Goals

**Goals:**
- Calibrate the light-mode surface tint of the 1st Order Free Delivery Banner to `bg-blue-100/70` with coordinating `border-blue-200/80`, ensuring unmistakable blue tone across PC sRGB screens and mobile OLED screens alike.
- Calibrate the light-mode background of the "You Might Also Like" section to `bg-blue-100/60`, delivering consistent brand cohesion.
- Upgrade cart green accents and badges from `text-emerald-600` to luminous `text-emerald-500` across `DeliveryProgressBar.svelte` and `OrderSummary.svelte`.
- Maintain dark-mode appearance and contrast fidelity unchanged.

**Non-Goals:**
- Modifying product cards, layout structure, or mobile bottom sheet drawer mechanics.
- Altering the checkout modal or payment gateway styling.

## Decisions

### Decision 1: Use `blue-100/70` and `blue-100/60` over pure CSS variable overrides
- **Rationale**: Tailwind's `blue-100` (`#DBEAFE`) provides ~13.8% blue saturation (R:219, G:234, B:254). When modulated with 60%-70% opacity over the off-white `#FAFAFC` canvas, it provides a resilient ~10% chroma that cannot be washed out by PC monitor backlights, while remaining soft and secondary behind product content.
- **Alternatives Considered**:
  - `bg-[var(--color-brand-primary)]/10`: Also produces a blue tint, but can clash with subtle saturation curve variations in light mode. `blue-100` provides an ideal harmonious tint.
  - Plain `blue-50` with 100% opacity: Still has only 6% saturation and appears gray on lower-contrast desktop monitors.

### Decision 2: Elevate Light Mode Green to `text-emerald-500`
- **Rationale**: `emerald-500` (`#10B981`) has higher perceptual lightness and higher green chroma than `emerald-600` (`#059669`). On PC desktop monitors, it presents a radiant, fresh, positive e-commerce tone that matches the vibrant green perceived on mobile OLED panels.
- **Alternatives Considered**:
  - `text-green-500`: Too neon/yellowish compared to Joy Telecom's cool tech aesthetic.
  - Keeping `text-emerald-600`: Continues to look dark and muted on PC displays.

## Risks / Trade-offs

- **[Risk] High-contrast mobile displays might appear slightly richer in blue** → Mitigation: `blue-100` at 60-70% opacity remains well below aggressive saturation thresholds, ensuring a balanced, premium appearance across both platforms.
