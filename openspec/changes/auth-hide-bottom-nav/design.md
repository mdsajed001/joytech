## Context

See `proposal.md` and `specs/auth-bottom-nav-visibility/spec.md`. The user requests that on phone/mobile screens, the floating bottom navigation bar should not be displayed on the sign-in / sign-up pages (`/auth` and `/auth/verify`).

## Goals / Non-Goals

**Goals:**
- Hide `BottomNav` when the current route starts with `/auth`.
- Ensure `<main>` does not apply excess bottom padding (`pb-16`) on `/auth` pages on mobile.

**Non-Goals:**
- Modifying `BottomNav` internal links or behavior on non-auth pages.

## Decisions

**1. Routing Condition in `+layout.svelte`**
- **Decision**: Update the condition guarding `<BottomNav>`:
  `{#if !$page.url.pathname.startsWith('/product/') && !$page.url.pathname.startsWith('/checkout') && !$page.url.pathname.startsWith('/auth')}`
- **Rationale**: Simple, declarative, and matches how `/checkout` and `/product/` are excluded.

**2. Main Content Slot Padding**
- **Decision**: Make the bottom padding on `<main>` conditional or zero when on `/auth` routes (`$page.url.pathname.startsWith('/auth') ? '' : 'pb-16 sm:pb-0'`).
- **Rationale**: Prevents a blank 64px gap at the bottom of the screen on mobile auth views.

## Risks / Trade-offs

None.
