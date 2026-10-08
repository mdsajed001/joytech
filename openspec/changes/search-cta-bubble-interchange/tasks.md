## 1. CSS Animation & Keyframes

- [x] 1.1 Define `.cta-search-animated` with GPU-composited pseudo-elements (`::before` and `::after`) and soft radial gradients in `src/routes/layout.css`, verifying that text layers cleanly above the animation
- [x] 1.2 Implement `@keyframes search-bubble-a` and `@keyframes search-bubble-b` with 5-second position interchange (10-second complete loop), organic easing, and `@media (prefers-reduced-motion: reduce)` override in `src/routes/layout.css`

## 2. Header Component Integration

- [x] 2.1 Update the desktop/tablet search CTA button in `src/lib/components/Header.svelte` to use `.cta-search-animated` and verify button text retains clear contrast and alignment
- [x] 2.2 Update the mobile search CTA button in `src/lib/components/Header.svelte` to use `.cta-search-animated` and verify touch target and layout integrity

## 3. Verification & Validation

- [x] 3.1 Run `cmd /c npm run check` to verify TypeScript and Svelte diagnostics pass with 0 errors and 0 warnings
- [x] 3.2 Visually verify the live search button animation in the browser, confirming smooth 5-second diagonal bubble position interchange while confirming all other blue CTAs (Buy Now buttons) remain static
