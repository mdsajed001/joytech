## Why

The phone view of the authentication screen (`/auth` and `/auth/verify`) feels flat, sterile, and disconnected from Joytech's brand identity. While the desktop layout showcases a rich electric blue gradient, ambient floating bubbles, and floating tech gadget icons, mobile was previously rendered as an uninspiring stark white container with a boxy, dated form. Furthermore, when users tap the phone or OTP input field on mobile devices, the virtual keyboard pops up and obstructs buttons and critical context.

Redesigning the mobile auth view into a branded top canopy with an interactive sliding bottom sheet creates visual parity with desktop branding and ensures zero keyboard obstruction when typing.

## What Changes

- **Electric Blue Brand Canopy on Mobile**: Introduce a branded top canopy on mobile (`< lg`) displaying the signature electric blue gradient (`#0066FF`), subtle floating ambient bubbles, tech accessory icons (headphones, smartwatch, phone), and crisp white "JOYTECH" typography with back navigation.
- **Interactive Sliding Form Sheet**: Present the auth form on mobile as an elevated, rounded bottom sheet (`rounded-t-[28px]`, crisp surface background, refined borders and shadows).
- **Keyboard-Aware Focus Transition**: When any input (mobile number, OTP fields) is focused, the top canopy smoothly condenses into a compact header bar while the form sheet slides upward with a fluid 300ms easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`), keeping the input and the "Continue" CTA comfortably visible above the virtual keypad.
- **Focus Blur Reset**: When inputs lose focus (or tap outside), the layout gently slides back to its spacious hero rest state.
- **Visual Consistency**: Modernize input containers, micro-badges, and CTA styling to align with Joytech's design system tokens while keeping desktop 50/50 split layout intact.

## Capabilities

### New Capabilities
- `auth-mobile-sheet`: Responsive mobile auth interface featuring an animated electric blue brand canopy and an interactive sliding form sheet with keyboard-aware upward motion on input focus.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Components**:
  - `src/lib/components/auth/AuthSplitLayout.svelte`: Mobile canopy and sheet animation layout, focus detection, and responsive styling.
  - `src/routes/auth/+page.svelte`: Sign In / Sign Up form container and input focus integration.
  - `src/routes/auth/verify/+page.svelte`: Verification and phone linking screen focus integration.
- **APIs/Dependencies**: Pure frontend Svelte 5 runes and CSS transitions; no new external dependencies or breaking API changes.
