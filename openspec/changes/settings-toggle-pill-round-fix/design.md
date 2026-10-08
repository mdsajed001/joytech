# Technical Design: Settings Toggle Pill Rounding & Border Softening

## Context

In `SettingsTab.svelte`, the theme selection row and language selection row feature inline segmented pill toggles. The controls previously lacked internal padding (`p-0`) and clipped buttons flush against outer container borders. In addition, `--color-border-subtle` was undefined in `@theme` for light mode, causing browsers to fall back to `currentColor` (`#0B111E`, pitch black).

See `proposal.md` for motivation and `specs/settings-toggle-controls/spec.md` for behavioral requirements.

## Goals / Non-Goals

**Goals:**
- Provide a clean, modern segmented control track with `p-1`, `rounded-full`, and `bg-[var(--color-bg-subtle)]`.
- Style active indicator with `rounded-full`, `min-w-9 h-9 sm:min-w-10 sm:h-10` (`aspect-square` for icon-only options, `px-4` for text options).
- Replace harsh black outline with soft border (`border-[var(--color-border-default)]` or defined `--color-border-subtle`).
- Add `--color-border-subtle: #EEF2F6;` in `layout.css` under light mode `@theme`.

**Non-Goals:**
- Do not alter the functional state logic of `handleThemeChange` or `handleLanguageChange`.
- Do not change settings tab options or notifications toggles.

## Decisions

### 1. Track Layout & Padding
- **Decision**: Use `inline-flex items-center p-1 bg-[var(--color-bg-subtle)] rounded-full border border-[var(--color-border-default)] shrink-0`.
- **Rationale**: An inner padding of `p-1` creates breathing space so the active pill floats naturally inside the capsule rather than clipping awkwardly against the outer border.

### 2. Button Dimensions & Rounding
- **Decision**:
  - Theme row:
    - Sun icon button: `h-9 w-9 sm:h-10 sm:w-10 min-w-9 sm:min-w-10 rounded-full inline-flex items-center justify-center`
    - Moon icon button: `h-9 w-9 sm:h-10 sm:w-10 min-w-9 sm:min-w-10 rounded-full inline-flex items-center justify-center`
    - System button: `h-9 sm:h-10 px-3.5 sm:px-4 rounded-full inline-flex items-center justify-center gap-1.5`
  - Language row:
    - English / বাংলা buttons: `h-9 sm:h-10 px-4 sm:px-5 rounded-full inline-flex items-center justify-center` inside a flex/grid container.
  - Active class: `bg-[var(--color-brand-primary)] text-white shadow-xs`
  - Inactive class: `text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-black/5 dark:hover:bg-white/5`

### 3. Light Mode CSS Token Definition
- **Decision**: Add `--color-border-subtle: #EEF2F6;` to `@theme` in `layout.css`.
- **Rationale**: Completely eliminates `currentColor` pitch-black fallback wherever `--color-border-subtle` is used in light mode.

## Risks / Trade-offs

- **[Risk]** Potential overflow on very narrow mobile screens.
  - **Mitigation**: Using `h-9` on mobile and `h-10` on desktop ensures the segmented control stays compact (`~170px` for theme and `~160px` for language) and easily fits alongside the row labels on all phone screens.
