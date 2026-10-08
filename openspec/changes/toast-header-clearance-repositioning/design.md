## Context

The site header is sticky (`sticky top-0 z-40`) and houses:
- A top branding and navigation bar (`h-18` = 72px)
- A mobile-only search input row (`px-4 pb-3`, ~56px) on `< md` viewports
- A secondary category bar (`py-2`, ~36px) on `>= lg` viewports

Currently, `ToastContainer.svelte` anchors at `fixed top-4 sm:top-6 left-0 right-0 sm:left-auto sm:right-6 z-[100]`. Because `top-4` is only 16px from the top of the viewport, notifications appear directly on top of the search bar and brand logo on mobile devices.

## Goals / Non-Goals

**Goals:**
- Dynamically align the toast container's top vertical offset with viewport-specific header boundaries:
  - Mobile (`< md`): `top-34` (~136px) to sit comfortably below the search bar.
  - Tablet/Desktop (`md`): `md:top-22` (~88px) to sit just below the single-row header.
  - Large Desktop (`lg`): `lg:top-30` (~120px) to clear the secondary category strip.
- Retain horizontal centering and width boundaries on mobile (`px-3.5`, `max-w-sm mx-auto`).
- Keep desktop positioning docked at the top-right corner (`sm:right-6 sm:left-auto`).

**Non-Goals:**
- Moving toasts to the bottom on mobile (this would clash with `BottomNav` and floating WhatsApp chat).
- Changing toast store logic, duration timers, or dissolving progress visuals.

## Decisions

### 1. Viewport-Responsive Top Clearance
- **Decision**: Use Tailwind responsive spacing utilities (`top-34 md:top-22 lg:top-30`) directly on the container.
- **Rationale**: Clean, pure CSS solution that requires no runtime JavaScript resize listeners or DOM measurements.
- **Alternatives Considered**:
  - *JavaScript measuring header height (`getBoundingClientRect`)*: Adds unnecessary re-render overhead and layout thrashing.
  - *Bottom positioning*: Interacts poorly with bottom sheet navigation, sticky checkout buttons, and mobile keyboard focus.

### 2. Upward / Downward Stacking Continuity
- **Decision**: Keep toasts stacking downwards from the anchor point with `flex-col gap-2.5`.
- **Rationale**: Since the container is anchored immediately below the header, new toasts expand downward into the content canvas without creeping back up into the header.

## Risks / Trade-offs

- [Risk]: Small height variation if announcement banner is dismissed.
  - *Mitigation*: The header itself is `sticky top-0`, so once scrolled even slightly, the header locks to the absolute top of the viewport at 128px regardless of banner status. An 8–12px buffer (`top-34` = 136px) comfortably absorbs banner transitions without collision.
