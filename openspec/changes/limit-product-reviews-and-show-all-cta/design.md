## Context

See `proposal.md` for motivation. Currently in `src/lib/components/product/ProductReviews.svelte`, the feed maps directly over `displayedReviews`. If a product has 4, 10, or more reviews, they all render simultaneously.

## Goals / Non-Goals

**Goals:**
- Cap initial visible reviews to a maximum of 2 items (`displayedReviews.slice(0, 2)`).
- Provide an outlined CTA button below the reviews feed when `displayedReviews.length > 2`.
- Clicking the outlined CTA reveals all remaining reviews and switches button text to "Show Less".
- Reset expansion state when changing filter chips or sort criteria.
- Keep the button styling aligned with the site's modern outlined and boxy aesthetic.

**Non-Goals:**
- External paginated API calls (reviews are provided in local catalog state / product data).
- Opening reviews in a separate popup modal.

## Decisions

### 1. Expansion State & Derived Visible Slice
- **Decision**: Declare `let isExpanded = $state(false);` and derive `visibleReviews = $derived(isExpanded ? displayedReviews : displayedReviews.slice(0, 2));`.
- **Rationale**: Simple, highly reactive in Svelte 5, without mutating original review arrays.

### 2. Auto-Collapse on Filter Switch
- **Decision**: Reset `isExpanded = false` whenever `activeFilter` or `activeSort` changes.
- **Rationale**: If a user switches from "5 Star" to "4 Star", they expect to see the top 2 relevant reviews first rather than being overwhelmed by a previously expanded list.

### 3. Outlined CTA Styling
- **Decision**: Render a full-width or centered outlined button with `border border-[var(--color-border-default)] hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)] bg-transparent rounded-[var(--radius-sm)] py-2.5 px-4 font-bold text-xs sm:text-sm`.
- **Rationale**: Matches the user's explicit request for an "outlined" button and conforms to the boxy radius conventions of the application.

## Risks / Trade-offs

- **[Risk]** Smooth transition when expanding 10+ reviews.
  &rarr; *Mitigation*: The DOM update in Svelte 5 is instantaneous and seamless; an subtle arrow icon indicates the expandable behavior.
