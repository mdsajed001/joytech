## Why

The current Customer Ratings & Reviews section on the product details page presents several UX and visual inconsistencies:
1. Review stars render as hollow, empty wireframes due to missing fill colors on `StarIcon`, confusing users into thinking products have 0 stars.
2. The section lacks a rating distribution breakdown (5★ to 1★ bar charts), reducing social proof credibility.
3. There are no interactive filter or sorting tools (such as filtering by star rating or verified purchasers).
4. There is no "Write a Review" capability to let customers contribute feedback.
5. Review cards lack variant attribution (purchased model/color) and helpfulness voting.

Redesigning this section according to Joy Telecom's modern design system establishes high trust, rich social proof, and clean interactive feedback.

## What Changes

- **Filled Glowing Stars**: Fix star rendering with `fill-amber-400 text-amber-400` across summary stats and individual review cards.
- **Rating Scoreboard & Breakdown**: Add an overall rating summary alongside an interactive 5-star to 1-star percentage distribution progress bar chart.
- **"Write a Review" Modal Flow**: Introduce a boxy brand CTA button (`rounded-[var(--radius-sm)]`) opening an accessible modal with an interactive star picker, name, variant, and review text submission with stacked toast confirmation.
- **Live Filter Chips & Sorting**: Filter reviews by `All`, `5 Stars`, `4 Stars`, and `Verified Only`, with sorting by `Most Recent` and `Highest Rated`.
- **Enhanced Review Cards**: Include customer avatar with brand-tinted initials, `Verified Buyer` badge, purchased variant info, and an interactive `👍 Helpful (N)` reaction counter.
- **Bilingual Support**: Fully localized in English and Bengali (`i18nState`).

## Capabilities

### New Capabilities
- `product-reviews`: Premium rating breakdown, live review filtering, verified buyer attribution, helpfulness feedback, and review submission modal.

### Modified Capabilities
<!-- None -->

## Impact

- `src/lib/components/product/ProductReviews.svelte`: Complete visual and architectural overhaul.
- `src/lib/types.ts`: Minor extension to `ProductReview` interface for optional variant tag and helpful count.
- Zero breaking changes to store or checkout pipelines.
