## Context

See `proposal.md` for motivation. Currently in `src/lib/components/toast/ToastItem.svelte`, classes like `bg-slate-900/92`, `text-white`, and `border-white/18` are hardcoded without light-mode variants, causing toasts to always render in dark glass even when the user is in light mode.

## Goals / Non-Goals

**Goals:**
- Provide a clean, premium light-mode visual card for toasts when light theme is active.
- Preserve the existing rich dark-mode glass styling (`dark:bg-slate-950/94`, specular rim, and glow).
- Ensure high contrast and clear readability for toast titles, body messages, product thumbnails, action buttons, and dismiss controls in both modes.

**Non-Goals:**
- Modifying toast timer logic, positioning, or queue management.

## Decisions

### 1. Card Container Theme Classes
- **Decision**: Update container to:
  ```html
  class="toast-card group relative w-full overflow-hidden rounded-2xl bg-white/95 text-slate-900 border border-slate-200/90 shadow-[0_12px_32px_rgba(15,23,42,0.12)] dark:bg-slate-950/94 dark:text-white dark:border-white/18 backdrop-blur-2xl dark:{config.glowShadow} transition-all duration-300 pointer-events-auto select-none"
  ```
- **Rationale**: Uses native Tailwind `dark:` variants so theme switches (via class on `html` or root) automatically toggle styling without JavaScript state branching.

### 2. Inner Element Contrast Balancing
- **Title (Contextual label)**: `text-slate-500 dark:text-white/60`
- **Body Message**: `text-slate-900 dark:text-white`
- **Product Thumbnail Box**: `bg-slate-100 border-slate-200/80 dark:bg-white/10 dark:border-white/15`
- **Action CTA**: `bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100`
- **Dismiss Cross**: `text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:text-white/50 dark:hover:text-white dark:hover:bg-white/10`
- **Specular Top Rim**: `bg-gradient-to-r from-transparent via-slate-300/60 to-transparent dark:via-white/35`

## Risks / Trade-offs

- **[Risk]** Semantic icon background contrast in light mode.
  &rarr; *Mitigation*: Adjust `typeConfig` icon backgrounds so they have clear visibility in both light and dark themes (e.g. `bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-400/30`).
