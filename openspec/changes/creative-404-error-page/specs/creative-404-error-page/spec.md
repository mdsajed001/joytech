## Purpose

Delivers a humorous, engaging, and culturally relevant bilingual 404 error experience for Joytech, transforming dead-end URLs into pleasant brand recovery moments with tailored English and Bangla jokes, illustration, and quick recovery navigation.

## ADDED Requirements

### Requirement: Creative 404 View with Bilingual Jokes
The system SHALL display an engaging 404 error page featuring a relevant phone accessory illustration and distinct, humorous jokes tailored specifically for English and Bangla.

#### Scenario: Viewing 404 page in English
- **WHEN** a user lands on a 404 page while English language is selected
- **THEN** the system displays the English tech joke: *"Even our 65W GaN super-fast charger couldn't power up this page! Either the link unplugged itself, or our courier delivered this URL to the wrong address."*

#### Scenario: Viewing 404 page in Bangla
- **WHEN** a user lands on a 404 page while Bangla language is selected
- **THEN** the system displays the Bangla tech & shopping joke: *"ভাইয়া, ডেলিভারি রাইডার কল দিয়ে বলল—'আপনার পেজের লোকেশন তো পাচ্ছি না, একটু মেইন রোডে আসেন!' 🛵💨 মনে হচ্ছে লিংকটা লোডশেডিংয়ে চলে গেছে! তবে চিন্তা নেই, আমাদের আসল গ্যাজেট স্টকেই আছে।"*

---

### Requirement: Language Toggle on 404 Page
The system SHALL provide an interactive language switch toggle on the 404 page allowing users to flip between English and Bangla jokes immediately.

#### Scenario: Toggling language on 404 page
- **WHEN** the user clicks the language toggle pill on the 404 page
- **THEN** the headline, joke, and action buttons switch smoothly between English and Bangla, and the choice is persisted in `i18nState`.

---

### Requirement: Actionable Recovery CTAs
The system SHALL provide intuitive recovery links and popular product search tags on the 404 page to help users resume browsing.

#### Scenario: Clicking recovery actions
- **WHEN** the user clicks "Back to Home"
- **THEN** the user is navigated to the homepage (`/`)
- **WHEN** the user clicks "Search Accessories" or a popular search chip
- **THEN** the system navigates to the search catalog or triggers the search overlay for that query

---

### Requirement: Dedicated /404 Test Route and Global Error Boundary
The system SHALL render the 404 experience on both the dedicated test route (`/404`) and all unmatched application URLs handled by `+error.svelte`.

#### Scenario: Direct visit to /404
- **WHEN** the user navigates directly to `/404` in their browser
- **THEN** the system renders the complete 404 error view inside the root store layout
