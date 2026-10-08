<script lang="ts">
  import type { Product } from '$lib/types';
  import { i18nState } from '$lib/state.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import {
    ShoppingBag01Icon,
    FlashIcon,
    MinusSignIcon,
    PlusSignIcon
  } from '@hugeicons/core-free-icons';

  interface Props {
    product: Product;
    quantity: number;
    currentPrice?: number;
    currentOriginalPrice?: number;
    variantTitle?: string;
    onIncrement: () => void;
    onDecrement: () => void;
    onAddToCart: () => void;
    onBuyNow: () => void;
  }

  let {
    product,
    quantity = $bindable(1),
    currentPrice,
    currentOriginalPrice,
    variantTitle,
    onIncrement,
    onDecrement,
    onAddToCart,
    onBuyNow
  }: Props = $props();

  let activePrice = $derived(currentPrice ?? product.price);
  let activeOriginalPrice = $derived(currentOriginalPrice ?? product.originalPrice);
  let isOutOfStock = $derived(!product.inStock || product.stockCount === 0);
</script>

<div
  class="fixed bottom-0 inset-x-0 z-40 bg-[var(--color-bg-surface)]/95 backdrop-blur-md border-t border-[var(--color-border-default)] shadow-[var(--shadow-lg)] px-3 sm:px-6 py-2 sm:py-2.5 transition-transform duration-200"
  style="padding-bottom: max(10px, env(safe-area-inset-bottom, 10px));"
>
  <div class="max-w-7xl mx-auto flex items-center justify-between gap-2.5 sm:gap-4">
    <!-- 1. Price Block (Original price on top, active price below, no stock badge) -->
    <div class="flex flex-col justify-center min-w-0 shrink-0">
      {#if activeOriginalPrice && activeOriginalPrice > activePrice}
        <span class="text-[11px] sm:text-xs font-medium text-[var(--color-text-disabled)] line-through leading-none mb-0.5">
          ৳{activeOriginalPrice.toLocaleString('en-BD')}
        </span>
      {/if}
      <span class="text-base sm:text-xl font-black text-[var(--color-text-primary)] leading-tight whitespace-nowrap">
        ৳{activePrice.toLocaleString('en-BD')}
      </span>
    </div>

    <!-- 2. Quantity Stepper (hidden on all phones < 640px) -->
    <div class="hidden sm:flex items-center border border-[var(--color-border-default)] rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] h-12 px-1 shrink-0">
      <button
        type="button"
        onclick={onDecrement}
        disabled={quantity <= 1 || isOutOfStock}
        aria-label="Decrease quantity"
        class="w-9 h-9 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
      >
        <Icon icon={MinusSignIcon} size={15} />
      </button>
      <span class="w-8 text-center text-xs font-black text-[var(--color-text-primary)] select-none">
        {quantity}
      </span>
      <button
        type="button"
        onclick={onIncrement}
        disabled={quantity >= product.stockCount || isOutOfStock}
        aria-label="Increase quantity"
        class="w-9 h-9 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
      >
        <Icon icon={PlusSignIcon} size={15} />
      </button>
    </div>

    <!-- 3. CTAs Container (Add to Cart & Buy Now) -->
    <div class="flex items-center gap-2 flex-1 justify-end max-w-md">
      <!-- Add to Cart (Secondary CTA: Outlined Accent) -->
      <button
        type="button"
        disabled={isOutOfStock}
        onclick={onAddToCart}
        class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 h-12 px-3 sm:px-5 rounded-[var(--radius-sm)] border-2 border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] dark:hover:bg-[var(--color-accent)]/10 active:scale-98 transition-all text-xs sm:text-sm font-black cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
      >
        <Icon icon={ShoppingBag01Icon} size={17} />
        <span class="whitespace-nowrap">
          {i18nState.language === 'bn' ? 'কার্ট' : 'Add to Cart'}
        </span>
      </button>

      <!-- Buy Now (Primary CTA with animated gradient) -->
      <button
        type="button"
        disabled={isOutOfStock}
        onclick={onBuyNow}
        class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 h-12 px-4 sm:px-6 rounded-[var(--radius-sm)] cta-checkout-animated text-white active:scale-98 transition-all text-xs sm:text-sm font-black shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
      >
        <Icon icon={FlashIcon} size={17} />
        <span class="whitespace-nowrap">
          {isOutOfStock
            ? (i18nState.language === 'bn' ? 'স্টক শেষ' : 'Sold Out')
            : (i18nState.language === 'bn' ? 'এখনই কিনুন' : 'Buy Now')}
        </span>
      </button>
    </div>
  </div>
</div>
