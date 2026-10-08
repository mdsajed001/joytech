<script lang="ts">
  import type { OfferEvent } from '$lib/data/offers';
  import { getEventProducts } from '$lib/data/offers';
  import type { Product } from '$lib/types';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import OfferHeroBanner from './OfferHeroBanner.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import { ArrowRight01Icon, SparklesIcon } from '@hugeicons/core-free-icons';

  interface Props {
    event: OfferEvent;
    onSelectEvent: (event: OfferEvent) => void;
    onAddToCart?: (product: Product) => void;
  }

  let { event, onSelectEvent, onAddToCart }: Props = $props();

  const products = $derived(getEventProducts(event));
  // Display first 5 products in rail, with the 6th spot as 'See All' if more exist
  const displayProducts = $derived(products.slice(0, 5));
</script>

<section id="event-{event.slug}" class="pt-0 pb-6 sm:py-8 border-b border-[var(--color-border-default)] last:border-b-0">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Event Banner (Edge-to-edge full bleed with zero side padding and zero top gap on phone) -->
    <div class="-mx-4 sm:mx-0 mb-4 sm:mb-5">
      <OfferHeroBanner
        {event}
        compact={true}
        showSeeAll={true}
        productCount={products.length}
        onSeeAll={() => onSelectEvent(event)}
      />
    </div>

    <!-- Product Rail / Grid -->
    <div
      class="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 scroll-pl-4 scroll-pr-4 sm:scroll-p-0 pb-3 sm:pb-0 touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {#each displayProducts as product (product.id)}
        <div class="w-[172px] sm:w-auto shrink-0 snap-start flex">
          <ProductCard {product} {onAddToCart} />
        </div>
      {/each}

      <!-- End of Rail "See All Deals" Card -->
      <div class="w-[150px] sm:w-auto shrink-0 snap-start flex">
        <button
          type="button"
          onclick={() => onSelectEvent(event)}
          class="group relative flex flex-col items-center justify-center w-full min-h-[260px] p-4 rounded-[var(--radius-sm)] border-2 border-dashed border-[var(--color-border-strong)] hover:border-[var(--color-brand-primary)] bg-[var(--color-bg-subtle)] hover:bg-[var(--color-brand-primary-subtle)]/30 transition-all duration-200 text-center select-none active:scale-[0.98] tap-target"
        >
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-bg-surface)] shadow-xs border border-[var(--color-border-default)] text-[var(--color-brand-primary)] group-hover:scale-110 group-hover:bg-[var(--color-brand-primary)] group-hover:text-white transition-all duration-200 mb-3"
          >
            <Icon icon={ArrowRight01Icon} size={20} />
          </div>

          <span class="text-xs font-black text-[var(--color-text-primary)] group-hover:text-[var(--color-brand-primary)] leading-tight mb-1">
            See All Deals
          </span>
          <span class="text-[11px] text-[var(--color-text-muted)] font-medium">
            {products.length} Products
          </span>

          <span class="mt-4 text-[10px] font-bold text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2 py-0.5 rounded-full flex items-center gap-1">
            <Icon icon={SparklesIcon} size={11} />
            <span>{event.discountHighlight}</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>
