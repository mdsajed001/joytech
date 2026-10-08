## Context

The profile page body consists of three core tabs (`SettingsTab.svelte`, `RewardsTab.svelte`, `PaymentsTab.svelte`) and eight slide-over drawer views rendered via `ProfileDrawer.svelte` (which delegates to `OrdersTab`, `WishlistTab`, `AddressesTab`, or custom review/return/promo/request forms). Currently, the tab content uses deep nested border containers, mismatched segmented toggle heights, hardcoded `bg-white` classes in modals, and invalid color tokens (`var(--color-brand-blue)`).

## Goals / Non-Goals

**Goals:**
- De-modularize and flatten the layout into cohesive, clean grouped cards with single subtle dividing lines.
- Unify segmented controls (Theme & Language) and toggle switches to standard heights (44px tap targets) and design-system styling.
- Replace all hardcoded light background colors (`bg-white`) in `ProfileDrawer`, forms, inputs, and modals with `var(--color-bg-surface)` and `var(--color-bg-canvas)` for complete dark mode fidelity.
- Standardize all brand color references across profile components to `var(--color-brand-primary)` and ensure button heights are uniform.

**Non-Goals:**
- Changing existing profile data models, mock datasets, or backend schemas.
- Modifying the profile header hero banner or top navigation bar which were already refined and approved.

## Decisions

1. **Card Hierarchy & Inner Dividers**:
   - *Decision*: Replace nested sub-cards with flat grouped lists separated by `divide-y divide-[var(--color-border-subtle)]`.
   - *Rationale*: Eliminates the "box-in-a-box" visual clutter and creates a clean, premium surface feel consistent with modern e-commerce standards.
   - *Alternative Considered*: Borderless layout without any cards — rejected because card grouping is needed on large screens to organize distinct preference domains.

2. **Unified Segmented Controls for Appearance**:
   - *Decision*: Group Theme (Light, Dark, System) and Language (English, Bengali) into an aligned 2-column or stacked card layout with matching 44px segmented container heights and active blue pill background.
   - *Rationale*: Ensures visual balance between the 3-option theme control and 2-option language control.

3. **Component Token Alignment**:
   - *Decision*: Replace all instances of `var(--color-brand-blue)` with `var(--color-brand-primary)`.
   - *Rationale*: `--color-brand-blue` was not defined in `@theme` in `layout.css`. Using `--color-brand-primary` ensures consistent theme transitions and CSS token integrity.

4. **Mobile Bottom Sheet Padding & Row Layout**:
   - *Decision*: Inside `ProfileDrawer.svelte`, adjust padding and list styling when rendered as a bottom sheet on mobile (`sm:hidden`) to use flat rows instead of nested cards.
   - *Rationale*: Prevents the claustrophobic feeling of rendering full desktop cards inside a mobile modal sheet.

## Risks / Trade-offs

- *Risk*: Bengali font line heights causing vertical overflow in segmented buttons.
  → *Mitigation*: The font system has `[lang="bn"]` line-height handling and buttons use `min-h-[44px]` with flex centering to accommodate Bengali glyphs without vertical clipping.
