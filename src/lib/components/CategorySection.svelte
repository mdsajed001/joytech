<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { CATEGORIES } from '$lib/data/catalog';
  import {
    Shield01Icon,
    SmartPhone01Icon,
    FlashIcon,
    UsbIcon,
    BatteryCharging01Icon,
    HeadphonesIcon,
    ArrowLeft01Icon,
    ArrowRight01Icon
  } from '@hugeicons/core-free-icons';

  const categoryIcons = {
    Shield01Icon,
    SmartPhone01Icon,
    FlashIcon,
    UsbIcon,
    BatteryCharging01Icon,
    HeadphonesIcon
  };

  // High-fidelity 3D Fluent emoji icons for category chips
  const category3dIcons: Record<string, string> = {
    cases: '/categories/shield_3d.png',
    'screen-glass': '/categories/gem_stone_3d.png',
    chargers: '/categories/high_voltage_3d.png',
    cables: '/categories/electric_plug_3d.png',
    magsafe: '/categories/magnet_3d.png',
    audio: '/categories/headphone_3d.png'
  };

  let scrollContainer: HTMLDivElement | null = $state(null);
  let showLeftArrow = $state(false);
  let showRightArrow = $state(true);

  function handleScroll() {
    if (!scrollContainer) return;
    showLeftArrow = scrollContainer.scrollLeft > 0;
    showRightArrow = scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth - 1;
  }

  function scrollByAmount(amount: number) {
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: amount, behavior: 'smooth' });
    }
  }

  $effect(() => {
    // Initial check on mount, and handle window resize
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  });
</script>

<section id="categories" class="py-3 sm:py-5 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-default)]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center w-full relative overflow-hidden sm:overflow-visible">
      <!-- Compact Header -->
      <div class="flex items-center gap-2 shrink-0 bg-[var(--color-bg-surface)] relative z-10">
        <h2 class="text-sm sm:text-base font-black text-[var(--color-text-primary)] tracking-tight">
          Categories
        </h2>
        <span class="text-[11px] font-bold text-[var(--color-brand-primary)] bg-[var(--color-brand-primary-subtle)] px-2 py-0.5 rounded-full">
          {CATEGORIES.length}
        </span>
        <!-- Soft Fade Mask -->
        <div class="absolute top-0 -bottom-2 -right-8 w-8 bg-gradient-to-r from-[var(--color-bg-surface)] to-transparent pointer-events-none"></div>
      </div>

      <!-- Responsive Chip Rail: Single-row horizontal scroll on all devices -->
      <div class="relative flex-1 flex items-center min-w-0 group">
        <!-- Left Arrow (PC only) -->
        {#if showLeftArrow}
          <button
            class="hidden sm:flex absolute left-2 z-20 w-7 h-7 items-center justify-center bg-[var(--color-bg-surface)] rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.15)] text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] border border-[var(--color-border-default)] transition-opacity opacity-0 group-hover:opacity-100 -ml-2 cursor-pointer"
            onclick={() => scrollByAmount(-300)}
            aria-label="Scroll left"
          >
            <Icon icon={ArrowLeft01Icon} size={16} />
          </button>
        {/if}

        <div
          bind:this={scrollContainer}
          onscroll={handleScroll}
          class="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x snap-x pb-1 sm:pb-0 pl-8 w-full scroll-smooth"
          role="navigation"
          aria-label="Product Categories"
        >
        {#each CATEGORIES as cat}
          {@const icon3d = category3dIcons[cat.id]}
          {@const iconDef = categoryIcons[cat.iconName as keyof typeof categoryIcons]}
          <a
            href="#{cat.slug}"
            class="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-surface)] hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-subtle)] transition-all duration-150 shrink-0 select-none tap-target text-xs font-bold text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] shadow-2xs group cursor-pointer"
          >
            {#if icon3d}
              <img
                src={icon3d}
                alt=""
                aria-hidden="true"
                class="w-5 h-5 object-contain shrink-0 group-hover:scale-115 transition-transform duration-200 drop-shadow-xs select-none pointer-events-none"
                loading="lazy"
              />
            {:else if iconDef}
              <span class="text-[var(--color-brand-primary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon icon={iconDef} size={16} />
              </span>
            {/if}
            <span class="whitespace-nowrap">{cat.name}</span>
            <span class="text-[10px] font-semibold text-[var(--color-text-disabled)] group-hover:text-[var(--color-brand-primary)] transition-colors">
              ({cat.itemCount})
            </span>
          </a>
        {/each}
        </div>

        <!-- Right Arrow (PC only) -->
        {#if showRightArrow}
          <button
            class="hidden sm:flex absolute right-0 z-20 w-7 h-7 items-center justify-center bg-[var(--color-bg-surface)] rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.15)] text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] border border-[var(--color-border-default)] transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
            onclick={() => scrollByAmount(300)}
            aria-label="Scroll right"
          >
            <Icon icon={ArrowRight01Icon} size={16} />
          </button>
        {/if}
      </div>
    </div>
  </div>
</section>
