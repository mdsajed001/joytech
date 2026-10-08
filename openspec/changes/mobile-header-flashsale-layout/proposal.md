## Why

On mobile viewports, the navigation header and the Flash Sale section header suffer from suboptimal element placement and unintended text wrapping:
1. In the header, placing the hamburger menu button on the far left crowds the logo and leaves the right side empty, while being less ergonomic for right-handed thumb reach.
2. In the Flash Sale header, the title, discount chip, and countdown timer currently sit on a single flex-wrapping row. On typical phone screens (~375px–390px), the countdown timer wraps awkwardly to a second line on the left side underneath the title.

Moving the mobile menu trigger to the right side of the header balances the top bar, and restructuring the Flash Sale header into two distinct columns (Title + Badge on the left, "Ends in:" stacked above countdown boxes on the right) provides a balanced, scannable layout that never wraps prematurely.

## What Changes

- **Mobile Header Menu Relocation**:
  - In `src/lib/components/Header.svelte`, move the mobile menu button (`Menu01Icon`) to the right side of the header bar for viewports `<lg`.
  - The Joy Telecom logo remains anchored cleanly on the left.
- **Flash Sale Section Header Restructure**:
  - In `src/lib/components/FlashSaleSection.svelte`, restructure the mobile header layout:
    - **Left column**: "⚡ Flash Sale" heading on top, with the "Up to 40% OFF" badge positioned directly underneath it.
    - **Right column**: "Ends in:" label stacked directly above the countdown digit boxes (`[HH] : [MM] : [SS]`), right-aligned.
  - On viewports ≥ 640px (`sm:`), maintain clean alignment and responsive spacing.

## Capabilities

### New Capabilities
- `mobile-header-flashsale-layout`: Layout and positioning adjustments for the mobile header menu button and Flash Sale header 2-column stacked countdown.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/lib/components/Header.svelte`, `src/lib/components/FlashSaleSection.svelte`.
- **APIs/State**: No state or API changes; all click handlers (`onToggleMobileMenu`, timer countdown intervals) remain unchanged.
- **Visual Impact**: Balanced mobile top bar ergonomics and clean, non-wrapping 2-column Flash Sale header on phones.
