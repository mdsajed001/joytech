<script lang="ts">
  import type { OfferEvent } from '$lib/data/offers';
  import { getEventProducts } from '$lib/data/offers';
  import type { Product } from '$lib/types';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import OfferHeroBanner from './OfferHeroBanner.svelte';
  import Icon from '$lib/components/Icon.svelte';
  import {
    ArrowLeft01Icon,
    FilterIcon,
    Sorting01Icon,
    ShoppingBag01Icon
  } from '@hugeicons/core-free-icons';

  interface Props {
    event: OfferEvent;
    onBack: () => void;
    onAddToCart?: (product: Product) => void;
  }

  let { event, onBack, onAddToCart }: Props = $props();

  const allProducts = $derived(getEventProducts(event));

  let filter = $state<'all' | 'under1500' | 'instock' | 'toprated'>('all');
  let sortBy = $state<'default' | 'discount' | 'price-asc' | 'price-desc'>('default');

  const filteredProducts = $derived(() => {
    let list = [...allProducts];

    // Filter
    if (filter === 'under1500') {
      list = list.filter((p) => p.price < 1500);
    } else if (filter === 'instock') {
      list = list.filter((p) => p.inStock && p.stockCount > 0);
    } else if (filter === 'toprated') {
      list = list.filter((p) => p.rating >= 4.8);
    }

    // Sort
    if (sortBy === 'discount') {
      list.sort((a, b) => (b.discountPercent || 0) - (a.discountPercent || 0));
    } else if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  });
</script>

<div class="py-6 sm:py-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <!-- Back to Hub Navigation -->
    <div class="mb-4 sm:mb-6">
      <button
        type="button"
        onclick={onBack}
        class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors py-1.5 px-2.5 rounded-[var(--radius-xs)] hover:bg-[var(--color-bg-subtle)] active:scale-[0.98] tap-target"
      >
        <Icon icon={ArrowLeft01Icon} size={16} />
        <span>Back to All Offers</span>
      </button>
    </div>

    <!-- Pinned Event Hero Banner on Top (Full bleed on phone, padded on PC) -->
    <div class="-mx-4 sm:mx-0 mb-6 sm:mb-8">
      <OfferHeroBanner {event} compact={false} showSeeAll={false} />
    </div>

    <!-- Filter & Sort Bar -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-[var(--color-border-default)]">
      <!-- Filter Chips -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 touch-pan-x [scrollbar-width:none]">
        <span class="text-xs font-bold text-[var(--color-text-muted)] flex items-center gap-1 shrink-0 mr-1">
          <Icon icon={FilterIcon} size={14} />
          <span>Filter:</span>
        </span>

        <button
          type="button"
          onclick={() => (filter = 'all')}
          class="shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-colors {filter === 'all'
            ? 'bg-[var(--color-brand-primary)] text-white shadow-xs'
            : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border-default)]'}"
        >
          All ({allProducts.length})
        </button>

        <button
          type="button"
          onclick={() => (filter = 'under1500')}
          class="shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-colors {filter === 'under1500'
            ? 'bg-[var(--color-brand-primary)] text-white shadow-xs'
            : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border-default)]'}"
        >
          Under ৳1,500
        </button>

        <button
          type="button"
          onclick={() => (filter = 'toprated')}
          class="shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-colors {filter === 'toprated'
            ? 'bg-[var(--color-brand-primary)] text-white shadow-xs'
            : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border-default)]'}"
        >
          Top Rated (4.8★+)
        </button>

        <button
          type="button"
          onclick={() => (filter = 'instock')}
          class="shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-colors {filter === 'instock'
            ? 'bg-[var(--color-brand-primary)] text-white shadow-xs'
            : 'bg-[var(--color-bg-subtle)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border-default)]'}"
        >
          In Stock
        </button>
      </div>

      <!-- Sort Dropdown / Selector -->
      <div class="flex items-center gap-2 shrink-0">
        <label for="sort-offers" class="text-xs font-semibold text-[var(--color-text-secondary)] flex items-center gap-1">
          <Icon icon={Sorting01Icon} size={14} />
          <span>Sort by:</span>
        </label>
        <select
          id="sort-offers"
          bind:value={sortBy}
          class="text-xs font-medium bg-[var(--color-bg-subtle)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] rounded-[var(--radius-xs)] px-2.5 py-1.5 focus:outline-none focus:border-[var(--color-brand-primary)]"
        >
          <option value="default">Featured Deals</option>
          <option value="discount">Highest Discount</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>

    <!-- Product Grid -->
    {#if filteredProducts().length > 0}
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {#each filteredProducts() as product (product.id)}
          <ProductCard {product} {onAddToCart} />
        {/each}
      </div>
    {:else}
      <!-- Empty State -->
      <div class="py-16 text-center bg-[var(--color-bg-surface)] rounded-[var(--radius-md)] border border-[var(--color-border-default)]">
        <div class="w-12 h-12 rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-text-muted)] flex items-center justify-center mx-auto mb-3">
          <Icon icon={ShoppingBag01Icon} size={24} />
        </div>
        <p class="text-sm font-bold text-[var(--color-text-primary)] mb-1">
          No deals match your filter criteria
        </p>
        <p class="text-xs text-[var(--color-text-muted)] mb-4">
          Try switching to "All" to view all available campaign items.
        </p>
        <button
          type="button"
          onclick={() => {
            filter = 'all';
            sortBy = 'default';
          }}
          class="px-4 py-2 text-xs font-bold rounded-[var(--radius-xs)] bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-primary-hover)] transition-colors"
        >
          Reset Filters
        </button>
      </div>
    {/if}
  </div>
</div>
