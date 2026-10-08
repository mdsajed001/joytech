## Why
The signup page (`/auth`) and verify page (`/auth/verify`) should be distraction-free. The top navigation bar and announcement bar should be hidden on these pages, but the footer should remain.

## What Changes
- Update `src/routes/+layout.svelte` to hide the `AnnouncementBar`, `Header`, and `MobileDrawer` if the path starts with `/auth`.

## Capabilities
None. (Visual layout tweak).

## Impact
- **Affected Code:** `src/routes/+layout.svelte`
