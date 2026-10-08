<script lang="ts">
  import { goto } from '$app/navigation';
  import { CATEGORIES } from '$lib/data/catalog';
  import Icon from './Icon.svelte';
  import StickerPhone3D from './StickerPhone3D.svelte';
  import { Cancel01Icon, Call02Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  interface Props {
    open: boolean;
    onClose: () => void;
    onSelectBrand?: (brandId: string) => void;
  }

  let { open = false, onClose, onSelectBrand }: Props = $props();

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && open) {
      onClose();
    }
  }

  function handleShopByPhone() {
    onClose();
    goto('/shop-by-phone');
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
  <!-- Backdrop / Scrim -->
  <div
    class="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs"
    transition:fade={{ duration: 200, easing: cubicOut }}
    onclick={onClose}
    aria-hidden="true"
  ></div>

  <!-- Drawer Container -->
  <div
    class="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-[var(--color-bg-surface)] shadow-2xl flex flex-col overflow-y-auto"
    transition:fly={{ x: '100%', duration: 300, easing: cubicOut }}
    role="dialog"
    aria-modal="true"
    aria-label="Navigation Menu"
  >
    <!-- Header -->
    <div class="h-16 px-5 border-b border-[var(--color-border-default)] flex items-center justify-between shrink-0">
      <div class="flex items-center gap-2">
        <img
          src="/Joy%20tech.svg"
          alt="Joy Telecom"
          class="w-8 h-8 object-contain shrink-0"
        />
        <span class="font-extrabold text-base text-[var(--color-text-primary)]">Joy Telecom</span>
      </div>

      <button
        type="button"
        onclick={onClose}
        class="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] tap-target rounded-[var(--radius-sm)] flex items-center justify-center cursor-pointer"
        aria-label="Close menu"
      >
        <Icon icon={Cancel01Icon} size={20} />
      </button>
    </div>

    <!-- Shop by Phone Breathing Banner (Mobile View) - Flush with Header, No Top Gap -->
    <div class="shop-by-phone-container relative overflow-hidden rounded-none px-5 py-5 select-none shrink-0 border-b border-blue-700/20">
      <!-- Floating & Breathing Ambient Bubbles -->
      <div class="ambient-bubble bubble-1" aria-hidden="true"></div>
      <div class="ambient-bubble bubble-2" aria-hidden="true"></div>
      <div class="ambient-bubble bubble-3" aria-hidden="true"></div>
      <div class="ambient-bubble bubble-4" aria-hidden="true"></div>

      <!-- Premium Tactile White CTA Card -->
      <a
        href="/shop-by-phone"
        class="group relative z-10 w-full bg-gradient-to-b from-white via-white to-slate-50/95 rounded-[var(--radius-sm)] py-3 px-3.5 border border-white/90 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.18),0_4px_10px_-2px_rgba(15,23,42,0.08),inset_0_1px_1px_rgba(255,255,255,1)] flex items-center justify-between gap-3 active:scale-[0.985] hover:shadow-[0_14px_28px_-6px_rgba(15,23,42,0.22),0_6px_12px_-2px_rgba(15,23,42,0.1)] transition-all duration-200 cursor-pointer"
        onclick={(e) => {
          e.preventDefault();
          handleShopByPhone();
        }}
        aria-label="Shop by Phone"
      >
        <div class="flex items-center gap-3 min-w-0">
          <!-- 3D Phone Icon in Frosted Pod -->
          <div class="w-11 h-11 rounded-[10px] bg-gradient-to-b from-blue-500/10 to-indigo-500/5 border border-blue-200/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center justify-center shrink-0">
            <StickerPhone3D size={32} />
          </div>

          <div class="flex flex-col min-w-0 justify-center">
            <div class="flex items-center gap-2">
              <span class="text-sm font-extrabold text-slate-900 tracking-tight leading-tight">
                Shop by Phone
              </span>
              <!-- Modern Live Badge -->
              <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_2px_5px_rgba(37,99,235,0.35)]">
                <span class="w-1 h-1 rounded-full bg-white animate-pulse"></span>
                NEW
              </span>
            </div>
            <span class="text-[11px] font-medium text-slate-500 truncate mt-0.5 tracking-normal">
              মডেল অনুযায়ী সহজে খুঁজুন
            </span>
          </div>
        </div>

        <!-- Premium Vibrant Arrow Indicator -->
        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-[0_3px_8px_rgba(37,99,235,0.35)] group-hover:scale-105 group-hover:translate-x-0.5 transition-all">
          <Icon icon={ArrowRight01Icon} size={15} />
        </div>
      </a>
    </div>

    <!-- Body -->
    <div class="p-5 flex flex-col gap-6">
      <!-- Categories Navigation -->
      <div>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-disabled)] mb-3 block">
          Browse Categories
        </span>
        <div class="flex flex-col divide-y divide-[var(--color-border-default)]">
          {#each CATEGORIES as cat}
            <a
              href="/search?category={cat.id}"
              onclick={onClose}
              class="py-3 flex items-center justify-between text-sm font-bold text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors tap-target"
            >
              <div class="flex flex-col">
                <span>{cat.name}</span>
                <span class="text-[11px] font-medium text-[var(--color-text-disabled)]">{cat.nameBn}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-[var(--color-text-disabled)] font-medium">({cat.itemCount})</span>
                <Icon icon={ArrowRight01Icon} size={16} class="text-[var(--color-text-disabled)]" />
              </div>
            </a>
          {/each}
        </div>
      </div>

      <!-- Quick Contact Info -->
      <div class="pt-4 border-t border-[var(--color-border-default)] text-xs text-[var(--color-text-secondary)] space-y-2">
        <div class="flex items-center gap-2 text-[var(--color-text-primary)] font-bold">
          <Icon icon={Call02Icon} size={16} class="text-[var(--color-brand-primary)]" />
          <span>Hotline: +880 1700-000000</span>
        </div>
        <p class="text-[11px] text-[var(--color-text-disabled)]">
          Everyday 10:00 AM – 10:00 PM (Dhaka, Bangladesh)
        </p>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Primary Blue Banner Container - Flush & Stable (No container breathing) */
  .shop-by-phone-container {
    background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.08);
  }

  /* Layered Ambient Moving & Breathing Bubbles */
  .ambient-bubble {
    position: absolute;
    border-radius: 9999px;
    pointer-events: none;
    will-change: transform, opacity;
  }

  /* Bubble 1: Large top-right breathing orb */
  .bubble-1 {
    width: 96px;
    height: 96px;
    top: -30px;
    right: -20px;
    background: radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.45) 0%, rgba(147, 197, 253, 0.25) 50%, rgba(59, 130, 246, 0) 70%);
    filter: blur(1px);
    animation: bubble-float-1 6s ease-in-out infinite;
  }

  /* Bubble 2: Medium bottom-left soft glowing orb */
  .bubble-2 {
    width: 72px;
    height: 72px;
    bottom: -22px;
    left: -12px;
    background: radial-gradient(circle at 40% 40%, rgba(186, 230, 253, 0.4) 0%, rgba(96, 165, 250, 0.2) 60%, rgba(37, 99, 235, 0) 75%);
    filter: blur(2px);
    animation: bubble-float-2 7s ease-in-out infinite;
  }

  /* Bubble 3: Small floating shiny bead */
  .bubble-3 {
    width: 24px;
    height: 24px;
    top: 15%;
    left: 28%;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.65) 0%, rgba(191, 219, 254, 0.3) 60%, rgba(255, 255, 255, 0) 100%);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.45);
    animation: bubble-float-3 5s ease-in-out infinite;
  }

  /* Bubble 4: Subtle drifting bottom-right accent */
  .bubble-4 {
    width: 32px;
    height: 32px;
    bottom: 12%;
    right: 28%;
    background: radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.4) 0%, rgba(147, 197, 253, 0.2) 60%, transparent 100%);
    animation: bubble-float-4 8s ease-in-out infinite;
  }

  /* Bubbles expand and breathe smoothly in background */
  @keyframes bubble-float-1 {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.75;
    }
    50% {
      transform: translate(-10px, 6px) scale(1.22);
      opacity: 1;
    }
  }

  @keyframes bubble-float-2 {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.65;
    }
    50% {
      transform: translate(12px, -8px) scale(1.25);
      opacity: 0.95;
    }
  }

  @keyframes bubble-float-3 {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.6;
    }
    50% {
      transform: translate(6px, -8px) scale(1.3);
      opacity: 1;
    }
  }

  @keyframes bubble-float-4 {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: translate(-8px, 6px) scale(1.18);
      opacity: 0.85;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .ambient-bubble {
      animation: none;
    }
  }
</style>
