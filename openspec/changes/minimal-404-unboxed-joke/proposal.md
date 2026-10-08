## Why

The 404 error page currently wraps the joke and messaging inside a boxed card with multiple layered headers, paragraphs, and borders. This boxed container creates unnecessary visual clutter and pushes the interactive recovery buttons further down the viewport. 

Removing the box and distilling the joke down to a clean, punchy 1-2 line copy makes the layout feel light, modern, seamless, and instantly readable within the viewport above the fold.

## What Changes

- **Remove Box Container**: Eliminate the card container (`bg-[var(--color-bg-surface)]`, border, shadow, top gradient accent) surrounding the text. The copy now sits directly on the page background in a seamless flow.
- **Shorten Joke to 1–2 Lines**:
  - **English**: *"Even our 65W fast charger couldn't power up this page! Either the link unplugged itself, or the URL was delivered to the wrong address."*
  - **Bangla**: *“ভাইয়া, ডেলিভারি রাইডার কল দিয়ে বলল—‘আপনার পেজের লোকেশন তো পাচ্ছি না, একটু মেইন রোডে আসেন!’ 🛵💨”*
- **Remove Redundant Stacked Text**: Eliminate extra badge pills, secondary headings, and lengthy reassurance paragraphs so only the punchy joke and immediate recovery CTAs remain.
- **Compact Viewport Polish**: Position the action buttons ("Back to Home", "Search Catalog") directly under the 1-2 line text for an effortless, instant recovery experience.

## Capabilities

### New Capabilities
- `error-page-404`: Clean, unboxed 404 error view displaying a focused 1-2 line joke directly below the vector artwork with instant navigation CTAs.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**: `src/lib/components/NotFoundView.svelte`.
- **Dependencies**: None.
