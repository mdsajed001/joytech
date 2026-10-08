## Context

Joy Telecom's header and homepage sections adhere to `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`. The `/profile` route previously used `max-w-6xl mx-auto px-4 sm:px-6`, causing visual inward indentation on PC screens. Additionally, the desktop header rendered the profile icon as a non-interactive `<button>`.

See `proposal.md` for motivation and `specs/profile-navigation/spec.md` for requirements.

## Goals / Non-Goals

**Goals:**
- Standardize `/profile` container styling to `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Make the desktop top bar account button an anchor `<a href="/profile">` with proper hover and active states.
- Connect the desktop header wishlist icon to `/profile` so users can also access saved items.

**Non-Goals:**
- Modifying the mobile bottom navigation bar (which already correctly routes to `/profile`).

## Decisions

### 1. Standardized Container Classes
- Replace `max-w-6xl mx-auto px-4 sm:px-6` with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` in `src/routes/profile/+page.svelte`.
- Rationale: Ensures exact alignment with the header logo and right-hand buttons on large desktop screens (`1280px` max-width with `32px` desktop padding).

### 2. Semantic Anchor Tags for Header Actions
- Replace the `<button>` for Account and Wishlist in `src/lib/components/Header.svelte` with `<a href="/profile">` elements.
- Rationale: Semantic anchor tags provide instant browser navigation, allow opening in new tabs, and improve accessibility without extra JavaScript overhead.

## Risks / Trade-offs

- None identified; changes are styling and navigation enhancements using existing design tokens.
