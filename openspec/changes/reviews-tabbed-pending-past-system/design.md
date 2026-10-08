## Context

See `proposal.md` for motivation.

The Reviews section in `src/lib/components/profile/ProfileDrawer.svelte` currently shows a flat list of `MOCK_REVIEWS` with an inline review form at the bottom. The refactor introduces:
- Sub-tab state `reviewsTab: 'pending' | 'past'` inside `ProfileDrawer.svelte`.
- Sample pending items in `src/lib/data/mockProfile.ts` (`MOCK_PENDING_REVIEWS`).
- A 2-column grid layout for pending items (`grid grid-cols-2 gap-2.5 sm:gap-3`).
- Cards styled with the exact visual tokens of `ProductCard.svelte` (130px image height, brand tag, 2-line title, price), featuring a `Review Now` button.
- Expanding inline review card per pending product when `Review Now` is clicked.

## Goals / Non-Goals

**Goals:**
- Provide a clear 2-tab interface (`Pending Reviews (N)` / `Past Reviews (N)`).
- Render pending review products in a responsive 2-column grid matching the home page `ProductCard` layout.
- Replace `Buy Now` with `Review Now` CTA.
- Allow 1-click expansion of star picker and textarea feedback form for any pending item.
- Support real-time transition of completed reviews into the `Past Reviews` tab.

**Non-Goals:**
- Modifying catalog data or backend APIs.
- Replacing `ProductCard.svelte` used across the home page and search views.

## Decisions

### Decision 1: Sub-Tab State & Counts
- Store `reviewsSubTab = $state<'pending' | 'past'>('pending')`.
- Dynamic counts: `pendingCount = pendingReviews.length` and `pastCount = pastReviews.length`.
- Render segmented button control on `bg-[var(--color-bg-subtle)]` with `rounded-[var(--radius-xs)]`.

### Decision 2: 2-Column Pending Grid Architecture
- Use `grid grid-cols-2 gap-2.5 sm:gap-3`.
- Replicate `ProductCard` structure: 130px image header, brand uppercase tag, truncated 2-line title, price, and boxy `Review Now` button (`rounded-[var(--radius-sm)] bg-[var(--color-brand-primary)] text-white text-xs font-bold`).

### Decision 3: Expanded Review Card Form
- Clicking `Review Now` sets `activeReviewingId = product.id`.
- The product card expands or overlays an active review composer box with 5-star selector, textarea, `Cancel`, and `Post Review` buttons.
- On submission, `cartState.showToast(...)` fires, the item is removed from `pendingReviews` and prepended to `pastReviews`, and `reviewsSubTab` switches to `'past'`.

## Risks / Trade-offs

- **[Risk]** 2-column cards may feel tight on small mobile screens (<360px).
  - *Mitigation:* Use compact text sizing (`text-[11.5px]` title, `text-[10px]` brand) and tight padding (`p-2.5 sm:p-3`), exactly matching `ProductCard.svelte`.
