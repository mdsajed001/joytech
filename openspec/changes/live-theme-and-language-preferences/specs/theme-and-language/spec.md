## Purpose

Enables Joy Telecom customers to toggle between Light, Dark, and System display modes with instant visual transformation, and switch between English and Bengali (বাংলা) interface languages with persistent state.

## ADDED Requirements

### Requirement: Real-Time Dark Mode Theme Switching
The application SHALL support three theme modes: `light`, `dark`, and `system`. When `dark` is selected, the application SHALL apply dark palette variables to canvas, surface, borders, and text immediately without page reload. When `system` is selected, the application SHALL match the operating system's prefers-color-scheme preference. Theme preference SHALL persist in `localStorage`.

#### Scenario: Customer toggles to Dark theme
- **WHEN** a customer clicks the "Dark" button in Preferences
- **THEN** the `dark` class and `data-theme="dark"` are added to `<html>`, surfaces turn to dark navy (`#131B2E`), canvas turns dark (`#090D16`), text becomes light, and preference is saved.

#### Scenario: Customer toggles to Light theme
- **WHEN** a customer clicks the "Light" button in Preferences
- **THEN** the `dark` class is removed, the default light design system is restored, and preference is saved.

### Requirement: Live Bengali (বাংলা) Translation
The application SHALL support English (`en`) and Bengali (`bn`) languages. When `bn` is selected, the document language attribute SHALL update to `<html lang="bn">`, applying the Bengali font family (`Noto Sans Bengali`), and core interface texts including profile navigation tabs, profile hero shortcuts, preference controls, and actions SHALL render in Bengali. Language preference SHALL persist in `localStorage`.

#### Scenario: Customer switches to Bengali language
- **WHEN** a customer clicks the "বাংলা" language toggle in Preferences
- **THEN** the document language updates to `bn`, navigation tabs render in Bengali ("পছন্দসমূহ", "রিওয়ার্ডস", "পেমেন্ট মাধ্যম"), and settings controls display in Bengali.

#### Scenario: Customer switches back to English
- **WHEN** a customer clicks the "English" language toggle
- **THEN** the document language updates to `en` and interface texts restore to English.
