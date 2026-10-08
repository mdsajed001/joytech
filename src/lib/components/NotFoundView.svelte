<script lang="ts">
  import Icon from './Icon.svelte';
  import NotFoundIllustration from './NotFoundIllustration.svelte';
  import { i18nState, searchState } from '$lib/state.svelte';
  import {
    Home01Icon,
    Search01Icon,
    ArrowRight01Icon
  } from '@hugeicons/core-free-icons';

  const POPULAR_TAGS = [
    { labelEn: 'iPhone 16 Cases', labelBn: 'আইফোন ১৬ কেস', query: 'iPhone 16' },
    { labelEn: 'Anker 30W GaN', labelBn: 'অ্যাংকার ৩০ ওয়াট চার্জার', query: 'Anker 30W' },
    { labelEn: 'Spigen Frosted', labelBn: 'স্পাইজিন ফ্রস্টেড কেস', query: 'Spigen' },
    { labelEn: 'MagSafe Charger', labelBn: 'ম্যাগসেফ চার্জার', query: 'MagSafe' },
    { labelEn: 'Samsung S24 Ultra', labelBn: 'স্যামসাং এস২৪ আল্ট্রা', query: 'Samsung S24' }
  ];

  let currentLang = $derived(i18nState.language);

  function handleSearchClick(e: MouseEvent) {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      e.preventDefault();
      searchState.openMobile();
    }
  }
</script>

<div class="min-h-[70vh] flex items-center justify-center px-4 py-3 sm:py-6">
  <div class="max-w-xl w-full text-center flex flex-col items-center">
    
    <!-- Themed 404 Illustration Scene -->
    <div class="relative w-full max-w-[200px] sm:max-w-[230px] mb-2 sm:mb-3 flex flex-col items-center justify-center select-none">
      <!-- Ambient Radial Backlight Glow -->
      <div class="absolute inset-0 -top-4 bg-radial from-blue-500/15 via-indigo-500/5 to-transparent rounded-full blur-2xl pointer-events-none"></div>

      <!-- Cohesive Vector Illustration from static (Prominent 404) -->
      <div class="relative z-10 w-full flex items-center justify-center">
        <NotFoundIllustration class="w-full max-w-[180px] sm:max-w-[210px] h-auto drop-shadow-sm" />
      </div>
    </div>

    <!-- Unboxed Concise 1-2 Line Joke -->
    <div class="max-w-md w-full text-center mb-4 sm:mb-5 px-2">
      {#if currentLang === 'bn'}
        <p class="text-sm sm:text-base font-bold text-[var(--color-text-primary)] leading-relaxed font-bengali">
          “ভাইয়া, ডেলিভারি রাইডার কল দিয়ে বলল—‘আপনার পেজের লোকেশন তো পাচ্ছি না, একটু মেইন রোডে আসেন!’ 🛵💨”
        </p>
      {:else}
        <p class="text-sm sm:text-base font-bold text-[var(--color-text-primary)] leading-relaxed">
          “Even our 65W GaN fast charger couldn’t power up this page! Looks like this URL was delivered to the wrong address.”
        </p>
      {/if}
    </div>

    <!-- Action Recovery CTAs -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full max-w-md mb-4 sm:mb-5">
      <a
        href="/"
        class="w-full sm:w-auto flex-1 min-h-[44px] px-5 rounded-[var(--radius-sm)] bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-hover)] active:scale-[0.98] text-white text-xs sm:text-sm font-extrabold tracking-wide flex items-center justify-center gap-2 shadow-sm transition-all"
      >
        <Icon icon={Home01Icon} size={16} />
        <span>{currentLang === 'bn' ? 'হোমপেজে ফিরে যান' : 'Back to Home'}</span>
      </a>

      <a
        href="/search"
        onclick={handleSearchClick}
        class="w-full sm:w-auto flex-1 min-h-[44px] px-5 rounded-[var(--radius-sm)] bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-subtle)] border border-[var(--color-border-strong)] active:scale-[0.98] text-[var(--color-text-primary)] text-xs sm:text-sm font-extrabold tracking-wide flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer"
      >
        <Icon icon={Search01Icon} size={16} />
        <span>{currentLang === 'bn' ? 'গ্যাজেট খুঁজুন' : 'Search Catalog'}</span>
      </a>
    </div>

    <!-- Popular Searches / Quick Recovery Chips -->
    <div class="w-full max-w-lg text-center pt-3 sm:pt-4 border-t border-[var(--color-border-default)]">
      <span class="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-text-tertiary)] block mb-2">
        {currentLang === 'bn' ? 'হয়তো আপনি খুঁজছেন:' : 'Popular Searches:'}
      </span>
      <div class="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {#each POPULAR_TAGS as tag}
          <a
            href="/search?q={encodeURIComponent(tag.query)}"
            class="px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-semibold bg-[var(--color-bg-subtle)] hover:bg-[var(--color-brand-primary-subtle)] hover:text-[var(--color-brand-primary)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] transition-all flex items-center gap-1 active:scale-95"
          >
            <span>{currentLang === 'bn' ? tag.labelBn : tag.labelEn}</span>
            <Icon icon={ArrowRight01Icon} size={11} class="opacity-60" />
          </a>
        {/each}
      </div>
    </div>

  </div>
</div>


