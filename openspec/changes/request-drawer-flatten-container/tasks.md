## 1. Remove Extra Container Wrapper

- [x] 1.1 In `src/lib/components/profile/ProfileDrawer.svelte` (under `type === 'request'`), remove the extra nested card wrapper `<div>` (`w-full p-4 sm:p-5 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)]`) so the header banner and request form sit directly inside the drawer body; verify form layout.

## 2. Compilation Verification

- [x] 2.1 Run `npx svelte-check` to verify zero TypeScript/Svelte compilation errors across the codebase.

