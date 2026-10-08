## Why

In the Bangladesh e-commerce market, having a verified phone number is vital for delivery coordination, courier tracking (e.g., Pathao, RedX), and customer communication. The current application lacks a unified authentication flow optimized for this market. We need a seamless login/signup experience that prioritizing phone number OTP authentication, supports Google OAuth for friction reduction, but enforces a mandatory phone number linking step if a Google account is used. 

## What Changes

- Create a unified Auth Page (`/auth`) allowing users to sign in or create an account via Phone Number (OTP) or Google OAuth.
- Create a Phone Verification & Linking Page (`/auth/verify`) that handles OTP input.
- If a user signs in via Google and lacks a linked phone number, route them to the verification page to link and verify a phone number before proceeding.
- The UI will strictly follow the "boxy" design system (8px border radius, flat surface colors, and existing `cta-blue-bubble` and outline buttons) with a mobile-first, PC-centered card approach.

## Capabilities

### New Capabilities
- `auth`: Phone-number primary authentication and OTP verification flow with Google OAuth fallback and mandatory phone linking.

### Modified Capabilities
None

## Impact

- **Affected Code:** Creates new routes `/auth` and `/auth/verify` and associated Svelte components.
- **Dependencies:** Requires integration with a backend or mock service for OTP handling and Google OAuth.
- **User Experience:** Streamlines entry into the app while guaranteeing that every logged-in user has a valid phone number.
