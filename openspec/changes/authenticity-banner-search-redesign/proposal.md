## Why

The current `AuthenticityBanner.svelte` is a claim-based promotional banner that lacks visual premium quality and doesn't serve a clear user action. It uses a bright blue gradient, defensive pain-point copy ("Tired of Fake Accessories?"), and a CTA ("Check Compatibility") that doesn't connect to the authenticity message.

The section sits between product rows — a natural moment to invite users to actively search for what they need. The redesign replaces the old promotional banner with a premium product discovery section. Trust is communicated through clean, confident visual design rather than marketing claims. The primary CTA becomes a search input.

## What Changes

- Redesign `AuthenticityBanner.svelte` into a product discovery section with:
  - Deep navy dark background (`#0B111E → #0F2557`) for a premium, authoritative feel
  - Confident, action-oriented headline: "Find Your Perfect Accessory"
  - Short, calm subline: "Official brands. Real stock."
  - Inline search form (input + Search button) as the primary CTA on desktop
  - Stacked search layout (input above full-width button) on mobile
  - Remove the `onCheckCompatibility` prop — no longer needed
  - Rename component props to reflect the new search-focused purpose

## Capabilities

### New Capabilities
- `authenticity-banner`: Defines the product discovery banner section — its visual design language, search form behavior, responsive layout, and content structure.

### Modified Capabilities

## Impact

- `src/lib/components/AuthenticityBanner.svelte`: Full redesign — layout, styling, copy, and search form replacing button CTA.
- `src/routes/+page.svelte`: Update `<AuthenticityBanner />` usage — remove `onCheckCompatibility` prop, pass `onSearch` instead.
