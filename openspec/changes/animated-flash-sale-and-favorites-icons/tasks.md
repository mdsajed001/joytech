## 1. Keyframe Definitions in CSS

- [x] 1.1 Add `.animate-thunder-zap` and `.animate-flame-flicker` with their respective `@keyframes` and `@media (prefers-reduced-motion: reduce)` rules in `src/routes/layout.css`.

## 2. Component Integration

- [x] 2.1 Update `src/lib/components/Hero.svelte` to replace unicode `⚡` with `BoltIcon` from `@hugeicons/core-free-icons` and apply `.animate-thunder-zap`.
- [x] 2.2 Update `src/lib/components/FlashSaleSection.svelte` to replace unicode `⚡` with `BoltIcon` from `@hugeicons/core-free-icons` and apply `.animate-thunder-zap`.
- [x] 2.3 Update `src/lib/components/ProductSection.svelte` to apply `.animate-flame-flicker` when rendering `FlameIcon` as `kickerIcon`.

## 3. Verification & Validation

- [x] 3.1 Run `npm run check` to verify TypeScript and Svelte compilation pass with zero errors.
- [x] 3.2 Visually verify in the browser that the Flash Sale thunder bolts pulse with an electric zap and the Customer Favorites fire icon flickers organically.
