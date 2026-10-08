## Context

In `src/routes/auth/+page.svelte`, the form header contains three stacked text elements: a badge capsule ("Fast & Secure Login"), a primary title ("Welcome to Joytech"), and an explanatory paragraph ("Enter your mobile number to sign in or create an account"). The user provided a screenshot highlighting this stack and instructed: "too much text make one text simple meaning full no capsule fresh to point".

## Goals / Non-Goals

**Goals:**
- Replace the 3-element header stack on `/auth` with a single, clear, bold heading: `Sign in or create account`.
- Eliminate the badge/capsule entirely.
- Eliminate the subtitle paragraph entirely.
- On `/auth/verify`, remove all pill capsules ("SMS Security Code" and "Step 2 of 2: Phone Verification") and maintain direct, clean headings.
- Rebalance vertical margin (`mb-6`) for a crisp, spacious layout above the phone input.

**Non-Goals:**
- Altering phone input behavior, Google authentication button, or backend logic.

## Decisions

### Decision 1: Single Direct Heading
Replace the header block in `src/routes/auth/+page.svelte` with:
```svelte
<div class="mb-6">
  <h2 class="text-2xl sm:text-3xl font-black text-[var(--color-text-primary)] tracking-tight">
    Sign in or create account
  </h2>
</div>
```
- **Rationale**: Completely self-explanatory, eliminates reading fatigue, and gets straight to the point without visual clutter.

### Decision 2: Remove Capsules from Verification Flows
In `src/routes/auth/verify/+page.svelte`, strip the `inline-flex` capsule tags from both the Google phone linking state and the OTP verification state so the aesthetic is uniform across the entire auth journey.

## Risks / Trade-offs

- None identified; simplification enhances mobile legibility and reduces cognitive load.
