## 1. Support Widget Redesign (`SupportWidget.svelte`)

- [x] 1.1 Redesign support popover container to use boxy geometry (`rounded-[var(--radius-sm)] border border-[var(--color-border-default)] shadow-xl`) and verify layout in DOM.
- [x] 1.2 Implement structured header (`bg-[var(--color-bg-subtle)] border-b border-[var(--color-border-default)]`) with title, subtitle, and close button, verifying close functionality.
- [x] 1.3 Add WhatsApp option card (`https://wa.me/8801700000000`) with green theme badge (`rounded-[var(--radius-xs)]`) and verify click opens WhatsApp in a new tab.
- [x] 1.4 Add Messenger option card (`https://m.me/joytelecom`) with blue theme badge (`rounded-[var(--radius-xs)]`) and verify click opens Messenger in a new tab.
- [x] 1.5 Add Joyboy AI Chatbot option card with brand primary badge (`rounded-[var(--radius-xs)]`) and `⚡ AI` tag highlight, verifying click triggers Joyboy AI.
- [x] 1.6 Add Direct Phone Call option card (`tel:+8801700000000`) with neutral tone badge (`rounded-[var(--radius-xs)]`) and operating hours, verifying `tel:` link functionality.

## 2. Verification

- [x] 2.1 Run `npm run check` to verify TypeScript & Svelte check compilation without errors.
- [x] 2.2 Verify floating trigger button animations and dark mode contrast across light/dark themes.
