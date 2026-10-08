## 1. Icon Integration & Button Structure

- [x] 1.1 Import `AiMagicIcon` from `@hugeicons/core-free-icons` in `src/lib/components/SupportWidget.svelte` and verify successful compilation without import warnings.
- [x] 1.2 Update the floating trigger button markup to include `overflow-hidden` and stack both `CustomerService01Icon` and `AiMagicIcon` within an absolute-positioned container in the closed state.

## 2. Animation & Micro-Interactions

- [x] 2.1 Implement scoped CSS `@keyframes` in `SupportWidget.svelte` for the 10-second repeating cycle: radial exit to top-left for headphone, radial entry from bottom-right and center shimmer wobble for AI magic icon, followed by radial top-left exit and headphone re-entry from bottom-right.
- [x] 2.2 Ensure the animation continues playing seamlessly on hover, displays the static `Cancel01Icon` cleanly when `expanded === true`, and includes `prefers-reduced-motion` graceful degradation.

## 3. Verification & Validation

- [x] 3.1 Run `npm run check` to verify TypeScript and Svelte component validation pass with zero errors.
- [x] 3.2 Validate in the browser that the icon cycle repeats smoothly every 10 seconds and clips properly within the circular button boundary.
