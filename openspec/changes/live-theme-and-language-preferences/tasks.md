## 1. Dark Mode Engine & Styling

- [x] 1.1 Add dark theme CSS custom properties and color variables to `src/routes/layout.css`
- [x] 1.2 Implement `ThemeState` in `src/lib/state.svelte.ts` supporting light, dark, and system modes with localStorage persistence
- [x] 1.3 Update hardcoded `bg-white` classes in profile and settings components to use theme-aware tokens

## 2. Bengali (বাংলা) Translation Engine

- [x] 2.1 Create `src/lib/i18n/translations.ts` with English and Bengali translations dictionary
- [x] 2.2 Implement `I18nState` in `src/lib/state.svelte.ts` with reactive translation function and language persistence

## 3. Component Wiring & Verification

- [x] 3.1 Update `src/routes/+layout.svelte` to initialize theme and language on application startup
- [x] 3.2 Wire `src/lib/components/profile/SettingsTab.svelte` theme and language toggles directly to global state
- [x] 3.3 Wire `ProfileNavTabs.svelte` and `ProfileHeader.svelte` to display translated tab titles and shortcut labels
- [x] 3.4 Run `npm.cmd run build` and `npx.cmd svelte-check` to confirm zero compilation errors
