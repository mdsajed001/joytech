## Context

See `proposal.md` for motivation. On mobile devices, the sticky cart checkout bar overlaps with the fixed `<SupportWidget />`. Furthermore, the CTA buttons currently use generic `rounded-xl py-3` styles instead of the established `.cta-blue-bubble` design token and `rounded-[var(--radius-sm)]` (8px) corners found throughout the rest of the application.

## Goals / Non-Goals

**Goals:**
- Dynamically suppress `<SupportWidget />` on `/cart` via `$page.url.pathname`.
- Apply `.cta-blue-bubble` class with proper height (`min-h-[46px]`), bold uppercase/medium text, and `rounded-[var(--radius-sm)]` across mobile and desktop cart CTAs.

**Non-Goals:**
- Modify support widget functionality on other pages.
- Alter cart calculation logic.

## Decisions

1. **Route-based conditional rendering in `+layout.svelte`**:
   - Wrap `<SupportWidget />` in `{#if $page.url.pathname !== '/cart'}`.
   - *Rationale*: Cleanest approach without needing global state flags or DOM hacks.

2. **Design System Token Alignment**:
   - Utilize `.cta-blue-bubble` CSS utility defined in `src/routes/layout.css` (`linear-gradient(135deg, #1D5FCB 0%, #154ca7 100%)` with `box-shadow: 0 4px 14px 0 rgba(29, 95, 203, 0.39)`).
   - Enforce `rounded-[var(--radius-sm)]` (8px radius) for rectangular crisp card CTA feel.

## Risks / Trade-offs

- *[Risk]*: Customers needing support while in cart cannot see floating button → *Mitigation*: The header already provides phone number / WhatsApp support in drawer and footer.
