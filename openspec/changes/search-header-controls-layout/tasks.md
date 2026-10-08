## 1. SearchableSelect Component Updates

- [x] 1.1 Add `variant?: 'default' | 'ghost'` prop to `src/lib/components/ui/SearchableSelect.svelte` with borderless, inline styling when set to `ghost`.

## 2. Search Page Top Bar Layout

- [x] 2.1 Reorganize the top control card in `src/routes/search/+page.svelte` so the query title is on the left and the result count is aligned on the right.
- [x] 2.2 Position the Sort dropdown on the left side of the controls row and the mobile Filters button on the right side.
- [x] 2.3 Apply `variant="ghost"` and `align="left"` to the Sort dropdown so it renders as a minimalist inline trigger instead of a boxed button.

## 3. Verification & Validation

- [x] 3.1 Run `npm run check` and verify 0 errors or diagnostics.
- [x] 3.2 Run `npm run build` and verify successful production bundle compilation.
