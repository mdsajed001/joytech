## Context

Joy Telecom uses SvelteKit with Svelte 5 runes (`$state`, `$props`, `$derived`). The existing route `src/routes/profile/+page.svelte` is a minimal placeholder. Mobile bottom navigation and desktop header links both lead to this route. The project defines rich CSS tokens in `src/routes/layout.css` and uses `@hugeicons/core-free-icons` for iconography.

See `proposal.md` for motivation and `specs/customer-profile/spec.md` for requirements.

## Goals / Non-Goals

**Goals:**
- Deliver a clean, structured, and modular component architecture under `src/lib/components/profile/`.
- Provide high-fidelity views for all 4 core customer sections: Orders (with live status tracking stepper), Addresses (with default tag and edit capability), Wishlist (with direct cart actions), and Account Settings.
- Implement responsive layout: clean tab bar for mobile viewports, and structured layout for PC desktop.
- Supply complete TypeScript models and realistic mock data representing a Joy Telecom VIP customer.

**Non-Goals:**
- External backend auth API / OAuth servers (this phase delivers the UI architecture and interactive client state).
- Live third-party courier webhook integrations (tracking mirrors the 6-stage order stepper defined in the P0 blueprint).

## Decisions

### 1. Component Architecture & Reusability
- Split the profile into distinct single-responsibility components:
  - `ProfileHeader.svelte`: Customer avatar, name, loyalty tier badge, and account counter metrics.
  - `ProfileNavTabs.svelte`: Tab switcher handling active tab state, icon badges, and keyboard accessibility.
  - `OrdersTab.svelte`: List of orders, order line items, status pills, and tracking triggers.
  - `OrderTrackingModal.svelte`: 6-stage shipment timeline stepper (Placed -> Confirmed -> Processing -> Shipped -> Out for Delivery -> Delivered).
  - `AddressesTab.svelte`: Saved address cards with default selector and address adder.
  - `WishlistTab.svelte`: Saved items grid with in-stock indicators and direct Add to Cart buttons.
  - `SettingsTab.svelte`: Notification toggles and language switches.
- *Alternatives considered*: Single monolithic `+page.svelte`. Rejected because it creates tightly coupled, difficult-to-maintain code, violating the requirement for clean, structured, and reusable code.

### 2. State Management with Svelte 5 Runes
- Create `src/lib/data/mockProfile.ts` for static definitions, and state functions in `src/lib/state/profileState.svelte.ts` (or direct runes) to manage active tab, tracking modal state, default address selection, and wishlist updates.
- *Rationale*: Leverages native Svelte 5 reactivity cleanly without legacy Svelte 4 writable stores.

### 3. Design System & Spacing Integration
- Standardize on `--color-brand-blue` (#1D5FCB), `--color-bg-surface` (#FFFFFF), `--color-bg-canvas` (#FAFAFC), `--color-border-default`, and `cta-blue-bubble` button styles.
- Support safe bottom padding on mobile so content never collides with the fixed bottom navigation bar.

## Risks / Trade-offs

- **[Risk: Mobile Bottom Nav collision]** → Ensure all tab views and the tracking modal include adequate bottom spacing (`pb-24 sm:pb-8`) so buttons and actions are never hidden behind the fixed mobile bar.
- **[Risk: Large tab bundle]** → Modularize components cleanly so each tab only renders its relevant view when active or conditionally in layout.
