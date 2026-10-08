## 1. Simplify Header Text

- [x] 1.1 Remove Redundant Text: In `src/lib/components/CategorySection.svelte`, delete the `<span class="... hidden sm:inline">Quick filter by accessory type</span>` element.

## 2. Refactor to Single Row Layout

- [x] 2.1 Wrap Header and Chips: In `CategorySection.svelte`, wrap the header div (containing the `h2` and the badge) and the chip container in a new parent `div` with `class="flex items-center gap-4 sm:gap-6 w-full"`.
- [x] 2.2 Protect Header from Shrinking: Ensure the header div has `class="flex items-center gap-2 shrink-0"` so it doesn't get compressed by the scrolling chips container.
- [x] 2.3 Adjust Chip Container: Remove any unnecessary vertical margins (like `mb-2.5`) from the original header wrapper, since they are now on the same line. Ensure the chip container still has `overflow-x-auto` and scrolls properly next to the fixed header. Verify the layout on the dev server (it should render as one single horizontal row).
