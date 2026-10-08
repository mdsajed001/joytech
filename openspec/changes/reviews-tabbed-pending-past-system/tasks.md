## 1. Data Model & Mock Data Setup

- [x] 1.1 In `src/lib/data/mockProfile.ts`, define `PendingReviewItem` interface and export sample `MOCK_PENDING_REVIEWS` data array; verify TypeScript compilation.

## 2. Sub-Tab Segmented Control in ProfileDrawer

- [x] 2.1 In `src/lib/components/profile/ProfileDrawer.svelte`, implement `reviewsSubTab` state (`'pending' | 'past'`) and render segmented sub-tab control bar in the Reviews view; verify tab switching between Pending and Past reviews.

## 3. Pending Reviews 2-Column Product Grid & Review Now CTA

- [x] 3.1 In `src/lib/components/profile/ProfileDrawer.svelte` (Reviews section), implement 2-column grid (`grid-cols-2 gap-2.5 sm:gap-3`) for pending review products styled like `ProductCard.svelte` with a **`Review Now`** CTA button; verify layout rendering on mobile and desktop drawer.

## 4. Interactive Review Composer & State Transition

- [x] 4.1 In `src/lib/components/profile/ProfileDrawer.svelte`, implement inline review form expansion on `Review Now` click (5-star picker, textarea feedback, `Cancel` and `Post Review` buttons); verify form submission.
- [x] 4.2 On review submission, fire toast notification, move reviewed item to `pastReviews`, and switch active tab to `Past Reviews`; verify real-time counter updates.

## 5. Past Reviews View & Verification

- [x] 5.1 In `src/lib/components/profile/ProfileDrawer.svelte`, verify Past Reviews rendering with star ratings, date, verified buyer badge, and customer comment body.
- [x] 5.2 Run `npx svelte-check` to verify zero errors across the entire application.

