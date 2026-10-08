<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { cartState, i18nState } from '$lib/state.svelte';
  import { CATEGORIES, PRODUCTS } from '$lib/data/catalog';
  import type { Product } from '$lib/types';
  import {
    ShoppingBag01Icon,
    FlashIcon,
    ArrowRight01Icon,
    SmartPhone01Icon,
    Add01Icon,
    SparklesIcon
  } from '@hugeicons/core-free-icons';

  const suggestedProducts = PRODUCTS.filter((p) => p.isFlashSale || p.isBestSeller).slice(0, 3);

  function handleAdd(product: Product) {
    cartState.addItem(product, 1);
  }
</script>

<div class="py-12 sm:py-16 text-center max-w-2xl mx-auto px-4">
  <!-- Ambient icon container -->
  <div class="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
    <div class="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-xl"></div>
    <div class="relative w-20 h-20 rounded-2xl bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] shadow-sm flex items-center justify-center text-[var(--color-brand-primary)]">
      <Icon icon={ShoppingBag01Icon} size={38} strokeWidth={1.75} />
    </div>
  </div>

  <h2 class="text-xl sm:text-2xl font-black text-[var(--color-text-primary)] mb-2">
    {i18nState.language === 'bn' ? 'আপনার কার্ট বর্তমানে খালি আছে' : 'Your Shopping Bag is Empty'}
  </h2>
  
  <p class="text-xs sm:text-sm text-[var(--color-text-muted)] mb-8 max-w-md mx-auto leading-relaxed">
    {i18nState.language === 'bn'
      ? 'আপনার পছন্দের ফোনের জন্য অরিজিনাল কভার, স্ক্রিন গ্লাস বা ফাস্ট চার্জার যুক্ত করুন।'
      : 'Explore genuine cases, high-grade tempered glass, and GaN fast chargers tailored for your device.'}
  </p>

  <!-- Action CTA Buttons -->
  <div class="flex items-center justify-center gap-3 flex-wrap mb-10">
    <a
      href="/"
      class="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[var(--color-brand-primary)] text-white shadow-md hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2"
    >
      <span>{i18nState.language === 'bn' ? 'শপিং শুরু করুন' : 'Start Shopping'}</span>
      <Icon icon={ArrowRight01Icon} size={16} />
    </a>

    <a
      href="/search"
      class="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)] transition-all inline-flex items-center gap-2 cursor-pointer"
    >
      <Icon icon={SmartPhone01Icon} size={16} />
      <span>{i18nState.language === 'bn' ? 'মডেল অনুযায়ী খুঁজুন' : 'Select Phone Model'}</span>
    </a>
  </div>

  <!-- Popular categories pills -->
  <div class="mb-12">
    <div class="text-xs font-bold text-[var(--color-text-muted)] mb-3">
      {i18nState.language === 'bn' ? 'জনপ্রিয় ক্যাটাগরি ব্রাউজ করুন' : 'Explore Popular Categories'}
    </div>
    <div class="flex items-center justify-center gap-2 flex-wrap">
      {#each CATEGORIES.slice(0, 5) as cat}
        <a
          href={`/#${cat.slug}`}
          class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)] transition-colors shadow-2xs"
        >
          {i18nState.language === 'bn' ? cat.nameBn : cat.name}
        </a>
      {/each}
    </div>
  </div>

  <!-- Quick picks -->
  <div class="text-left bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] rounded-2xl p-5 shadow-xs">
    <div class="flex items-center gap-2 mb-4">
      <Icon icon={SparklesIcon} size={16} class="text-amber-500" />
      <h3 class="text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
        {i18nState.language === 'bn' ? 'আপনার জন্য সেরা প্রস্তাবনা' : 'Recommended Top Deals'}
      </h3>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {#each suggestedProducts as product}
        <div class="p-3 rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-border-subtle)] flex flex-col justify-between">
          <div class="flex items-center gap-2.5 mb-3">
            <img
              src={product.image}
              alt={product.name}
              class="w-12 h-12 rounded-lg object-cover bg-white dark:bg-slate-800 shrink-0 border border-[var(--color-border-subtle)]"
            />
            <div class="min-w-0">
              <span class="text-[10px] font-black uppercase text-[var(--color-brand-primary)] block">
                {product.brand}
              </span>
              <h4 class="text-xs font-bold text-[var(--color-text-primary)] truncate">
                {product.name}
              </h4>
              <div class="text-xs font-black text-[var(--color-text-primary)] mt-0.5">
                ৳{product.price.toLocaleString()}
              </div>
            </div>
          </div>

          <button
            type="button"
            onclick={() => handleAdd(product)}
            class="w-full py-1.5 rounded-lg text-xs font-bold bg-[var(--color-bg-surface)] hover:bg-[var(--color-brand-primary)] hover:text-white text-[var(--color-brand-primary)] border border-[var(--color-brand-primary)]/30 hover:border-transparent transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            <Icon icon={Add01Icon} size={13} />
            <span>{i18nState.language === 'bn' ? 'কার্টে যুক্ত করুন' : 'Add to Cart'}</span>
          </button>
        </div>
      {/each}
    </div>
  </div>
</div>
