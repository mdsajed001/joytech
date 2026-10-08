<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import Badge from '../Badge.svelte';
  import type { CartItem } from '$lib/state.svelte';
  import { cartState, i18nState } from '$lib/state.svelte';
  import {
    Delete02Icon,
    FavouriteIcon,
    Add01Icon,
    MinusSignIcon,
    Tick02Icon
  } from '@hugeicons/core-free-icons';

  interface Props {
    item: CartItem;
    onMoveToWishlist?: (item: CartItem) => void;
  }

  let { item, onMoveToWishlist }: Props = $props();

  let isWishlistNodding = $state(false);
  let isRemoveNodding = $state(false);

  function handleIncrement() {
    cartState.updateQuantity(item.id, item.quantity + 1);
  }

  function handleDecrement() {
    cartState.updateQuantity(item.id, item.quantity - 1);
  }

  function handleRemove() {
    if (isRemoveNodding) return;
    isRemoveNodding = true;
    setTimeout(() => {
      cartState.removeItem(item.id);
    }, 480);
  }

  function handleWishlist() {
    if (isWishlistNodding) return;
    isWishlistNodding = true;
    setTimeout(() => {
      if (onMoveToWishlist) {
        onMoveToWishlist(item);
      } else {
        cartState.removeItem(item.id);
        cartState.showToast(`Saved "${item.product.name}" to wishlist!`);
      }
      isWishlistNodding = false;
    }, 480);
  }
</script>

<div class="p-3 sm:p-3.5 bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-md)] shadow-xs transition-all flex flex-col sm:flex-row items-start sm:items-stretch justify-between gap-3 sm:gap-4 group hover:border-[var(--color-border-strong)]">
  <!-- Left info with image -->
  <div class="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1 w-full sm:w-auto">
    <div class="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] border border-[var(--color-border-default)] overflow-hidden shrink-0">
      <img
        src={item.selectedVariant?.image || item.product.image}
        alt={item.product.name}
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {#if item.product.discountPercent}
        <div class="absolute top-1.5 left-1.5">
          <Badge variant="accent" size="sm">
            -{item.product.discountPercent}%
          </Badge>
        </div>
      {/if}
    </div>

    <div class="min-w-0 flex-1">
      <div class="flex items-center gap-2 mb-1">
        <span class="text-[11px] font-bold tracking-wider text-[var(--color-text-disabled)] uppercase">
          {item.product.brand}
        </span>
        <span class="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#00B372] dark:text-[#34D399]">
          <Icon icon={Tick02Icon} size={11} strokeWidth={2.5} />
          {i18nState.language === 'bn' ? 'স্টকে আছে' : 'In Stock'}
        </span>
      </div>

      <h3 class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)] line-clamp-2 leading-snug">
        {i18nState.language === 'bn' && item.product.nameBn ? item.product.nameBn : item.product.name}
      </h3>

      <!-- Boxy Variant & Model Badge -->
      {#if item.selectedVariant || item.selectedModelName}
        <div class="mt-1 flex items-center">
          <span
            class="inline-flex items-center gap-1.5 px-2 py-0.5 max-w-full rounded-[var(--radius-sm)] bg-[var(--color-bg-subtle)] border border-[var(--color-border-default)] text-[11px] font-semibold text-[var(--color-text-secondary)] shadow-2xs truncate"
            title={[item.selectedVariant?.title, item.selectedModelName].filter(Boolean).join(' • ')}
          >
            {#if item.selectedVariant}
              <span class="text-[var(--color-text-primary)] font-bold truncate">
                {item.selectedVariant.title}
              </span>
            {/if}
            {#if item.selectedVariant && item.selectedModelName}
              <span class="text-[var(--color-text-disabled)] shrink-0">•</span>
            {/if}
            {#if item.selectedModelName}
              <span class="truncate">
                {item.selectedModelName}
              </span>
            {/if}
          </span>
        </div>
      {/if}

      <div class="flex items-baseline gap-2 mt-1.5">
        <span class="text-sm sm:text-base font-black text-[var(--color-text-primary)]">
          ৳{(item.selectedVariant?.price ?? item.product.price).toLocaleString()}
        </span>
        {#if (item.selectedVariant?.originalPrice ?? item.product.originalPrice)}
          <span class="text-xs text-[var(--color-text-muted)] line-through">
            ৳{(item.selectedVariant?.originalPrice ?? item.product.originalPrice)!.toLocaleString()}
          </span>
        {/if}
      </div>
    </div>
  </div>

  <!-- Right: Controls & Pricing
       Phone: Love & Trash icons on LEFT, Quantity stepper on RIGHT
       PC: Quantity stepper BELOW Love & Trash icons
  -->
  <div class="flex flex-row sm:flex-col items-center sm:items-end justify-between gap-3 w-full sm:w-auto shrink-0 sm:min-h-[88px]">
    <!-- Action Buttons (Wishlist & Remove) -->
    <div class="w-20 sm:w-auto flex items-center justify-between sm:justify-start gap-1 sm:gap-1.5">
      <button
        type="button"
        onclick={handleWishlist}
        disabled={isWishlistNodding}
        class="btn-nod p-1.5 sm:p-2 rounded-xl text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-bg-subtle)] transition-colors cursor-pointer"
        title="Move to Wishlist"
        aria-label="Move to Wishlist"
      >
        <span class="btn-nod-icon inline-flex items-center justify-center {isWishlistNodding ? 'nod-lift-active text-[var(--color-brand-primary)]' : ''}">
          <Icon icon={FavouriteIcon} size={18} />
        </span>
      </button>

      <button
        type="button"
        onclick={handleRemove}
        disabled={isRemoveNodding}
        class="btn-nod p-1.5 sm:p-2 rounded-xl text-[var(--color-text-secondary)] hover:text-rose-600 dark:hover:text-rose-400 hover:bg-[var(--color-bg-subtle)] transition-colors cursor-pointer disabled:opacity-50 translate-x-1 sm:translate-x-0"
        title="Remove Item"
        aria-label="Remove Item"
      >
        <span class="btn-nod-icon inline-flex items-center justify-center {isRemoveNodding ? 'nod-lift-active text-rose-600 dark:text-rose-400' : ''}">
          <Icon icon={Delete02Icon} size={18} />
        </span>
      </button>
    </div>

    <!-- Stepper & Line Total -->
    <div class="flex items-center gap-2.5 sm:gap-3">
      {#if item.quantity > 1}
        <div class="text-right min-w-[60px]">
          <span class="text-[10px] uppercase font-bold tracking-wide text-[var(--color-text-muted)] block sm:hidden">Total</span>
          <span class="text-xs sm:text-sm font-black text-[var(--color-text-primary)]">
            ৳{((item.selectedVariant?.price ?? item.product.price) * item.quantity).toLocaleString()}
          </span>
        </div>
      {/if}

      <!-- Stepper -->
      <div class="flex items-center bg-[var(--color-bg-subtle)] border border-[var(--color-border-default)] rounded-xl p-1 shrink-0">
        <button
          type="button"
          onclick={handleDecrement}
          disabled={item.quantity <= 1}
          class="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)] disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer"
          aria-label="Decrease quantity"
        >
          <Icon icon={MinusSignIcon} size={14} />
        </button>

        <span class="w-8 text-center text-xs font-black text-[var(--color-text-primary)]">
          {item.quantity}
        </span>

        <button
          type="button"
          onclick={handleIncrement}
          disabled={item.quantity >= 10}
          class="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)] disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer"
          aria-label="Increase quantity"
        >
          <Icon icon={Add01Icon} size={14} />
        </button>
      </div>
    </div>
  </div>
</div>


