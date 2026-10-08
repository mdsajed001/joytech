## Why

Customers shopping for authentic tech accessories in Bangladesh need tangible verification that the store is genuine, active, and accessible. In Bangladeshi e-commerce, active social communities (Facebook page, WhatsApp direct chat, Instagram reels, and YouTube reviews) are the primary trust anchors. Positioning four recognizable, authentic round social logos bridging the bottom border of the dark banner ("half in, half out") provides immediate social proof, visual polish, and direct channels to verify the business.

## What Changes

- Add a row of 4 floating circular social logos bridging the bottom boundary of `AuthenticityBanner.svelte` ("half in, half out" — top half over dark navy, bottom half over light canvas).
- Use authentic, official brand logos and colors for **Facebook**, **WhatsApp**, **Instagram**, and **YouTube** (not generic stroke icons).
- Render each logo in a round circular badge with a white outer ring/border and elevated drop shadow to guarantee crisp contrast and elevation across both dark and light backgrounds.
- Provide smooth micro-interactions (hover lift, scale up, elevated shadow).
- Connect each badge to an external link with accessible labels (`aria-label`) and secure attributes (`target="_blank" rel="noopener noreferrer"`).
- Ensure fully responsive alignment and touch-target sizing on mobile and desktop viewports.

## Capabilities

### New Capabilities
- `banner-social-links`: Defines the floating social badges component/section — brand visual assets, half-in-half-out positioning, responsive layout, and link interaction.

### Modified Capabilities

## Impact

- `src/lib/components/AuthenticityBanner.svelte`: Section structure updated to host the positioned floating social links along its bottom edge.
