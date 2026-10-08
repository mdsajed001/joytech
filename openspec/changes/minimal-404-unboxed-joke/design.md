## Context

The user requested removing the card box around the 404 joke and shortening the text to a small 1-2 line joke so that the page feels seamless and fits cleanly within the viewport. See [proposal.md](proposal.md).

## Goals / Non-Goals

**Goals:**
- Eliminate the rounded card container, border, background surface, and top color gradient line around the 404 message.
- Condense the joke copy into a punchy, 1-2 line statement for both English and Bangla.
- Bring the "Back to Home" and "Search Catalog" buttons closer to the copy so all essential elements are effortlessly visible above the fold.

**Non-Goals:**
- Removing the recovery buttons or popular search chips.
- Changing the robot illustration asset.

## Decisions

### 1. Direct Canvas Typography
- **Decision**: Replace the nested card box (`bg-[var(--color-bg-surface)] border ... rounded-xl`) with a simple unboxed container (`max-w-md w-full text-center mb-4 sm:mb-5`).
- **Rationale**: Removes visual heaviness, unnecessary lines, and box boundaries, aligning with modern minimal e-commerce aesthetics.

### 2. Streamlined 1–2 Line Joke Copy
- **Decision**:
  - **Bangla**:
    - Header: `৪০৪: পেজ খুঁজে পাওয়া যায়নি`
    - Joke: `“ভাইয়া, ডেলিভারি রাইডার বলল—‘আপনার পেজের লোকেশন পাচ্ছি না, একটু মেইন রোডে আসেন!’ 🛵💨”`
  - **English**:
    - Header: `404: Page Not Found`
    - Joke: `“Even our 65W GaN fast charger couldn’t power up this page! Looks like this URL was delivered to the wrong address.”`
- **Rationale**: Eliminates wordy sub-paragraphs and redundant pills while keeping the humor sharp and fast to read.

### 3. Vertical Proximity
- **Decision**: Reduce margins between the illustration, joke copy, and CTAs to `mb-2` and `mb-4`.
- **Rationale**: Ensures the entire composition remains compact and fits within 600px–750px viewport heights.

## Risks / Trade-offs

- *[Risk]* Text might look floating without a boundary.
  → *Mitigation*: Centered typography with bold titles and brand-tinted quotes provides natural visual grounding directly aligned with the centered vector illustration.
