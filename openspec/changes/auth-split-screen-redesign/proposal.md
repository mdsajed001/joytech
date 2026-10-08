## Why

The current authentication and verification pages (`/auth` and `/auth/verify`) display as an isolated, floating card on both mobile and desktop. On mobile, this creates an unnecessary "box inside a box" feeling rather than a native full-screen experience. On desktop, it underutilizes available screen real estate and misses an opportunity to reinforce Joytech's brand identity. Redesigning these pages to have an edge-to-edge mobile presentation and a 50/50 split-screen desktop presentation with ambient gadget animations will establish a modern, flagship e-commerce experience.

## What Changes

- **Desktop (PC) Split Layout**:
  - Full-screen split layout (`min-h-screen`) on desktop (`lg:` screens).
  - **Left Column**: Rich brand blue background (`var(--color-brand-primary)` gradient) featuring:
    - Soft, ambient white floating/drifting bubbles (`@keyframes float-bubble`).
    - Floating gadget and accessory icons (headphones, smartwatch, phone, charging battery, usb cable, gamepad) with gentle sway animation.
    - Centered white Joytech branding, tagline, and authenticity assurance badges.
  - **Right Column**: Spacious container holding the auth forms (Phone OTP entry on `/auth`, OTP verification and phone linking on `/auth/verify`).
  - Natural page scrolling allows the global footer to remain accessible below the full-height hero split.
- **Mobile Edge-to-Edge Layout**:
  - Replace the isolated modular card with a seamless full-screen layout.
  - Form elements, headers, and buttons sit directly on the surface with standard mobile padding.
- **Shared Layout Component**:
  - Implement a reusable layout component (`AuthSplitLayout.svelte`) shared across `/auth` and `/auth/verify` to ensure cohesive styling and motion.

## Capabilities

### New Capabilities
- `auth-layout`: Responsive split-screen desktop and edge-to-edge mobile presentation for authentication and verification flows.

### Modified Capabilities
None

## Impact

- **Affected Code**: `src/routes/auth/+page.svelte`, `src/routes/auth/verify/+page.svelte`, and new shared component `src/lib/components/auth/AuthSplitLayout.svelte`.
- **Styling**: New CSS keyframe animations for floating bubbles and accessory drift.
- **Dependencies**: Reuses existing `@hugeicons/core-free-icons` and `Button.svelte`.
