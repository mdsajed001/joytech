## Why

On mobile devices, having the floating mobile bottom navigation bar (`BottomNav`) active on the authentication and phone verification pages (`/auth` and `/auth/verify`) creates visual clutter, occupies vertical screen space, and can distract users during a focused login/signup conversion flow. Hiding the bottom navigation bar on `/auth` routes gives users a focused, native full-screen experience.

## What Changes

- Update `src/routes/+layout.svelte` so the mobile `BottomNav` is hidden when the user is on any route starting with `/auth`.
- Adjust main content bottom padding if needed so `/auth` routes don't reserve unnecessary bottom padding for the hidden bar on mobile.

## Capabilities

### New Capabilities
- `auth-bottom-nav-visibility`: Exclude authentication routes from displaying the mobile bottom navigation bar.

### Modified Capabilities
None

## Impact

- **Affected Code**: `src/routes/+layout.svelte`.
- **User Experience**: Mobile view on `/auth` and `/auth/verify` becomes completely clean, distraction-free, and full-screen.
