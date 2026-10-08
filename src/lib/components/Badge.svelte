<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    variant?: 'success' | 'warning' | 'danger' | 'info' | 'accent' | 'neutral';
    size?: 'sm' | 'md';
    children?: Snippet;
  }

  let {
    variant = 'neutral',
    size = 'md',
    children
  }: Props = $props();

  const variantStyles = {
    success: 'bg-[var(--color-success-bg)] text-[var(--color-success-text)] border-[var(--color-success-border)]',
    warning: 'bg-[var(--color-warning-bg)] text-[var(--color-warning-text)] border-[var(--color-warning-border)]',
    danger: 'bg-[var(--color-danger-bg)] text-[var(--color-danger-text)] border-[var(--color-danger-border)]',
    info: 'bg-[var(--color-info-bg)] text-[var(--color-info-text)] border-[var(--color-info-border)]',
    accent: 'bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border-[var(--color-accent)]',
    neutral: 'bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] border-[var(--color-border-default)]'
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-[11.5px] px-[10px] py-[4px]'
  };
</script>

<span
  class="inline-flex items-center gap-1 font-bold rounded-full border border-solid transition-colors duration-150 {variantStyles[variant]} {sizeStyles[size]}"
>
  {@render children?.()}
</span>
