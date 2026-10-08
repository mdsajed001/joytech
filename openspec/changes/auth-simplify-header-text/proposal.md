## Why

The authentication header currently stacks multiple layers of text: a capsule badge ("Fast & Secure Login"), a primary welcome title ("Welcome to Joytech"), and an instructional subtitle ("Enter your mobile number to sign in or create an account"). This creates visual clutter and redundant reading. The user requested to remove all capsule badges and condense the header into one single, meaningful, fresh-to-the-point heading.

## What Changes

- **Remove Capsule Badges**: Completely eliminate the top pill badges (`Fast & Secure Login`, `Step 2 of 2: Phone Verification`, and `SMS Security Code`) across `/auth` and `/auth/verify`.
- **Single Concise Heading**: Replace the multi-line header stack with a single, clear, punchy heading on `/auth`:
  - New heading: `Sign in or create account` (or `Sign in to Joytech`), removing the redundant subtext paragraph.
- **Streamline Verification Headers**: On `/auth/verify`, remove the badge and streamline the title to `Enter verification code` with a clean, compact phone reference.
- **Tighten Layout Spacing**: Rebalance the top form margins so the single title sits cleanly above the input fields.

## Capabilities

### New Capabilities
- `auth-minimal-header`: Single-line, capsule-free header presentation for authentication and verification flows.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Files**:
  - `src/routes/auth/+page.svelte`
  - `src/routes/auth/verify/+page.svelte`
- **APIs/Dependencies**: None (pure visual and markup simplification).
