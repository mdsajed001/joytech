## 1. Unified Mobile Search Layout

- [x] 1.1 In `src/lib/components/Header.svelte`, eliminate the separate snapped overlay and keep the search bar continuously anchored in Row 2 (~72px from top) so there is zero vertical drift.
- [x] 1.2 Remove the colored border (`border-2 border-[var(--color-brand-primary)]`) from the search box, using clean subtle styling.
- [x] 1.3 Implement continuous CSS transition (`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`) for expanding the white canvas downward to 100vh without snapping.
- [x] 1.4 In Row 1, smoothly display a back button `[<]` alongside `JOYTECH` to dismiss the search and collapse smoothly back to the standard header.
- [x] 1.5 Ensure smooth shape morphing on container and button between capsule (`rounded-full`) and boxy (`rounded-[var(--radius-sm)]`), with horizontal text centering and auto-focus maintained.

## 2. Verification & Deployment

- [x] 2.1 Run `npm run check` and `npm run build` to verify type safety and bundle generation.
- [x] 2.2 Deploy to Vercel production and verify live seamless vertical anchoring, no colored border, and smooth downward expansion.
