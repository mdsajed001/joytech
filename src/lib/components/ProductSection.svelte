<script lang="ts">
  import type { Product } from '$lib/types';
  import ProductCard from './ProductCard.svelte';
  import Icon from './Icon.svelte';
  import { ArrowRight01Icon } from '@hugeicons/core-free-icons';

  interface Props {
    id: string;
    title: string;
    kicker: string;
    kickerIcon?: any;
    kickerComponent?: any;
    kickerIconClass?: string;
    kickerIconSize?: number;
    kickerColor?: string;
    subtitle?: string;
    viewAllLink?: { href: string; label: string };
    bgColor?: string;
    products: Product[];
    onAddToCart?: (product: Product) => void;
  }

  let {
    id,
    title,
    kicker,
    kickerIcon,
    kickerComponent,
    kickerIconClass = '',
    kickerIconSize = 18,
    kickerColor = 'var(--color-brand-primary)',
    subtitle,
    viewAllLink,
    bgColor = 'bg-[var(--color-bg-surface)]',
    products,
    onAddToCart
  }: Props = $props();
</script>

<section {id} class="py-12 sm:py-16 {bgColor} border-b border-[var(--color-border-default)]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-end justify-between mb-8 gap-4">
      <div class="flex flex-col min-w-0 flex-1">
        <div
          class="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider mb-1 whitespace-nowrap"
          style="color: {kickerColor};"
        >
          {#if kickerComponent}
            {@const KickerComp = kickerComponent}
            <span class="inline-flex items-center justify-center shrink-0 {kickerIconClass}">
              <KickerComp size={kickerIconSize} />
            </span>
          {:else if kickerIcon}
            <span class="inline-flex items-center justify-center shrink-0 {kickerIconClass || (kicker.toLowerCase().includes('favorite') || kicker.toLowerCase().includes('best') ? 'animate-flame-flicker' : '')}">
              <Icon icon={kickerIcon} size={kickerIconSize} />
            </span>
          {/if}
          <span>{kicker}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-[var(--color-text-primary)] tracking-tight">
          {title}
        </h2>
        {#if subtitle}
          <p class="text-xs sm:text-sm text-[var(--color-text-secondary)] font-medium mt-1">
            {subtitle}
          </p>
        {/if}
      </div>

      {#if viewAllLink}
        <a
          href={viewAllLink.href}
          class="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[var(--color-brand-primary)] hover:underline tap-target shrink-0 mb-0.5"
        >
          <span>{viewAllLink.label}</span>
          <Icon icon={ArrowRight01Icon} size={14} />
        </a>
      {/if}
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {#each products as product}
        <ProductCard {product} {onAddToCart} />
      {/each}
    </div>
  </div>
</section>
