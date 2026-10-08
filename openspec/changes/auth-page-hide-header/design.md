## Context
The user wants to hide the header on `/auth` but keep the footer. 

## Goals / Non-Goals
**Goals:** Hide the top header elements on `/auth` and `/auth/verify`.
**Non-Goals:** Hiding the footer.

## Decisions
- Update the condition `!$page.url.pathname.startsWith('/checkout')` to `!$page.url.pathname.startsWith('/checkout') && !$page.url.pathname.startsWith('/auth')` in `src/routes/+layout.svelte`.

## Risks / Trade-offs
None.
