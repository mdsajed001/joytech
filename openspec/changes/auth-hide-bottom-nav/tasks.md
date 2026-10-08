## 1. Hide Bottom Navigation on Auth Pages

- [x] 1.1 Update `src/routes/+layout.svelte` to exclude rendering `<BottomNav>` when `$page.url.pathname.startsWith('/auth')`. Verify the bottom navigation bar is hidden on mobile on `/auth` and `/auth/verify`.
- [x] 1.2 Update the `<main>` container class in `src/routes/+layout.svelte` to remove `pb-16` bottom padding on `/auth` routes. Verify full-screen height renders seamlessly without a bottom gap on mobile.
