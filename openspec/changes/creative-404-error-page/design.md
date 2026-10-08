## Context

SvelteKit defaults to generic error rendering when no `+error.svelte` file is present. Visitors hitting broken product links or mistyped URLs currently see an unstyled raw error. See [proposal.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/creative-404-error-page/proposal.md).

## Goals / Non-Goals

**Goals:**
- Provide a responsive, beautifully styled 404 page within Joytech's existing store layout.
- Include distinct, relevantly funny tech/shopping jokes tailored for English and Bangla.
- Include an on-page interactive language toggle synchronized with `i18nState`.
- Incorporate a themed 404 illustration (unplugged tech accessories / lost phone theme).
- Add actionable recovery pathways (Home button, Search button, popular accessory tags).
- Create a dedicated `/404` route for manual testing and verification.

**Non-Goals:**
- Handling non-404 errors (500 internal errors) with jokes (500s will display an appropriate technical recovery message).
- Adding complex backend logging for broken links.

## Decisions

### 1. Reusable `NotFoundView.svelte` Component
- **Decision:** Build the entire 404 interface inside `src/lib/components/NotFoundView.svelte`, and render it from both `src/routes/+error.svelte` and `src/routes/404/+page.svelte`.
- **Rationale:** Ensures 100% visual and behavioral parity between the dedicated test route (`/404`) and any natural 404 triggered anywhere on the site.

### 2. Dual Culturally Tailored Jokes
- **Decision:**
  - **English Joke**: Focuses on charging/power accessories: *"Even our 65W GaN super-fast charger couldn't power up this page! Either the link unplugged itself, or our courier delivered this URL to the wrong address."*
  - **Bangla Joke**: Focuses on Bangladesh's ubiquitous ecommerce delivery call: *"ভাইয়া, ডেলিভারি রাইডার কল দিয়ে বলল—'আপনার পেজের লোকেশন তো পাচ্ছি না, একটু মেইন রোডে আসেন!' 🛵💨 মনে হচ্ছে লিংকটা লোডশেডিংয়ে চলে গেছে! তবে চিন্তা নেই, আপনার ফোনের জন্য আসল গ্যাজেট এখনো স্টকেই আছে।"*
- **Rationale:** Technical humor in Bangladesh lands best when referencing daily local tech experiences (courier phone calls, load shedding, lost chargers) rather than dry literal English translations.

### 3. Integrated Language Switcher
- **Decision:** Include a pill switcher (`[ 🇬🇧 English | 🇧🇩 বাংলা ]`) directly on the 404 card.
- **Rationale:** Allows reviewers and users to switch jokes immediately without having to navigate to settings or profile preferences.

### 4. 404 Phone Accessory Illustration
- **Decision:** Feature a high-quality tech illustration showing an unplugged smartphone / searching accessory motif with subtle floating CSS micro-animation.

## Risks / Trade-offs

- *[Risk]* Layout shift when switching between English and Bangla text.
  → *Mitigation*: Reserve appropriate min-height for the joke container and use flexible card layout so text changes transition smoothly without jarring scroll jumps.
