## Why

The "COMPLETE YOUR SETUP" complementary upsell section inside the checkout Order Review card currently uses a muted subtle gray background (`bg-[var(--color-bg-subtle)]/30`) with low-contrast borders. To maximize average order value (AOV) and customer excitement before final checkout confirmation, this section needs a signature Joytech blue bubble treatment (`profile-hero-bubble` inspired) with high-contrast text, frosted bubble item cards, and an irresistible "+ Add" action that naturally commands attention.

## What Changes

- **Blue Bubble Section Wrapper**: Restyle the recommendations container in `CheckoutOrderReview.svelte` with a rich blue gradient / bubble aesthetic (`profile-hero-bubble` styling or tailored brand-blue gradient with soft rounded corners and subtle inner glow).
- **High-Contrast Header & Micro-Copy**: Update the "COMPLETE YOUR SETUP" title to clean, crisp white typography with a sparkling icon and localized Bengali counterpart.
- **Bubble Product Cards**: Transform individual recommendation item containers into sleek, translucent rounded bubble cards with high-contrast product titles, bold pricing in white/light-cyan, and thumbnail images with soft borders.
- **Interactive Pill CTA Button**: Restyle the "+ Add" button into a high-visibility, tactile white-pill button (or energetic accent pill) with hover scaling and active feedback upon adding to cart.

## Capabilities

### New Capabilities
- `checkout/checkout-upsell`: Blue bubble-styled complementary setup recommendation section within checkout order review.

### Modified Capabilities
<!-- None -->

## Impact

- `src/lib/components/checkout/CheckoutOrderReview.svelte`: markup and CSS token styling update.
- No breaking changes; existing cart state addition logic (`cartState.addItem`) is preserved.
