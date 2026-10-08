## Context

See proposal.md - Why.

Current implementation:
- `AuthenticityBanner.svelte` — bright blue gradient section, `onCheckCompatibility` prop, a `<Button>` CTA that opens the phone compatibility drawer
- `+page.svelte` — passes `onCheckCompatibility={() => phoneDrawerState.open()}` to the component
- `Header.svelte` — exposes `onSearch?: (query: string) => void` prop and `searchQuery` bindable state
- `+layout.svelte` — `handleSearch(q)` currently shows a toast via `cartState.showToast(...)`

## Goals / Non-Goals

**Goals:**
- Replace the bright blue gradient with a deep dark navy premium background
- Replace claim/pain-point copy with a short confident action-oriented copy set
- Replace the Button CTA with an inline search form (input + submit button)
- Invoke `onSearch` callback on form submit, wired from `+page.svelte`
- Fully responsive: inline on desktop (`md:`), stacked full-width on mobile
- Remove unused `onCheckCompatibility` prop

**Non-Goals:**
- Implementing a real product search index or results page (search triggers existing `handleSearch` toast behavior, consistent with the header search)
- Changing the overall page section order

## Decisions

### Background
Replace `bg-gradient-to-r from-[var(--color-brand-primary)] to-[#0C3B88]` with `bg-gradient-to-br from-[#0B111E] to-[#0F2557]`. This deep navy gradient communicates premium and authority — distinct from the energetic blue used on CTAs and the header.

### Layout: centered single-column
Remove the current two-column (text left, button right) `flex-row` split. Replace with a vertically centered, centered-text layout. On any viewport, content reads: eyebrow → headline → subline → search form. Maximum width constrained to `max-w-3xl` for the text block and `max-w-2xl` for the search form — no awkward horizontal stretching.

### Copy
```
Eyebrow:   AUTHENTIC ACCESSORIES
Headline:  Find Your Perfect Accessory
Subline:   Official brands. Real stock.
Placeholder: Search phones, chargers, cases...
Button:    Search
```

### Search form
- `<form onsubmit={handleSubmit}>`
- Input: `type="text"` bound to local `searchQuery` state, full-width, `min-h-[44px]`, white/translucent bg, rounded-full on mobile / rounded-l-full on desktop
- Button: `type="submit"`, accent or brand-primary, `min-h-[44px]`, `px-6`, rounded-full on mobile / rounded-r-full on desktop
- Desktop (`md:`): `flex-row` — input flex-1, button shrink-0
- Mobile: `flex-col` — input full-width, button full-width

### Props change
- Remove: `onCheckCompatibility?: () => void`
- Add: `onSearch?: (query: string) => void`

### `+page.svelte` wiring
Replace `onCheckCompatibility={() => phoneDrawerState.open()}` with `onSearch={(q) => handleSearch(q)}` where `handleSearch` is imported/defined in the layout or page. Since `handleSearch` lives in `+layout.svelte`, the simplest approach is to define a local `handleSearch` in `+page.svelte` that calls `cartState.showToast(...)` consistently with the existing behavior — or simply pass no prop and let the component invoke `onSearch?.()` silently if undefined.

**Decision**: Wire `onSearch` in `+page.svelte` with a local function that shows the same toast as the layout's `handleSearch`. This keeps the page self-contained and avoids prop-drilling through layout.

### Vertical padding
Increase section padding from `py-12` to `py-16 md:py-20` to give the dark premium section room to breathe — generous whitespace amplifies the premium feel.

### Search input visual
Input field: dark translucent white `bg-white/10 border border-white/20 placeholder:text-white/50 text-white` with `focus:bg-white/15 focus:border-white/40 transition-all`. This maintains the dark aesthetic while keeping the input clearly identifiable.

## Risks / Trade-offs

- Search behavior remains a toast for now (no real results page). This is consistent with the header search behavior and acceptable for the current V1 build.
- Removing `onCheckCompatibility` is a breaking change to the component's public API — but it is only used in `+page.svelte`, which is updated in this same change.
