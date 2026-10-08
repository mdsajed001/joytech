<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface Props extends HTMLButtonAttributes {
    variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    children?: Snippet;
  }

  let {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    type = 'button',
    class: className = '',
    children,
    ...rest
  }: Props = $props();

  const variantStyles = {
    primary:
      'cta-blue-bubble text-white shadow-sm disabled:opacity-40 disabled:cursor-not-allowed',
    accent:
      'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] active:opacity-90 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed',
    outline:
      'border-2 border-[var(--color-border-strong)] text-[var(--color-text-primary)] hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)] bg-transparent disabled:opacity-40 disabled:cursor-not-allowed',
    ghost:
      'bg-transparent text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-subtle)] disabled:opacity-40 disabled:cursor-not-allowed',
    danger:
      'bg-[var(--color-danger-bg)] text-[var(--color-danger-text)] border border-[var(--color-danger-border)] hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed'
  };

  const sizeStyles = {
    sm: 'min-h-[32px] px-3 text-[12.5px] rounded-[var(--radius-sm)]',
    md: 'min-h-[40px] px-4 text-[13.5px] rounded-[var(--radius-sm)]',
    lg: 'min-h-[48px] px-5 text-[14.5px] rounded-[var(--radius-sm)]'
  };
</script>

<button
  {type}
  {disabled}
  class="inline-flex items-center justify-center gap-2 font-semibold tracking-tight select-none cursor-pointer transition-all duration-150 active:translate-y-[1px] disabled:pointer-events-none {fullWidth ? 'w-full' : ''} {sizeStyles[size]} {variantStyles[variant]} {className}"
  {...rest}
>
  {@render children?.()}
</button>
