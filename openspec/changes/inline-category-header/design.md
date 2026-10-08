## Context

See `proposal.md` for motivation. In `src/lib/components/CategorySection.svelte`, the current markup separates the header (`Categories 6`) and the scrollable chip container (`flex items-center gap-2 overflow-x-auto...`) into sibling elements within a vertical flow.

## Goals / Non-Goals

**Goals:**
- Eliminate the "Quick filter by accessory type" span.
- Combine the header and the chip container into one horizontal line.

**Non-Goals:**
- Removing or altering the category chips themselves.

## Decisions

- **Single Row Layout:** We will wrap both the header block (`div` containing "Categories" and "6") and the chip block inside a parent `<div class="flex items-center gap-4">`.
- **Header Locking:** We will give the header block a `shrink-0` class to prevent it from squishing when there are many chips.
- **Scrolling Behavior:** The chip container will retain its `overflow-x-auto` property so it can scroll horizontally alongside the fixed header block.
- **Padding Adjustments:** We'll align the padding and margins so the horizontal scroll feels natural without clipping the left side of the chips abruptly.

## Risks / Trade-offs

- **Risk:** On very narrow devices, the header might take up so much space that the chips are hard to tap.
  **Mitigation:** The header text (`Categories`) and badge (`6`) are very short, so they leave plenty of room for horizontal scroll interaction on standard smartphone screens.
