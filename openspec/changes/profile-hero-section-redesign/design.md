## Context

See `proposal.md` for background and motivation. Currently, `src/routes/profile/+page.svelte` encapsulates all content—including breadcrumb, `ProfileHeader`, and tab panels—inside a single `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container. To achieve an edge-to-edge layout like the homepage hero (`Hero.svelte`), the layout hierarchy must be decoupled into a full-bleed hero banner zone and a centered content container zone.

## Goals / Non-Goals

**Goals:**
- Provide an edge-to-edge hero section directly under the header with zero side padding, zero border radius, and no breadcrumb navigation.
- Implement the primary blue (`var(--color-brand-primary)`) background enhanced with the ambient white radial bubble motif (`cta-blue-bubble` aesthetic).
- Align inner hero content with the desktop `max-w-7xl` grid so customer credentials and metrics line up cleanly with the lower tab interface.
- Upgrade stat counters into frosted-glass interactive cards with smooth hover/active transitions.
- Maintain full responsiveness across mobile, tablet, and desktop viewports.

**Non-Goals:**
- Modifying the underlying data models (`mockProfile.ts`) or changing tab panel functionality (`OrdersTab`, `AddressesTab`, `WishlistTab`, `SettingsTab`).
- Adding new global header or footer behaviors.

## Decisions

### Decision 1: Split Page Layout Structure
- **Choice**: In `+page.svelte`, move `<ProfileHeader>` outside the centered `max-w-7xl` div. Remove the `<nav aria-label="Breadcrumb">` block. The hero component renders full-width at the very top of `<main>`, while `<ProfileNavTabs>` and tab panels remain in the centered, padded `max-w-7xl` container below.
- **Why over alternatives**: Using negative horizontal margins on an inner card causes horizontal overflow and scrollbar jitter on responsive screens. Decoupling the layout cleanly isolates full-bleed presentation from the centered content grid.

### Decision 2: Hero Ambient White Bubble Surface Styling
- **Choice**: Implement `.profile-hero-bubble` in `src/routes/layout.css` leveraging multiple ambient radial gradients with white semi-transparencies over `var(--color-brand-primary)`.
- **Why over alternatives**: A plain flat blue background looks flat and lacks the signature premium feel established by the search button and CTA bubbles. Radial gradients are lightweight, GPU-efficient, require zero client-side scripts, and render identically across all browsers.

### Decision 3: Frosted-Glass Stat Metrics
- **Choice**: Style the stat metrics with `bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-white`, with the active tab having `bg-white/25 border-white/40 ring-2 ring-white/20`.
- **Why over alternatives**: High-contrast opaque white cards would create harsh visual blocks on the blue hero. Frosted glass integrates harmoniously with the ambient blue bubble background while maintaining clear tactile feedback.

### Decision 4: High-Contrast Identity Typography & Badges
- **Choice**: Use `#FFFFFF` for customer name, phone, and email text; style the tier badge with `bg-white/15 text-white border-white/25`; wrap avatar with `ring-4 ring-white/25 shadow-md`.
- **Why over alternatives**: White on `#1D5FCB` delivers a 7.05:1 contrast ratio, passing WCAG 2.2 AAA accessibility requirements for text.

## Risks / Trade-offs

- **[Risk] Visual alignment mismatch between hero inner content and lower tabs** → **Mitigation**: Wrap the hero banner's inner layout in `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`, matching the exact horizontal margins of the lower content section.
- **[Risk] Touch target sizing on mobile viewports** → **Mitigation**: Maintain minimum 44px tap targets for all frosted stat buttons and contact elements.
