## Context

See `proposal.md` for motivation. Currently, `AutoWizardConfigurator.svelte` redirects to `/search?phoneModel=<slug>`, but `src/routes/search/+page.svelte` only reads `q` and `category` / `cat` query parameters. Filtering by `selectedPhoneModel` already exists inside the search page logic and works correctly when set, but is never initialized from the URL. Additionally, there is no contextual indicator informing the user that the results are filtered for their specific device.

## Goals / Non-Goals

**Goals:**
- Synchronize `?phoneModel=<slug>` from URL to `selectedPhoneModel` on initial load and navigation.
- Show a persistent Fit Session reassurance banner only when arriving from the wizard (`phoneModel` URL param present).
- Explicitly emphasize that all listed products fit the user's device without showing raw product count numbers.
- Provide a clean way to dismiss the fit session filter and view all products.
- Adhere strictly to Joy Telecom's boxy, modern design system (`rounded-[var(--radius-sm)]` / `rounded-[var(--radius-md)]`, brand theme colors).

**Non-Goals:**
- Display product count numbers on the fit session banner (omitted by design requirement).
- Display the fit session banner when the user manually clicks a phone model checkbox in the search sidebar.
- Redesign the sidebar filters or search algorithm.

## Decisions

### 1. URL State Synchronization via Svelte 5 `$derived` and `$effect`
- **Decision**: Define `phoneModelParam = $derived($page.url.searchParams.get('phoneModel') ?? '')` and an `$effect` to initialize `selectedPhoneModel = phoneModelParam` when `phoneModelParam` is present.
- **Rationale**: Follows the existing reactive pattern established for `categoryParam` in `src/routes/search/+page.svelte`, ensuring SSR and client-side hydration work smoothly.
- **Alternatives Considered**: Direct assignment without effect — could miss client-side navigation transitions.

### 2. Differentiating Wizard Fit Session vs. Manual Sidebar Filter
- **Decision**: Define `isWizardFitSession = $derived(Boolean(phoneModelParam && selectedPhoneModel === phoneModelParam))`.
- **Rationale**: If the user navigated via URL with `phoneModel`, `isWizardFitSession` is true. If they later change the model in the sidebar or clear it, or arrived at `/search` directly, `isWizardFitSession` is false.
- **Alternatives Considered**: Storing session state in sessionStorage — unnecessarily complex; URL query parameters provide clear, shareable, and reload-friendly state.

### 3. Device Metadata Resolution
- **Decision**: Import `PHONE_MODELS` and `PHONE_BRANDS` from `$lib/data/catalog` to resolve the full device name (e.g. "Apple iPhone 16 Pro Max") from the slug.
- **Rationale**: Ensures accurate and human-readable brand and model naming in the banner.

### 4. Boxy Reassurance Banner Aesthetics
- **Decision**: Place a dedicated fit reassurance banner directly above the search result controls in the main results column. Use a boxy container with `rounded-[var(--radius-md)]`, subtle success/brand border, verified shield/check icon, and reassurance text: "100% Fit Guaranteed · All accessories shown fit your {brandName} {modelName}".
- **Rationale**: Satisfies the user's requirement for a creative, reassuring element while matching Joy Telecom's boxy design guidelines.

### 5. Dismiss Action Handler
- **Decision**: When the user clicks "Show All Devices" or the close button on the banner, set `selectedPhoneModel = ''` and update the URL via `goto('/search' + existingParamsWithoutPhoneModel, { replaceState: true, noScroll: true, keepFocus: true })`.
- **Rationale**: Cleans up the URL cleanly and unlocks the full catalog without a full page reload.

## Risks / Trade-offs

- **[Risk] Invalid or unrecognized phoneModel slug in URL** → **Mitigation**: If `PHONE_MODELS.find()` does not find a match, fall back gracefully to displaying the formatted slug or bypass the filter without crashing.
- **[Risk] URL updates during search pagination or sort** → **Mitigation**: Preserve other query parameters (`q`, `category`, `sort`) when dismissing or modifying filters.
