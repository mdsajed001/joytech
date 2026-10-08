<script lang="ts">
  import type { Product } from '$lib/types';
  import { cartState } from '$lib/state.svelte';
  import { goto } from '$app/navigation';
  import Badge from './Badge.svelte';
  import Icon from './Icon.svelte';
  import { StarIcon } from '@hugeicons/core-free-icons';

  interface Props {
    product: Product;
    showRating?: boolean;
    onAddToCart?: (product: Product) => void;
  }

  let { product, showRating = true, onAddToCart }: Props = $props();

  function handleBuyNow(e?: MouseEvent) {
    e?.stopPropagation();
    e?.preventDefault();
    if (product.inStock && product.stockCount > 0) {
      if (onAddToCart) {
        onAddToCart(product);
      } else {
        cartState.addItem(product);
      }
      goto('/checkout');
    }
  }
</script>

<article
  class="group relative flex flex-col w-full bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-sm)] transition-[box-shadow,border-color] duration-150 rounded-[var(--radius-sm)] overflow-hidden"
>
  <!-- Thumbnail area: exactly 130px height with gradient background -->
  <a
    href="/product/{product.slug}"
    class="relative w-full h-[130px] bg-gradient-to-b from-[var(--color-bg-subtle)] to-[var(--color-border-default)] overflow-hidden flex items-center justify-center shrink-0 block"
    aria-label="View details for {product.name}"
  >
    <!-- Badges overlay -->
    <div class="absolute top-2 left-2 z-10 flex flex-col gap-1 items-start pointer-events-none">
      {#if product.discountPercent && product.discountPercent > 0}
        <Badge variant="accent" size="sm">
          -{product.discountPercent}%
        </Badge>
      {/if}
      {#if !product.inStock || product.stockCount === 0}
        <Badge variant="danger" size="sm">Out of stock</Badge>
      {:else if product.stockCount <= 5}
        <Badge variant="warning" size="sm">Only {product.stockCount} left</Badge>
      {/if}
    </div>

    <img
      src={product.image}
      alt={product.name}
      loading="lazy"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
    />
  </a>

  <!-- Body area: 8px (p-2) on mobile for even, compact density; 12px (p-3) on desktop -->
  <div class="p-2 sm:p-3 flex flex-col flex-1">
    <!-- Header: Brand and Rating -->
    <div class="flex justify-between items-start mb-1">
      <!-- Brand -->
      <span class="text-[11px] font-bold tracking-wider text-[var(--color-text-disabled)] uppercase mt-0.5">
        {product.brand}
      </span>
      
      <!-- Rating -->
      {#if showRating}
        <div class="inline-flex items-center gap-1 text-[11.5px] font-bold text-[var(--color-text-primary)]">
          <div class="flex items-center text-[var(--color-rating-star)]">
            <Icon icon={StarIcon} size={12} />
          </div>
          <span>{product.rating.toFixed(1)}</span>
          <span class="font-normal text-[var(--color-text-secondary)]">({product.reviewCount})</span>
        </div>
      {/if}
    </div>

    <!-- Title: 12.5px / 700 / line-height 1.4 / min-height 34px -->
    <a href="/product/{product.slug}" class="block group/title">
      <h3
        class="text-[12.5px] font-bold text-[var(--color-text-primary)] leading-[1.4] min-h-[34px] line-clamp-2 mb-1.5 group-hover/title:text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors"
        title={product.name}
      >
        {product.name}
      </h3>
    </a>



    <!-- Pricing Row and Buy Now button -->
    <div class="mt-auto pt-2 border-t border-[var(--color-border-default)] grid grid-cols-2 items-end">
      <div class="flex flex-col min-w-0">
        {#if product.originalPrice && product.originalPrice > product.price}
          <span class="text-[11px] sm:text-[11.5px] font-medium text-[var(--color-text-disabled)] line-through leading-none mb-0.5">
            ৳{product.originalPrice.toLocaleString('en-BD')}
          </span>
        {/if}
        <span class="text-[13.5px] sm:text-[14.5px] xl:text-[15px] font-[800] text-[var(--color-text-primary)] leading-tight whitespace-nowrap">
          ৳{product.price.toLocaleString('en-BD')}
        </span>
      </div>

      <!-- Buy Now CTA -->
      <button
        type="button"
        disabled={!product.inStock || product.stockCount === 0}
        onclick={handleBuyNow}
        aria-label="Buy {product.name} now"
        class="whitespace-nowrap w-full inline-flex items-center justify-center gap-1 sm:gap-1.5 min-h-[36px] sm:min-h-[34px] xl:min-h-[36px] px-2 sm:px-4 xl:px-5 cta-blue-bubble active:translate-y-[1px] disabled:bg-[var(--color-bg-subtle)] disabled:text-[var(--color-text-disabled)] disabled:border disabled:border-[var(--color-border-default)] disabled:cursor-not-allowed text-white text-[12.5px] sm:text-[12px] xl:text-[13px] font-extrabold rounded-[var(--radius-sm)] transition-all shadow-xs hover:shadow-sm cursor-pointer"
      >
        <svg
          class="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 fill-current pointer-events-none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        <span class="hidden sm:inline">
          {product.inStock && product.stockCount > 0 ? 'Buy Now' : 'Sold Out'}
        </span>
        <span class="sm:hidden">
          {product.inStock && product.stockCount > 0 ? 'Buy' : 'Sold'}
        </span>
      </button>
    </div>
  </div>
</article>
