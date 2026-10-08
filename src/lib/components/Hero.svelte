<script lang="ts">
  import PromoBannerSlider from './PromoBannerSlider.svelte';
  import ProductCard from './ProductCard.svelte';
  import Icon from './Icon.svelte';
  import { FLASH_SALE_PRODUCTS } from '$lib/data/catalog';
  import { cartState } from '$lib/state.svelte';
  import type { Product } from '$lib/types';
  import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
  import StickerThunder3D from './StickerThunder3D.svelte';

  interface Props {
    onShopNow?: () => void;
    onShopByPhone?: () => void;
    onAddToCart?: (product: Product) => void;
  }

  let { onShopNow, onShopByPhone, onAddToCart }: Props = $props();

  function handleAddToCart(product: Product) {
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      cartState.addItem(product);
    }
  }

  // Live Flash Sale Countdown Timer (24h roll)
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

  const topFlashDeals = FLASH_SALE_PRODUCTS.slice(0, 6);
</script>

<!-- Mobile View (<1024px): Full-Width Promotional Banner Slider -->
<div class="lg:hidden w-full border-b border-[var(--color-border-default)] bg-[var(--color-bg-canvas)]">
  <PromoBannerSlider />
</div>

<!-- Desktop View (>=1024px): Seamless Edge-to-Edge Split Hero (65% Banner Slider + 35% Flash Sale Module) -->
<section
  class="hidden lg:block w-full p-0 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-default)]"
  aria-label="Promotional Showcase and Flash Deals"
>
  <div class="flex items-stretch w-full h-[425px] xl:h-[450px]">
    <!-- Left: 65% Width Promotional Banner Slider -->
    <div class="w-[65%] h-full min-h-0 shrink-0 overflow-hidden border-r border-[var(--color-border-default)]">
      <PromoBannerSlider class="h-full" />
    </div>

    <!-- Right: 35% Width Flash Sale Spotlight Module -->
    <div
      class="w-[35%] h-full min-h-0 shrink-0 overflow-hidden flex flex-col justify-between bg-[var(--color-bg-subtle)]"
    >
      <!-- Header with Title, Discount Badge, and Countdown Timer -->
      <div class="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-[var(--color-border-default)] shrink-0 bg-[var(--color-bg-surface)]/80 backdrop-blur-xs">
        <div class="flex items-center gap-2 min-w-0">
          <span class="text-sm xl:text-base font-black text-[var(--color-text-primary)] flex items-center gap-1.5 truncate">
            <StickerThunder3D size={20} />
            <span>Flash Sale</span>
          </span>
          <span
            class="text-[10px] font-extrabold text-[var(--color-accent)] bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/30 px-2 py-0.5 rounded-full shrink-0"
          >
            Up to 40% OFF
          </span>
        </div>

        <!-- Compact Dark Countdown Clock -->
        <div class="flex items-center gap-1 font-mono text-[11px] shrink-0" aria-label="Flash sale timer">
          {#if timeLeft.ended}
            <span class="text-[10.5px] font-bold text-[var(--color-danger-text)]">Ended</span>
          {:else}
            <span class="px-1.5 py-0.5 rounded-[var(--radius-xs)] bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)] font-bold">
              {timeLeft.hours}
            </span>
            <span class="text-[var(--color-text-primary)] font-bold">:</span>
            <span class="px-1.5 py-0.5 rounded-[var(--radius-xs)] bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)] font-bold">
              {timeLeft.minutes}
            </span>
            <span class="text-[var(--color-text-primary)] font-bold">:</span>
            <span class="px-1.5 py-0.5 rounded-[var(--radius-xs)] bg-[var(--color-accent)] text-white font-bold">
              {timeLeft.seconds}
            </span>
          {/if}
        </div>
      </div>

      <!-- Scrollable 2-Column Flash Deal Grid -->
      <div class="grid grid-cols-2 content-start auto-rows-max gap-2.5 xl:gap-3 p-3 xl:p-4 flex-1 min-h-0 overflow-y-auto [scrollbar-width:thin]">
        {#each topFlashDeals as product (product.id)}
          <ProductCard {product} showRating={false} onAddToCart={handleAddToCart} />
        {/each}
      </div>

      <!-- Footer Action: Thinner Frosted Glass Centered Bar -->
      <div class="w-full py-1.5 px-4 bg-[var(--color-bg-surface)]/80 backdrop-blur-md border-t border-[var(--color-border-default)] flex items-center justify-center shrink-0">
        <a
          href="#best-sellers"
          class="inline-flex items-center justify-center gap-1.5 text-[11.5px] font-bold text-[var(--color-brand-primary)] hover:underline"
        >
          <span>Explore All {FLASH_SALE_PRODUCTS.length} Flash Deals</span>
          <Icon icon={ArrowRight01Icon} size={13} />
        </a>
      </div>
    </div>
  </div>
</section>
