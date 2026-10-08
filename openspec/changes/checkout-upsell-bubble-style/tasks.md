## 1. Checkout Upsell Bubble Container Restyling

- [x] 1.1 In `src/lib/components/checkout/CheckoutOrderReview.svelte`, update the recommendations section container to use the `.profile-hero-bubble` blue gradient styling with rounded corners and border highlights.
- [x] 1.2 Update the "COMPLETE YOUR SETUP" title typography to high-contrast white text accompanied by a sparkle icon badge and bilingual English/Bengali support.
- [x] 1.3 Restyle each recommendation item into a clean rounded white/dark frosted bubble card with crisp text, pricing, and 36×36px thumbnail.
- [x] 1.4 Enhance the "+ Add" CTA button into an energetic, tactile pill button that triggers `cartState.addItem` with immediate visual feedback.

## 2. Verification

- [x] 2.1 Run `npm.cmd run check` to verify 0 TypeScript and Svelte diagnostics errors.
- [x] 2.2 Test the checkout flow on `http://localhost:5173/checkout` to confirm the blue bubble upsell section renders cleanly on mobile and desktop and adds items to order review without layout shift.
