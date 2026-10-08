## 1. Mobile Canopy & Interactive Sheet Architecture

- [x] 1.1 Implement the mobile electric blue canopy in `src/lib/components/auth/AuthSplitLayout.svelte` featuring the royal blue gradient, subtle floating bubbles, scaled floating tech gadget icons, and back button navigation
- [x] 1.2 Structure the bottom form sheet in `AuthSplitLayout.svelte` with `rounded-t-[28px]`, crisp surface background, and hardware-accelerated CSS transition (`cubic-bezier(0.16, 1, 0.3, 1)`)
- [x] 1.3 Add container-level `focusin` and `focusout` handlers with debounce in `AuthSplitLayout.svelte` to dynamically condense the canopy and slide the sheet upward when inputs receive focus, and reset when blurred

## 2. Route Integration & Visual Polish

- [x] 2.1 Refine `src/routes/auth/+page.svelte` mobile hierarchy, elevated inputs, and button micro-interactions to fit cleanly inside the sliding sheet
- [x] 2.2 Integrate and test `src/routes/auth/verify/+page.svelte` OTP digit boxes and Google phone linking with the upward focus slide motion
- [x] 2.3 Verify layout, keyboard-ready motion, and desktop split-screen preservation across screen widths in the running dev server
