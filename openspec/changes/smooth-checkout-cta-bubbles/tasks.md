## 1. Refactor Bubble Pseudo-Element Geometry and Keyframes

- [x] 1.1 Update `.cta-checkout-animated::before` and `.cta-search-animated::before` to circular orb geometry (`border-radius: 50%`) with centered radial gradient and zero-opacity perimeter falloff
- [x] 1.2 Update `.cta-checkout-animated::after` and `.cta-search-animated::after` to matching circular orb geometry for Bubble B
- [x] 1.3 Calibrate keyframe translation values (`search-bubble-a`, `search-bubble-b`) so bubbles glide smoothly without edge clipping or boxy artifacts
- [x] 1.4 Test animation in browser on wide checkout CTA buttons and run `npm run check` to verify zero errors
