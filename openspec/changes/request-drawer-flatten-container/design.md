## Context

`ProfileDrawer.svelte` currently nests the `type === 'request'` section inside an extra card container element (`p-4 sm:p-5 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)]`). Removing this extra div flattens the view.

## Goals / Non-Goals

**Goals:**
- Strip out the extra wrapper `<div>` and apply form spacing directly under `{:else if type === 'request'}`.
- Keep all form state bindings (`requestModel`, `requestAccessory`, `requestPhone`, `requestNote`) and submission behavior intact.

**Non-Goals:**
- Modifying input field validation or backend submission logic.

## Decisions

### Decision 1: Direct DOM Hierarchy
- **Choice**: Replace `<div class="space-y-4"><div class="w-full p-4 sm:p-5 ...">...</div></div>` with a single `<div class="space-y-4 sm:space-y-5">` containing the header and form.
- **Rationale**: Removes 1 DOM level, eliminates redundant padding calculations, and improves input alignment.

## Risks / Trade-offs

- **[Risk]** Minor visual spacing loss between header and form if `space-y` is not properly configured.
- **Mitigation**: Use `space-y-4 sm:space-y-5` directly on the parent drawer container.
