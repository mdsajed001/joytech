## Purpose
Provides the authentication and onboarding experience for Joytech, emphasizing phone numbers as the primary identity for the Bangladesh market.

## ADDED Requirements

### Requirement: Unified Authentication Entry
The system MUST provide a single entry page for both sign-in and sign-up, supporting phone numbers and Google OAuth.

#### Scenario: User provides phone number directly
- **WHEN** user enters a valid phone number and clicks continue
- **THEN** system sends an OTP and transitions to the OTP verification view

#### Scenario: User selects Google OAuth
- **WHEN** user clicks the Google OAuth button and completes the Google flow successfully
- **THEN** system checks if a phone number is linked to that Google account

### Requirement: Mandatory Phone Number Linking
The system MUST require every authenticated user to have a verified phone number on record before granting access.

#### Scenario: Google account has a linked phone number
- **WHEN** user authenticates via Google and the system finds a linked phone number
- **THEN** system logs the user in and redirects to their destination

#### Scenario: Google account lacks a linked phone number
- **WHEN** user authenticates via Google but the system finds no linked phone number
- **THEN** system transitions the user to the phone linking view to provide a phone number

### Requirement: Phone Number OTP Verification
The system MUST verify provided phone numbers via a one-time password (OTP) before creating an account or completing a link.

#### Scenario: Valid OTP entry
- **WHEN** user submits the correct OTP for their phone number
- **THEN** system verifies the phone number, logs the user in, and redirects to their destination

#### Scenario: Invalid OTP entry
- **WHEN** user submits an incorrect OTP
- **THEN** system displays an error message and requires retry
