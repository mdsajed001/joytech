# Proposal: Cart Cross-Device Color Calibration

## Why

On mobile OLED displays with wide color gamuts and high contrast ratios, extremely pale blue tints (`blue-50/70`, `blue-50/90`) and darker greens (`emerald-600`) render as pleasant pastel blues and vibrant accents. However, on PC desktop monitors (standard sRGB with matte finishes and backlights), colors with less than 5% blue saturation wash out completely into flat, dull neutral gray, and dark emerald text appears muted and olive. Calibrating these tints ensures the cart delivery banner, recommendations background, and discount badges render with unmistakable, vibrant, and cohesive brand coloring across all desktop and mobile displays.

## What Changes

- **1st Order Delivery Free Banner Background & Border**:
  - Calibrate the banner background from washed-out `bg-blue-50/90` to a resilient, unmistakable sky/brand blue tint (`bg-blue-100/70` in light mode, with matching `border-blue-200/80` or `--color-brand-primary` token opacity) so it visibly renders as blue on PC monitors without overpowering the text.
- **"You Might Also Like" Recommendation Rail Background**:
  - Calibrate the container background from faint `bg-blue-50/70` to a calibrated, distinct blue tint (`bg-blue-100/60` in light mode) that maintains consistent brand presence on both desktop screens and mobile devices.
- **Cart Green Accent & Badge Calibration**:
  - Elevate the green discount, free delivery, and savings text from dark/dull `text-emerald-600` to radiant, luminous `text-emerald-500` across `DeliveryProgressBar.svelte` and `OrderSummary.svelte`, matching the vibrant tone perceived on mobile displays.

## Capabilities

### New Capabilities
- `cart-color-contrast`: Cross-device calibrated color tokens and contrast specifications for cart promotional banners, recommendation container surfaces, and positive transaction badges.

### Modified Capabilities
<!-- None: No existing specs recorded in repository -->

## Impact

- `src/lib/components/cart/DeliveryProgressBar.svelte`: Update container background, border, and delivery fee accent text.
- `src/lib/components/cart/CrossSellRail.svelte`: Update recommendation section background color classes.
- `src/lib/components/cart/OrderSummary.svelte`: Update green savings, coupon discounts, and free delivery label color classes to `text-emerald-500`.
- No breaking changes or external API impacts.
