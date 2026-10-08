## Why

The current coupon code quick-claim bar on the Offers page uses a standard neutral surface (`var(--color-bg-surface)` with default borders), which visually blends in with the page and lacks the brand presence and celebratory energy seen in the Profile page hero section. Joy Telecom users respond strongly to the cohesive brand-primary blue aesthetic with ambient floating white bubbles, making coupon discovery more prominent, tactile, and rewarding.

## What Changes

- **Update `PromoCouponBar.svelte` surface**:
  - Apply the `profile-hero-bubble` class (or matching brand primary blue with ambient drifting white bubbles) to the container.
  - Style header typography in crisp white with white/80 secondary accents.
  - Style the "Available" count badge with a translucent white pill (`bg-white/20 text-white backdrop-blur-md`).
- **Redesign Coupon Chips**:
  - Style the coupon cards with a high-contrast white bubble aesthetic (`bg-white text-slate-900 shadow-sm border border-white/40`) or translucent glass bubble cards.
  - Distinct copy button circles in brand primary blue with smooth hover/active scaling.
  - Green checkmark confirmation feedback when a coupon is copied.

## Capabilities

### New Capabilities
*(None)*

### Modified Capabilities
- `offers-page`: Visual styling of the coupon quick-claim rail to use brand primary blue and ambient white bubbles matching the profile hero banner design language.

## Impact

- `src/lib/components/offers/PromoCouponBar.svelte`
- Reuses `.profile-hero-bubble` from `src/routes/layout.css`
