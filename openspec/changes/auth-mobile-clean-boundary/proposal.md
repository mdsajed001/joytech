## Why

The top horizontal indicator bar and exaggerated rounded corners (`rounded-t-[28px]`) on the mobile authentication form container create an artificial bottom-sheet appearance that clutters the interface. The user explicitly requested to remove the grab bar and eliminate the rounded corners, creating a crisp, flush boundary between the blue brand canopy and the form surface.

## What Changes

- **Remove Top Grab Bar**: Delete the gray horizontal pill indicator (`w-10 h-1 rounded-full`) from the top of the mobile form sheet in `AuthSplitLayout.svelte`.
- **Straight Flush Top Edge**: Remove `rounded-t-[28px]` from the mobile form container so it meets the blue canopy with a crisp, flush straight boundary (`rounded-none`).
- **Preserve Sliding Motion**: Keep the responsive upward slide and canopy condensation mechanics on input focus intact, operating cleanly with the straight-edge layout.

## Capabilities

### New Capabilities
- `auth-mobile-clean-boundary`: Flush, straight-edge boundary between the mobile blue canopy and the auth form container without grab bars or rounded corners.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**: `src/lib/components/auth/AuthSplitLayout.svelte`
- **APIs/Dependencies**: None (pure CSS/HTML layout cleanup).
