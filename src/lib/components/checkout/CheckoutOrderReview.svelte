<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { cartState, i18nState } from '$lib/state.svelte';
  import { PRODUCTS } from '$lib/data/catalog';
  import type { Product } from '$lib/types';
  import {
    ShoppingBag01Icon,
    ArrowDown01Icon,
    ArrowUp01Icon,
    PlusSignIcon,
    Tick02Icon,
    SparklesIcon
  } from '@hugeicons/core-free-icons';

  let isExpanded = $state(true);
  let recentlyAddedId = $state<string | null>(null);

  // Contextual complementary recommendations (up to 3 in-stock items not already in cart)
  let recommendations = $derived.by(() => {
    const inCartIds = new Set(cartState.items.map((i) => i.product.id));
    return PRODUCTS.filter((p) => !inCartIds.has(p.id) && p.inStock).slice(0, 2);
  });

  function handleAddRecommendation(rec: Product) {
    cartState.addItem(rec);
    recentlyAddedId = rec.id;
    setTimeout(() => {
      if (recentlyAddedId === rec.id) {
        recentlyAddedId = null;
      }
    }, 1200);
  }
</script>

<div class="bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-[var(--radius-md)] shadow-2xs overflow-hidden transition-all">
  <!-- Header Bar (Clickable to Collapse/Expand) -->
  <button
    type="button"
    onclick={() => (isExpanded = !isExpanded)}
    class="w-full px-4 py-3 bg-[var(--color-bg-subtle)]/40 border-b border-[var(--color-border-subtle)] flex items-center justify-between gap-3 text-left cursor-pointer hover:bg-[var(--color-bg-subtle)]/70 transition-colors"
  >
    <div class="flex items-center gap-2.5 min-w-0">
      <div class="w-7 h-7 rounded-[var(--radius-xs)] bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] flex items-center justify-center shrink-0">
        <Icon icon={ShoppingBag01Icon} size={16} />
      </div>
      <div class="flex items-center gap-2 min-w-0">
        <h3 class="text-xs sm:text-sm font-black text-[var(--color-text-primary)] leading-tight">
          {i18nState.language === 'bn' ? 'অর্ডার রিভিউ' : 'Order Summary'}
        </h3>
        <span class="px-2 py-0.5 text-[10.5px] font-black rounded-full bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)] border border-[var(--color-brand-primary)]/20 leading-none shrink-0">
          {cartState.count} {cartState.count === 1 ? 'item' : 'items'}
        </span>
      </div>
    </div>

    <div class="flex items-center gap-2 shrink-0">
      <span class="text-xs sm:text-sm font-black text-[var(--color-brand-primary)]">
        ৳{cartState.grandTotal.toLocaleString('en-BD')}
      </span>
      <div class="text-[var(--color-text-secondary)]">
        <Icon icon={isExpanded ? ArrowUp01Icon : ArrowDown01Icon} size={16} />
      </div>
    </div>
  </button>

  <!-- Expandable Cart Items List -->
  {#if isExpanded}
    <div class="p-3.5 sm:p-4 divide-y divide-[var(--color-border-subtle)]">
      {#each cartState.items as item (item.id)}
        <div class="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-3">
          <div class="flex items-center gap-2.5 min-w-0">
            <!-- 48x48px Thumbnail -->
            <img
              src={item.selectedVariant?.image ?? item.product.image}
              alt={item.product.name}
              class="w-12 h-12 rounded-[var(--radius-xs)] object-cover bg-slate-100 dark:bg-slate-800 border border-[var(--color-border-subtle)] shrink-0"
              loading="lazy"
            />
            <div class="min-w-0">
              <h4 class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)] truncate leading-snug">
                {item.product.name}
              </h4>
              <p class="text-[11px] text-[var(--color-text-secondary)] mt-0.5 leading-none truncate">
                {#if item.selectedVariant}
                  <span>{item.selectedVariant.title}</span>
                {/if}
                {#if item.selectedModelName}
                  <span>{item.selectedVariant ? ' • ' : ''}{item.selectedModelName}</span>
                {/if}
                <span class="text-[var(--color-text-disabled)] ml-1">× {item.quantity}</span>
              </p>
            </div>
          </div>

          <div class="text-right shrink-0">
            <span class="text-xs sm:text-sm font-black text-[var(--color-text-primary)]">
              ৳{((item.selectedVariant?.price ?? item.product.price) * item.quantity).toLocaleString('en-BD')}
            </span>
          </div>
        </div>
      {/each}
    </div>

    <!-- Contextual Complementary Setup Items (Blue Bubble Style) -->
    {#if recommendations.length > 0}
      <div class="profile-hero-bubble text-white p-3.5 sm:p-4 rounded-b-[var(--radius-md)] border-t border-white/20 relative overflow-hidden shadow-inner">
        <!-- Section Header -->
        <div class="flex items-center justify-between gap-2 mb-2.5">
          <div class="flex items-center gap-1.5">
            <div class="w-5 h-5 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white shrink-0">
              <Icon icon={SparklesIcon} size={12} />
            </div>
            <span class="text-[11px] font-black uppercase tracking-wider text-white drop-shadow-xs">
              {i18nState.language === 'bn' ? 'অর্ডারের সাথে যোগ করুন' : 'Complete Your Setup'}
            </span>
          </div>

          <span class="text-[10px] font-bold text-white/90 bg-white/15 px-2 py-0.5 rounded-full border border-white/20 shrink-0">
            {i18nState.language === 'bn' ? 'বিশেষ অফার' : 'Special Add-on'}
          </span>
        </div>

        <!-- 2-Col Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
          {#each recommendations as rec (rec.id)}
            <div class="flex items-center justify-between gap-2 p-2 rounded-[var(--radius-sm)] bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm text-[var(--color-text-primary)] shadow-sm border border-white/40 dark:border-white/10 hover:shadow-md transition-all">
              <div class="flex items-center gap-2 min-w-0">
                <img
                  src={rec.image}
                  alt={rec.name}
                  class="w-9 h-9 sm:w-10 sm:h-10 rounded-[var(--radius-xs)] object-cover bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0"
                  loading="lazy"
                />
                <div class="min-w-0">
                  <h5 class="text-[11px] font-bold text-slate-900 dark:text-white truncate leading-tight">
                    {rec.name}
                  </h5>
                  <div class="flex items-center gap-1.5 mt-0.5">
                    <span class="text-[11px] font-black text-[var(--color-brand-primary)] leading-none">
                      ৳{rec.price.toLocaleString('en-BD')}
                    </span>
                    {#if rec.originalPrice && rec.originalPrice > rec.price}
                      <span class="text-[10px] text-slate-400 line-through leading-none">
                        ৳{rec.originalPrice.toLocaleString('en-BD')}
                      </span>
                    {/if}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onclick={() => handleAddRecommendation(rec)}
                class="h-7 sm:h-8 px-2.5 text-[11px] font-black rounded-[var(--radius-xs)] bg-[var(--color-brand-primary)] text-white hover:bg-blue-600 active:scale-95 transition-all shrink-0 flex items-center gap-1 cursor-pointer shadow-xs"
              >
                {#if recentlyAddedId === rec.id}
                  <Icon icon={Tick02Icon} size={13} strokeWidth={3} />
                  <span>Added</span>
                {:else}
                  <Icon icon={PlusSignIcon} size={12} strokeWidth={2.5} />
                  <span>Add</span>
                {/if}
              </button>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  {/if}
</div>
