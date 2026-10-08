## 1. SearchableSelect UI Component

- [x] 1.1 Create `src/lib/components/ui/SearchableSelect.svelte` with custom trigger button, open/close popover toggle, and chevron indicator.
- [x] 1.2 Implement embedded typeahead search input at the top of the dropdown menu with real-time filtering, auto-focus, and "No matching models found" state.
- [x] 1.3 Implement click-outside dismissal and Escape key handler for accessible popover closure.

## 2. Filter Panels Integration

- [x] 2.1 Replace the native model `<select>` in `src/lib/components/search/SearchSidebar.svelte` with `SearchableSelect` and verify typing shortlists models on desktop.
- [x] 2.2 Replace the native model `<select>` in `src/lib/components/search/SearchMobileFilterDrawer.svelte` with `SearchableSelect` and verify typing shortlists models on mobile.

## 3. Verification & Validation

- [x] 3.1 Run `npm run check` and verify 0 Svelte/TypeScript diagnostics.
- [x] 3.2 Run `npm run build` and verify successful production bundle compilation.
