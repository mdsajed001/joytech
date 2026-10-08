## Purpose

Provides a floating customer support widget with quick access to WhatsApp, Facebook Messenger, Joyboy AI chatbot, and direct phone helpline.

## ADDED Requirements

### Requirement: Support Channels Navigation
The customer support widget pop-up modal SHALL display 4 distinct support channels: WhatsApp Support, Messenger Support, Joyboy AI Chatbot, and Direct Phone Call, following Joytech's boxy design system with sharp container borders (`rounded-[var(--radius-sm)]`), rectangular icon badges (`rounded-[var(--radius-xs)]`), and a tone-on-tone header.

#### Scenario: User opens support widget and views channels
- **WHEN** user clicks the floating customer support trigger button
- **THEN** system displays the support pop-up modal containing WhatsApp, Messenger, Joyboy AI Chatbot, and Direct Phone Call options in a structured boxy container

#### Scenario: User clicks WhatsApp Support
- **WHEN** user clicks the "Chat on WhatsApp" option
- **THEN** system opens WhatsApp chat at `https://wa.me/8801700000000` in a new tab

#### Scenario: User clicks Messenger Support
- **WHEN** user clicks the "Chat on Messenger" option
- **THEN** system opens Facebook Messenger chat at `https://m.me/joytelecom` in a new tab

#### Scenario: User clicks Joyboy AI Chatbot
- **WHEN** user clicks the "Joyboy AI Chatbot" option
- **THEN** system triggers Joyboy AI assistant interaction for 24/7 automated support

#### Scenario: User clicks Direct Phone Call
- **WHEN** user clicks the "Direct Phone Call" option
- **THEN** system initiates a telephone call link to `tel:+8801700000000`
