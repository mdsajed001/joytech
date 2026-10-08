## Context

The search results filter currently uses browser-native `<select>` tags for phone models and brands. As seen in recent testing, the native browser popup renders an unstyled, plain OS menu that cannot be searched by typing. This technical design specifies the architecture of a custom, highly styled `SearchableSelect.svelte` component and its integration into the search filter system.

See [proposal.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/searchable-filter-dropdown/proposal.md) for background and motivation.

## Goals / Non-Goals

**Goals:**
- Create a self-contained, reusable `SearchableSelect.svelte` component in `src/lib/components/ui/`.
- Provide an embedded search input at the top of the popover menu that filters options in real time as the user types.
- Support click-outside dismissal, Escape key handling, and auto-focusing the search field upon opening.
- Provide a clear (`×`) button when a value is selected to easily reset to default.
- Integrate into both `SearchSidebar.svelte` and `SearchMobileFilterDrawer.svelte`.

**Non-Goals:**
- Multi-select dropdowns (this is specifically for single-selection such as phone models).
- External heavy dropdown libraries (e.g. Radix, HeadlessUI); built with pure Svelte 5 runes and Tailwind CSS.

## Decisions

### 1. Component Architecture & Props Contract
- **Decision:** Encapsulate option structures cleanly:
  ```ts
  export interface SelectOption {
    value: string;
    label: string;
    sublabel?: string;
  }

  interface Props {
    id?: string;
    options: SelectOption[];
    value: string;
    placeholder?: string;
    searchPlaceholder?: string;
    onSelect: (value: string) => void;
    disabled?: boolean;
  }
  ```
- **Rationale:** Separating raw data structures from presentation allows `SearchableSelect` to be used for models, brands, or future filters across the app.

### 2. Search & Shortlisting Logic
- **Decision:**
  ```ts
  let searchInput = $state('');
  let filteredOptions = $derived.by(() => {
    const q = searchInput.toLowerCase().trim();
    if (!q) return options;
    return options.filter(opt =>
      opt.label.toLowerCase().includes(q) ||
      (opt.sublabel && opt.sublabel.toLowerCase().includes(q))
    );
  });
  ```
- **Rationale:** Instant substring search allows queries like `"16"`, `"pro max"`, `"s24"`, or `"ultra"` to immediately narrow down the list.

### 3. Popover Positioning & Dismissal
- **Decision:**
  - Container uses `relative` positioning.
  - Dropdown renders as `absolute z-50 left-0 right-0 mt-1 max-h-60 overflow-y-auto rounded-[var(--radius-sm)] bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] shadow-lg`.
  - Global `pointerdown` listener closes the popover when a click occurs outside the container element.
  - Auto-focuses the search input upon opening via `requestAnimationFrame`.

## Risks / Trade-offs

- **[Risk]** Popover overflowing container boundaries in mobile drawer.
  - **Mitigation:** Give the dropdown an explicit `max-h-52 sm:max-h-60` with smooth scrolling and `z-50` elevation.
- **[Risk]** Keyboard focus conflicts with page scrolling.
  - **Mitigation:** Use `preventDefault` only on specific navigation keys (Escape, Enter).
