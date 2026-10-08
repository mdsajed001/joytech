<script lang="ts">
  import type { Product } from '$lib/types';
  import ProductCard from './ProductCard.svelte';
  import StickerThunder3D from './StickerThunder3D.svelte';
  import { FLASH_SALE_PRODUCTS } from '$lib/data/catalog';

  interface Props {
    products?: Product[];
    onAddToCart?: (product: Product) => void;
    class?: string;
  }

  let { products = FLASH_SALE_PRODUCTS, onAddToCart, class: className = '' }: Props = $props();

  const targetTime = Date.now() + 24 * 60 * 60 * 1000;
  let timeLeft = $state({ hours: '24', minutes: '00', seconds: '00', ended: false });

  $effect(() => {
    function updateTimer() {
      const diff = targetTime - Date.now();
      if (diff <= 0) {
        timeLeft = { hours: '00', minutes: '00', seconds: '00', ended: true };
        return;
      }
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      timeLeft = {
        hours: h.toString().padStart(2, '0'),
        minutes: m.toString().padStart(2, '0'),
        seconds: s.toString().padStart(2, '0'),
        ended: false
      };
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  });
</script>

<section id="flash-sale" class="py-8 sm:py-12 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-default)] {className}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header with Title and Countdown Timer (2-column top-aligned layout on phone) -->
    <div class="flex items-start justify-between mb-4 sm:mb-5 gap-3">
      <!-- Left Column: Title + Badge (Stacked on mobile, inline on tablet/desktop) -->
      <div class="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2.5 min-w-0">
        <span class="text-lg sm:text-2xl font-black text-[var(--color-text-primary)] flex items-center gap-1.5 leading-tight">
          <StickerThunder3D size={24} />
          <span>Flash Sale</span>
        </span>
        <span
          class="text-[10px] sm:text-[11px] font-bold text-[var(--color-accent)] bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/30 px-2 py-0.5 rounded-full shrink-0"
        >
          Up to 40% OFF
        </span>
      </div>

      <!-- Right Column: Countdown Display (Ends in centered above countdown digits) -->
      <div class="flex flex-col items-center gap-1 shrink-0">
        {#if timeLeft.ended}
          <span
            class="text-xs font-bold text-[var(--color-danger-text)] bg-[var(--color-danger-bg)] px-2 py-1 rounded-[var(--radius-xs)] border border-[var(--color-danger-border)] font-sans"
          >
            Sale Ended
          </span>
        {:else}
          <span class="text-[10.5px] sm:text-[11px] text-[var(--color-text-secondary)] font-sans font-semibold leading-none">
            Ends in:
          </span>
          <div class="flex items-center gap-1 sm:gap-1.5 font-mono text-xs">
            <span
              class="px-2 py-1 rounded-[var(--radius-xs)] bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)] font-bold tracking-wider"
            >
              {timeLeft.hours}
            </span>
            <span class="text-[var(--color-text-primary)] font-bold">:</span>
            <span
              class="px-2 py-1 rounded-[var(--radius-xs)] bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)] font-bold tracking-wider"
            >
              {timeLeft.minutes}
            </span>
            <span class="text-[var(--color-text-primary)] font-bold">:</span>
            <span
              class="px-2 py-1 rounded-[var(--radius-xs)] bg-[var(--color-accent)] text-white font-bold tracking-wider"
            >
              {timeLeft.seconds}
            </span>
          </div>
        {/if}
      </div>
    </div>

    <!-- Scrollable Product Row on Mobile / Responsive Grid on Desktop (Full bleed edge-to-edge scroll on phone) -->
    <div
      class="flex sm:grid sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 scroll-pl-4 scroll-pr-4 sm:scroll-p-0 pb-3 sm:pb-0 touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {#each products as product}
        <div class="w-[180px] sm:w-auto shrink-0 snap-start flex">
          <ProductCard {product} {onAddToCart} />
        </div>
      {/each}
    </div>
  </div>
</section>
