## Context

See `proposal.md` for motivation. Currently, `AutoWizardConfigurator.svelte` and related views use micro-typography (`text-[10px]`, `text-[11px]`), boxy cards, 24px step circles, and plain gray borders, which contrast sharply with the rest of Joy Telecom's ambient bubble, tactile, high-density design system.

## Goals / Non-Goals

**Goals:**
- Upgrade typography scale across the entire configurator to meet Joy Telecom's 13–18px baseline hierarchy.
- Enlarge tap targets for mobile usability (min 44px for primary actions, 34–36px for step indicators, min 40px for filter pills).
- Replace flat buttons and dull chips with `.cta-blue-bubble` and rounded pill shapes matching `CategorySection.svelte` and `Button.svelte`.
- Redesign the Step 1 device cards, Step 2 brand tiles, Step 3 model cards, and Step 4 hero confirmation to feel cohesive, premium, and lively.

**Non-Goals:**
- Changing underlying catalog logic or data tree structure.
- Modifying drawer opening/closing mechanics in `ShopByPhoneDrawer.svelte`.

## Decisions

### Decision 1: Upgraded Stepper Architecture
- Step circles: `w-9 h-9 sm:w-10 sm:h-10 rounded-full font-black text-xs sm:text-sm`.
- Active step: Applies `.cta-blue-bubble text-white shadow-sm ring-4 ring-blue-500/15`.
- Completed step: Emerald badge `bg-[var(--color-success-bg)] text-[var(--color-success-text)] border border-[var(--color-success-border)]`.
- Pending step: Clean subtle surface `bg-[var(--color-bg-subtle)] text-[var(--color-text-disabled)]`.
- Connecting bar: `h-1 rounded-full` with smooth color transition.
- Back button: `w-9 h-9 rounded-full` matching step height with tactile active scale.

### Decision 2: Series Filter Chips Harmonization
- Adopt the exact pill-chip design from `CategorySection.svelte`:
  - Inactive: `rounded-full px-3.5 py-1.5 text-xs font-bold bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-subtle)] hover:text-[var(--color-brand-primary)] shadow-2xs transition-all`.
  - Active: `rounded-full px-3.5 py-1.5 text-xs font-extrabold cta-blue-bubble text-white shadow-sm transition-all`.

### Decision 3: Tactile Card System for Steps 1, 2, and 3
- Step 1 Device Tiles: 2-column grid, `p-4 sm:p-5 rounded-[var(--radius-xl)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:border-[var(--color-brand-primary)] hover:shadow-md`. Icon pod: `w-14 h-14 rounded-2xl` with frosted gradient.
- Step 2 Brand Tiles: `p-4 rounded-[var(--radius-xl)]` with `w-12 h-12` glowing brand logo/initials circle.
- "More Brands" Tile: Clean elevated card with a glowing search lens pod and `.cta-blue-bubble` micro-badge.
- Step 3 Model Cards: `p-3.5 rounded-[var(--radius-lg)]` with min-height 56px, bold title (`text-sm font-extrabold`), series & year badges, and soft hover state.

### Decision 4: Step 4 Confirmation Redesign
- Hero card with 3D Thunder/Fit badge and verified seal.
- Direct category shortcuts (`Cases`, `Screen Protectors`, `Chargers`, `MagSafe`) formatted as quick pill tags.
- Main CTA: `.cta-search-animated` button ("Browse Verified Accessories").

## Risks / Trade-offs

- **[Screen Real Estate on Small Phones]** → Responsive padding (`p-3 sm:p-5`) and grid scaling (`grid-cols-2` on mobile, `grid-cols-3` on desktop for brands) ensure elements fit comfortably without excessive vertical scrolling.
