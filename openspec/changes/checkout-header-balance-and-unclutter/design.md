# Design: Balanced and Uncluttered Checkout Header

## Context

See `proposal.md` for problem background. The current checkout navigation bar (`CheckoutTrustBar.svelte`) uses a floating pill button for "Back to Cart", repeats the store's "Joy Telecom" branding in the middle of a checkout flow, and uses an asymmetrical flexbox container that pushes items off-center, making the bar look unbalanced on mobile and desktop viewports.

## Goals / Non-Goals

**Goals:**
- Completely remove "Joy Telecom" and the "J" avatar from the checkout navigation bar.
- Remove the translucent pill container (`bg-white/10`, `rounded-lg`) from the back link, replacing it with a minimal, elegant text + arrow navigation link with interactive hover micro-motion.
- Establish mathematical horizontal centering using a symmetrical 3-column CSS Grid (`grid grid-cols-3 items-center`), ensuring the "Secure Checkout" title is always perfectly centered regardless of varying text lengths in the left and right columns.
- Preserve the brand blue bubble gradient background (`profile-hero-bubble`) requested by the user.
- Ensure seamless bilingual support (`bn` / `en`) and pristine mobile readability without wrapping or clashing.

**Non-Goals:**
- Modifying checkout page content sections (address, order review, payment methods).
- Removing the top blue background bar itself.

## Decisions

### 1. 3-Column Symmetrical CSS Grid vs Variable Flexbox
- **Choice**: `grid grid-cols-3 items-center h-14 sm:h-16`.
  - Column 1: `justify-self-start` (Back to Cart action).
  - Column 2: `justify-self-center` (Centered "Secure Checkout" title + shield emblem).
  - Column 3: `justify-self-end` (Right-aligned 256-Bit SSL trust signal).
- **Rationale**: Flexbox with `justify-between` shifts the center element whenever the left and right elements have unequal widths (which is always true because "Back to Cart" has a different width than "Secure"). A 3-column grid guarantees the center column is exactly in the middle of the viewport.

### 2. Sleek Minimal Back Navigation vs Pill Button
- **Choice**: Direct text-and-arrow navigation link (`text-white/85 hover:text-white transition-colors`) with an interactive arrow slide on hover (`group-hover:-translate-x-0.5`).
- **Rationale**: Eliminates the awkward floating pill shape that clashed with the project's boxy, clean design system, giving the checkout bar a refined, uncluttered feel.

### 3. Removal of "Joy Telecom" Brand Repetition
- **Choice**: Replace the center brand logo with a dedicated checkout status mark:
  `<Icon icon={Shield01Icon} /> Secure Checkout` / `নিরাপদ চেকআউট`.
- **Rationale**: The user already entered the dedicated checkout screen; repetitive logos take up valuable horizontal real estate and distract from order completion.

## Risks / Trade-offs

- **[Risk]** Long security badge text on very narrow mobile screens (<360px).
  → **Mitigation**: Use compact responsive copy (`256-Bit SSL` on desktop, `SSL Secure` or green status dot on ultra-compact screens) to ensure zero overlap.
