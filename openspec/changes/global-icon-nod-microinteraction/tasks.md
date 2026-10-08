## 1. Global Animation Utility & Styles

- [x] 1.1 Add `@keyframes nod-lift`, `.btn-nod`, and `.btn-nod-icon` with `-4px` lift, `+12deg` rightward nod, and spring easing in `src/routes/layout.css`
- [x] 1.2 Include reduced motion fallback (`@media (prefers-reduced-motion: reduce)`) in `src/routes/layout.css`

## 2. Navigation & Header Integration

- [x] 2.1 Wire the nod-and-lift micro-interaction to Desktop Header buttons in `src/lib/components/Header.svelte` (Wishlist, Profile, Cart)
- [x] 2.2 Wire the nod-and-lift micro-interaction to Mobile Bottom Navigation tabs in `src/lib/components/BottomNav.svelte` (Home, Offers, Cart, Profile)

## 3. Profile Shortcuts & Verification

- [x] 3.1 Wire the nod-and-lift micro-interaction to the 8 circular action shortcut buttons in `src/lib/components/profile/ProfileHeader.svelte`
- [x] 3.2 Run `npm run check` and verify tactile responsiveness on both mobile and desktop viewports across light and dark themes

## 4. Animation Timing & Decoupled Lifecycle Polish

- [x] 4.1 Refine `@keyframes nod-lift` with a silky 500ms multi-stage spring settling curve (`cubic-bezier(0.25, 1, 0.5, 1)`) in `src/routes/layout.css`
- [x] 4.2 Implement global capture-phase pointer trigger in `src/routes/+layout.svelte` ensuring animations play to 100% completion independently of touch release duration or link load times
- [x] 4.3 Coordinate cart item action timeouts to 480ms and remove local duplicate styles in `src/lib/components/cart/CartItemCard.svelte`


