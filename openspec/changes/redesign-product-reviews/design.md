## Context

The current `ProductReviews.svelte` component has minimal structure: a basic header with raw outline stars, followed by plain gray boxes for reviews. To align with modern accessory e-commerce standards, the section needs a comprehensive facelift emphasizing authenticity, clean data visualization, and user engagement without external photo bloat.

## Goals / Non-Goals

**Goals:**
- Fix `StarIcon` fill styling using `fill-amber-400 text-amber-400` so ratings are clearly readable.
- Build a responsive rating scoreboard:
  - Big rating number (e.g. 4.9/5) with total verified review count and recommendation badge.
  - 5-tier distribution histogram with interactive filter triggers.
  - "Write a Review" brand CTA button (`rounded-[var(--radius-sm)]`).
- Build filter toolbar (`All`, `5 Stars`, `4 Stars`, `Verified Only`) and sort dropdown (`Most Recent`, `Highest Rated`).
- Elevate review cards with:
  - Initials avatar with brand accents.
  - Emerald `Verified Buyer` badge with checkmark shield.
  - Purchased variant and date metadata.
  - Optimistic `👍 Helpful (N)` reaction counter.
- Create an integrated `WriteReviewModal` component with interactive star hover/click picker and toast confirmation.
- Full English and Bengali bilingual support.

**Non-Goals:**
- Customer photo/UGC galleries (explicitly excluded by user preference).
- Backend database review persistence (state persists in client memory session for smooth testing).

## Decisions

### 1. Data Model Extension
Extend `ProductReview` in `src/lib/types.ts` with optional attributes:
- `purchasedVariant?: string` (e.g. "Frosted Matte Black • iPhone 16 Pro Max")
- `helpfulCount?: number` (defaults to baseline integer, e.g. 14, 8)
- `userVotedHelpful?: boolean` (tracks local vote state)

### 2. Rating Breakdown Calculations
Compute distribution dynamically from `product.reviews` (or high-fidelity distribution matching `product.reviewCount` when sample count is smaller than total review tally).

### 3. Review Submission Modal
A clean, accessible modal dialog embedded or attached to `ProductReviews.svelte`:
- Backdrop blur `bg-black/60 backdrop-blur-sm`.
- Star selector from 1 to 5 with dynamic hover feedback and labels (e.g. "5 - Excellent", "4 - Good").
- Text inputs for Reviewer Name and Experience Details.
- Submitting updates local state and fires `cartState.showToast(...)` with a success toast.

## Risks / Trade-offs

- [Risk]: Review count mismatch if total reviews tally (e.g. 128) is larger than sample dataset (e.g. 3).
  - *Mitigation*: Provide sample distribution percentages that scale accurately to total verified reviews, and dynamically append newly submitted reviews to the top of the list.
