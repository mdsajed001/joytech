## Why

Currently, the Reviews & Ratings panel in the customer profile drawer presents a single list of past reviews alongside a generic bottom form, lacking a structured workflow for customers to identify delivered items awaiting feedback. Introducing a 2-tab segmented interface (`Pending Reviews` and `Past Reviews`) with a 2-column product grid featuring custom `Review Now` CTAs allows customers to easily review delivered purchases, compose feedback inline, and track their published review history in a tactile, boxy UI.

## What Changes

- **2-Tab Segmented Sub-Navigation**:
  - Add `Pending Reviews (N)` and `Past Reviews (N)` sub-tabs inside the Reviews & Ratings view of `ProfileDrawer.svelte`.
- **2-Column Pending Product Grid**:
  - Render delivered products awaiting review in a 2-column grid (`grid-cols-2 gap-2.5 sm:gap-3`).
  - Replicate the visual layout of `ProductCard.svelte` (130px gradient thumbnail, brand kicker, truncated 2-line title, price tag), replacing the `Buy Now` button with a high-contrast **`Review Now`** CTA (`rounded-[var(--radius-sm)]`).
- **Interactive Review Composer**:
  - Clicking **`Review Now`** on a pending product card expands an inline review card equipped with a 5-star interactive rating picker, a review comment textarea, and a **`Post Review`** CTA.
- **Dynamic Transition from Pending to Past**:
  - Submitting a review triggers a toast notification and dynamically moves the product from `Pending Reviews` to `Past Reviews`, updating tab count indicators in real-time.
- **Past Reviews List Refactor**:
  - Format completed reviews in full-width modular cards with star ratings, purchase date, verified buyer badge, and customer feedback text.

## Capabilities

### New Capabilities
- `customer-reviews`: 2-tab customer reviews manager (Pending vs Past), 2-column pending product card grid with `Review Now` CTA, inline review submission, and real-time state transition to published history.

### Modified Capabilities
<!-- None: No existing specs in openspec/specs/ yet -->

## Impact

- **Affected Files**:
  - `src/lib/components/profile/ProfileDrawer.svelte`: Refactor Reviews section to support sub-tabs, 2-column pending product grid, inline review editor, and past reviews list.
  - `src/lib/data/mockProfile.ts`: Export mock pending review products dataset (`MOCK_PENDING_REVIEWS`).
- **Dependencies**: None. Uses existing Tailwind CSS design tokens and Joytech custom properties.
