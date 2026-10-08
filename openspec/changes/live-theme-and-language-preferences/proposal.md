## Why

In the customer profile preferences tab, toggling the theme (Light/Dark/System) and switching the language to Bengali (বাংলা) currently only displays temporary toast alerts without actually updating the application's visual theme or translating interface text. Customers expect immediate, persistent dark mode styling and bilingual translation across the application.

## What Changes

- **Functional Dark Mode Engine**:
  - Add dark mode CSS tokens in `layout.css` for canvas background (`#090D16`), card surfaces (`#131B2E`), subtle borders (`#22314E`), and high-contrast text (`#F8FAFC`).
  - Implement reactive `themeState` in `state.svelte.ts` controlling the `dark` class on `document.documentElement` and `[data-theme="dark"]`.
  - Support automatic OS system color-scheme detection (`prefers-color-scheme: dark`) when 'system' is selected.
  - Persist theme preference in `localStorage`.
- **Live Bengali (বাংলা) Translation Engine**:
  - Implement reactive `i18nState` in `state.svelte.ts` with instant translation function `t(key)`.
  - Set `<html lang="bn">` with Bengali typography (`Noto Sans Bengali`).
  - Provide a dictionary with translations for navigation tabs, profile shortcuts, settings, badges, and headers.
  - Persist language preference in `localStorage`.
- **Wire Preferences Tab**:
  - Connect `SettingsTab.svelte` theme and language buttons directly to the global reactive preference stores.

## Capabilities

### New Capabilities
- `theme-and-language`: Real-time dark mode theme switching, system theme synchronization, and bilingual English/Bengali interface translation.

### Modified Capabilities
None.

## Impact

- `src/routes/layout.css`: Add dark theme CSS variables and styles.
- `src/lib/state.svelte.ts`: Add `themeState` and `i18nState`.
- `src/lib/i18n/translations.ts`: New translation dictionary.
- `src/routes/+layout.svelte`: Initialize theme and language on mount.
- `src/lib/components/profile/SettingsTab.svelte`: Bind toggles to active theme and language state.
- `src/lib/components/profile/ProfileNavTabs.svelte` and `ProfileHeader.svelte`: Support translated labels.
