<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { cartState, i18nState } from '$lib/state.svelte';
  import { PRODUCTS } from '$lib/data/catalog';
  import type { Product } from '$lib/types';
  import { SparklesIcon } from '@hugeicons/core-free-icons';

  // Filter cross-sell recommendations: inStock products not already in the cart (6 curated products)
  let crossSellItems = $derived(() => {
    const cartIds = new Set(cartState.items.map((i) => i.product.id));
    return PRODUCTS.filter((p) => p.inStock && !cartIds.has(p.id)).slice(0, 6);
  });

  function handleQuickAdd(product: Product) {
    cartState.addItem(product, 1);
  }
</script>

{#if crossSellItems().length > 0}
  <section
    class="-mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:p-6 lg:rounded-2xl bg-[#E0EDFF] [.dark_&]:bg-[#0F1E36] border border-[#C2DAFF] [.dark_&]:border-[rgba(29,95,203,0.35)] py-6 mt-6 transition-colors"
  >
    <!-- Section Header -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-xl bg-[#1D5FCB] text-white flex items-center justify-center shrink-0 shadow-xs">
          <Icon icon={SparklesIcon} size={18} />
        </div>
        <div>
          <h3 class="text-base sm:text-lg font-black text-[#0F295E] [.dark_&]:text-blue-100 tracking-tight">
            {i18nState.language === 'bn' ? 'আপনার পছন্দ হতে পারে' : 'You Might Also Like'}
          </h3>
          <p class="text-xs text-[#244A8E] [.dark_&]:text-blue-300/80 font-medium mt-0.5">
            {i18nState.language === 'bn' ? 'আপনার অর্ডারে আকর্ষণীয় গ্যাজেট ও অ্যাক্সেসরিজ যোগ করুন' : 'Curated accessories and trending picks for your setup'}
          </p>
        </div>
      </div>
    </div>

    <!-- Scrollable rail on mobile / flex-wrap on desktop (Option A) -->
    <div
      class="flex gap-3 sm:gap-3.5 lg:gap-4 overflow-x-auto lg:overflow-visible lg:flex-wrap -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 scroll-pl-4 scroll-pr-4 sm:scroll-pl-6 sm:scroll-pr-6 lg:scroll-p-0 pb-3 lg:pb-0 touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
    >
      {#each crossSellItems() as product (product.id)}
        <div
          class="w-[172px] sm:w-[195px] lg:w-[calc((100%-1rem)/2)] xl:w-[calc((100%-2rem)/3)] shrink-0 lg:shrink-0 snap-start flex"
        >
          <ProductCard {product} onAddToCart={handleQuickAdd} />
        </div>
      {/each}
    </div>
  </section>
{/if}
