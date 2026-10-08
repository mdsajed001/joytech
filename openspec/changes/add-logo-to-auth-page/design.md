## Context

See [proposal.md](file:///c:/Users/Sajed/Documents/joytech/openspec/changes/add-logo-to-auth-page/proposal.md) for motivation and the spec for requirements.
Currently, `src/routes/auth/+page.svelte` has an `h1` reading "Sign in or create account" with no logo above it. 

## Goals / Non-Goals

**Goals:**
- Insert the official brand SVG logo above the main header text in the auth form.
- Use appropriate sizing (e.g., `w-12 h-12`) and alignment (centered or left-aligned matching the form's alignment).

**Non-Goals:**
- Modifying the layout structure beyond the title header section.
- Replacing the auth page design entirely.

## Decisions

### 1. Direct Image Element referencing static asset
- **Decision:** Use an `<img>` tag with `src="/Joy%20tech.svg"` placed just before the `<h1>` inside the main auth form container.
- **Rationale:** Consistent with how the logo was integrated into the header and footer in previous changes. `object-contain` will ensure no aspect ratio distortion.

## Risks / Trade-offs

- **Risk:** Layout spacing could feel tight if no bottom margin is applied to the image.
  - **Mitigation:** Ensure the `<img>` tag includes an appropriate `mb-4` or `mb-6` class to separate it from the heading text.
