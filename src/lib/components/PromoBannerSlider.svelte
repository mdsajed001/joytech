<script lang="ts">
  import { goto } from '$app/navigation';
  import { autoWizardState } from '$lib/state.svelte';
  import Icon from './Icon.svelte';
  import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';

  interface Banner {
    id: number;
    image: string;
    alt: string;
    href: string;
  }

  interface Props {
    banners?: Banner[];
    class?: string;
  }

  const defaultBanners: Banner[] = [
    {
      id: 1,
      image: '/banners/banner1.jpg',
      alt: 'Flash Sale — Up to 40% Off Genuine Brand Accessories',
      href: '#flash-sale'
    },
    {
      id: 2,
      image: '/banners/banner2.jpg',
      alt: 'Shop by Phone Model — Guaranteed 100% Precise Fit',
      href: '/shop-by-phone'
    },
    {
      id: 3,
      image: '/banners/banner3.jpg',
      alt: 'Free Dhaka Express Delivery on Orders Over ৳999',
      href: '#categories'
    }
  ];

  let { banners = defaultBanners, class: className = '' }: Props = $props();

  let activeIndex = $state(0);
  let sliderEl: HTMLElement | null = $state(null);

  function handleScroll() {
    if (!sliderEl) return;
    const width = sliderEl.clientWidth;
    if (width > 0) {
      const idx = Math.round(sliderEl.scrollLeft / width);
      activeIndex = Math.max(0, Math.min(banners.length - 1, idx));
    }
  }

  function scrollToIndex(idx: number) {
    if (!sliderEl) return;
    const width = sliderEl.clientWidth;
    sliderEl.scrollTo({
      left: idx * width,
      behavior: 'smooth'
    });
    activeIndex = idx;
  }

  function prevSlide() {
    const prev = (activeIndex - 1 + banners.length) % banners.length;
    scrollToIndex(prev);
  }

  function nextSlide() {
    const next = (activeIndex + 1) % banners.length;
    scrollToIndex(next);
  }

  function handleBannerClick(e: MouseEvent, banner: Banner) {
    if (banner.id === 2) {
      e.preventDefault();
      if (typeof window !== 'undefined' && window.innerWidth >= 640) {
        autoWizardState.isDrawerOpen = true;
      } else {
        goto('/shop-by-phone');
      }
    }
  }
</script>

<div class="relative w-full h-full group overflow-hidden bg-[var(--color-bg-canvas)] rounded-none {className}">
  <!-- Scroll-snap Container (no autoplay per WCAG 2.2.2 & design system) -->
  <div
    bind:this={sliderEl}
    onscroll={handleScroll}
    class="flex w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    role="region"
    aria-label="Promotional Banners Slider"
  >
    {#each banners as banner, index}
      <a
        href={banner.href}
        onclick={(e) => handleBannerClick(e, banner)}
        class="flex-shrink-0 w-full h-full snap-start block relative overflow-hidden focus-visible:outline-none cursor-pointer"
        aria-label={banner.alt}
      >
        <div class="relative w-full h-full aspect-[16/9] lg:aspect-auto bg-[var(--color-bg-subtle)] overflow-hidden">
          <img
            src={banner.image}
            alt={banner.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            class="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>
      </a>
    {/each}
  </div>

  <!-- Desktop Hover Navigation Arrows -->
  <button
    type="button"
    onclick={prevSlide}
    aria-label="Previous banner slide"
    class="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/45 hover:bg-black/75 text-white backdrop-blur-xs items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-md"
  >
    <Icon icon={ArrowLeft01Icon} size={18} />
  </button>

  <button
    type="button"
    onclick={nextSlide}
    aria-label="Next banner slide"
    class="hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/45 hover:bg-black/75 text-white backdrop-blur-xs items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-md"
  >
    <Icon icon={ArrowRight01Icon} size={18} />
  </button>

  <!-- Floating Pagination Dot Indicators -->
  <div
    class="absolute bottom-3 inset-x-0 z-20 flex items-center justify-center gap-1.5 pointer-events-none"
    role="tablist"
    aria-label="Slider pagination"
  >
    <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-xs pointer-events-auto">
      {#each banners as banner, index}
        <button
          type="button"
          role="tab"
          aria-selected={activeIndex === index}
          aria-label="Go to slide {index + 1}: {banner.alt}"
          onclick={() => scrollToIndex(index)}
          class="h-1.5 rounded-full transition-all duration-200 cursor-pointer {activeIndex === index ? 'w-5 bg-white shadow-xs' : 'w-1.5 bg-white/50 hover:bg-white/80'}"
        ></button>
      {/each}
    </div>
  </div>
</div>
