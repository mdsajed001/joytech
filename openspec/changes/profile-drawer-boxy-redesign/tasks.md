## 1. Action Shortcuts Boxy Restyling

- [x] 1.1 In `src/lib/components/profile/ProfileHeader.svelte`, locate the `btn-nod-icon` div for action shortcuts (which currently uses `rounded-full`). Change `rounded-full` to `rounded-[var(--radius-sm)]` (or equivalent Tailwind class like `rounded-md` depending on configuration, but standard `rounded-[var(--radius-sm)]` is preferred) to make the shortcut tiles square with 8px corners.

## 2. Drawer Container Shape

- [x] 2.1 In `src/lib/components/profile/ProfileDrawer.svelte`, locate the main slide-over panel container (the div with `class="fixed bottom-0 ... rounded-t-2xl"`). Change `rounded-t-2xl` to `rounded-t-[var(--radius-md)]` (or `rounded-t-xl` if `var(--radius-md)` isn't supported, aiming for 12px) for a sharper top edge on mobile. (Preserve `sm:rounded-none`).

## 3. Drawer Inner Content Flattening

- [x] 3.1 In `src/lib/components/profile/ProfileDrawer.svelte`, update the **Reviews** tab: Change the review card containers from `rounded-xl border border-[var(--color-border-default)] bg-[var(--color-bg-surface)]` to simpler `border-b border-[var(--color-border-subtle)] pb-3` dividers, or `rounded-[var(--radius-sm)]`.
- [x] 3.2 Update the **Returns** tab: Change the guarantee banner from `rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50` to use `rounded-[var(--radius-sm)]` without the heavy colored borders, just simple surface/canvas contrast. Change the return form card to use `rounded-[var(--radius-sm)]` instead of `rounded-xl`.
- [x] 3.3 Update the **Promos** tab: Change the promo card containers from `rounded-xl border border-[var(--color-border-default)]` to `rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)]` or just horizontal dividers.
- [x] 3.4 Update the **Request** tab: Change the banner and form containers from `rounded-xl` to `rounded-[var(--radius-sm)]` and remove heavy nested tinted borders.
