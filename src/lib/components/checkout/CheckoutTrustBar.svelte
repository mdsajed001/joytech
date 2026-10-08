<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { Shield01Icon, ArrowLeft01Icon } from '@hugeicons/core-free-icons';
  import { i18nState } from '$lib/state.svelte';
</script>

<header class="w-full profile-hero-bubble text-white shadow-xs sticky top-0 z-30">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 grid grid-cols-3 items-center">
    <!-- Left Column: Minimal Back Navigation (No Pill Background) -->
    <div class="flex items-center justify-start">
      <a
        href="/cart"
        class="inline-flex items-center gap-1.5 text-white/85 hover:text-white active:scale-98 text-xs sm:text-sm font-bold transition-all cursor-pointer group select-none py-1"
      >
        <Icon icon={ArrowLeft01Icon} size={17} class="transition-transform group-hover:-translate-x-0.5" />
        <span>{i18nState.language === 'bn' ? 'কার্ট' : 'Back to Cart'}</span>
      </a>
    </div>

    <!-- Center Column: Mathematically Centered Checkout Title -->
    <div class="flex items-center justify-center gap-2 select-none text-center">
      <div class="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center shrink-0 shadow-2xs">
        <Icon icon={Shield01Icon} size={13} class="text-white" />
      </div>
      <span class="text-xs sm:text-base font-black tracking-tight text-white leading-none">
        {i18nState.language === 'bn' ? 'নিরাপদ চেকআউট' : 'Secure Checkout'}
      </span>
    </div>

    <!-- Right Column: Symmetrical Security Reassurance Badge -->
    <div class="flex items-center justify-end gap-1.5 text-xs font-bold text-white/90 select-none">
      <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
      <span class="hidden sm:inline text-[11px] font-semibold text-white/90">256-Bit SSL Encrypted</span>
      <span class="sm:hidden text-[11px] font-bold text-white/90">SSL Secure</span>
    </div>
  </div>
</header>
