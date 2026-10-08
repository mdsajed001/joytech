## Purpose

Defines a clean, single-heading authentication header without capsule badges or redundant subtitle text across sign-in and verification screens.

## ADDED Requirements

### Requirement: Single Clear Authentication Heading
The sign-in / sign-up screen (`/auth`) SHALL display a single, bold heading ("Sign in or create account") directly above the input form, with no pill/capsule badges and no explanatory subtitle paragraphs.

#### Scenario: User views the sign-in form header
- **WHEN** a user visits `/auth`
- **THEN** the system SHALL display a single heading "Sign in or create account"
- **AND** the system SHALL NOT display any pill badge (such as "Fast & Secure Login")
- **AND** the system SHALL NOT display a secondary subtitle paragraph

### Requirement: Streamlined Verification Header
The verification and phone linking screens (`/auth/verify`) SHALL display a clean, concise heading without capsule badges.

#### Scenario: User views the verification code screen
- **WHEN** a user navigates to `/auth/verify` for OTP verification
- **THEN** the system SHALL display a direct title ("Enter verification code") with phone number reference
- **AND** the system SHALL NOT display any pill badge (such as "SMS Security Code" or "Step 2 of 2")
