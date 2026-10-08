## Context

See `proposal.md` and `specs/auth-left-brand-minimal/spec.md`. The user requests removing the excess text in the desktop left split panel (badges, paragraphs, trust points, copyright) and centering **JOYTECH** in big, clean, impactful fonts on the blue background with the ambient bubbles and gadget icons floating around it.

## Goals / Non-Goals

**Goals:**
- Eliminate all marketing text blocks (pill, headline sentences, descriptive paragraph, trust feature list, copyright).
- Center **JOYTECH** vertically and horizontally in the left column with high-contrast, bold typography (`text-6xl` to `text-8xl` with `font-black tracking-tight`).
- Preserve the ambient floating white bubbles and tech accessory icons.

**Non-Goals:**
- Modifying right-side form layout or mobile layout.

## Decisions

**1. Left Column Centering & Flex Layout**
- **Decision**: Change the outer left container from `flex flex-col justify-between` to `flex items-center justify-center relative overflow-hidden`.
- **Rationale**: Guarantees true dead-center vertical and horizontal alignment for the brand name without needing offset spacers.

**2. Typography Style**
- **Decision**: Render `<h1 class="text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-white select-none drop-shadow-sm">JOYTECH</h1>`.
- **Rationale**: Minimal, iconic, and matches modern tech flagship aesthetics.

## Risks / Trade-offs

None.
