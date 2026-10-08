## 1. Unified Auth Entry Page (`/auth`)

- [x] 1.1 Create `src/routes/auth/+page.svelte` with a layout that uses `max-w-md mx-auto` for PC and a fluid layout for mobile. Verify the route is accessible in the browser.
- [x] 1.2 Implement the Phone Number input section in `src/routes/auth/+page.svelte`. Ensure the input uses `rounded-[var(--radius-sm)]`, defaults to the `+880` prefix with a flag, and includes a "Continue" button using `<Button variant="primary">`. Verify it visually matches the boxy design system.
- [x] 1.3 Add an "OR" divider and implement the "Continue with Google" button using `<Button variant="outline">` and a Google icon in `src/routes/auth/+page.svelte`. Verify the outline button styling.

## 2. Phone Verification & Linking Page (`/auth/verify`)

- [x] 2.1 Create `src/routes/auth/verify/+page.svelte` with a layout matching the main auth page (centered card on PC). Verify the route is accessible in the browser.
- [x] 2.2 Implement the "Link your phone number" state in `src/routes/auth/verify/+page.svelte` (for post-Google OAuth missing phone scenario). Include an avatar/email display block and a Phone Number input with a "Send OTP" button. Verify the layout renders correctly.
- [x] 2.3 Implement the "Enter Verification Code" state (OTP input) in `src/routes/auth/verify/+page.svelte`. Include 4-6 boxy input fields for the OTP and a "Verify & Login" button. Verify the visual layout conforms to `var(--radius-sm)` boxy standards.

## 3. Integration & Testing

- [x] 3.1 Implement mock navigation logic in `src/routes/auth/+page.svelte` to redirect to `/auth/verify` upon clicking "Continue" for both phone and Google (simulating a missing phone number). Verify clicking the buttons routes the user correctly.
