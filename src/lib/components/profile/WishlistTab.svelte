<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import type { Product } from '$lib/types';
  import {
    ShoppingBag01Icon,
    Delete02Icon,
    FavouriteIcon
  } from '@hugeicons/core-free-icons';

  interface Props {
    items: Product[];
    onAddToCart: (product: Product) => void;
    onRemoveWishlist: (productId: string) => void;
  }

  let { items, onAddToCart, onRemoveWishlist }: Props = $props();
</script>

<div>
  {#if items.length === 0}
    <div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-sm)] p-8 sm:p-10 text-center">
      <div class="w-12 h-12 rounded-[var(--radius-sm)] bg-rose-50 dark:bg-rose-950/40 text-rose-500 border border-rose-100 dark:border-rose-900 flex items-center justify-center mx-auto mb-3">
        <Icon icon={FavouriteIcon} size={24} />
      </div>
      <h3 class="text-base font-black text-[var(--color-text-primary)]">Your wishlist is empty</h3>
      <p class="text-xs text-[var(--color-text-secondary)] mt-1 mb-4">
        Tap the heart icon on any gadget or accessory to save it here for later.
      </p>
      <a
        href="/"
        class="inline-flex items-center justify-center px-4 py-2 rounded-[var(--radius-sm)] bg-[var(--color-brand-primary)] text-white text-xs font-bold shadow-xs hover:opacity-95 cursor-pointer"
      >
        Discover Products
      </a>
    </div>
  {:else}
    <!-- High-Density Horizontal Product Rows -->
    <div class="space-y-2.5 sm:space-y-3">
      {#each items as product (product.id)}
        <div class="group w-full flex items-center justify-between gap-3.5 p-3.5 sm:p-4 rounded-[var(--radius-sm)] border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-subtle)]/30 hover:border-[var(--color-border-strong)] shadow-2xs transition-all">
          <!-- Compact Boxy Image Frame -->
          <div class="relative w-14 h-14 sm:w-16 sm:h-16 rounded-[var(--radius-xs)] overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
            {#if product.discountPercent}
              <span class="absolute top-0 left-0 px-1.5 py-0.5 rounded-br-[var(--radius-xs)] text-[9px] font-black bg-rose-600 text-white leading-none">
                -{product.discountPercent}%
              </span>
            {/if}
          </div>

          <!-- Product Info (Brand, Title, Price) -->
          <div class="flex-1 min-w-0 pr-1">
            <span class="text-[10px] font-black uppercase tracking-wider text-[var(--color-brand-primary)] block leading-tight">
              {product.brand}
            </span>
            <h4 class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)] truncate mt-0.5 leading-snug">
              {product.name}
            </h4>
            <div class="flex items-center gap-1.5 mt-1 leading-none">
              <span class="text-xs sm:text-sm font-black text-[var(--color-text-primary)]">
                ৳{product.price.toLocaleString('en-BD')}
              </span>
              {#if product.originalPrice && product.originalPrice > product.price}
                <span class="text-[11px] text-[var(--color-text-disabled)] line-through">
                  ৳{product.originalPrice.toLocaleString('en-BD')}
                </span>
              {/if}
            </div>
          </div>

          <!-- Quick Action Buttons -->
          <div class="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onclick={() => onAddToCart(product)}
              class="inline-flex items-center gap-1.5 h-8.5 px-3 sm:px-3.5 rounded-[var(--radius-sm)] text-xs font-bold bg-[var(--color-brand-primary)] text-white hover:opacity-90 active:scale-98 transition-all shadow-2xs cursor-pointer"
            >
              <Icon icon={ShoppingBag01Icon} size={14} />
              <span class="hidden sm:inline">+ Cart</span>
            </button>

            <button
              type="button"
              onclick={() => onRemoveWishlist(product.id)}
              class="w-8.5 h-8.5 rounded-[var(--radius-sm)] flex items-center justify-center text-[var(--color-text-disabled)] hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
              title="Remove from Wishlist"
              aria-label="Remove from Wishlist"
            >
              <Icon icon={Delete02Icon} size={16} />
            </button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
