## Why

The 1px horizontal separator line above the "You Might Also Like" discovery rail creates a rigid, mechanical boundary between the cart items and recommendations. Replacing this line with an ambient, brand-tinted background shade (Option 3: `bg-blue-50/70 dark:bg-blue-950/25`) provides natural visual differentiation, elevated card contrast, and a cohesive "Joy Telecom Picks" aesthetic.

## What Changes

- **Remove Top Border Line**: Eliminate `border-t border-[var(--color-border-subtle)]` from the section container.
- **Brand-Tinted Background Shade**: Style the section with a subtle brand tint (`bg-blue-50/70 dark:bg-blue-950/25`) that sets it apart from the default canvas background without hard lines.
- **Mobile Full-Bleed Shaded Band**: On mobile devices (`< 1024px`), extend the brand-tinted background edge-to-edge across the screen (`-mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0`), allowing cards to swipe seamlessly over the shaded band.
- **Desktop Rounded Island Panel**: On desktop (`lg: >= 1024px`), format the section as a clean, rounded island panel (`lg:rounded-2xl lg:p-6`) in the left column with flex-wrapped cards inside.

## Capabilities

### New Capabilities
- `cart-recommendations-brand-shade`: Specifies the brand-tinted background styling and boundary-free layout for the "You Might Also Like" section on the cart page.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**: `src/lib/components/cart/CrossSellRail.svelte`
- **APIs/State**: No state or API changes.
- **Dependencies**: No new dependencies.
