## Context

See `proposal.md` for background and motivation. In [`FlashSaleSection.svelte`](file:///c:/Users/Sajed/Documents/joytech/src/lib/components/FlashSaleSection.svelte), the header wrapper uses `items-end` alignment.

## Goals / Non-Goals

**Goals:**
- Top-align the left column ("⚡ Flash Sale" title) and right column ("Ends in:" label) using `items-start`.
- Provide visual symmetry between the top title/label pair and the bottom badge/counter pair.

**Non-Goals:**
- Changing typography font sizes or countdown box dimensions.

## Decisions

### 1. Flex Container Alignment Adjustment
- **Decision**: Update `FlashSaleSection.svelte` line 44 to:
  ```svelte
  <div class="flex items-start justify-between mb-4 sm:mb-5 gap-3">
  ```
- **Rationale**: `items-start` anchors both columns at the top margin, aligning the baseline of "⚡ Flash Sale" across with "Ends in:".

## Risks / Trade-offs

- None identified.
