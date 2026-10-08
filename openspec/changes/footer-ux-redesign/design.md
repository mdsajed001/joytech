## Context

See `proposal.md` for motivation. The global footer currently uses a Svelte component (`Footer.svelte`) rendering a CSS grid. Link lists (Categories, Customer Service, Policies) are hardcoded or mapped from data files. No interactive state (like an accordion) exists currently.

## Goals / Non-Goals

**Goals:**
- Add an interactive accordion state to the 3 link lists for mobile breakpoints (`< lg`).
- Refine typography: swap `text-[var(--color-accent)]` for `text-white` on section headings.
- Increase text size from `text-xs` to `text-sm` for better desktop readability.
- Add standard social icons (Facebook, Instagram, YouTube, WhatsApp) underneath the Brand contact column.
- Re-align payment badges to the end (right) on desktop.

**Non-Goals:**
- Do not remove or alter the actual URLs/links in the footer, only their presentation.

## Decisions

- **Accordion Implementation:** We will use Svelte's local state (`let expandedSection: string | null = null`) to manually toggle the visibility of the `<ul>` lists on mobile. We will add a toggle button (e.g. `+` or chevron) to the headers on mobile. For desktop, Tailwind's `lg:block` will enforce visibility regardless of the local state, ensuring no layout breakage if a user resizes their window.
- **Typography & Icons:** We will update the Tailwind classes for headers from `text-xs font-bold text-[var(--color-accent)] uppercase` to `text-sm font-semibold text-white`. Links will also become `text-sm`. Social icons will use `@hugeicons/core-free-icons` or simple SVG equivalents to add FB, IG, YT, and WA links.
- **Payment Alignment:** Flexbox `justify-between` is already used on the bottom row. We will ensure the copyright is on the left and payment badges are on the right on `sm:` breakpoints.

## Risks / Trade-offs

- **Risk:** Implementing custom accordions via local state might cause brief layout shifts or require extra CSS for smooth transitions.
  **Mitigation:** We will keep it simple with conditional rendering `{#if}` or Tailwind `hidden` classes for the initial pass to guarantee stability.
