## Context

Currently, theme and language toggles in `SettingsTab.svelte` only show transient toasts and mutate local component state without propagating changes to the DOM, CSS, or application state.

## Goals / Non-Goals

**Goals:**
- Provide dark mode CSS custom properties in `layout.css` matching Joy Telecom's brand identity.
- Manage global theme state (`light` | `dark` | `system`) with automatic DOM synchronization and localStorage persistence.
- Manage global language state (`en` | `bn`) with document language attribute synchronization, font adjustments, and reactive string translations.
- Wire `SettingsTab.svelte`, `ProfileNavTabs.svelte`, and `ProfileHeader.svelte` to dynamically respond to language and theme updates.

**Non-Goals:**
- Machine translation of external API product data descriptions.

## Decisions

### 1. Theme Implementation
- Define `:root[data-theme="dark"], html.dark` in `layout.css`:
  - Canvas: `#090D16`
  - Surface: `#131B2E`
  - Subtle: `#1B2640`
  - Border: `#22314E`
  - Text Primary: `#F8FAFC`
  - Text Secondary: `#94A3B8`
- Global singleton `themeState` in `src/lib/state.svelte.ts` manages active theme and synchronizes with `document.documentElement` and `window.matchMedia`.

### 2. Live Translation Engine
- Create `src/lib/i18n/translations.ts` containing keyed translations for English and Bengali.
- Export reactive `i18nState` in `src/lib/state.svelte.ts` with `t(key)` helper.
- Update `document.documentElement.lang` and toggle `font-bengali` when active language is `'bn'`.

## Risks / Trade-offs

- **[Risk]** Hardcoded `bg-white` classes in child components could remain bright in dark mode.  
  → **Mitigation**: Update hardcoded `bg-white` in profile cards and settings forms to `bg-[var(--color-bg-surface)]` or `bg-[var(--color-bg-canvas)]` to guarantee complete dark mode styling.
