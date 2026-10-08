## Context

The user requested that the Offers page coupon bar match the `profile-hero-bubble` aesthetic from the customer profile hero section (brand primary blue surface with ambient floating bubbles).

## Goals / Non-Goals

**Goals:**
- Apply `.profile-hero-bubble` to `PromoCouponBar.svelte`.
- Render coupon cards as tactile white bubbles with high contrast against the blue background.
- Keep copy interaction instant, smooth, and tactile on mobile and desktop.

**Non-Goals:**
- Changing coupon data or behavior.

## Decisions

- **Container Surface**: Use class `w-full profile-hero-bubble text-white border-b border-blue-600/30 py-4 px-4 sm:px-6 shadow-sm`.
- **Card Aesthetics**: Use `bg-white/95 text-slate-900 shadow-sm border border-white/80 rounded-2xl` or `bg-white text-slate-900 rounded-xl` with dark/vibrant text, brand blue discount badges, and circular blue copy action icons.
- **Header Aesthetics**: White title, ticket icon in white/90, and a translucent pill badge `bg-white/20 text-white backdrop-blur-md border border-white/30`.

## Risks / Trade-offs

- **[Risk] High-contrast readability on mobile** → *Mitigation*: Solid white cards (`bg-white`) provide maximum contrast against the blue gradient background and ensure coupon codes and terms are effortlessly readable in daylight and dark mode.
