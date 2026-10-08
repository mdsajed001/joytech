## Why

When the mobile search bar is clicked, it previously jumped 60px upwards from its normal header position, displayed an unwanted bright blue outline border, and snapped abruptly onto the screen without smooth expansion. The user requested:
1. Eliminating the colored border on the search bar.
2. Keeping the search box locked at its exact vertical position in the header.
3. Making the full-screen white canvas expand smoothly rather than snapping.

## What Changes

- **Remove Colored Border**: Eliminate the `border-2 border-[var(--color-brand-primary)]` outline on the active mobile search bar. Use the seamless, subtle border/background matching the collapsed state.
- **Anchor Exact Vertical Spot**: The mobile search bar remains continuously rendered in its natural Row 2 position (~72px down from the viewport top), with zero vertical jumping or displacement when tapped.
- **Top Row Header Continuity**: In Row 1 above the search bar, smoothly display a back button `[<]` and `JOYTECH` brand text to provide clean dismissal while preserving vertical geometry.
- **Smooth Viewport Expansion**: Transition the white search canvas from the search bar down to full viewport height (`100vh`) using smooth CSS transitions (`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`) instead of an abrupt conditional DOM snap.
- **In-Place Shape Morphing**: The search container and button smoothly animate between capsule (`rounded-full`) and boxy (`rounded-[var(--radius-sm)]`) directly in their original position.

## Capabilities

### New Capabilities
- `search-seamless-expansion`: Smooth, non-snapping mobile search expansion anchored at its exact vertical position with no colored borders.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/components/Header.svelte`
- **APIs/Dependencies**: None (CSS layout and state animation only).
