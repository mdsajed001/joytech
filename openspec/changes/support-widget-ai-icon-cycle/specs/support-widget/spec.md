## Purpose

Defines behavioral and visual requirements for the floating customer support widget launcher, including ambient periodic icon transitions to highlight AI-assisted and human customer care.

## ADDED Requirements

### Requirement: Periodic Cyclical Icon Transition
The floating support launcher button SHALL cycle between displaying the customer service headphone icon and the AI magic icon on a 10-second repeating loop.

#### Scenario: Regular cycle execution
- **WHEN** the support popover is in its closed state
- **THEN** the headphone icon is displayed in the center for the majority of the cycle (~6.5s)
- **THEN** the headphone icon slides out toward the top-left along a radial trajectory
- **THEN** the AI magic icon slides in from the bottom-right along a radial trajectory
- **THEN** the AI magic icon rotates smoothly in the center with a gentle shimmer wobble
- **THEN** the AI magic icon slides out toward the top-left
- **THEN** the headphone icon slides back in from the bottom-right into the center position

#### Scenario: Continuous playback on hover
- **WHEN** the user hovers their mouse pointer over the floating support button
- **THEN** the icon cycle SHALL continue animating uninterrupted

#### Scenario: Static close state when popover is open
- **WHEN** the user clicks the support launcher button to open the support popover
- **THEN** the button SHALL immediately replace the cyclical icon with the static cancel (X) icon without displaying cycling transitions behind or around it
- **WHEN** the user closes the support popover
- **THEN** the launcher button SHALL resume showing the support launcher icon and cycle
