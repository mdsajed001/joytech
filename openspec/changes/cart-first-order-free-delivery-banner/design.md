## Context

See `proposal.md` for motivation. In `src/routes/cart/+page.svelte`, `DeliveryProgressBar.svelte` currently renders as an indented card with a progress bar track, percentage badge, and threshold calculations, separated from the page top by `py-4 sm:py-6`.

## Goals / Non-Goals

**Goals:**
- Render the delivery announcement as a full-width top banner with zero top margin/gap (`pt-0 mt-0`).
- Remove the progress track, percentage chip, and dynamic ৳2,500 threshold countdowns.
- Prominently announce "1st Order Delivery FREE" ("১ম অর্ডারে ফ্রি ডেলিভারি") with nationwide coverage info.
- Align `CartState.isFreeDelivery` to ensure the delivery fee in the Order Summary reflects FREE (৳0).

**Non-Goals:**
- Changing payment methods, coupons, or checkout flows.

## Decisions

### Decision 1: Full-Width Top Flush Placement
- **Choice**: Move the delivery banner out of the indented left column and place it directly at the top of the cart page content (`w-full`), docked flush against the top with `pt-0 mt-0`:
  ```svelte
  <div class="min-h-[80vh] bg-[var(--color-bg-canvas)] pb-[420px] sm:pb-28 lg:pb-16">
    <DeliveryProgressBar />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      ...
  ```
- **Rationale**: Fulfills the user requirement for full-width edge-to-edge presentation with no top gap.
- **Alternatives Considered**: Using negative margins inside the left column was rejected as it wouldn't be truly full-width across the cart layout.

### Decision 2: Streamlined Perk Announcement Component
- **Choice**: Refactor `DeliveryProgressBar.svelte` to remove the progress track `<div class="w-full h-2.5 ...">` and percentage chip. Apply a soft brand-tinted aesthetic (`bg-blue-50/90 dark:bg-blue-950/40 border-b border-blue-100 dark:border-blue-900/50`) with a truck icon, bold headline "1st Order Delivery FREE", and subtitle "Applicable nationwide across all 64 districts in Bangladesh".
- **Rationale**: Replaces the clutter of the loading bar with a sleek, premium promotional announcement.

### Decision 3: Delivery Fee Waiver Synchronization
- **Choice**: Update `CartState` to recognize 1st order free delivery, ensuring `deliveryFee` returns `0` and displays FREE in `OrderSummary`.
- **Rationale**: Prevents customer confusion between the top banner ("1st Order Delivery FREE") and the checkout receipt.

## Risks / Trade-offs

- **[Risk] Banner taking up excessive vertical viewport space** → **Mitigation**: Keep banner height compact (`py-2.5 sm:py-3.5 px-4 sm:px-6`) with tight vertical rhythm.
