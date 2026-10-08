## Context

The Joytech design system is built on an architectural, boxy visual aesthetic using tokenized border radii:
- `--radius-xs`: 4px (micro badges, checkboxes, small icons)
- `--radius-sm`: 8px (buttons, input fields, inner interactive cards)
- `--radius-md`: 12px (section cards, dialog wrappers)

In contrast, the checkout page currently has various instances of `rounded-xl` (24px) and `rounded-2xl` (32px), creating a bulbous, pill-shaped look that feels out of place with the rest of the site (such as `OrderSummary.svelte` and `CartItemCard.svelte`).

## Goals / Non-Goals

**Goals:**
- Replace all instances of `rounded-xl` and `rounded-2xl` across the checkout route and components with tokenized, boxy radii (`rounded-[var(--radius-sm)]`, `rounded-[var(--radius-md)]`, and `rounded-[var(--radius-xs)]`).
- Align primary checkout action buttons (desktop sidebar CTA and mobile sticky bottom CTA) to `rounded-[var(--radius-sm)]`.
- Maintain crisp, polished interactive hover and active states without visual regressions.

**Non-Goals:**
- Changing component layouts, fonts, color schemes, or business logic.

## Decisions

### Decision 1: Button Corner Geometry
- **Choice**: Apply `rounded-[var(--radius-sm)]` (8px) to all primary and secondary checkout buttons:
  - Desktop "Confirm & Place Order" button
  - Mobile sticky "Confirm Order" button
  - Complete Your Setup "+ Add" buttons
  - Address modal "Save Address" & "Add New" buttons
  - Success receipt "Continue Shopping" CTA
- **Rationale**: Matches `OrderSummary.svelte`'s `rounded-[var(--radius-sm)]` CTA styling exactly.

### Decision 2: Section Container Geometry
- **Choice**: Standardize all major section containers (`CheckoutOrderReview`, `CheckoutAddressCard`, `CheckoutPaymentMethods`, `CheckoutPolicyAgreement`, and sidebar summary) to `rounded-[var(--radius-md)]` (12px).
- **Rationale**: Creates crisp, unified boxy card proportions across the page grid.

### Decision 3: Sub-Module & Micro-Element Radii
- **Choice**:
  - Payment method cards: `rounded-[var(--radius-sm)]` (8px), icon squares: `rounded-[var(--radius-xs)]` (4px).
  - Thumbnail images: `rounded-[var(--radius-xs)]` (4px).
  - Address switcher modal & option cards: `rounded-[var(--radius-md)]` (12px) for the modal wrapper and `rounded-[var(--radius-sm)]` (8px) for individual saved addresses.
  - Policy checkbox: `rounded-[var(--radius-xs)]` (4px).
  - Trust badges & VIP widget: `rounded-[var(--radius-sm)]` (8px) and `rounded-[var(--radius-xs)]` (4px).

## Risks / Trade-offs

- **[Risk] Visual contrast between square corners and circular icons**:
  - *Mitigation*: Circular icons remain `rounded-full`, while the containing structural frames are boxy with subtle 4px–8px radius, matching the site's standard iconography containers.
