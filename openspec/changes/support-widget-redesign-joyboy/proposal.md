## Why

The current floating support widget in `SupportWidget.svelte` uses soft rounded bubble corners (`rounded-[var(--radius-xl)]`) and only provides two support channels (WhatsApp and Phone Call). To align with Joytech's boxy, clean design system and improve customer assistance, the pop-up modal needs a streamlined redesign that incorporates WhatsApp, Facebook Messenger, Joyboy AI Chatbot assistance, and Direct Phone Call options in a structured boxy container.

## What Changes

- **Boxy Container & Header**: Replace soft rounded pill/bubble container with Joytech's crisp architecture (`rounded-[var(--radius-sm)]`), tone-on-tone header (`bg-[var(--color-bg-subtle)] border-b border-[var(--color-border-default)]`), and clean close action.
- **Support Channel Action Items**:
  - **WhatsApp Support**: Direct `https://wa.me/8801700000000` chat link with green theme tint and response time metadata.
  - **Messenger Support**: Direct Facebook Messenger chat link (`https://m.me/joytelecom`) with blue theme tint.
  - **Joyboy AI Chatbot**: Highlighting Joyboy AI assistant with brand primary tint, `⚡ AI` tag, and `AiMagicIcon`.
  - **Direct Phone Call**: Direct call helpline (`tel:+8801700000000`) with operating hours metadata.
- **Icon Badges & Action Styling**: Replace circular badges with sharp boxy badges (`w-8 h-8 rounded-[var(--radius-xs)]`) and bordered card options (`border border-[var(--color-border-default)]`).
- **Dark Mode & Accessibility**: Ensure CSS custom variables and high contrast text work seamlessly in both light and dark modes.

## Capabilities

### New Capabilities
- `support-widget`: Customer support floating pop-up widget supporting WhatsApp, Messenger, Joyboy AI chatbot, and direct phone calls with boxy design system styling.

### Modified Capabilities
<!-- None -->

## Impact

- `src/lib/components/SupportWidget.svelte`: Full structural and visual redesign of the support modal and launcher.
