## Why

On mobile viewport screens, the homepage hero section (`AuthenticityBanner`) displays a prominent search area ("Search phones, chargers, cases..." with a "Search" button). Currently, tapping this area focuses an isolated local text input that does not connect to the storefront's full mobile search experience. This change connects the hero search area on phone views so that clicking or tapping it opens the exact existing, fully-featured top mobile search overlay from `Header.svelte`, without introducing any new search UI or transferring text between inputs.

## What Changes

- **Mobile Hero Search Trigger**:
  - In phone/mobile view (`< 768px`), clicking or tapping anywhere in the hero search area (the input field or the Search button) opens the existing full-screen mobile search overlay from the header.
- **Strict Reuse of Existing Search Experience**:
  - Reuses the existing mobile search overlay in `Header.svelte` (with its back button, autofocus input, popular search pills, and live real-time product suggestions). No new search interface is created.
- **Isolated Query State**:
  - No search text is transferred between the hero and header search inputs; each opens fresh.
- **Desktop Parity Preserved**:
  - On desktop and tablet viewports (`>= 768px`), the hero search area maintains its existing standard inline form behavior.

## Capabilities

### New Capabilities
- `mobile-hero-search-trigger`: Triggers the existing top mobile search overlay when the user taps the hero search area on phone viewports.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/lib/state.svelte.ts`: Add a lightweight `searchState` export to coordinate mobile search overlay visibility globally.
  - `src/lib/components/Header.svelte`: Synchronize `isMobileSearchOpen` with `searchState`.
  - `src/lib/components/AuthenticityBanner.svelte`: Trigger `searchState.openMobile()` on mobile click/tap.
- **Dependencies**: None.
