## Context

See proposal.md - Why.
`Header.svelte` currently uses `placeholder="Search products, brands or phone models..."` (desktop) and `placeholder="Search accessories or phone models..."` (mobile).

## Goals / Non-Goals

**Goals:**
- Replace both placeholder text values with `"Search"`.

**Non-Goals:**
- Changing search submission logic or backend query routing.

## Decisions

- **Update `placeholder` in `Header.svelte`**:
  - Desktop search input (line 67): `placeholder="Search"`
  - Mobile search input (line 143): `placeholder="Search"`

## Risks / Trade-offs

- None.
