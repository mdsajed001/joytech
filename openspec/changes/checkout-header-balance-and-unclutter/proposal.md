# Proposal: Checkout Header Unclutter, Balanced Alignment, and Minimal Back Navigation

## Why

The current checkout top header bar (`CheckoutTrustBar.svelte`) exhibits visual imbalances and cluttered branding:
1. It displays a prominent "J Joy Telecom" logo in the middle of a checkout transaction flow where brand repetition is redundant and distracts from the transaction.
2. The "Back to Cart" action is styled as an isolated floating pill button (`rounded-lg bg-white/10`) that conflicts with the design system's boxy, clean aesthetic.
3. The layout uses variable-width flex spacing that places items off-center, resulting in a visually skewed, unbalanced header—especially on mobile screens where the logo and security badges clash.

Removing redundant brand text, replacing the pill button with a sleek minimalist back action, and introducing a mathematically balanced 3-column header layout will provide a distraction-free, professional checkout navigation bar.

## What Changes

- **Remove "Joy Telecom" Brand Repetition**:
  - Remove the "J" circular avatar and "Joy Telecom" text mark from the checkout header.
- **Replace Pill Back Button with Sleek Minimal Navigation**:
  - Eliminate the translucent rounded pill background (`bg-white/10`) on the "Back to Cart" link.
  - Render a clean, boxy, or text-and-arrow navigation link (`← Back to Cart` on desktop, `← Cart` on mobile) with tactile active feedback and zero awkward pill borders.
- **Implement True Symmetrical 3-Column Header Alignment**:
  - Re-architect the header using a balanced 3-column grid (`grid grid-cols-3 items-center`) ensuring:
    - **Left**: Left-aligned minimal back navigation action.
    - **Center**: Perfectly centered "Secure Checkout" title with a subtle trust lock/shield badge.
    - **Right**: Right-aligned security/encryption trust indicator to counter-balance the left navigation.
- **Preserve Required Blue Bar Aesthetic**:
  - Retain the signature blue bubble background (`profile-hero-bubble`) and crisp white typography.

## Capabilities

### New Capabilities
- `checkout-header-navigation`: Clean, balanced, distraction-free top navigation bar for the checkout screen featuring true center alignment, minimal back navigation, and verified security reassurance.

### Modified Capabilities
*(None; establishes the checkout header navigation capability in the OpenSpec registry)*

## Impact

- **UI Components**: `src/lib/components/checkout/CheckoutTrustBar.svelte`.
- **Dependencies**: No new npm dependencies; uses existing `@hugeicons` (`ArrowLeft01Icon`, `Shield01Icon` / `Lock01Icon`).
- **User Experience**: Cleaner visual hierarchy, no awkward pill shapes, perfectly balanced center alignment on mobile and desktop, zero clutter.
