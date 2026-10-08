## Why

In the expanded mobile search takeover, the input container retains an unnecessary grey border around the text area, and the search submission button displays the text "Search" taking up excessive horizontal space instead of using a clean, compact search icon.

## What Changes

- **Borderless Text Input Area**: Remove borders completely from the search input container in expanded state (`border-none`), while keeping defined borders on the surrounding buttons (such as the back button `[<]`).
- **Icon-Only CTA in Expanded State**: Replace the text `"Search"` on the mobile submission button with a dedicated search magnifying glass icon (`Search01Icon`) in the expanded state, keeping the full text button only when collapsed.
- **Zero Focus Outline / Ring**: Ensure the search input and container have zero blue outline, focus ring, or halo effects when tapped or actively typing (`outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:outline-none focus-visible:ring-0`).

## Capabilities

### New Capabilities
- `mobile-search-refinements`: Covers borderless search text container styling and expanded icon-only search button behavior on mobile viewports.

### Modified Capabilities
<!-- None -->

## Impact

- `src/lib/components/Header.svelte`: Mobile search input container classes and mobile search submission button conditional content. Desktop remains untouched.
