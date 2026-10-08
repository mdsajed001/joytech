## Context

See `proposal.md` for the motivation regarding the importance of phone numbers in the Bangladesh market and the unified auth flow. The UI must strictly follow our boxy design system (`var(--radius-sm)` and `cta-blue-bubble`).

## Goals / Non-Goals

**Goals:**
- Design a single unified entry point (`/auth`) for sign-in/sign-up.
- Create an OTP and Phone Linking screen (`/auth/verify`) that handles both direct phone OTP and post-Google OAuth phone linking.
- Ensure seamless mobile (bottom-sheet style or full screen) and PC (centered card) responsiveness.
- Adhere strictly to the existing `var(--radius-sm)` (8px) boxy styling and button components.

**Non-Goals:**
- No password-based authentication.
- Backend implementation (this focuses on UI and component structure; backend will be mocked).

## Decisions

**1. Unified Route vs. Multiple Routes**
- **Decision:** Use a single `/auth` route for entry and `/auth/verify` for the OTP/Linking step.
- **Rationale:** Reduces navigation friction and simplifies state management. Users don't need to choose between "Login" and "Sign Up" upfront.

**2. Layout Architecture**
- **Decision:** Use a centered card layout (`max-w-md mx-auto`) for PC and a flush edge-to-edge layout for mobile.
- **Rationale:** This aligns with modern e-commerce practices and the existing site architecture.

**3. Component Reusability**
- **Decision:** Strictly reuse `src/lib/components/Button.svelte` for all CTAs (Primary `cta-blue-bubble` for the main action, `outline` for Google Auth).
- **Rationale:** Ensures design system consistency (8px border radius, hover states, disabled states) without duplicating CSS classes.

**4. Default Phone Prefix**
- **Decision:** Hardcode/default the phone input to use a `+880` prefix with a Bangladesh flag indicator.
- **Rationale:** Optimized for the local target market, reducing user input friction.

## Risks / Trade-offs

- **Risk:** Dropping passwords entirely might alienate users who are used to traditional login.
  **Mitigation:** OTP login has become the de facto standard in BD e-commerce (e.g., Daraz, Chaldal). The friction reduction offsets the familiarity risk.
- **Risk:** Forcing a phone number link after Google OAuth adds friction.
  **Mitigation:** The linking screen will be clearly labeled with "Why we need this" (for delivery) to contextualize the request and reduce drop-off.
