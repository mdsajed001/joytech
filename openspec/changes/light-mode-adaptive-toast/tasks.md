## 1. Toast Container & Background Theme Adaptation

- [x] 1.1 Update `ToastItem.svelte` card container to use `bg-white/95 text-slate-900 border-slate-200/90 shadow-[0_12px_32px_rgba(15,23,42,0.12)]` in light mode, retaining `dark:bg-slate-950/94 dark:text-white dark:border-white/18` in dark mode.
- [x] 1.2 Adapt the specular top light rim and semantic icon backgrounds for balanced contrast across both light and dark themes.

## 2. Typography, Thumbnail Box & Control Adaptations

- [x] 2.1 Update title, message text, and product thumbnail container in `ToastItem.svelte` to use theme-adaptive light and dark colors.
- [x] 2.2 Update action CTA button and dismiss cross button to adapt contrast and hover states between light and dark modes.

## 3. Verification & Validation

- [x] 3.1 Run `npm run check` to verify zero type errors and build validity.
